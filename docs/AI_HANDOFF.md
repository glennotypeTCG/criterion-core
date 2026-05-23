# AI Handoff Document

## Purpose

This repository is intended to become the canonical institutional control plane for the Criterion Group ecosystem.

The repo is ontology-first.

Meaning:
- ontology files define truth
- renderers consume ontology
- documents reconcile back to ontology
- simulators consume economics YAML

## Current State

Implemented:
- ontology registry
- flow registry
- economics assumptions
- disclosure matrix
- glossary
- threshold registry
- integrity checklist
- decision records

Not yet implemented:
- automated validation scripts
- ontology-driven simulator runtime
- ontology-driven map renderer
- generated reports
- CI/CD validation pipeline

## Source Artifacts

The following artifacts are considered upstream conceptual references and should eventually be committed into this repository:

1. criterion-group-system-map.html
2. criterion-group-simulator_2.jsx
3. Criterion Ecosystem Document Map May 2026

## Key Principle

Do not let downstream artifacts become the source of truth.

When conflicts emerge:
1. Update ontology first
2. Regenerate artifacts
3. Record decisions

## Recommended Next Steps

1. Commit source artifacts into `/source-artifacts`
2. Refactor simulator to consume YAML
3. Build ontology validation scripts
4. Auto-generate map from flow registry
5. Introduce CI checks for semantic drift
