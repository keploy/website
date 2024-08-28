import { Directory, Type } from "./file-manager";
import { Dispatch, SetStateAction } from "react";
import { fetchTest , fetchReport } from "@/app/api/automatic-test-generator/Subscription";
import { fetchDetailedReport } from "@/app/api/automatic-test-generator/Subscription";
// Section 1: Utility Functions
// Utility function to generate unique IDs
const generateUniqueId = (): string => {
  return "id-" + Math.random().toString(36).substr(2, 9);
};

// Utility function to replace dates in a string
export const replaceDates = (str: string): string => {
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

// Utility function to replace ANSI color codes in a string
export const replaceAnsiColors = (str: string): string => {
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

// Section 2: API Data Fetch and Processing Functions
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
export const setTestSets = async ({
  directory,
  fetchTestSets,
  fetchTestList,
  fetchMocks,
}: {
  directory: Directory;
  fetchTestSets: () => Promise<{ data: any; loading: boolean; error: any }>;
  fetchTestList: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchMocks: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}) => {
  console.log("Starting setTestSets operation");
  try {
    const { data, loading, error } = await fetchTestSets();
    console.log("Fetched test sets", { data, loading, error });

    if (error) {
      console.error("Error fetching test sets:", error.message);
      return;
    }

    if (!loading && data) {
      console.log("Processing test sets data", data);

      const runCommandSets = data.runCommand
        .split("\n")
        .filter(Boolean)
        .slice(-1);
      const newDirs = await Promise.all(
        runCommandSets.map(async (testSetName: string) => {
          const newDir: Directory = {
            id: generateUniqueId(),
            name: testSetName,
            parentId: directory.id,
            type: Type.DIRECTORY,
            depth: 2,
            dirs: [],
            files: [],
          };

          console.log(`Processing test list for testSet: ${testSetName}`);
          await setTestList({
            directory: newDir,
            fetchTestList,
            fetchMocks,
          });

          return newDir;
        })
      );

      directory.dirs.push(...newDirs);
    }
  } catch (error: any) {
    console.error(
      "Unexpected error during setTestSets operation:",
      error.message
    );
  }
};

export const setTestList = async ({
  directory,
  fetchTestList,
  fetchMocks,
}: {
  directory: Directory;
  fetchTestList: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchMocks: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}) => {
  console.log(
    `Starting setTestList operation for directory: ${directory.name}`
  );
  try {
    const { data, loading, error } = await fetchTestList(directory.name);
    console.log("Fetched test list", { data, loading, error });
    const storedCodeSubmissionId =
      localStorage.getItem("code_submission_id") || "";
    if (!loading && data) {
      const runCommandTestLists = data.runCommand.split("\n").filter(Boolean);
      const newFiles = [];

      // Process each test case one at a time
      for (const [index, testSetName] of runCommandTestLists.entries()) {
        // Wait for 1 seconds before processing the next one
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Fetch the details for the current test case
        const { testDetails } = await GetFileDetails(
          storedCodeSubmissionId,
          directory.name,
          testSetName
        );

        // Push the new file data into the array
        newFiles.push({
          id: `${directory.id}${index}`,
          name: testSetName,
          parentId: directory.id,
          type: Type.FILE,
          depth: 3,
          content: testDetails,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // Fetch mocks after all test cases are processed
      const {
        data: mockData,
        loading: mockLoading,
        error: mockError,
      } = await fetchMocks(directory.name);
      console.log("Fetched mocks", { mockData, mockLoading, mockError });

      if (mockData && !mockLoading) {
        newFiles.push({
          id: `${directory.id}mock`,
          name: `mocks.yaml`,
          parentId: directory.id,
          type: Type.FILE,
          depth: 3,
          content: mockData.runCommand,
        });
      } else if (mockError) {
        console.error("Error fetching mocks:", mockError.message);
      }

      // Add all the new files to the directory
      directory.files.push(...newFiles);
    } else if (error) {
      console.error("Error fetching test list:", error.message);
    }
  } catch (error: any) {
    console.error(
      `Unexpected error during setTestList operation for directory: ${directory.name}`,
      error
    );
  }
};

export const reportTestRuns = async ({
  directory,
  fetchTestRuns,
  fetchReportFiles,
  fetchDetailedReports,
}: {
  directory: Directory;
  fetchTestRuns: () => Promise<{ data: any; loading: boolean; error: any }>;
  fetchReportFiles: (
    testRunName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}) => {
  console.log(
    `Starting reportTestRuns operation for directory: ${directory.name}`
  );
  try {

    const { data, loading, error } = await fetchTestRuns();
    console.log("Fetched test runs", { data, loading, error });

    if (!loading && data) { 
      const runSetList = data.runCommand.split("\n").filter(Boolean);

      // Sequentially process each test run
      for (const testRunName of runSetList) {
        const newDir: Directory = {
          id: generateUniqueId(),
          name: testRunName,
          parentId: directory.id,
          type: Type.DIRECTORY,
          depth: 3,
          dirs: [],
          files: [],
        };

        // Fetch report file names and details for this test run
        await reportFileNames({
          directory: newDir,
          fetchReportFiles,
          fetchDetailedReports,
        });

        // Add the new directory to the directory structure
        directory.dirs.push(newDir);
      }

    } else if (error) {
      console.error("Error fetching test runs:", error.message);
    }
  } catch (error: any) {
    console.error(
      `Unexpected error during reportTestRuns operation for directory: ${directory.name}`,
      error
    );
  }
};


export const reportFileNames = async ({
  directory,
  fetchReportFiles,
  fetchDetailedReports,
}: {
  directory: Directory;
  fetchReportFiles: (
    testRunName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}) => {
  console.log(
    `Starting reportFileNames operation for directory: ${directory.name}`
  );
  try {

    
    // const { data, loading, error } = await fetchReportFiles(directory.name);
    // console.log("Fetched report files", { data, loading, error });
    
    const storedCodeSubmissionId =
    localStorage.getItem("code_submission_id") || "";
    
    const response = await fetchReport(storedCodeSubmissionId, directory.name);
    if (response) {
      const reportLists = response.data.data.runCommand.split("\n").filter(Boolean);
      const reportFiles = [];

      // Sequentially process each report file
      for (const [index, testRunName] of reportLists.entries()) {
        const firstName = testRunName.split(".")[0];
        const fileDetails = await GetReportDetails(
          storedCodeSubmissionId,
          directory.name,
          firstName
        );
        reportFiles.push({
          id: `${directory.id}${index}`,
          name: testRunName,
          parentId: directory.id,
          type: Type.FILE,
          depth: 4,
          content: fileDetails.reportDetails,
        });
      }

      directory.files.push(...reportFiles);
    }
  } catch (error: any) {
    console.error(
      `Unexpected error during reportFileNames operation for directory: ${directory.name}`,
      error
    );
  }
};


// Section 3: Main Function to Setup Directory Structure
export const makeKeployTestDir = async ({
  setRootDir,
  fetchTestSets,
  fetchTestList,
  fetchMocks,
  fetchTestRuns,
  fetchReports,
  fetchDetailedReports,
  recording = false, // Optional prop with default value false
  testing = false, // Optional prop with default value false
}: {
  setRootDir: Dispatch<SetStateAction<Directory>>;
  fetchTestSets: () => Promise<{ data: any; loading: boolean; error: any }>;
  fetchTestList: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchMocks: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchTestRuns: () => Promise<{ data: any; loading: boolean; error: any }>;
  fetchReports: (
    newTestRunName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  recording?: boolean; // Optional boolean prop
  testing?: boolean; // Optional boolean prop
}) => {
  console.log("Starting makeKeployTestDir operation");

  try {
    // Get the existing root directory
    const currentRootDir = await new Promise<Directory>((resolve) => {
      setRootDir((prevRootDir) => {
        resolve(prevRootDir);
        return prevRootDir;
      });
    });

    // Find the existing Keploy directory if it exists
    let keployDir = currentRootDir.dirs.find((dir) => dir.name === "Keploy");

    if (!keployDir) {
      // Create a new Keploy directory if it does not exist
      console.log("Keploy directory not found. Creating a new one.");
      keployDir = {
        id: generateUniqueId(),
        name: "Keploy",
        parentId: "root",
        type: Type.DIRECTORY,
        depth: 0,
        dirs: [],
        files: [],
      };
      currentRootDir.dirs.push(keployDir); // Add the new directory to the root directory
    } else {
      console.log("Keploy directory found with ID:", keployDir.id);
    }

    // Perform recording operation if recording is true
    if (recording) {
      console.log("Populating Keploy directory with test sets and mocks...");
      await setTestSets({
        directory: keployDir,
        fetchTestSets,
        fetchTestList,
        fetchMocks,
      });
      console.log("Completed population of test sets and mocks.");
    }

    // Perform testing operation if testing is true
    if (testing) {
      console.log("Starting testing process...");

      let reportDirs = keployDir.dirs.find((dir) => dir.name === "Reports");
      let newReportDir: Directory;

      if (!reportDirs) {
        newReportDir = {
          id: generateUniqueId(),
          name: "Reports",
          parentId: keployDir.id,
          type: Type.DIRECTORY,
          depth: 2,
          dirs: [],
          files: [],
        };
        console.log("Created new Reports directory.");
        keployDir.dirs.push(newReportDir);
      } else {
        newReportDir = reportDirs;
        console.log("Reports directory already exists.");
      }

      console.log("Running report tests...");
      await reportTestRuns({
        directory: newReportDir,
        fetchTestRuns,
        fetchReportFiles: fetchReports,
        fetchDetailedReports,
      });

      if (!reportDirs) {
        console.log("Testing process completed. Reports directory added.");
      } else {
        console.log("Testing completed. Reports added to existing directory.");
      }
    }

    // Update the root directory with the updated Keploy directory
    const updatedDirs = currentRootDir.dirs.map((dir) =>
      dir.name === "Keploy" ? keployDir : dir
    );

    setRootDir({
      ...currentRootDir,
      dirs: updatedDirs,
    });

    console.log(
      "Completed makeKeployTestDir operation. Updated directory structure:",
      updatedDirs
    );
  } catch (error) {
    console.error("Error during makeKeployTestDir operation:", error);
  }
};
