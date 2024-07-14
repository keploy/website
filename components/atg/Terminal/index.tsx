import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { TerminalProps, TerminalCommands } from "./types"; // Assuming you have a types file where `TerminalCommands` is defined
import CloseIcon from "@mui/icons-material/Close"; // Use CloseIcon to mimic the red button on Mac

export interface AdditionalProps {
  inputRef: React.RefObject<HTMLInputElement>;
  hideTerminal: () => void;
}

interface CombinedProps extends TerminalProps, AdditionalProps {}

export const Terminal = forwardRef(
  (props: CombinedProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = ">",
      inputRef,
      commands = {},
      hideTerminal,
    } = props;

    const [input, setInputValue] = useState<string>("");
    const [blinkingTrue, setBlinkingTrue] = useState<boolean>(true);
    const spanRef = useRef<HTMLSpanElement>(null);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
        setInputValue(e.target.value + "");
        setBlinkingTrue(false);

        if (typingTimeoutRef.current) {
          clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
          setBlinkingTrue(true);
        }, 500); // 1 second delay after user stops typing
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
          setBlinkingTrue(true);
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

    /**
     * Update the input width based on the span width
     */
    useEffect(() => {
      if (spanRef.current && inputRef.current) {
        inputRef.current.style.width = `${spanRef.current.offsetWidth + 20}px`; // Add some padding
      }
    }, [input]);

    return (
      <div>
        <div
          className="terminal border w-full rounded-t-xl border-b-slate-900 border-t-4 border-b-4 h-full"
          ref={ref}
          onClick={focusInput}
        >
          <div className="sticky top-0 w-full text-slate-300 flex justify-center items-center border border-b-2 border-black bg-inherit bg-[#3a3b3d] p-2 px-3">
            <p className="text-white flex-grow text-center font-bold">TERMINAL</p>
            <button
              className="close-button bg-red-500 rounded-full w-4 h-4 flex items-center justify-center"
              aria-label="Close Terminal"
              onClick={hideTerminal}
            >
              <CloseIcon className="text-red-500 w-3 h-3" />
            </button>
          </div>
          <div className="p-1 px-3">
            {history.map((line, index) => (
              <div className="terminal__line" key={`terminal-line-${index}-${line}`}>
                {line}
              </div>
            ))}
            <div className="terminal__prompt">
              <div className="terminal__prompt__label">{promptLabel}</div>
              <div className="terminal__prompt__input flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={input}
                    onKeyDown={handleInputKeyDown}
                    onChange={handleInputChange}
                    ref={inputRef}
                    className="form-input fat-cursor p-0 bg-inherit text-white caret-black ml-2 border-none focus:outline-none border border-r-0 text-sm appearance-none border-transparent fat-cursor" // Add padding-right to make space for the emoji
                  />
                  <span
                    className={`${blinkingTrue ? "animate-blink" : ""} absolute text-sm scale-90 inset-y-0 right-0 bg-gray-400 flex border border-gray-900 items-center pr-2`}
                  />
                </div>
                <span ref={spanRef} className="absolute invisible whitespace-pre text-sm">
                  {input}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
