import { SUBMIT_CODE_MUTATION } from "./queries";
export const submitCodeSnippet = async ({
  language,
  schema,
  code,
}: {
  language: string;
  schema: string;
  code: string;
}) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    const requestBody = {
      query: SUBMIT_CODE_MUTATION
      ,
      variables: { language, schema, code },
    };

    const options: RequestInit = {
      method: "POST",
      headers,
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(
      "https://landing-page.staging.keploy.io/query",
      options
    );
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

export type CommandResponse = {
  success: boolean;
  data?: any;
  error?: string;
};

export async function postRequest(
  endpoint: string,
  query: string,
  variables: any
): Promise<CommandResponse> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const data = await response.json();
    return { success: response.ok, data };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

