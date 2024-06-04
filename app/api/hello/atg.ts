// submitCodeSnippet.ts
export const submitCodeSnippet = async ({
  language,
  code,
  signal,
}: {
  language: string;
  code: string;
  signal: AbortSignal;
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const requestBody = {
      query: `
        mutation SubmitCode($language: String!, $code: String!) {
          submitCode(language: $language, code: $code) {
            code_submission_id
          }
        }
      `,
      variables: { language, code },
    };

    const options: RequestInit = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
      signal,
    };

    const response = await fetch("http://localhost:8080/query", options);
    const responseData = await response.json();

    if (response.ok && responseData?.data?.submitCode?.code_submission_id) {
      return responseData.data.submitCode.code_submission_id;
    } else {
      console.error("Error in response:", responseData.errors || responseData);
      return null;
    }
  } catch (err) {
    if (err instanceof Error) {
      if (err.name === "AbortError") {
        console.error("Fetch aborted");
      } else {
        console.error("ERROR DURING FETCH REQUEST", err);
      }
    } else {
      console.error("An unknown error occurred", err);
    }
    return null;
  }
};

// runCurlCommand.ts
export const runCurlCommand = async ({
  code_submission_id,
  command,
  command_content,
}: {
  code_submission_id: string;
  command: string;
  command_content: string;
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const requestBody = {
      query: `
        subscription RunCommand($code_submission_id: String!, $command: String!, $command_content: String!) {
          runCommand(
            code_submission_id: $code_submission_id
            command: $command
            command_content: $command_content
          ) {
            status
            output
          }
        }
      `,
      variables: { code_submission_id, command, command_content },
    };

    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await fetch("http://localhost:8080/query", options);
    const responseData = await response.json();

    if (response.ok && responseData?.data?.runCommand) {
      return responseData.data.runCommand;
    } else {
      console.error("Error in response:", responseData.errors || responseData);
      return null;
    }
  } catch (err) {
    console.error("ERROR DURING FETCH REQUEST", err);
    return null;
  }
};


