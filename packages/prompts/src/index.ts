/**
 * @file packages/prompts/src/index.ts
 * @description Public entrypoint for `@orchestr-ai/prompts`.
 *
 * ─── Package Invariant ─────────────────────────────────────────────
 * This package is the centralized repository for prompt templates, system instructions,
 * and specialist personas. It has zero external dependencies beyond `@orchestr-ai/shared-types`.
 * ───────────────────────────────────────────────────────────────────
 * @module @orchestr-ai/prompts
 */

export * from "./system";
export * from "./personas";
export * from "./templates";
