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
    const spanRef = useRef<HTMLSpanElement>(null);

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
          className="terminal border border-b-slate-900 border-t-4 border-b-4 h-full"
          ref={ref}
          onClick={focusInput}
        >
          <div className="sticky top-0 w-full text-slate-300 flex justify-center  rounded-t-md bg-inherit bg-secondary-300 p-2 border-b-slate-800">
            <div className="flex flex-row gap-2">
              {/* <IoTerminal
                className=" cursor-pointer scale-150 text-slate-300"
                aria-label="Expand Terminal"
                onClick={hideTerminal}
              /> */}
              {/* <p className=" text-slate-800">Terminal</p> */}
            </div>
            <p className="text-white font-bold">User@1231-Keploy:~</p>
            {/* <IoIosArrowDropdownCircle
              className=" cursor-pointer right-0  scale-150 text-white"
              aria-label="Expand Terminal"
              onClick={hideTerminal}
            /> */}
          </div>
          <div className="p-1">
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
              <div className="terminal__prompt__input flex">
                <div className="relative w-full">
                  <input
                    type="text"
                    value={input}
                    onKeyDown={handleInputKeyDown}
                    onChange={handleInputChange}
                    ref={inputRef}
                    className="form-input  fat-cursor p-0 bg-inherit   text-slate-950 caret-slate-100  ml-2 border-none focus:outline-none border border-r-0 text-sm appearance-none border-transparent fat-cursor " // Add padding-right to make space for the emoji
                  />
                  <span className="absolute text-sm scale-90 inset-y-0 right-0 bg-slate-950 flex border border-slate-950 items-center pr-2"/>
                </div>
                <span
                  ref={spanRef}
                  className="absolute invisible whitespace-pre  text-sm"
                >
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
