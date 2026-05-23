# Operational Handoffs

## Purpose

This directory defines the operational handoffs that move an opportunity through the Criterion ecosystem.

The handoff files should make the operating system executable by specifying:

- trigger
- owner before
- owner after
- required artifact
- evidence required
- decision to be made
- next state
- failure mode

## Canonical Happy Path

```text
Idea Person
-> Fetch Happens C6
-> Fetch Happens C7
-> Positive Signal
-> SwiftVC C6
-> Term Sheet Intent
-> Axiom Foundry C6
-> Dual Signature
-> SwiftVC C7
-> Axiom Foundry C7
-> NewCo Graduation
-> Independent Startup
```

## Required Handoffs

| Handoff | Source | Destination | Required Artifact |
|---|---|---|---|
| Idea Person to Fetch C6 | Idea Person | Fetch Happens | Validation Scope |
| Fetch C7 to SwiftVC C6 | Fetch Happens | SwiftVC | Signal Dossier |
| SwiftVC C6 to Axiom C6 | SwiftVC | Axiom Foundry | Formation Readiness Packet |
| Axiom C6 to Dual Signature | Axiom Foundry | Founder / Idea Person | Joint Offer Packet |
| Dual Signature to Delivery | SwiftVC + Axiom | SwiftVC C7 + Axiom C7 | Investment Docs + Services Agreement |
| Axiom C7 to Independent NewCo | Axiom Foundry | NewCo Leadership | Graduation Packet |

## Handoff Rule

A handoff is not complete until the receiving entity has enough evidence, context, and authority to make the next decision.

## Guardrail

Do not treat motion as progress. A handoff only matters when it changes ownership, state, or decision readiness.
