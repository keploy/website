import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TerminalProps, TerminalCommands } from "./types"; // Assuming you have a types file where `TerminalCommands` is defined

export interface AdditionalProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

interface CombinedProps extends TerminalProps, AdditionalProps {}

export const Terminal = forwardRef(
  (props: CombinedProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = ">",
      inputRef,
      commands = {},
    } = props;

    const [input, setInputValue] = useState<string>("");

    /**
     * Focus on the input whenever we render the terminal
     */
    useEffect(() => {
      inputRef.current?.focus();
    }, [inputRef]); // Ensure this runs only when inputRef changes

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef]);

    /**
     * When user types something, we update the input value
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
      },
      []
    );

    /**
     * When user presses enter, we execute the command
     */
    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          const commandToExecute = commands?.[input];
          if (commandToExecute) {
            commandToExecute?.();
          } else {
            handleCommandNotFound();
          }
          setInputValue("");
        }
      },
      [commands, input]
    );

    // Function to handle command not found
    const handleCommandNotFound = () => {
      const commandNotFoundFunc = commands["__notFound__"];
      if (commandNotFoundFunc) {
        commandNotFoundFunc();
      }
    };

    return (
      <div>
        <div className="terminal border border-gray-300 h-full" ref={ref} onClick={focusInput}>
          <div className="p-4">
            {history.map((line, index) => (
              <div
                className="terminal__line"
                key={`terminal-line-${index}-${line}`}
              >
                {line}
              </div>
            ))}
            <div className="terminal__prompt">
              <div className="terminal__prompt__label">{promptLabel}</div>
              <div className="terminal__prompt__input">
                <input
                  type="text"
                  value={input}
                  onKeyDown={handleInputKeyDown}
                  onChange={handleInputChange}
                  ref={inputRef}
                  className="focus:outline-none appearance-none border border-slate-950"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
