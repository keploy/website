// subscriptions.ts
import { gql, useSubscription } from "@apollo/client";
import { useState } from "react";
import {
  FETCH_TEST_SETS_SUBSCRIPTION,
  FETCH_TEST_LIST_SUBSCRIPTION,
  FETCH_TEST_SUBSCRIPTION,
  FETCH_MOCK_SUBSCRIPTION,
  FETCH_TEST_RUN_SUBSCRIPTION,
  FETCH_REPORT_SUBSCRIPTION,
  FETCH_DETAILED_REPORT_SUBSCRIPTION,
  REMOVE_DUPLICATES_SUBSCRIPTION,
  RUN_COMMAND_SUBSCRIPTION
} from "./queries";

// Hook for fetching test sets
export const useFetchTestSetsSubscription = (codeSubmissionId: string) => {
  const { data, loading, error } = useSubscription(gql(FETCH_TEST_SETS_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_TEST_SETS",
    },
  });

  return { data, loading, error };
};

// Hook for fetching test list
export const useFetchTestListSubscription = (
  codeSubmissionId: string,
  testSetName: string
) => {
  const { data, loading, error } = useSubscription(gql(FETCH_TEST_LIST_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_TESTS_LIST",
      test_set_name: testSetName,
    },
  });

  return { data, loading, error };
};

// Hook for fetching a specific test
export const useFetchTestSubscription = (
  codeSubmissionId: string,
  testSetName: string,
  testCaseName: string
) => {
  const { data, loading, error } = useSubscription(gql(FETCH_TEST_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_TEST",
      test_set_name: testSetName,
      test_case_name: testCaseName,
    },
  });

  return { data, loading, error };
};

// Hook for fetching mocks
export const useFetchMockSubscription = (
  codeSubmissionId: string,
  testSetName: string
) => {
  const { data, loading, error } = useSubscription(gql(FETCH_MOCK_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_MOCK",
      test_set_name: testSetName,
    },
  });

  return { data, loading, error };
};

// Hook for fetching test runs
export const useFetchTestRunSubscription = (codeSubmissionId: string) => {
  const { data, loading, error } = useSubscription(gql(FETCH_TEST_RUN_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_TEST_RUNS",
    },
  });

  return { data, loading, error };
};

// Hook for fetching report files inside the report folder
export const useFetchReportSubscription = (
  codeSubmissionId: string,
  testRunName: string
) => {
  const { data, loading, error } = useSubscription(gql(FETCH_REPORT_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_TEST_SET_REPORTS",
      test_run_name: testRunName,
    },
  });

  return { data, loading, error };
};

// Hook for fetching the contents of a detailed report
export const useFetchDetailedReportSubscription = (
  codeSubmissionId: string,
  testRunName: string,
  testSetReportName: string
) => {
  const { data, loading, error } = useSubscription(gql(FETCH_DETAILED_REPORT_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "FETCH_REPORT",
      test_run_name: testRunName,
      test_set_report_name: testSetReportName,
    },
  });

  return { data, loading, error };
};

// Hook for removing duplicates
export const useRemovingDuplicateSubscription = (
  codeSubmissionId: string,
  testSetName: string
) => {
  const { data, loading, error } = useSubscription(gql(REMOVE_DUPLICATES_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command: "REMOVE_DUPLICATES",
      test_set_name: testSetName,
    },
  });

  return { data, loading, error };
};


// Hook for running a command with handleSubmit
export const useRunCommandSubscription = ({
    codeSubmissionId: initialCodeSubmissionId,
    command: initialCommand,
    testSetName,
  }: {
    codeSubmissionId: string;
    command: string;
    testSetName?: string;
  }) => {
    const [codeSubmissionId, setCodeSubmissionId] = useState<string>(
      initialCodeSubmissionId
    );
    const [command, setCommand] = useState<string>(initialCommand);
    const [submitted, setSubmitted] = useState(false);
  
    const { data, loading, error } = useSubscription(gql(RUN_COMMAND_SUBSCRIPTION), {
      variables: {
        code_submission_id: codeSubmissionId,
        command,
        test_set_name: testSetName,
      },
      skip: !submitted,
    });
  
    const handleSubmit = (e?: React.FormEvent) => {
      if (e) e.preventDefault();
      setSubmitted(true);
    };
  
    return { data, loading, error, handleSubmit };
  };
  