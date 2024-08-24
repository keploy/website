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
  RUN_COMMAND_SUBSCRIPTION,
  EDIT_TEST_SUBSCRIPTION,
} from "./queries";

export const useFetchTestSetsSubscription = (codeSubmissionId: string) => {
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_TEST_SETS_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_TEST_SETS",
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = () => {
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return {handleSubmit };
};

// Hook for fetching test list
export const useFetchTestListSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_TEST_LIST_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_TESTS_LIST",
        test_set_name: testSetName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (newTestSetName: string) => {
    setTestSetName(newTestSetName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return { handleSubmit };
};

// Hook for fetching a specific test
export const useFetchTestSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [testCaseName, setTestCaseName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_TEST_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_TEST",
        test_set_name: testSetName,
        test_case_name: testCaseName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (newTestSetName: string, newTestCaseName: string) => {
    setTestSetName(newTestSetName);
    setTestCaseName(newTestCaseName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return { handleSubmit };
};

// Hook for fetching mocks
export const useFetchMockSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_MOCK_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_MOCK",
        test_set_name: testSetName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (newTestSetName: string) => {
    setTestSetName(newTestSetName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return {handleSubmit };
};

// Hook for fetching test runs
export const useFetchTestRunSubscription = (codeSubmissionId: string) => {
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_TEST_RUN_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_TEST_RUNS",
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = () => {
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return { handleSubmit };
};

// Hook for fetching report files inside the report folder
export const useFetchReportSubscription = (codeSubmissionId: string) => {
  const [testRunName, setTestRunName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_REPORT_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_TEST_SET_REPORTS",
        test_run_name: testRunName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (newTestRunName: string) => {
    setTestRunName(newTestRunName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return { handleSubmit };
};

// Hook for fetching the contents of a detailed report
export const useFetchDetailedReportSubscription = (codeSubmissionId: string) => {
  const [testRunName, setTestRunName] = useState<string>("");
  const [testSetReportName, setTestSetReportName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(FETCH_DETAILED_REPORT_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "FETCH_REPORT",
        test_run_name: testRunName,
        test_set_report_name: testSetReportName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (newTestRunName: string, newTestSetReportName: string) => {
    setTestRunName(newTestRunName);
    setTestSetReportName(newTestSetReportName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return { handleSubmit };
};

// Hook for editing a test
export const useEditTestSubscription = (codeSubmissionId: string) => {
  const [commandContent, setCommandContent] = useState<string>("");
  const [testSetName, setTestSetName] = useState<string>("");
  const [testCaseName, setTestCaseName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(EDIT_TEST_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "EDIT_TESTS",
        command_content: commandContent,
        test_set_name: testSetName,
        test_case_name: testCaseName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (
    newCommandContent: string,
    newTestSetName: string,
    newTestCaseName: string
  ) => {
    setCommandContent(newCommandContent);
    setTestSetName(newTestSetName);
    setTestCaseName(newTestCaseName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return {  handleSubmit };
};

// Hook for removing duplicates
export const useRemovingDuplicateSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(
    gql(REMOVE_DUPLICATES_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command: "REMOVE_DUPLICATES",
        test_set_name: testSetName,
      },
      skip: !submitted, // Skip subscription until handleSubmit is called
    }
  );

  const handleSubmit = (newTestSetName: string) => {
    setTestSetName(newTestSetName);
    setSubmitted(true); // Trigger the subscription
    return { data, loading, error };
  };

  return { handleSubmit };
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

  const { data, loading, error } = useSubscription(
    gql(RUN_COMMAND_SUBSCRIPTION),
    {
      variables: {
        code_submission_id: codeSubmissionId,
        command,
        test_set_name: testSetName,
      },
      skip: !submitted,
    }
  );

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSubmitted(true);
  };

  return { data, loading, error, handleSubmit };
};
