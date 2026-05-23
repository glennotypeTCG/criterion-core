# ADR-0001: Criterion Core Is the Operating System Source of Truth

## Status

Accepted

## Context

Criterion Group is separating its ecosystem into five controlled systems:

1. Brand System
2. Ontology System
3. Governance System
4. Economic System
5. Operational System

Rendered materials such as decks, memos, diagrams, dashboards, investor narratives, and sales collateral are useful outputs, but they should not become the source of truth.

## Decision

Criterion Core is the canonical source-of-truth repository for the Criterion Operating System.

The repo should define the structured operating model first. Human-facing and audience-specific materials should either be generated from, checked against, or reconciled back to the source files in this repository.

## Implications

- Ontology files define canonical entities, relationships, states, metrics, and artifacts.
- Governance files define decision rights, evidence standards, greenlights, and guardrails.
- Economic files define public-safe economic structures and variables.
- Operational files define handoffs, workflows, playbooks, and templates.
- Brand files translate the operating truth for different audiences without inventing separate stories.

## Operating Rule

If an artifact disagrees with the repo, update the repo first or explicitly document why the artifact is intentionally different.

## Non-Goals

This repo should not store confidential LP information, private cap tables, live deal terms, raw customer interview transcripts, founder personal data, or non-public portfolio performance unless repo visibility and access controls are changed accordingly.
