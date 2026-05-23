# Criterion Core Architecture

## Purpose

Criterion Core is an ontology-first repository for the Criterion Group ecosystem.

The system is designed so that key artifacts do not drift from one another:

- system maps
- simulators
- investor materials
- ecosystem documents
- AI agents
- operating dashboards

## Core Pattern

```text
Ontology files
  ↓
Validation and schemas
  ↓
Renderers
  ↓
Generated artifacts
```

## Source of Truth

The `/ontology` directory is the canonical source of truth.

It defines:

- entities
- audiences
- flows
- economics
- disclosure rules
- thresholds
- metrics

Downstream artifacts should not define business truth independently.

## Major Layers

### 1. Ontology Layer

Canonical YAML definitions.

### 2. Validation Layer

Scripts and schemas that ensure ontology files remain internally coherent.

### 3. Renderer Layer

Code that consumes ontology and produces diagrams, simulators, docs, and reports.

### 4. Generated Layer

Outputs created from the ontology.

### 5. Decision Layer

Decision records explaining why definitions or assumptions changed.

## Operating Rule

When two artifacts disagree, update the ontology first, then regenerate or revise downstream artifacts.
