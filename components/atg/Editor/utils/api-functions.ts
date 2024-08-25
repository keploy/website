import { Directory, Type } from "./file-manager";
import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";

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
export const getFileDetails = async ({
  testSetName,
  testCaseName,
  fetchTests,
}: {
  testSetName: string;
  testCaseName: string;
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}): Promise<{ testDetails: string }> => {
  console.log(
    `Fetching details for testSet: ${testSetName}, testCase: ${testCaseName}`
  );
  const timeoutDuration = 10000; // Increase timeout duration to 30 seconds

  const fetchWithRetry = async (retries = 3): Promise<any> => {
    try {
      const fetchPromise = fetchTests(testSetName, testCaseName);
      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(
          () => reject(new Error("fetchTests timeout")),
          timeoutDuration
        )
      );
      const result = await Promise.race([fetchPromise, timeoutPromise]);
      return result;
    } catch (err) {
      if (retries === 0) throw err;
      console.log(`Retrying fetchTests... attempts left: ${retries}`);
      return fetchWithRetry(retries - 1);
    }
  };

  try {
    const { data, loading, error } = await fetchWithRetry();
    console.log(
      `Received response for testSet: ${testSetName}, testCase: ${testCaseName}`,
      { data, loading, error }
    );

    if (data && !loading) {
      return { testDetails: data.runCommand };
    } else if (error) {
      throw new Error(`Error fetching test details: ${error.message}`);
    } else {
      throw new Error("Test details not found");
    }
  } catch (err) {
    console.error(
      `Error in getFileDetails for testSet: ${testSetName}, testCase: ${testCaseName}`,
      err
    );
    throw err;
  }
};

export const getReportDetails = async ({
  testRunName,
  reportName,
  fetchDetailedReports,
}: {
  testRunName: string;
  reportName: string;
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}): Promise<{ reportDetails: string }> => {
  console.log(
    `Fetching report details for testRun: ${testRunName}, report: ${reportName}`
  );
  try {
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error("fetchDetailedReports timeout")), 10000)
    );
    const fetchPromise = fetchDetailedReports(testRunName, reportName);
    const { data, loading, error } = await Promise.race([
      fetchPromise,
      timeoutPromise,
    ]);

    console.log(
      `Received response for testRun: ${testRunName}, report: ${reportName}`,
      { data, loading, error }
    );

    if (data && !loading) {
      return { reportDetails: data.runCommand };
    } else if (error) {
      throw new Error(`Error fetching report details: ${error.message}`);
    } else {
      throw new Error("Report details not found");
    }
  } catch (err) {
    console.error(
      `Error in getReportDetails for testRun: ${testRunName}, report: ${reportName}`,
      err
    );
    throw err;
  }
};

export const setTestSets = async ({
  directory,
  fetchTestSets,
  fetchTestList,
  fetchMocks,
  fetchTestRuns,
  fetchReports,
  fetchDetailedReports,
  fetchTests,
}: {
  directory: Directory;
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
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
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

      const runCommandSets = data.runCommand.split("\n").filter(Boolean);
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
            fetchTests,
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
  fetchTests,
}: {
  directory: Directory;
  fetchTestList: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchMocks: (
    testSetName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
}) => {
  console.log(
    `Starting setTestList operation for directory: ${directory.name}`
  );
  try {
    const { data, loading, error } = await fetchTestList(directory.name);
    console.log("Fetched test list", { data, loading, error });

    if (!loading && data) {
      const runCommandTestLists = data.runCommand.split("\n").filter(Boolean);
      const newFiles = await Promise.all(
        runCommandTestLists.map(async (testSetName: string, index: number) => {
          const { testDetails } = await getFileDetails({
            testSetName: directory.name,
            testCaseName: testSetName,
            fetchTests,
          });
          return {
            id: `${directory.id}${index}`,
            name: testSetName,
            parentId: directory.id,
            type: Type.FILE,
            depth: 3,
            content: testDetails,
          };
        })
      );

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
      const runSets = await Promise.all(
        runSetList.map(async (testRunName: string) => {
          const newDir: Directory = {
            id: generateUniqueId(),
            name: testRunName,
            parentId: directory.id,
            type: Type.DIRECTORY,
            depth: 3,
            dirs: [],
            files: [],
          };
          await reportFileNames({
            directory: newDir,
            fetchReportFiles,
            fetchDetailedReports,
          });
          return newDir;
        })
      );

      directory.dirs.push(...runSets);
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
    const { data, loading, error } = await fetchReportFiles(directory.name);
    console.log("Fetched report files", { data, loading, error });

    if (!loading && data) {
      const reportLists = data.runCommand.split("\n").filter(Boolean);
      const reportFiles = await Promise.all(
        reportLists.map(async (testRunName: string, index: number) => {
          const firstName = testRunName.split(".")[0];
          const { reportDetails } = await getReportDetails({
            testRunName: directory.name,
            reportName: firstName,
            fetchDetailedReports,
          });
          return {
            id: `${directory.id}${index}`,
            name: testRunName,
            parentId: directory.id,
            type: Type.FILE,
            depth: 4,
            content: reportDetails,
          };
        })
      );

      directory.files.push(...reportFiles);
    } else if (error) {
      console.error("Error fetching report list:", error.message);
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
  fetchTests,
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
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => Promise<{ data: any; loading: boolean; error: any }>;
  recording?: boolean; // Optional boolean prop
  testing?: boolean; // Optional boolean prop
}) => {
  console.log("Starting makeKeployTestDir operation");

  // Get the existing root directory
  const currentRootDir = await new Promise<Directory>((resolve) => {
    setRootDir((prevRootDir) => {
      resolve(prevRootDir);
      return prevRootDir;
    });
  });

  // Create a new Keploy directory (whether or not one exists)
  const newKeployDir: Directory = {
    id: generateUniqueId(),
    name: "Keploy",
    parentId: "root",
    type: Type.DIRECTORY,
    depth: 1,
    dirs: [],
    files: [],
  };

  console.log("Created new Keploy directory with ID:", newKeployDir.id);

  // Populate the new Keploy directory with test sets, mocks, etc.
  if (recording) {
    await setTestSets({
      directory: newKeployDir,
      fetchTestSets,
      fetchTestList,
      fetchMocks,
      fetchTestRuns,
      fetchReports,
      fetchDetailedReports,
      fetchTests,
    });
  }

  if (testing) {
    const newReportDir: Directory = {
      id: generateUniqueId(),
      name: "Reports",
      parentId: `${newKeployDir.id}`,
      type: Type.DIRECTORY,
      depth: 2,
      dirs: [],
      files: [],
    };

    await reportTestRuns({
      directory: newReportDir,
      fetchTestRuns,
      fetchReportFiles: fetchReports,
      fetchDetailedReports,
    });
    newKeployDir.dirs.push(newReportDir);
  }

  // Update the root directory, replacing the old Keploy directory if it exists
  const updatedDirs = currentRootDir.dirs
    .filter((dir) => dir.name !== "Keploy") // Remove the old Keploy directory if it exists
    .concat(newKeployDir); // Add the new Keploy directory

  setRootDir({
    ...currentRootDir,
    dirs: updatedDirs,
  });

  console.log(
    "Completed makeKeployTestDir operation. Updated directory structure:",
    updatedDirs
  );
};
