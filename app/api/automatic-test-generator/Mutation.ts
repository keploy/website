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
      query: 
       ` mutation SubmitCode($language: String!, $schema: String!, $code: String!) {
          submitCode(language: $language, schema: $schema, code: $code) {
            code_submission_id
          }
        }`
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
