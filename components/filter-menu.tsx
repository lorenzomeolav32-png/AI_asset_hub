"use client";

import { useEffect, useRef, useState } from "react";
import { Command } from "cmdk";
import { Check, ChevronDown } from "lucide-react";

export type FilterOption = { value: string; label: string };

/** A compact, searchable dropdown filter — trigger button + cmdk listbox. */
export function FilterMenu({
  label,
  value,
  options,
  onChange,
  searchPlaceholder,
}: {
  label: string;
  value: string | null;
  options: FilterOption[];
  onChange: (value: string | null) => void;
  searchPlaceholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = options.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={
          "flex items-center gap-2 rounded-lg border px-3 py-2 font-mono text-xs transition-colors " +
          (value
            ? "border-accent/50 bg-accent/10 text-accent-strong"
            : "border-line bg-surface text-muted hover:border-line-strong hover:text-fg")
        }
      >
        <span className="uppercase tracking-widest opacity-70">{label}</span>
        <span className="max-w-32 truncate text-fg">
          {current ? current.label : "All"}
        </span>
        <ChevronDown
          className={
            "h-3 w-3 shrink-0 transition-transform " + (open ? "rotate-180" : "")
          }
        />
      </button>

      {open && (
        <Command loop className="absolute left-0 top-[calc(100%+8px)] z-30 w-72">
          <Command.Input
            autoFocus
            placeholder={searchPlaceholder ?? `Search ${label.toLowerCase()}…`}
          />
          <Command.List className="max-h-72 overflow-y-auto">
            <Command.Empty>No matches.</Command.Empty>
            <Command.Item
              value="__all__ all"
              forceMount
              onSelect={() => {
                onChange(null);
                setOpen(false);
              }}
            >
              All
              {!value && <Check className="meta h-3.5 w-3.5 text-accent" />}
            </Command.Item>
            {options.map((o) => (
              <Command.Item
                key={o.value}
                value={`${o.label} ${o.value}`}
                onSelect={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
              >
                <span className="truncate">{o.label}</span>
                {value === o.value && (
                  <Check className="meta h-3.5 w-3.5 shrink-0 text-accent" />
                )}
              </Command.Item>
            ))}
          </Command.List>
        </Command>
      )}
    </div>
  );
}
