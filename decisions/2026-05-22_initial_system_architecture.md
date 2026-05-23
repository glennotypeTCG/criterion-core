# Initial System Architecture

## Decision

Criterion Group will maintain a canonical ontology repository.

The ontology layer becomes the institutional source of truth.

Rendered artifacts such as:
- system maps
- simulators
- LP documents
- onboarding flows
- AI agents
- dashboards

must reconcile back to the ontology.

## Rationale

Without a canonical ontology, semantic drift occurs between:
- economic assumptions
- visual representations
- governance language
- operational definitions

## Implication

All future architecture changes should be made to ontology files first.
