import { Directory } from "./file-manager";
import { Type } from "./file-manager";
import {
  fetchTestSets,
  fetchTestList,
  fetchMock,
  fetchTest,
  fetchTestRun,
  fetchDetailedReport,
  fetchReport,
} from "@/app/api/hello/atg";
import { Dispatch, SetStateAction } from "react";

// Utility function to generate unique IDs
const generateUniqueId = (): string => {
  return "id-" + Math.random().toString(36).substr(2, 9);
};

export const SetTestSets = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const response = await fetchTestSets(storedCodeSubmissionId);
  if (response.success) {
    const runCommandSets = response.data.data.runCommand;
    const newTestSets = runCommandSets.split("\n");
    newTestSets.pop();

    const newDirs = await Promise.all(
      newTestSets.map(async (TestSetName: string, index: number) => {
        const newDir: Directory = {
          id: generateUniqueId(),
          name: TestSetName,
          parentId: directory.id,
          type: Type.DIRECTORY,
          depth: 2,
          dirs: [],
          files: [],
        };
        if (TestSetName == "reports") {
          await ReportTestRuns(newDir);
        } else {
          await SetTestList(newDir);
        }
        return newDir;
      })
    );

    directory.dirs.push(...newDirs);
  } else {
    console.error("Error fetching test sets:", response.error);
  }
};

export const SetTestList = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const response = await fetchTestList(storedCodeSubmissionId, directory.name);
  if (response.success) {
    const runCommandTestLists = response.data.data.runCommand;
    const newTestLists = runCommandTestLists.split("\n");
    newTestLists.pop();

    const newFiles = await Promise.all(
      newTestLists.map(async (TestSetName: string, index: number) => {
        const fileDetails = await GetFileDetails(
          storedCodeSubmissionId,
          directory.name,
          TestSetName
        );
        return {
          id: `${directory.id}${index}`,
          name: TestSetName,
          parentId: directory.id,
          type: Type.FILE,
          depth: 3,
          content: fileDetails.testDetails,
        };
      })
    );

    const mockResponse = await fetchMock(
      storedCodeSubmissionId,
      directory.name
    );
    if (mockResponse.success) {
      const mockDetails = mockResponse.data.data.runCommand;
      newFiles.push({
        id: `${directory.id}mock`,
        name: `mocks.yaml`,
        parentId: directory.id,
        type: Type.FILE,
        depth: 3,
        content: mockDetails,
      });
    } else {
      console.log("Error in fetching mocks");
    }

    directory.files.push(...newFiles);
  } else {
    console.error("Error fetching test-list:", response.error);
  }
};

export const ReportTestRuns = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  const response = await fetchTestRun(storedCodeSubmissionId);

  if (response.success) {
    const runSet = response.data.data.runCommand;
    const runSetList = runSet.split("\n");
    runSetList.pop();
    console.log(runSetList);
    const runSets = await Promise.all(
      runSetList.map(async (testRunName: string, index: string) => {
        const newDir: Directory = {
          id: generateUniqueId(),
          name: testRunName,
          parentId: directory.id,
          type: Type.DIRECTORY,
          depth: 3,
          dirs: [],
          files: [],
        };
        await ReportFileNames(newDir);
        return newDir;
      })
    );
    directory.dirs.push(...runSets);
  } else {
    console.log("error fetching test-runs: ", response.error);
  }
};

export const ReportFileNames = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";

  const response = await fetchReport(storedCodeSubmissionId, directory.name);
  if (response.success) {
    const runCommandReportLists = response.data.data.runCommand;
    const reportLists = runCommandReportLists.split("\n");
    reportLists.pop();

    const ReportFiles = await Promise.all(
      reportLists.map(async (TestRunName: string, index: number) => {
        const firstName = TestRunName.split(".")[0];
        const fileDetails = await GetReportDetails(
          storedCodeSubmissionId,
          directory.name,
          firstName
        );
        return {
          id: `${directory.id}${index}`,
          name: TestRunName,
          parentId: directory.id,
          type: Type.FILE,
          depth: 4,
          content: fileDetails.reportDetails,
        };
      })
    );

    directory.files.push(...ReportFiles);
  } else {
    console.error("Error fetching report-list:", response.error);
  }
};

//used for fetching the file content;
export const GetFileDetails = async (
  codeSubmissionId: string,
  testSetName: string,
  testCaseName: string
): Promise<{ testDetails: string; mockDetails: string }> => {
  try {
    const testResponse = await fetchTest(
      codeSubmissionId,
      testSetName,
      testCaseName
    );
    const testDetails = testResponse.data.data.runCommand;
    return { testDetails, mockDetails: "" };
  } catch (err: any) {
    throw new Error(`Content not found: ${err.message}`);
  }
};

//used for fetching the report contents
export const GetReportDetails = async (
  codeSubmissionId: string,
  testRunName: string,
  reportName: string
): Promise<{ reportDetails: string }> => {
  try {
    const reportResponse = await fetchDetailedReport(
      codeSubmissionId,
      testRunName,
      reportName
    );
    const reportDetails = reportResponse.data.data.runCommand;
    return { reportDetails };
  } catch (err: any) {
    throw new Error(`content not found in reports: ${err.message}`);
  }
};

export const makeKeployTestDir = async ({
  setRootDir,
}: {
  setRootDir: Dispatch<SetStateAction<Directory>>;
}) => {
  setRootDir((prevRootDir) => {
    const dirIndex = prevRootDir.dirs.findIndex((dir) => dir.name === "src");

    const newDir: Directory = {
      id: generateUniqueId(),
      name: "Keploy",
      parentId: "root",
      type: Type.DIRECTORY,
      depth: 1,
      dirs: [],
      files: [],
    };

    SetTestSets(newDir);

    let updatedDirs;
    if (dirIndex !== -1) {
      updatedDirs = [prevRootDir.dirs[dirIndex], newDir];
      console.log("after adding new directory at dirIndex", updatedDirs);
    } else {
      updatedDirs = [...prevRootDir.dirs, newDir];
    }

    return {
      ...prevRootDir,
      dirs: updatedDirs,
    };
  });
};

export const replaceDates = (str: string) => {
  return str.replace(
    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z/g,
    (match: string) => {
      const date = new Date(match);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const timeZoneOffset = -date.getTimezoneOffset() / 60;
      const timeZone =
        (timeZoneOffset >= 0 ? "+" : "") +
        String(timeZoneOffset).padStart(2, "0") +
        ":00";
      return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timeZone}`;
    }
  );
};

export const replaceAnsiColors = (str: string) => {
  return str.replace(/\u001b\[([0-9;]+)m/g, (match: string, p1: string) => {
    const codes = p1.split(";").map(Number);
    let color = "";

    codes.forEach((code) => {
      switch (code) {
        case 30:
          color = "black";
          break;
        case 31:
          color = "red";
          break;
        case 32:
          color = "green";
          break;
        case 33:
          color = "yellow";
          break;
        case 34:
          color = "blue";
          break;
        case 35:
          color = "magenta";
          break;
        case 36:
          color = "cyan";
          break;
        case 37:
          color = "white";
          break;
        case 0:
          color = "";
          break;
      }
    });

    return color ? `<span style="color: ${color};">` : "</span>";
  });
};
