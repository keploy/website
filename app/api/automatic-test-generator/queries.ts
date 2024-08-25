//queries


export const SUBMIT_CODE_MUTATION = `
  mutation SubmitCode($language: String!, $schema: String!, $code: String!) {
    submitCode(language: $language, schema: $schema, code: $code) {
      code_submission_id
    }
  }
`;

export const FETCH_TEST_SETS_SUBSCRIPTION = `
  subscription FetchTestSets($code_submission_id: String!, $command: String!) {
    runCommand(code_submission_id: $code_submission_id, command: $command)
  }
`;

export const FETCH_TEST_LIST_SUBSCRIPTION = `
  subscription FetchTestList(
    $code_submission_id: String!
    $command: String!
    $test_set_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_set_name: $test_set_name
    )
  }
`;

export const FETCH_TEST_SUBSCRIPTION = `
  subscription FetchTest(
    $code_submission_id: String!
    $command: String!
    $test_set_name: String!
    $test_case_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_set_name: $test_set_name
      test_case_name: $test_case_name
    )
  }
`;

export const FETCH_MOCK_SUBSCRIPTION = `
  subscription FetchMock(
    $code_submission_id: String!
    $command: String!
    $test_set_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_set_name: $test_set_name
    )
  }

`;


export const EDIT_TEST_SUBSCRIPTION = `
  subscription EditTest(
    $code_submission_id: String!,
    $command: String!,
    $command_content: String!,
    $test_set_name: String!,
    $test_case_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id,
      command: $command,
      command_content: $command_content,
      test_set_name: $test_set_name,
      test_case_name: $test_case_name
    )
  }
`;


export const FETCH_TEST_RUN_SUBSCRIPTION = `
  subscription FetchTestRun($code_submission_id: String!, $command: String!) {
    runCommand(code_submission_id: $code_submission_id, command: $command)
  }
`;

export const FETCH_REPORT_SUBSCRIPTION = `
  subscription FetchReport(
    $code_submission_id: String!
    $command: String!
    $test_run_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_run_name: $test_run_name
    )
  }
`;

export const FETCH_DETAILED_REPORT_SUBSCRIPTION = `
  subscription FetchDetailedReport(
    $code_submission_id: String!
    $command: String!
    $test_run_name: String!
    $test_set_report_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_run_name: $test_run_name
      test_set_report_name: $test_set_report_name
    )
  }
`;

export const REMOVE_DUPLICATES_SUBSCRIPTION = `
  subscription RemoveDuplicates(
    $code_submission_id: String!
    $command: String!
    $test_set_name: String!
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_set_name: $test_set_name
    )
  }
`;

export const RUN_COMMAND_SUBSCRIPTION = `
  subscription RunCommand(
    $code_submission_id: String!
    $command: String!
    $test_set_name: String
  ) {
    runCommand(
      code_submission_id: $code_submission_id
      command: $command
      test_set_name: $test_set_name
    )
  }
`;
