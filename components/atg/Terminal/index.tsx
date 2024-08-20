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
  terminalTheme: boolean;
  SetTerminalHeight: (val: string) => void;
  Loading?: boolean;
}

interface CombinedProps extends TerminalProps, AdditionalProps {}

export const Terminal = forwardRef(
  (props: CombinedProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = ">",
      inputRef,
      commands = {},
      terminalTheme,
      SetTerminalHeight,
      Loading,
    } = props;

    const [input, setInputValue] = useState<string>("");
    const [blinkingTrue, setBlinkingTrue] = useState<boolean>(true);
    const spanRef = useRef<HTMLSpanElement>(null);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [height, setHeight] = useState<string>("orange");
    /**
     * Focus on the input whenever we render the terminal
     */
    useEffect(() => {
      inputRef.current?.focus();
    }, [inputRef]); // Ensure this runs only when inputRef changes

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, [inputRef]);

    useEffect(() => {
      if (Loading) {
        inputRef.current?.value == "Loading ... ";
      }
    }, [Loading]);
    /**
     * When user types something, we update the input value
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
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

    useEffect(() => {
      const handleFocus = () => {
        setBlinkingTrue(true);
      };

      const handleBlur = () => {
        setBlinkingTrue(false);
      };

      const inputElement = inputRef.current;

      if (inputElement) {
        inputElement.addEventListener("focus", handleFocus);
        inputElement.addEventListener("blur", handleBlur);
      }

      return () => {
        if (inputElement) {
          inputElement.removeEventListener("focus", handleFocus);
          inputElement.removeEventListener("blur", handleBlur);
        }
      };
    }, [inputRef]);

    return (
      <div className="h-full">
        <div
          className={` ${
            terminalTheme
              ? "terminal_light  bg-neutral-200 border border-y-gray-200 border-b-gray-200 "
              : "terminal "
          } font-courier w-full h-full relative  `}
          ref={ref}
          onClick={focusInput}
        >
          <div
            className={`sticky top-0 left-0 right-0  w-full flex justify-center items-center  bg-inherit p-2 px-3 ${
              terminalTheme
                ? " text-black bg-neutral-200 border border-gray-200  "
                : " text-white bg-[#21252b] shadow-sm shadow-[#1b1e21] mb-4"
            }`}
          >
            <p className="flex-grow text-center font-bold text-sm">TERMINAL</p>
            <div className="flex flex-row gap-2">
              <button
                className={`close-button bg-red-500 hover:bg-red-600 rounded-full w-4 h-4 flex items-center justify-center`}
                aria-label="Close Terminal"
                onClick={() => {
                  SetTerminalHeight("red");
                  setHeight("red");
                }}
              >
                <CloseIcon className="text-red-600 hover:bg-red-600 w-3 h-3" />
              </button>
              <button
                className={`close-button bg-primary-300 hover:bg-primary-400 rounded-full w-4 h-4 flex items-center justify-center`}
                aria-label="Close Terminal"
                onClick={() => {
                  SetTerminalHeight("orange");
                  setHeight("orange");
                }}
              >
                <CloseIcon className="text-primary-300 hover:bg-primary-400 w-3 h-3" />
              </button>
              <button
                className={`close-button bg-green-500 hover:bg-green-600 rounded-full w-4 h-4 flex items-center justify-center`}
                aria-label="Close Terminal"
                onClick={() => {
                  SetTerminalHeight("green");
                  setHeight("green");
                }}
              >
                <CloseIcon className="text-green-500 hover:bg-green-600 w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="p-1 px-3 ">
            {history.map((line, index) => (
              <div
                className={`${
                  terminalTheme ? "terminal__line_light" : "terminal__line"
                } text-start`}
                key={`terminal-line-${index}-${line}`}
              >
                {line}
              </div>
            ))}
            <div
              className={`${
                terminalTheme ? "terminal__prompt_light" : "terminal__prompt"
              }`}
            >
              {!Loading ? (
                <>
                  <div
                    className={`${
                      terminalTheme
                        ? "terminal__prompt__label_light"
                        : "terminal__prompt__label"
                    }  `}
                  >
                    {promptLabel}
                  </div>
                  <div className="flex">
                    <div className="relative">
                      <input
                        type="text"
                        value={input}
                        onKeyDown={handleInputKeyDown}
                        onChange={handleInputChange}
                        ref={inputRef}
                        className={`form-input  fat-cursor p-0 bg-inherit text-xs ml-2 border-none focus:outline-none appearance-none ${
                          terminalTheme
                            ? "text-secondary-300 caret-white "
                            : "text-white caret-[#282c34]"
                        } min-w-0`}
                        style={{
                          width: inputRef.current
                            ? inputRef.current.value.length + "ch"
                            : "auto",
                        }}
                        spellCheck={false}
                      />

                      <span
                        className={`${
                          blinkingTrue ? "animate-blink" : ""
                        } absolute text-sm scale-90 inset-y-0 -right-2 flex items-center  pr-2 ${
                          terminalTheme
                            ? "bg-secondary-300 border-secondary-300"
                            : "bg-white border-white"
                        }`}
                      />
                    </div>
                    {/* <span
                  ref={spanRef}
                  className="absolute text-sm invisible whitespace-pre"
                >
                  {input}
                </span> */}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center w-full ">
                  <div
                    className={`  text-xs font-courier flex items-center space-x-1`}
                  >
                    <span>[</span>
                    <span className="animate-blink transition delay-900">=</span>
                    <span className="animate-blink transition delay-800">=</span>
                    <span className="animate-blink transition delay-700">=</span>
                    <span className="animate-blink transition delay-600">=</span>
                    <span className="animate-blink transition delay-500">=</span>
                    <span className="animate-blink transition delay-400">=</span>
                    <span className="animate-blink transition delay-300">=</span>
                    <span className="animate-blink transition delay-200">=</span>
                    <span className="animate-blink ">=</span>
                    <span className="">Loading</span>
                    <span className="animate-blink ">=</span>
                    <span className="animate-blink transition delay-200">=</span>
                    <span className="animate-blink transition delay-300">=</span>
                    <span className="animate-blink transition delay-400">=</span>
                    <span className="animate-blink transition delay-500">=</span>
                    <span className="animate-blink transition delay-600">=</span>
                    <span className="animate-blink transition delay-700">=</span>
                    <span className="animate-blink transition delay-800">=</span>
                    <span className="animate-blink transition delay-900">=</span>
                      <span>]</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
