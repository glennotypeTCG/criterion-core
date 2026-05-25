# Decision: Add Neural Revenue Architecture as a Cross-Brand Operating Overlay

## Date

2026-05-25

## Status

Accepted

## Context

Criterion Group is not only building companies. It is constantly moving humans through belief, uncertainty, trust, alignment, and commitment.

The ecosystem pitches and engages many audiences:

- internal operators aligning around the Criterion thesis
- Idea Principals evaluating FetchSignal
- respondents engaging through Candid Voices
- founders and operators considering Axiom Foundry
- founders deciding whether to accept SwiftVC capital
- LPs evaluating SwiftVC
- investors evaluating the operating companies of FetchSignal and Axiom Foundry
- employees deciding whether to join the ecosystem
- partners deciding whether to participate

These are not all sales interactions, but they are all human-state transition problems.

Existing brand and style guides govern identity, voice, visual expression, and entity-specific behavior. They do not fully answer when a communication should be persuasive, diagnostic, trust-building, institutional, outcome-oriented, or partnership-oriented.

## Decision

Add Neural Revenue Architecture as a cross-brand operating overlay for Criterion Core.

NRA will govern human-state progression across the ecosystem when artifacts or interactions are intended to move a human from awareness, uncertainty, or skepticism toward trust, alignment, decision, or committed participation.

The canonical invocation rule is:

> Criterion Group should leverage Neural Revenue Architecture anytime it is trying to move a human being from awareness, uncertainty, or skepticism toward trust, alignment, and committed participation.

The internal shorthand is:

> Use NRA whenever human belief, trust, and commitment progression materially impact the outcome.

## Repository Changes

This decision adds:

- `AGENTS.md`
- `ontology/neural-revenue-architecture.yaml`
- `docs/nra-operating-overlay.md`
- `docs/nra-review-checklist.md`

It also updates the README to surface NRA as a canonical operating overlay.

## Candid Voices Placement

Candid Voices is explicitly included as the independent respondent layer underneath FetchSignal.

Candid Voices should govern respondent-facing trust surfaces.

Where FetchSignal and Candid Voices guidance conflict on respondent-facing language, prefer Candid Voices.

## Relationship to Brand Guidelines

NRA does not replace brand guidelines.

It sits above and alongside them.

| System | Job |
|---|---|
| Brand Guidelines | Protect identity coherence |
| Style Guides | Standardize expression |
| Messaging Framework | Standardize strategic positioning |
| NRA | Optimize human-state progression |

Brand decides who is speaking.

NRA decides how that entity should communicate in the current human-state situation.

## Conflict Hierarchy

When systems conflict, use this hierarchy:

1. Legal, compliance, and disclosure rules
2. Human trust and cognitive effectiveness under NRA
3. Strategic positioning and ontology
4. Entity-specific brand guidelines
5. Style consistency and aesthetic preference

## Operational Requirement

Any AI or human contributor producing human-facing artifacts should run the NRA invocation gate.

If NRA materially informs the artifact, include an NRA trace:

```text
NRA trace:
- Audience:
- Current state:
- Desired state transition:
- Mode:
- Phase, if applicable:
- Primary risk:
- NRA rule applied:
```

## Consequences

### Positive

- NRA becomes callable, not merely conceptual.
- AI contributors are reminded to use NRA when relevant.
- Brand guidelines remain intact while human-state effectiveness gets explicit governance.
- Candid Voices is properly positioned under FetchSignal without collapsing respondent trust into startup validation language.
- The repo gains a repeatable review process for ads, landing pages, decks, investor materials, founder materials, recruiting, respondent flows, and onboarding.

### Tradeoffs

- Human-facing work now has an additional review layer.
- Contributors must distinguish brand preference from trust effectiveness.
- Some artifacts may intentionally deviate from style consistency when human-state progression requires it.
- Public claims about neuroscience foundations still require external verification before use in investor/customer-facing materials.

## Non-Goals

This decision does not:

- replace entity-specific style guides
- define visual identity
- prove or validate external scientific claims
- authorize manipulative persuasion
- change legal entity structure
- change SwiftVC economics
- change FetchSignal or Candid Voices data governance

## Review Standard

The overlay is working if future artifacts more consistently answer:

- Who is the human?
- What state are they in?
- What state should they move to?
- What would build trust here?
- What would destroy trust here?
- What can be removed?
- Which entity should be speaking?
