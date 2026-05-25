# Repository Agent Instructions

This repository is the canonical institutional source of truth for the Criterion Group ecosystem.

Every AI agent, coding agent, writing agent, and human-assisted repo workflow should treat these instructions as the first operating layer before creating or editing artifacts.

## Core Operating Rule

Criterion Core is ontology-first.

When an artifact, deck, page, memo, simulator, or style guide conflicts with the ontology, update the ontology first and then regenerate or revise the downstream artifact.

## Mandatory NRA Invocation Gate

Invoke Neural Revenue Architecture whenever the work product is intended to move a human being from awareness, uncertainty, skepticism, or passive interest toward trust, alignment, decision, or committed participation.

This includes, but is not limited to:

- ads
- landing pages
- homepages
- pitch decks
- LP materials
- sales decks
- founder recruitment materials
- employee recruiting materials
- investor updates
- founder onboarding
- respondent invitations
- proposal language
- email sequences
- call scripts
- social posts
- event copy
- product narratives
- internal alignment memos where belief or commitment matters

Do not invoke NRA for purely mechanical edits where human-state progression is irrelevant, such as typo fixes, schema formatting, data normalization, or non-communicative file maintenance.

## Required NRA Trace

When NRA materially informs a recommendation or artifact, include a short trace in the response, PR body, or artifact notes.

Use this format:

```text
NRA trace:
- Audience:
- Current state:
- Desired state transition:
- Mode: Evaluation / Transition / Trust / Institutional / Outcome / Partnership
- Phase, if applicable:
- Primary risk:
- NRA rule applied:
```

If NRA was considered but not used, state why in one sentence.

## What NRA Decides

NRA governs human-state progression.

It should influence:

- audience-state diagnosis
- Evaluation Mode vs Trust Mode behavior
- cognitive load
- narrative sequencing
- information density
- CTA structure
- persuasion boundaries
- trust architecture
- phase-appropriate deliverables
- when to use clarity tools such as Heard Document, One-Page Situation Frame, Decision Matrix, Mutual Action Plan, Assumption Register, and Pre-Meeting Agenda

NRA does not decide:

- logo usage
- typography rules
- color palettes
- asset naming
- file structure
- legal entity structure
- economics
- factual claims unsupported by source artifacts

## Conflict Hierarchy

When systems conflict, use this hierarchy:

1. Legal, compliance, and disclosure rules
2. Human trust and cognitive effectiveness under NRA
3. Strategic positioning and ontology
4. Entity-specific brand guidelines
5. Style consistency and aesthetic preference

A perfectly on-brand artifact that destroys trust is a failed artifact.

A slightly off-style artifact that preserves trust, clarity, and phase-appropriate progression may be correct, but the deviation should be documented.

## Brand and Entity Relationship

NRA is a cross-brand operating overlay.

Entity-specific style guides still govern identity, voice, visuals, and persistent brand behavior.

NRA governs how the entity should communicate in a specific human-state situation.

Current entity stack:

- Criterion Group: system coherence layer
- FetchSignal: market signal engine for Idea Principals
- Candid Voices: independent respondent trust layer underneath FetchSignal
- Axiom Foundry: company formation layer
- SwiftVC: embedded first-check capital layer

Candid Voices should generally govern respondent-facing surfaces. If FetchSignal and Candid Voices guidance conflict on respondent-facing language, prefer Candid Voices.

## Default Questions Before Creating a Human-Facing Artifact

Ask these silently before drafting:

1. Who is the human?
2. What do they already believe?
3. What are they uncertain or skeptical about?
4. What state transition are we trying to create?
5. Are they in Evaluation Mode or Trust Mode?
6. What would increase trust here?
7. What would destroy trust here?
8. What can be removed to reduce cognitive load?
9. Is the ask earned?
10. Which Criterion entity should be speaking?

## Files to Consult

Primary NRA files:

- `ontology/neural-revenue-architecture.yaml`
- `docs/nra-operating-overlay.md`
- `docs/nra-review-checklist.md`

Related style guides:

- `style-guides/fetchsignal.style-guide.md`
- `style-guides/candid-voices.style-guide.md`

Decision record:

- `decisions/2026-05-25-add-nra-operating-overlay.md`

## Practical Standard

Do not merely make artifacts sound better.

Make them phase-appropriate, trust-preserving, cognitively lighter, and more likely to move the right human to the right next state.
