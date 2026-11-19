/**
 * @file developer-agent.ts
 * @description Specialized Developer Agent for code editing, AST parsing, and sandboxed test execution.
 * @module @orchestr-ai/agent/specialized
 */

import { AgentMode } from "@orchestr-ai/shared-types";
import { DEVELOPER_PERSONA_PROMPT } from "@orchestr-ai/prompts";
import { AgentBuilder } from "../builder/agent-builder";
import { AgentDefinition, AGENT_EXECUTION_DEFAULTS } from "@orchestr-ai/core";

/** Configuration options for initializing a DeveloperAgent */
export interface DeveloperAgentOptions {
  readonly name?: string;
  readonly model?: string;
  readonly maxSteps?: number;
}

/**
 * Creates a specialized Developer Agent configured for code generation, refactoring, and sandbox execution.
 *
 * @param options - Developer agent configuration options.
 * @returns Configured AgentDefinition instance.
 */
export function createDeveloperAgent(options?: DeveloperAgentOptions): AgentDefinition {
  const builder = new AgentBuilder()
    .withName(options?.name ?? "Developer Assistant")
    .withDescription(
      "Specialized software engineering agent performing code refactoring, AST inspection, and sandboxed tests.",
    )
    .withMode(AgentMode.ACT)
    .withSystemPrompt(DEVELOPER_PERSONA_PROMPT)
    .withTools(["read_file", "write_file", "list_directory", "bash"])
    .withMaxSteps(options?.maxSteps ?? AGENT_EXECUTION_DEFAULTS.DEFAULT_MAX_STEPS);

  if (options?.model) {
    builder.withModel({
      modelName: options.model,
      temperature: AGENT_EXECUTION_DEFAULTS.DETERMINISTIC_TEMPERATURE,
    });
  } else {
    builder.withModel({
      temperature: AGENT_EXECUTION_DEFAULTS.DETERMINISTIC_TEMPERATURE,
    });
  }

  return builder.build();
}
