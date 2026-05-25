# Asset System

## Purpose

This folder defines the working asset stack for Criterion-related work.

Use it so Glenn, Frank, Anne, and future collaborators can stay aligned on:

- What each asset is called
- Who it is for
- What decision it is meant to drive
- What it should and should not include
- Where the source-of-truth content lives once created

## Naming Rule

Minimize asset types.

Use only these public working labels unless there is a specific reason to add another:

1. **Idea Deck**
2. **Landing Page**
3. **Sales Deck**
4. **Pitch Deck**

## Asset Types

| Asset Type | Purpose | Typical Audience |
|---|---|---|
| Idea Deck | Explain an early system, thesis, or concept before it is a direct sales or investment offer. | Internal collaborators, advisors, early strategic partners |
| Landing Page | Create first public/customer conversion. | Prospective customers or users |
| Sales Deck | Convert an interested customer or partner after initial engagement. | Prospective customers, founders, Idea Principals, service buyers |
| Pitch Deck | Raise capital or invite investment diligence. | LPs, OpCo investors, angels, strategic investors |

## Current Asset Stack

| # | Asset Name | Asset Type | Primary Audience | Decision It Drives | Build Priority | Status |
|---:|---|---|---|---|---:|---|
| 1 | Criterion Group Idea Deck | Idea Deck | Frank, Anne, close collaborators, strategic insiders | Do we understand what Glenn is building and how the pieces fit? | 1 | Not started |
| 2 | FetchSignal Landing Page | Landing Page | Idea Principals / pre-founders | Do I trust this enough to take the first step? | 2 | Not started |
| 3 | FetchSignal Sales Deck | Sales Deck | Interested Idea Principals after landing page or intro call | Will I pay for the FetchSignal process? | 3 | Not started |
| 4 | SwiftVC Pitch Deck | Pitch Deck | LPs / fund investors | Will I commit capital or request deeper diligence? | 4 | Not started |
| 5 | FetchSignal Pitch Deck | Pitch Deck | Angels, strategic investors, or internal self-underwriting | Is FetchSignal a standalone operating business worth capitalizing? | 5 | Future / optional |
| 6 | Axiom Foundry Sales Deck | Sales Deck | Positive-signal Idea Principals / NewCos | Will I accept structured formation support? | 6 | Future / outline only |
| 7 | Axiom Foundry Pitch Deck | Pitch Deck | Investors into Axiom Foundry operating company | Is Axiom a scalable formation business worth capitalizing? | 7 | Future / optional |

## Canonical Asset Sentence

> We are building a small set of distinct assets, not one master deck: a Criterion Group Idea Deck to explain the system, a FetchSignal landing page and sales deck to acquire customers, a SwiftVC Pitch Deck to raise fund capital, and later Pitch Decks for FetchSignal and Axiom Foundry if we choose to capitalize those operating businesses directly.

## Strategic Rule

Criterion Group explains the system.

FetchSignal sells trusted signal.

SwiftVC raises aligned capital.

Axiom Foundry sells disciplined formation.

FetchSignal and Axiom Foundry may each eventually need Pitch Decks if they are capitalized directly.

## What Not to Confuse

- Do not use the Criterion Group Idea Deck as a public customer pitch.
- Do not use the FetchSignal Landing Page to imply guaranteed SwiftVC funding.
- Do not use the FetchSignal Sales Deck to sell the broader Criterion architecture.
- Do not use the SwiftVC Pitch Deck to sell FetchSignal customers.
- Do not use the Axiom Foundry Sales Deck to imply Axiom controls the company.
- Do not use OpCo Pitch Decks to blur investment into an operating company with investment into SwiftVC or a NewCo.

## Folder Convention

When assets are created, store or reference them using this pattern:

```text
assets/
  criterion-group-idea-deck/
  fetchsignal-landing-page/
  fetchsignal-sales-deck/
  swiftvc-pitch-deck/
  fetchsignal-pitch-deck/
  axiomfoundry-sales-deck/
  axiomfoundry-pitch-deck/
```

Each asset folder should contain a `README.md` with:

- Asset name
- Asset type
- Audience
- Decision it drives
- Current status
- Source-of-truth link or file
- Related ontology primitives
- Messaging guardrails
