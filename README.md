# Criterion Core

Criterion Core is the canonical institutional repository for the Criterion Group ecosystem.

The ontology files inside `/ontology` define the source of truth for:
- entities
- flows
- economics
- disclosure rules
- metrics

System maps, simulators, LP documents, onboarding flows, dashboards, and future AI agents should reconcile back to these files.

## Repository Structure

```text
criterion-core/
├── ontology/
├── decisions/
├── renderers/
└── generated/
```

## Operating Discipline

When artifacts disagree:
1. Update the ontology first.
2. Regenerate downstream artifacts.
3. Record material changes in `/decisions`.

## Current Focus

- Align system map with ontology
- Align simulator assumptions with economics YAML
- Build formal institutional vocabulary
- Reduce semantic drift across artifacts

Schema version: 0.1.0
