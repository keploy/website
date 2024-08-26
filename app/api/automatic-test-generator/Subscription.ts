// subscriptions.ts
import { gql, useSubscription } from "@apollo/client";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
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
import { processAndRenderRunCommand } from "@/components/atg/terminal";
export const useFetchTestSetsSubscription = (codeSubmissionId: string) => {
  const [submitted, setSubmitted] = useState(false);
  const [testsets, setTestSets] = useState<any>(null);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      setTestSets(data);
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null); // Clear the promise after it resolves
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null); // Clear the promise after it rejects
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (): Promise<{
    data: any;
    loading: boolean;
    error: any;
  }> => {
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit, testsets };
};

// Hook for fetching test list
export const useFetchTestListSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null); // Clear the promise after it resolves
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null); // Clear the promise after it rejects
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newTestSetName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setTestSetName(newTestSetName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for fetching a specific test
export const useFetchTestSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [testCaseName, setTestCaseName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null);
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null);
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newTestSetName: string,
    newTestCaseName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setTestSetName(newTestSetName);
    setTestCaseName(newTestCaseName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for fetching mocks
export const useFetchMockSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null);
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null);
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newTestSetName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setTestSetName(newTestSetName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for fetching test runs
export const useFetchTestRunSubscription = (codeSubmissionId: string) => {
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null);
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null);
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (): Promise<{
    data: any;
    loading: boolean;
    error: any;
  }> => {
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for fetching report files inside the report folder
export const useFetchReportSubscription = (codeSubmissionId: string) => {
  const [testRunName, setTestRunName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null);
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null);
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newTestRunName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setTestRunName(newTestRunName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for fetching the contents of a detailed report
export const useFetchDetailedReportSubscription = (
  codeSubmissionId: string
) => {
  const [testRunName, setTestRunName] = useState<string>("");
  const [testSetReportName, setTestSetReportName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null);
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null);
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newTestRunName: string,
    newTestSetReportName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setTestRunName(newTestRunName);
    setTestSetReportName(newTestSetReportName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for editing a test
export const useEditTestSubscription = (codeSubmissionId: string) => {
  const [commandContent, setCommandContent] = useState<string>("");
  const [testSetName, setTestSetName] = useState<string>("");
  const [testCaseName, setTestCaseName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null);
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null);
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newCommandContent: string,
    newTestSetName: string,
    newTestCaseName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setCommandContent(newCommandContent);
    setTestSetName(newTestSetName);
    setTestCaseName(newTestCaseName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for removing duplicates
export const useRemovingDuplicateSubscription = (codeSubmissionId: string) => {
  const [testSetName, setTestSetName] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [dataPromise, setDataPromise] = useState<{
    resolve: (value: { data: any; loading: boolean; error: any }) => void;
    reject: (reason?: any) => void;
  } | null>(null);

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

  useEffect(() => {
    if (data && dataPromise) {
      dataPromise.resolve({ data, loading, error });
      setDataPromise(null); // Clear the promise after it resolves
    }

    if (error && dataPromise) {
      dataPromise.reject(error);
      setDataPromise(null); // Clear the promise after it rejects
    }
  }, [data, error, dataPromise]);

  const handleSubmit = (
    newTestSetName: string
  ): Promise<{ data: any; loading: boolean; error: any }> => {
    setTestSetName(newTestSetName);
    setSubmitted(true); // Trigger the subscription
    return new Promise((resolve, reject) => {
      setDataPromise({ resolve, reject });
    });
  };

  return { handleSubmit };
};

// Hook for running a command with handleSubmit

export const useRunCommandSubscription = ({
  codeSubmissionId: initialCodeSubmissionId,
  command: initialCommand,
  testSetName,
  completed,
  onData,
  stepsUpdater,
  pushToHistory,
  stepKey,
}: {
  codeSubmissionId: string;
  command: string;
  testSetName?: string;
  completed: () => void;
  onData?: (data: any) => void;
  stepsUpdater?: Dispatch<SetStateAction<any>>;
  pushToHistory?: (content: JSX.Element) => void;
  stepKey?: string;
}) => {
  const [codeSubmissionId, setCodeSubmissionId] = useState<string>(
    initialCodeSubmissionId
  );
  const [command, setCommand] = useState<string>(initialCommand);
  const [submitted, setSubmitted] = useState(false);
  const [subscriptionQueue, setSubscriptionQueue] = useState<any[]>([]);
  const [latestData, setLatestData] = useState<any>("updating the latest keploy version");
  const [isProcessing, setIsProcessing] = useState(false);

  // Subscription to the GraphQL data
  useSubscription(gql(RUN_COMMAND_SUBSCRIPTION), {
    variables: {
      code_submission_id: codeSubmissionId,
      command,
      test_set_name: testSetName,
    },
    skip: !submitted,
    onComplete: () => {
      console.log(subscriptionQueue);
      completed();
    },
    onSubscriptionData: ({ subscriptionData }) => {
      const jsonData = subscriptionData.data; // Store as a JSON object
      // console.log("Received subscription data:", jsonData);

      // Call processAndRenderRunCommand only if the optional props are provided
      if (stepsUpdater && pushToHistory && stepKey) {
        processAndRenderRunCommand(
          jsonData,
          stepsUpdater,
          pushToHistory,
          stepKey
        );
      } else {
        console.log("No stepsUpdater, pushToHistory, or stepKey provided");
      }

      // setSubscriptionQueue((prevQueue) => [...prevQueue, jsonData]); // Add new data to the queue
    },
  });

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSubmitted(true);
  };

  return { latestData, handleSubmit }; // Return the latest data processed from the queue
};

