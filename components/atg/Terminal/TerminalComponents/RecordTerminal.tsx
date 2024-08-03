import React, { useState, useEffect, useMemo, useRef, Dispatch, SetStateAction } from "react";
import { Terminal } from "..";
import { useTerminal } from "../hooks";
import { useRunCommandSubscription } from "@/app/api/hello/atg";
import { Directory, Type } from "../../Editor/utils/file-manager";
import StepsForRecording from "../../Utils/types";

const Emoji = "User@1231-Keploy:"; // 🐰

function RecordTerminalSession({
  inputRef,
  setRootDir,
  setStepsForRecording,
  RecordTheme,
  RecordSetTerminalHeightStatus,
}: {
  inputRef: React.RefObject<HTMLInputElement>;
  setRootDir: Dispatch<SetStateAction<Directory>>;
  setStepsForRecording: Dispatch<SetStateAction<StepsForRecording>>;
  RecordTheme: boolean;
  RecordSetTerminalHeightStatus: (val: string) => void;
}) {
  const { history, pushToHistory, setTerminalRef, resetTerminal } = useTerminal();
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const [command, setCommandSub] = useState<string>("TEST_GENERATE");
  const [SocketErrors, setSocketErrors] = useState<string | null>(null);
  const [commandsTrue, setOtherCommandsTrue] = useState<boolean>(false);
  const storedCodeSubmissionId = localStorage.getItem("code_submission_id") || "";
  const [codeSubmissionId, setCodeSubmissionIdInput] = useState<string>(storedCodeSubmissionId);

  const { data, loading, error, handleSubmit } = useRunCommandSubscription({
    codeSubmissionId,
    command,
  });

  const initialPushRef = useRef(false);
  const intialRecordingRef = useRef(false);

  useEffect(() => {
    if (data) {
      data.runCommand = data.runCommand.replace(
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
          const timeZone = (timeZoneOffset >= 0 ? "+" : "") + String(timeZoneOffset).padStart(2, "0") + ":00";
          return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timeZone}`;
        }
      );

      data.runCommand = data.runCommand.replace(
        /\u001b\[([0-9;]+)m/g,
        (match: string, p1: string) => {
          const codes = p1.split(';').map(Number);
          let color = '';

          codes.forEach(code => {
            switch (code) {
              case 30: color = 'black'; break;
              case 31: color = 'red'; break;
              case 32: color = 'green'; break;
              case 33: color = 'yellow'; break;
              case 34: color = 'blue'; break;
              case 35: color = 'magenta'; break;
              case 36: color = 'cyan'; break;
              case 37: color = 'white'; break;
              case 0: color = ''; break;
            }
          });

          return color ? `<span style="color: ${color};">` : '</span>';
        }
      );

      if (data.runCommand.match(/<span style="color: [^>]+;">/)) {
        data.runCommand += '</span>';
      }

      if (data.runCommand === "[GIN-debug] Listening and serving HTTP on :5000") {
        setOtherCommandsTrue(true);
        setStepsForRecording((prev) => ({ ...prev, starting: true }));
      }
      pushToHistory(
        <div>
          <p className="inline" dangerouslySetInnerHTML={{ __html: data.runCommand }}></p>
        </div>
      );
    } else if (error) {
      setSocketErrors(error.message);
      pushToHistory(
        <div className="flex">
          <p className="font-bold">{Emoji}</p>
          <p className="text-accent-100 font-bold">~/$</p> {error.message}
        </div>
      );
      setStepsForRecording((prev) => ({
        ...prev,
        starting: true,
        curlApiHitting: true,
      }));
    } else if (loading) {
      pushToHistory(
        <div className="flex">
          <p className="font-bold">{Emoji}</p>
          <p className="text-accent-100 font-bold">~/$</p> Loading...
        </div>
      );
    }
  }, [data, error, loading, pushToHistory, setStepsForRecording]);

  useEffect(() => {
    if (!initialPushRef.current) {
      pushToHistory(
        <div className="flex">
          <p className="font-bold">{Emoji}</p>
          <p className="text-accent-100 font-bold">~/$</p> Keploy recording starting....
        </div>
      );
      initialPushRef.current = true;
    }
  }, [pushToHistory, setStepsForRecording]);

  const makeKeployTestDir = () => {
    setRootDir((prevRootDir) => {
      const dirExists = prevRootDir.dirs.some(
        (dir) => dir.name === "Keploy"
      );

      if (dirExists) {
        console.log("Directory already exists.");
        return prevRootDir;
      }

      const newDir = {
        id: "test_root",
        name: "Keploy",
        parentId: "root",
        type: Type.DIRECTORY,
        depth: 1,
        dirs: [],
        files: [],
      };

      const updatedDirs = [...prevRootDir.dirs, newDir];

      return {
        ...prevRootDir,
        dirs: updatedDirs,
      };
    });
  };

  const commands = useMemo(
    () => ({
      'keploy record -c "npm run dev"': async () => {
        if (!intialRecordingRef.current) {
          handleSubmit();
          if (commandsTrue) {
            setStepsForRecording((prev) => ({ ...prev, curlApiHitting: true }));
            makeKeployTestDir();
            intialRecordingRef.current = true;
          }
        }
      },
      __notFound__: async () => {
        await pushToHistory(
          <div style={{ color: "red" }} className="flex">
            <p className="font-bold">{Emoji}</p>
            <p className="text-accent-100 font-bold">~/$</p> Command not found
          </div>
        );
      },
      "": async () => {
        await pushToHistory(
          <div className="flex">
            <p className="font-bold">{Emoji}</p>
            <p className="text-accent-100 font-bold">~/$</p>
          </div>
        );
      },
      clear: async () => {
        await resetTerminal();
      },
    }),
    [commandsTrue, codeSubmissionId, handleSubmit, pushToHistory, resetTerminal]
  );

  useEffect(() => {
    if (inputRef.current && codeSubmissionId) {
      setCommandSub("TEST_GENERATE");
      setTimeout(() => {
        commands['keploy record -c "npm run dev"']();
      }, 1000);
    }
  }, [commands, inputRef, codeSubmissionId]);

  return (
    <div className="h-full">
      <Terminal
        history={history}
        ref={setTerminalRef}
        promptLabel={
          <p className="font-bold flex">
            {Emoji}
            <p className="text-accent-100">~/$</p>
          </p>
        }
        commands={commands}
        inputRef={inputRef}
        terminalTheme={RecordTheme}
        SetTerminalHeight={RecordSetTerminalHeightStatus}
      />
    </div>
  );
}

export default RecordTerminalSession;
