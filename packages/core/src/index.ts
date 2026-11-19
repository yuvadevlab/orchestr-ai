/**
 * @file packages/core/src/index.ts
 * @description Main entry point for `@orchestr-ai/core`.
 * Exports shared domain contracts, Zod schemas, lifecycle events, and core interfaces.
 *
 * Package Invariant:
 * `@orchestr-ai/core` is strictly isolated and maintains ZERO internal workspace dependencies.
 */

// Re-export universal types and enums from shared-types
export * from "@orchestr-ai/shared-types";

// Domain Modules
export * from "./identifiers";
export * from "./errors";
export * from "./agents";
export * from "./executions";
export * from "./messages";
export * from "./models";
export * from "./tools";
export * from "./events";
export * from "./streaming";
export * from "./constants";
export * from "./ports";
export * from "./cqrs";
