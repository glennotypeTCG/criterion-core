# Contributing Guidelines

## Core Rule

Ontology files are the source of truth.

Do not update simulators, maps, or documents without reconciling ontology changes first.

## Workflow

1. Read open issues.
2. Select highest-priority unblocked work.
3. Update ontology if business semantics change.
4. Update downstream artifacts.
5. Record major changes in `/decisions`.
6. Update checklist items.

## Naming Rules

- IDs use snake_case
- Labels use title case
- Metrics use descriptive canonical names
- Avoid duplicate terminology

## Preferred Contribution Areas

- ontology refinement
- validation tooling
- renderer tooling
- reconciliation systems
- documentation
- CI validation

## Avoid

- hard-coded business assumptions in renderers
- duplicate entity definitions
- inconsistent terminology
- direct edits to generated artifacts
