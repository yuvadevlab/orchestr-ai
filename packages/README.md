# Packages

Modular internal packages forming the reusable domain core of OrchestrAI.

## Package Catalog

| Package                                         | Responsibility                                           | Inward Dependencies                      |
| ----------------------------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| [`@orchestr-ai/core`](core)                     | Shared contracts, Zod schemas, branded UUIDs, errors     | None (Zero internal deps)                |
| [`@orchestr-ai/regex`](regex)                   | Centralized regular expressions & lexical patterns       | None (Zero internal deps)                |
| [`@orchestr-ai/shared-types`](shared-types)     | Canonical enums, event constants, and system scopes      | `@orchestr-ai/core`                      |
| [`@orchestr-ai/database`](database)             | PostgreSQL 16 Prisma ORM, migrations, pool, pgvector     | `@orchestr-ai/core`                      |
| [`@orchestr-ai/models`](models)                 | Resilient LLM adapters (Ollama), streaming, tokenization | `@orchestr-ai/core`, `shared-types`      |
| [`@orchestr-ai/tools`](tools)                   | Tool execution registry, security sandboxes, path jails  | `@orchestr-ai/core`, `shared-types`      |
| [`@orchestr-ai/agent`](agent)                   | Agent loop, state machine, prompt assembly, loop guards  | `@orchestr-ai/core`, `models`, `tools`   |
| [`@orchestr-ai/runtime`](runtime)               | Directed StateGraph DAG execution, checkpoints, HITL     | `@orchestr-ai/core`, `database`, `agent` |
| [`@orchestr-ai/memory`](memory)                 | 4-tier memory (episodic, fact, preference, task)         | `@orchestr-ai/core`, `database`          |
| [`@orchestr-ai/rag`](rag)                       | Document ingestion, chunking, embeddings, hybrid search  | `@orchestr-ai/core`, `database`          |
| [`@orchestr-ai/semantic-cache`](semantic-cache) | Cosine similarity vector caching & zero-latency SSE      | `@orchestr-ai/core`, `database`          |
| [`@orchestr-ai/model-router`](model-router)     | Real-time empirical latency tracking & routing           | `@orchestr-ai/core`, `database`          |
| [`@orchestr-ai/eval`](eval)                     | Automated quality gates, output scoring & throughput     | `@orchestr-ai/core`, `events`            |
| [`@orchestr-ai/prompts`](prompts)               | Canonical specialist personas & composite prompts        | `@orchestr-ai/core`, `shared-types`      |
| [`@orchestr-ai/billing`](billing)               | Token counting, per-turn budget gates, cost ledger       | `@orchestr-ai/core`, `database`          |
| [`@orchestr-ai/resilience`](resilience)         | Circuit breakers, retries, timeouts, bulkheads           | `@orchestr-ai/core`                      |
| [`@orchestr-ai/events`](events)                 | Domain event publisher, event bus, outbox pattern        | `@orchestr-ai/core`, `database`          |
| [`@orchestr-ai/queue`](queue)                   | BullMQ job producers, priority queues, backpressure      | `@orchestr-ai/core`                      |
| [`@orchestr-ai/grpc`](grpc)                     | Protobuf RPC contracts and gRPC client/service layer     | `@orchestr-ai/core`, `shared-types`      |
| [`@orchestr-ai/observability`](observability)   | OpenTelemetry tracing, structured JSON logging, metrics  | `@orchestr-ai/core`                      |
| [`@orchestr-ai/sdk`](sdk)                       | Client SDK for external integrations and HTTP streaming  | `@orchestr-ai/core`, `shared-types`      |

## Dependency Rules

1. `@orchestr-ai/core` is the absolute source of truth with ZERO workspace dependencies.
2. Inward dependency rule: `apps/*` ──▶ `packages/*` ──▶ `@orchestr-ai/core`.
3. Circular dependencies between packages are strictly forbidden.
