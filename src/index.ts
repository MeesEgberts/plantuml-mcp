import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod/v4";

const server = new McpServer({
  name: "plantuml",
  version: "1.0.0",
});

server.registerTool(
  "create_diagram",
  {
    description:
      "Generates a PlantUML diagram URL from a natural language description or documentation.",
    inputSchema: z.object({
      description: z
        .string()
        .describe(
          "Natural language description of what the diagram should show",
        ),
      type: z
        .enum([
          "sequence",
          "use case",
          "class",
          "activity",
          "component",
          "state",
          "object",
          "deployment",
          "timing",
          "regex",
          "network",
          "wireframe",
          "archimate",
          "gantt",
          "mindmap",
          "work breakdown structure (WBS)",
          "Extended Backus–Naur Form (EBNF)",
        ])
        .describe("The type of UML diagram to generate"),
    }),
  },
  async ({ type, description }) => {
    return { content: [] };
  },
);
