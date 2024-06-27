// components/RunCommandComponent.tsx
"use client"
import React, { useState } from 'react';
import { gql, useSubscription } from '@apollo/client';

const RUN_COMMAND_SUBSCRIPTION = gql`
  subscription RunCommand($code_submission_id: String!, $command: String!) {
    runCommand(code_submission_id: $code_submission_id, command: $command)
  }
`;

const RunCommandComponent: React.FC = () => {
  const [codeSubmissionId, setCodeSubmissionId] = useState<string>('beba99be-a3d2-49bd-a788-80965a37b0ed');
  const [command, setCommand] = useState<String>('RECORD');
  const [submitted, setSubmitted] = useState(false);

  const { data, loading, error } = useSubscription(RUN_COMMAND_SUBSCRIPTION, {
    variables: { code_submission_id: codeSubmissionId, command },
    skip: !submitted, // Skip the subscription until the form is submitted
  });
  console.log(data,loading,error);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // Trigger the subscription
  };

  return (
    <div>
      <h1>Run Command</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Code Submission ID:
            <input
              type="text"
              value={codeSubmissionId}
              onChange={(e) => setCodeSubmissionId(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Run Command</button>
      </form>
      <div>
        <h2>Result</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <pre>{JSON.stringify(data.runCommand, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default RunCommandComponent;
