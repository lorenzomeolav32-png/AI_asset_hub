"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type CommandMenuContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const CommandMenuContext = createContext<CommandMenuContextValue | null>(null);

// Shared open/close state so any button (header, hero, ⌘K) drives the same dialog instance.
export function CommandMenuProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <CommandMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </CommandMenuContext.Provider>
  );
}

export function useCommandMenu() {
  const ctx = useContext(CommandMenuContext);
  if (!ctx) {
    throw new Error("useCommandMenu must be used within a CommandMenuProvider");
  }
  return ctx;
}
