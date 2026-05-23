# Criterion Core

Criterion Core is the canonical source-of-truth repository for The Criterion Group ecosystem.

The purpose of this repo is to keep the system map, simulator, ecosystem documents, investor narratives, and future AI agents aligned against one shared ontology.

## Operating Principle

Do not let rendered artifacts become the source of truth.

The YAML files in `/ontology` define the canonical entities, flows, economics, disclosure rules, and metrics. Everything else should render from, reference, or reconcile back to those files.

## Repository Structure

```text
criterion-core/
├── ontology/      # Canonical machine-readable institutional truth
├── decisions/     # Human-readable decision records and rationale
├── renderers/     # Apps, scripts, and templates that consume the ontology
└── generated/     # Rendered outputs produced from the ontology
```

## Alignment Rule

When the system map, simulator, or ecosystem document disagree, update the ontology first, then regenerate or revise the artifact.

## Current Status

Schema version: `0.1.0`

This is the initial scaffold. The next step is to extract assumptions from:

1. `criterion-group-system-map.html`
2. `criterion-group-simulator_2.jsx`
3. `Criterion Ecosystem Document Map May 2026`
