import { Directory } from "./file-manager";
import { Type } from "./file-manager";
import {
  useFetchTestSetsSubscription,
  useFetchTestListSubscription,
  useFetchMockSubscription,
  useFetchTestSubscription,
  useFetchTestRunSubscription,
  useFetchDetailedReportSubscription,
  useFetchReportSubscription,
} from "@/app/api/automatic-test-generator/Subscription"; // Update import path accordingly
import { Dispatch, SetStateAction, useEffect } from "react";

// Utility function to generate unique IDs
const generateUniqueId = (): string => {
  return "id-" + Math.random().toString(36).substr(2, 9);
};

export const SetTestSets = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
  
  // Hook usage
  const { data, loading, error } = useFetchTestSetsSubscription(storedCodeSubmissionId);

  useEffect(() => {
    if (!loading && data) {
      const runCommandSets = data.runCommand;
      const newTestSets = runCommandSets.split("\n");
      newTestSets.pop();

      const newDirs = newTestSets.map((TestSetName: string) => {
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
          ReportTestRuns(newDir);
        } else {
          SetTestList(newDir);
        }
        return newDir;
      });

      directory.dirs.push(...newDirs);
    } else if (error) {
      console.error("Error fetching test sets:", error.message);
    }
  }, [loading, data, error]);
};

export const SetTestList = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";

  // Hook usage
  const { data, loading, error } = useFetchTestListSubscription(
    storedCodeSubmissionId,
    directory.name
  );

  useEffect(() => {
    if (!loading && data) {
      const runCommandTestLists = data.runCommand;
      const newTestLists = runCommandTestLists.split("\n");
      newTestLists.pop();

      const newFiles = newTestLists.map((TestSetName: string, index: number) => {
        const { testDetails } = GetFileDetails(
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
          content: testDetails,
        };
      });

      const { data: mockData, loading: mockLoading, error: mockError } = useFetchMockSubscription(storedCodeSubmissionId, directory.name);
      if (mockData && !mockLoading) {
        const mockDetails = mockData.runCommand;
        newFiles.push({
          id: `${directory.id}mock`,
          name: `mocks.yaml`,
          parentId: directory.id,
          type: Type.FILE,
          depth: 3,
          content: mockDetails,
        });
      } else if (mockError) {
        console.error("Error in fetching mocks:", mockError.message);
      }

      directory.files.push(...newFiles);
    } else if (error) {
      console.error("Error fetching test-list:", error.message);
    }
  }, [loading, data, error]);
};

export const ReportTestRuns = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";

  // Hook usage
  const { data, loading, error } = useFetchTestRunSubscription(storedCodeSubmissionId);

  useEffect(() => {
    if (!loading && data) {
      const runSet = data.runCommand;
      const runSetList = runSet.split("\n");
      runSetList.pop();

      const runSets = runSetList.map((testRunName: string) => {
        const newDir: Directory = {
          id: generateUniqueId(),
          name: testRunName,
          parentId: directory.id,
          type: Type.DIRECTORY,
          depth: 3,
          dirs: [],
          files: [],
        };
        ReportFileNames(newDir);
        return newDir;
      });

      directory.dirs.push(...runSets);
    } else if (error) {
      console.error("Error fetching test-runs:", error.message);
    }
  }, [loading, data, error]);
};

export const ReportFileNames = async (directory: Directory) => {
  const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";

  // Hook usage
  const { data, loading, error } = useFetchReportSubscription(
    storedCodeSubmissionId,
    directory.name
  );

  useEffect(() => {
    if (!loading && data) {
      const runCommandReportLists = data.runCommand;
      const reportLists = runCommandReportLists.split("\n");
      reportLists.pop();

      const ReportFiles = reportLists.map((TestRunName: string, index: number) => {
        const firstName = TestRunName.split(".")[0];
        const { reportDetails } = GetReportDetails(
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
          content: reportDetails,
        };
      });

      directory.files.push(...ReportFiles);
    } else if (error) {
      console.error("Error fetching report-list:", error.message);
    }
  }, [loading, data, error]);
};

//used for fetching the file content;
export const GetFileDetails = (
  codeSubmissionId: string,
  testSetName: string,
  testCaseName: string
): { testDetails: string } => {
  const { data, loading, error } = useFetchTestSubscription(
    codeSubmissionId,
    testSetName,
    testCaseName
  );

  if (data && !loading) {
    return { testDetails: data.runCommand };
  } else if (error) {
    throw new Error(`Error fetching test details: ${error.message}`);
  } else {
    throw new Error("Test details not found");
  }
};

//used for fetching the report contents
export const GetReportDetails = (
  codeSubmissionId: string,
  testRunName: string,
  reportName: string
): { reportDetails: string } => {
  const { data, loading, error } = useFetchDetailedReportSubscription(
    codeSubmissionId,
    testRunName,
    reportName
  );

  if (data && !loading) {
    return { reportDetails: data.runCommand };
  } else if (error) {
    throw new Error(`Error fetching report details: ${error.message}`);
  } else {
    throw new Error("Report details not found");
  }
};

export const makeKeployTestDir = async ({
  setRootDir,
}: {
  setRootDir: Dispatch<SetStateAction<Directory>>;
}) => {
  const newDir: Directory = {
    id: generateUniqueId(),
    name: "Keploy",
    parentId: "root",
    type: Type.DIRECTORY,
    depth: 1,
    dirs: [],
    files: [],
  };

  // Perform asynchronous operation before updating state
  await SetTestSets(newDir);

  setRootDir((prevRootDir) => {
    const dirIndex = prevRootDir.dirs.findIndex((dir) => dir.name === "src");

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
  console.log("after adding new directory:", newDir);
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
