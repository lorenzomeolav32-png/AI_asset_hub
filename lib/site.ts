// Canonical site constants — single source of truth for SEO/metadata.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aiassetsdirectory.com"
).replace(/\/+$/, "");

export const SITE_NAME = "AI Assets Directory";

export const SITE_TAGLINE =
  "The verified directory & guides to build with Claude Skills, MCP servers and AI agents.";

export const SITE_DESCRIPTION =
  "The curated, tested and well-explained directory for developer AI assets — Claude Skills, MCP servers, Copilot agents, AI workflows and Cursor rules. Copy, install, ship.";

/** Contact + ownership. Single source of truth for legal/company pages. */
export const SITE_OPERATOR = "AI Assets Directory";
export const SITE_EMAIL = "contact@aiassetsdirectory.com";
export const SITE_GITHUB = "https://github.com/lorenzomeolav32-png/AI_asset_hub";

/** Human-readable date the legal pages were last reviewed. */
export const LEGAL_LAST_UPDATED = "September 1, 2026";

/** Absolute URL from a root-relative path. */
export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
