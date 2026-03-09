import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod/v4";
import {
  registerResources,
  resourceList,
  RESOURCES_DIR,
} from "./utils/register-resources.js";
import { encode } from "plantuml-encoder";
import { join } from "path";
import { readFileSync } from "fs";

const server = new McpServer({
  name: "plantuml",
  version: "1.0.0",
});

registerResources(server);

server.registerTool(
  "read_docs",
  {
    description: `ALWAYS call this tool first before calling create_diagram.
      Returns the PlantUML documentation for the given diagram type.
      This ensures correct syntax is used when generating diagrams.`,
    inputSchema: z.object({
      type: z
        .string()
        .describe(
          `The diagram type to fetch docs for. Must be one of the available resource URIs: ${resourceList.join(", ")}`,
        ),
    }),
  },
  async ({ type }) => {
    const uri = resourceList.find((u) => u.includes(type));

    if (!uri) {
      return {
        content: [
          {
            type: "text",
            text: `No documentation found for type "${type}". Available resources:\n${resourceList.join("\n")}`,
          },
        ],
      };
    }

    const name = uri.split("/").pop()!;
    const text = readFileSync(join(RESOURCES_DIR, `${name}.md`), "utf-8");

    console.error(`[MCP] read_docs called for: ${uri}`);

    return { content: [{ type: "text", text }] };
  },
);

server.registerTool(
  "create_diagram",
  {
    description: `Generates a PlantUML diagram URL from valid PlantUML markup.
      YOU MUST call read_docs first to get the correct syntax for the diagram type.
      Do NOT guess PlantUML syntax — always read the docs first.`,
    inputSchema: z.object({
      plantuml: z.string().describe("Valid PlantUML markup to render"),
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
  async ({ plantuml }) => {
    const encoded = encode(plantuml);
    return {
      content: [
        {
          type: "text",
          text: `https://www.plantuml.com/plantuml/png/${encoded}`,
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("PlantUML MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
