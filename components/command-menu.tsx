"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  Bot,
  Compass,
  Home,
  ScrollText,
  Search,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { CardAsset } from "@/lib/content";
import { typeLabels } from "@/lib/data";
import type { AssetType } from "@/lib/data";

const typeIcon: Record<AssetType, React.ComponentType<{ className?: string }>> = {
  "claude-skill": Sparkles,
  "mcp-server": Server,
  copilot: Bot,
  "ai-workflow": Workflow,
  "cursor-rule": ScrollText,
};

const quickLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Browse all assets", href: "/browse", icon: Compass },
  { label: "Claude Skills", href: "/claude-skills", icon: Sparkles },
  { label: "MCP Servers", href: "/mcp-servers", icon: Server },
  { label: "Copilot Agents", href: "/copilot-agents", icon: Bot },
  { label: "AI Workflows", href: "/ai-workflows", icon: Workflow },
  { label: "Cursor Rules", href: "/cursor-rules", icon: ScrollText },
  { label: "Submit an asset", href: "/submit", icon: ArrowUpRight },
];

export function CommandMenu({ items }: { items: CardAsset[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsMac(/mac|iphone|ipad|ipod/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  function go(href: string) {
    setOpen(false);
    router.push(href);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg sm:flex"
      >
        <Search className="h-4 w-4" />
        <span>Search</span>
        <kbd className="ml-1 rounded border border-line bg-bg px-1.5 py-0.5 font-mono text-[10px] text-muted">
          {mounted ? (isMac ? "⌘K" : "Ctrl K") : "⌘K"}
        </kbd>
      </button>

      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Search AI Assets Directory"
        loop
      >
        <Command.Input placeholder="Search assets, categories…" />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          <Command.Group heading="Go to">
            {quickLinks.map((l) => (
              <Command.Item
                key={l.href}
                value={`goto ${l.label}`}
                onSelect={() => go(l.href)}
              >
                <l.icon className="h-4 w-4 text-accent" />
                {l.label}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Assets">
            {items.map((a) => {
              const Icon = typeIcon[a.type];
              return (
                <Command.Item
                  key={a.slug}
                  value={`${a.title} ${a.fileName} ${a.tags.join(" ")} ${a.tools.join(" ")} ${typeLabels[a.type]}`}
                  onSelect={() => go(a.url)}
                >
                  <Icon className="h-4 w-4 text-accent" />
                  {a.title}
                  <span className="meta">{typeLabels[a.type]}</span>
                </Command.Item>
              );
            })}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}
