# Criterion Core

Criterion Core is the canonical institutional repository for the Criterion Group ecosystem.

The repository is ontology-first.

Ontology files define the institutional source of truth for:
- entities
- audiences
- flows
- economics
- disclosure rules
- thresholds
- metrics
- aliases
- portfolio dynamics

System maps, simulators, LP documents, onboarding flows, dashboards, and future AI agents should reconcile back to these files.

## Repository Structure

```text
criterion-core/
├── ontology/
├── glossary/
├── docs/
├── decisions/
├── tests/
├── source-artifacts/
├── brand-guidelines/
├── renderers/
└── generated/
```

## Current Upstream Artifacts

- criterion-group-system-map.html
- criterion-group-simulator_2.jsx
- criterion-ecosystem-document-map-may-2026.md

## Operating Discipline

When artifacts disagree:
1. Update ontology first.
2. Regenerate downstream artifacts.
3. Record material changes in `/decisions`.

## Current Focus

- Align simulator runtime with ontology YAML
- Build executable validation
- Reduce semantic drift across artifacts
- Formalize institutional operating vocabulary
- Build ontology-driven renderers

Schema version: 0.1.0
