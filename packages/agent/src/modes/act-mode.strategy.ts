/**
 * @file packages/agent/src/modes/act-mode.strategy.ts
 * @description Strategy implementation for autonomous action-focused ACT mode.
 */

import { AgentMode } from "@orchestr-ai/shared-types";
import { ACT_MODE_SYSTEM_PROMPT } from "@orchestr-ai/prompts";
import type { ITool } from "@orchestr-ai/tools";
import type { IModeStrategy } from "./mode-strategy.interface";

/**
 * Strategy governing autonomous ACT mode.
 * Prioritizes direct tool execution with minimal conversational overhead.
 */
export class ActModeStrategy implements IModeStrategy {
  public readonly mode = AgentMode.ACT;

  /**
   * Returns canonical system guidance for ACT mode from @orchestr-ai/prompts.
   */
  public getSystemInstructions(): string {
    return ACT_MODE_SYSTEM_PROMPT;
  }

  /**
   * All authorized tools are accessible in ACT mode.
   */
  public filterTools(tools: readonly ITool[]): ITool[] {
    return [...tools];
  }

  /**
   * Terminates when the agent has completed all tool calls and returns final text.
   */
  public shouldTerminate(hasToolCalls: boolean): boolean {
    return !hasToolCalls;
  }
}
