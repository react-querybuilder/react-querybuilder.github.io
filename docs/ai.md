# Using with AI agents

React Query Builder provides several resources that help coding agents (Claude Code, opencode, Cursor, Codex, GitHub Copilot, etc.) use the library correctly.

## Agent skill

The [agent skill](https://agentskills.io) teaches agents setup, UI packages, export formats, parsers, validation, server-side usage, and common pitfalls. Install it with the [`skills` CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add react-querybuilder/react-querybuilder --skill react-querybuilder
```

The skill is a standard `SKILL.md` directory, so any installer works, or you can copy it manually:

* **From `node_modules`**: `react-querybuilder` and `@react-querybuilder/core` ship the skill at `node_modules/<package>/skills/react-querybuilder/`, matching the installed version. Copy or symlink that directory into your agent's skills directory (e.g. `.claude/skills/`, `.agents/skills/`).
* **From GitHub**: [`skills/react-querybuilder`](https://github.com/react-querybuilder/react-querybuilder/tree/main/skills/react-querybuilder).

## MCP server

> **Coming soon:** `@react-querybuilder/mcp` is not published yet. The configuration below shows how it will be set up.

`@react-querybuilder/mcp` is a local (stdio) [Model Context Protocol](https://modelcontextprotocol.io) server. Its tools format, parse, convert, and validate queries using the real library code, generate JSON Schemas for queries, and search these docs (pinned to the installed version).

**Claude Code**

```bash
claude mcp add rqb -- npx -y @react-querybuilder/mcp
```

**opencode**

opencode.json

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "rqb": {
      "type": "local",
      "command": ["npx", "-y", "@react-querybuilder/mcp"]
    }
  }
}
```

**Cursor**

.cursor/mcp.json

```json
{
  "mcpServers": {
    "rqb": {
      "command": "npx",
      "args": ["-y", "@react-querybuilder/mcp"]
    }
  }
}
```

**VS Code**

.vscode/mcp.json

```json
{
  "servers": {
    "rqb": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@react-querybuilder/mcp"]
    }
  }
}
```

## LLM-friendly docs

* [`/llms.txt`](/llms.txt): index of all documentation pages, with a markdown version of each page.
* [`/llms-full.txt`](/llms-full.txt): full documentation in one file (excludes the API reference, changelog, and migration guides).
* [`/llms-api.txt`](/llms-api.txt): condensed API reference, one line per exported symbol of every package.

Append `.md` to any documentation URL for its markdown version (e.g. [`/docs/utils/export.md`](/docs/utils/export.md)).

## Recipes

The [Recipes](/docs/tips/recipes.md) page shows the shortest working snippet and the exact output for every export format and import parser. The outputs are generated from the library source, so they're a reliable reference for agents.
