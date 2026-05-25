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
- human-state progression rules

System maps, simulators, LP documents, onboarding flows, dashboards, brand/style guides, communication artifacts, and future AI agents should reconcile back to these files.

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
├── style-guides/
├── renderers/
└── generated/
```

## Canonical Operating Overlays

### Neural Revenue Architecture

Neural Revenue Architecture is the cross-brand human-state progression overlay for Criterion Group.

Use it whenever Criterion is trying to move a human being from awareness, uncertainty, or skepticism toward trust, alignment, and committed participation.

Primary files:

- `AGENTS.md`
- `ontology/neural-revenue-architecture.yaml`
- `docs/nra-operating-overlay.md`
- `docs/nra-review-checklist.md`
- `decisions/2026-05-25-add-nra-operating-overlay.md`

NRA sits alongside entity-specific brand and style guides. Brand determines who is speaking. NRA determines how that entity should communicate in the current human-state situation.

Current entity stack:

- Criterion Group: ecosystem coherence layer
- FetchSignal: market signal engine for Idea Principals
- Candid Voices: independent respondent trust layer underneath FetchSignal
- Axiom Foundry: company formation layer
- SwiftVC: embedded first-check capital layer

## Current Upstream Artifacts

- criterion-group-system-map.html
- criterion-group-simulator_2.jsx
- criterion-ecosystem-document-map-may-2026.md
- Neural Revenue Architecture source materials
- Criterion Group investment narrative and base economics

## Operating Discipline

When artifacts disagree:
1. Update ontology first.
2. Regenerate downstream artifacts.
3. Record material changes in `/decisions`.

When human-facing artifacts are being created or edited:
1. Run the NRA invocation gate.
2. Identify the audience state and desired state transition.
3. Apply the relevant entity style guide.
4. Preserve the conflict hierarchy: legal/disclosure → trust and cognitive effectiveness → ontology/positioning → brand → style.
5. Include an NRA trace when NRA materially shaped the recommendation.

## Current Focus

- Align simulator runtime with ontology YAML
- Build executable validation
- Reduce semantic drift across artifacts
- Formalize institutional operating vocabulary
- Build ontology-driven renderers
- Make NRA callable by humans and AI agents during artifact creation
- Keep Candid Voices distinct as the respondent-facing trust layer underneath FetchSignal

Schema version: 0.1.0