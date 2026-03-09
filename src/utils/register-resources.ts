import { readFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const RESOURCES_DIR = new URL("../resources", import.meta.url).pathname;
const resources = readdirSync(RESOURCES_DIR).filter((f) => f.endsWith(".md"));

export const resourceList = resources.map(
  (f) => `docs://plantuml/${basename(f, ".md")}`,
);

export function registerResources(server: McpServer) {
  console.error(`[MCP] Resources dir: ${RESOURCES_DIR}`);
  console.error(`[MCP] Registering ${resources.length} resources...`);

  for (const resource of resources) {
    const name = basename(resource, ".md");
    const uri = `docs://plantuml/${name}`;
    const path = join(RESOURCES_DIR, resource);

    server.registerResource(
      name,
      uri,
      {
        description: `PlantUML documentation: ${name}`,
        mimeType: "text/markdown",
      },
      async () => {
        const text = readFileSync(path, "utf-8");
        console.error(`[MCP] Resource read: ${uri}`);
        console.error(`[MCP] Content length: ${text.length} chars`);
        console.error(`[MCP] Preview: ${text.slice(0, 100)}...`);
        return { contents: [{ uri, mimeType: "text/markdown", text }] };
      },
    );
  }
}
