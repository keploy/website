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
export const getFileDetails = ({
  testSetName,
  testCaseName,
  fetchTests,
}: {
  testSetName: string;
  testCaseName: string;
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => { data: any; loading: boolean; error: any };
}): { testDetails: string } => {
  const { data, loading, error } = fetchTests(testSetName, testCaseName);

  if (data && !loading) {
    return { testDetails: data.runCommand };
  } else if (error) {
    throw new Error(`Error fetching test details: ${error.message}`);
  } else {
    throw new Error("Test details not found");
  }
};

export const getReportDetails = ({
  testRunName,
  reportName,
  fetchDetailedReports,
}: {
  testRunName: string;
  reportName: string;
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => { data: any; loading: boolean; error: any };
}): { reportDetails: string } => {
  const { data, loading, error } = fetchDetailedReports(
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
  fetchTestList: (testSetName: string) => { data: any; loading: boolean; error: any };
  fetchMocks: (testSetName: string) => { data: any; loading: boolean; error: any };
  fetchTestRuns: () => { data: any; loading: boolean; error: any };
  fetchReports: (newTestRunName: string) => { data: any; loading: boolean; error: any };
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => { data: any; loading: boolean; error: any };
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => { data: any; loading: boolean; error: any };
}) => {
  try {
    const { data, loading, error } = await fetchTestSets();
  
    if (error) {
      console.error("Error fetching test sets:", error.message);
      return;
    }
  
    if (!loading && data) {
      console.log(data);
  
      const runCommandSets = data.runCommand.split("\n").filter(Boolean);
      const newDirs = runCommandSets.map((testSetName: string) => {
        const newDir: Directory = {
          id: generateUniqueId(),
          name: testSetName,
          parentId: directory.id,
          type: Type.DIRECTORY,
          depth: 2,
          dirs: [],
          files: [],
        };
  
        if (testSetName === "reports") {
          reportTestRuns({
            directory: newDir,
            fetchTestRuns,
            fetchReportFiles: fetchReports,
            fetchDetailedReports,
          });
        } else {
          setTestList({
            directory: newDir,
            fetchTestList,
            fetchMocks,
            fetchTests,
          });
        }
  
        return newDir;
      });
  
      directory.dirs.push(...newDirs);
    }
  } catch (error: any) {
    console.error("Unexpected error during fetch:", error.message);
  }
  
};


export const setTestList = async ({
  directory,
  fetchTestList,
  fetchMocks,
  fetchTests,
}: {
  directory: Directory;
  fetchTestList: (testSetName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchMocks: (testSetName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => { data: any; loading: boolean; error: any };
}) => {
  const { data, loading, error } = fetchTestList(directory.name);

  if (!loading && data) {
    const runCommandTestLists = data.runCommand.split("\n").filter(Boolean);
    const newFiles = runCommandTestLists.map(
      (testSetName: string, index: number) => {
        const { testDetails } = getFileDetails({
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
      }
    );

    const {
      data: mockData,
      loading: mockLoading,
      error: mockError,
    } = fetchMocks(directory.name);
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
};

export const reportTestRuns = async ({
  directory,
  fetchTestRuns,
  fetchReportFiles,
  fetchDetailedReports,
}: {
  directory: Directory;
  fetchTestRuns: () => { data: any; loading: boolean; error: any };
  fetchReportFiles: (testRunName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => { data: any; loading: boolean; error: any };
}) => {
  const { data, loading, error } = fetchTestRuns();

  if (!loading && data) {
    const runSetList = data.runCommand.split("\n").filter(Boolean);
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
      reportFileNames({
        directory: newDir,
        fetchReportFiles,
        fetchDetailedReports,
      });
      return newDir;
    });

    directory.dirs.push(...runSets);
  } else if (error) {
    console.error("Error fetching test runs:", error.message);
  }
};

export const reportFileNames = async ({
  directory,
  fetchReportFiles,
  fetchDetailedReports,
}: {
  directory: Directory;
  fetchReportFiles: (testRunName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => { data: any; loading: boolean; error: any };
}) => {
  const { data, loading, error } = fetchReportFiles(directory.name);

  if (!loading && data) {
    const reportLists = data.runCommand.split("\n").filter(Boolean);
    const reportFiles = reportLists.map(
      (testRunName: string, index: number) => {
        const firstName = testRunName.split(".")[0];
        const { reportDetails } = getReportDetails({
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
      }
    );

    directory.files.push(...reportFiles);
  } else if (error) {
    console.error("Error fetching report list:", error.message);
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
}: {
  setRootDir: Dispatch<SetStateAction<Directory>>;
  fetchTestSets: () => Promise<{ data: any; loading: boolean; error: any }>;
  fetchTestList: (testSetName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchMocks: (testSetName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchTestRuns: () => { data: any; loading: boolean; error: any };
  fetchReports: (newTestRunName: string) => {
    data: any;
    loading: boolean;
    error: any;
  };
  fetchDetailedReports: (
    newTestRunName: string,
    newTestSetReportName: string
  ) => { data: any; loading: boolean; error: any };
  fetchTests: (
    newTestSetName: string,
    newTestCaseName: string
  ) => { data: any; loading: boolean; error: any };
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

  await setTestSets({
    directory: newDir,
    fetchTestSets,
    fetchTestList,
    fetchMocks,
    fetchTestRuns,
    fetchReports,
    fetchDetailedReports,
    fetchTests,
  });

  setRootDir((prevRootDir) => {
    const dirIndex = prevRootDir.dirs.findIndex((dir) => dir.name === "src");

    const updatedDirs =
      dirIndex !== -1
        ? [prevRootDir.dirs[dirIndex], newDir]
        : [...prevRootDir.dirs, newDir];

    return {
      ...prevRootDir,
      dirs: updatedDirs,
    };
  });
};
