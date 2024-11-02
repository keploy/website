import {ReactNode} from "react";

export type TerminalHistoryItem = ReactNode | string;
export type TerminalHistory = TerminalHistoryItem[];
export interface TerminalPushToHistoryWithDelayProps {
  content: TerminalHistoryItem;
  delay?: number;
}



export type TerminalCommands = Record<string, () => void>;

export interface TerminalProps {
  history: TerminalHistory;
  promptLabel?: TerminalHistoryItem;
  commands: TerminalCommands;
}