# Style Guides

## Purpose

This folder defines the canonical style guide architecture for Criterion-related assets.

Use **Style Guide** as the standard term.

Do not use separate terms like brand guidelines, voice guidelines, deck guidelines, or design guidelines unless referring to a specific subsection inside a Style Guide.

## Why Style Guide

Style Guide is the preferred term because these assets are still early and strategic.

A Style Guide can govern:

- Voice and tone
- Message hierarchy
- Visual direction
- Design principles
- Audience posture
- Legal and governance guardrails
- Terms to use and avoid
- Asset-specific conventions

Brand guidelines may become appropriate later when each entity has a mature public brand system. For now, Style Guide is broader, lighter, and more useful across idea decks, landing pages, sales decks, and pitch decks.

## Canonical Rule

Every major asset should reference a Style Guide before it is created or revised.

Style Guides should not become full design systems too early. They should provide enough direction to keep assets consistent without slowing down iteration.

## Style Guide Scope

Each Style Guide should answer:

1. Who is this asset or entity speaking to?
2. What should the audience feel?
3. What should the audience understand?
4. What decision should the asset drive?
5. What terms should be used?
6. What terms should be avoided?
7. What visual posture should the asset have?
8. What legal or governance guardrails apply?
9. Which ontology primitives should the asset reference?

## Current Style Guide Architecture

| Style Guide | Applies To | Status |
|---|---|---|
| `criterion-group.style-guide.md` | Criterion Group Idea Deck and internal system-facing materials | Planned |
| `fetchsignal.style-guide.md` | FetchSignal Landing Page, FetchSignal Sales Deck, and FetchSignal Pitch Deck | Planned |
| `swiftvc.style-guide.md` | SwiftVC Pitch Deck and LP-facing materials | Planned |
| `axiomfoundry.style-guide.md` | Axiom Foundry Sales Deck and Axiom Foundry Pitch Deck | Planned |

## Relationship to Asset System

Assets live under:

`assets/`

Style Guides live under:

`style-guides/`

When an asset is created, its asset README should reference the relevant Style Guide.

Example:

```text
assets/fetchsignal-landing-page/README.md
```

should reference:

```text
style-guides/fetchsignal.style-guide.md
```

## Relationship to Ontology

Style Guides translate ontology into usable execution rules.

Ontology defines what must be true.

Governance defines what must not be broken.

Style Guides define how the work should sound, look, and feel.

## Folder Convention

```text
style-guides/
  README.md
  criterion-group.style-guide.md
  fetchsignal.style-guide.md
  swiftvc.style-guide.md
  axiomfoundry.style-guide.md
```

## Required Sections for Future Style Guides

Each Style Guide should use this template:

```markdown
# <Entity or Asset Group> Style Guide

## Purpose

## Applies To

## Primary Audience

## Desired Audience Reaction

## Voice and Tone

## Message Hierarchy

## Visual Posture

## Terms to Use

## Terms to Avoid

## Legal / Governance Guardrails

## Related Assets

## Related Ontology Primitives
```

## Current Rule for New Work

If a Style Guide does not yet exist, create the Style Guide stub before creating the final asset.

Do not let a deck, landing page, or pitch asset become the de facto style guide by accident.
