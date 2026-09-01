export type AssetType =
  | "claude-skill"
  | "mcp-server"
  | "copilot"
  | "ai-workflow"
  | "cursor-rule";

export type ToolId =
  | "claude"
  | "claude-code"
  | "cursor"
  | "copilot"
  | "vscode"
  | "chatgpt"
  | "deepseek"
  | "grok"
  | "n8n";

export type License = "MIT" | "Apache-2.0" | "CC-BY-4.0" | "BSD" | "Public";

export type Asset = {
  slug: string;
  type: AssetType;
  title: string;
  fileName: string;
  summary: string;
  tags: string[];
  tools: ToolId[];
  license: License;
  author: string;
  verified: boolean;
};

export type Category = {
  slug: string;
  name: string;
  href: string;
  icon: "sparkles" | "server" | "bot" | "workflow" | "scroll";
  count: number;
  blurb: string;
  command: string;
};

export const typeLabels: Record<AssetType, string> = {
  "claude-skill": "Claude Skill",
  "mcp-server": "MCP Server",
  copilot: "Copilot Agent",
  "ai-workflow": "AI Workflow",
  "cursor-rule": "Cursor Rule",
};

export const toolLabels: Record<ToolId, string> = {
  claude: "Claude",
  "claude-code": "Claude Code",
  cursor: "Cursor",
  copilot: "Copilot",
  vscode: "VS Code",
  chatgpt: "ChatGPT",
  deepseek: "DeepSeek",
  grok: "Grok",
  n8n: "n8n",
};

export function toolLabel(id: string): string {
  return toolLabels[id as ToolId] ?? id;
}

export function categoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const categories: Category[] = [
  {
    slug: "claude-skills",
    name: "Claude Skills",
    href: "/claude-skills",
    icon: "sparkles",
    count: 100,
    blurb: "Drop-in SKILL.md packages that turn Claude into a specialist.",
    command: "~/claude-skills",
  },
  {
    slug: "mcp-servers",
    name: "MCP Servers",
    href: "/mcp-servers",
    icon: "server",
    count: 30,
    blurb: "Connect your agent to databases, APIs and tools over MCP.",
    command: "~/mcp-servers",
  },
  {
    slug: "copilot-agents",
    name: "Copilot Agents",
    href: "/copilot-agents",
    icon: "bot",
    count: 50,
    blurb: "Chat modes, instructions and prompt files for GitHub Copilot.",
    command: "~/copilot-agents",
  },
  {
    slug: "ai-workflows",
    name: "AI Workflows",
    href: "/ai-workflows",
    icon: "workflow",
    count: 40,
    blurb: "Importable n8n / Make automations wired to LLMs.",
    command: "~/ai-workflows",
  },
  {
    slug: "cursor-rules",
    name: "Cursor Rules",
    href: "/cursor-rules",
    icon: "scroll",
    count: 25,
    blurb: "Opinionated .mdc rules that keep Cursor on-style.",
    command: "~/cursor-rules",
  },
];

export const featuredAssets: Asset[] = [
  {
    slug: "postgres-mcp",
    type: "mcp-server",
    title: "Postgres MCP Server",
    fileName: "postgres-mcp",
    summary:
      "Query and inspect your Postgres database from any MCP client, with schema-aware, read-only safety by default.",
    tags: ["database", "sql", "postgres"],
    tools: ["claude", "claude-code", "cursor"],
    license: "MIT",
    author: "crystaldba",
    verified: true,
  },
  {
    slug: "pdf-toolkit",
    type: "claude-skill",
    title: "PDF Toolkit",
    fileName: "pdf-toolkit.skill",
    summary:
      "Extract, split, merge and fill PDF forms without ever leaving the chat — Claude handles the file work.",
    tags: ["pdf", "documents", "office"],
    tools: ["claude", "claude-code"],
    license: "Apache-2.0",
    author: "anthropics",
    verified: true,
  },
  {
    slug: "test-engineer",
    type: "copilot",
    title: "Test Engineer",
    fileName: "test-engineer.chatmode.md",
    summary:
      "A Copilot chat mode that writes, runs and fixes unit tests until the suite goes green.",
    tags: ["testing", "tdd", "quality"],
    tools: ["copilot", "vscode"],
    license: "MIT",
    author: "github",
    verified: false,
  },
  {
    slug: "nextjs-pro",
    type: "cursor-rule",
    title: "Next.js Pro Rules",
    fileName: "nextjs.mdc",
    summary:
      "Idiomatic Cursor rules for Next.js 15 App Router, TypeScript and Tailwind — fewer hallucinated APIs.",
    tags: ["nextjs", "typescript", "react"],
    tools: ["cursor"],
    license: "MIT",
    author: "pontusab",
    verified: true,
  },
  {
    slug: "github-triage",
    type: "ai-workflow",
    title: "GitHub Issue Triage",
    fileName: "github-triage.json",
    summary:
      "An n8n workflow that reads new issues, classifies them with an LLM and applies labels automatically.",
    tags: ["github", "automation", "n8n"],
    tools: ["n8n"],
    license: "MIT",
    author: "n8n-io",
    verified: false,
  },
  {
    slug: "code-reviewer",
    type: "claude-skill",
    title: "Code Reviewer",
    fileName: "code-reviewer.skill",
    summary:
      "Senior-level review that flags security, performance and correctness issues with concrete diffs.",
    tags: ["code-review", "security", "dx"],
    tools: ["claude", "claude-code", "cursor"],
    license: "CC-BY-4.0",
    author: "aiassethub",
    verified: true,
  },
];

export const worksWith: ToolId[] = [
  "claude",
  "claude-code",
  "cursor",
  "copilot",
  "vscode",
  "chatgpt",
  "deepseek",
  "grok",
  "n8n",
];
