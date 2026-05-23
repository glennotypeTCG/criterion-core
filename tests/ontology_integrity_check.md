# Ontology Integrity Checklist

## Purpose

Validate coherence across ontology, flows, economics, disclosure rules, glossary, simulator assumptions, and future renderers.

## Structural Checks

- [ ] Every flow source exists in `criterion_ontology.yaml`
- [ ] Every flow destination exists in `criterion_ontology.yaml`
- [ ] Every audience disclosure rule references a real audience
- [ ] Every metric references defined terms
- [ ] Every threshold owner exists in ontology
- [ ] Naming conventions are consistent

## Alignment Checks

- [ ] System map nodes align with ontology entities
- [ ] Simulator assumptions align with economics YAML
- [ ] Ecosystem document terminology aligns with glossary
- [ ] Disclosure assumptions align with disclosure YAML

## Drift Checks

- [ ] No duplicate definitions across files
- [ ] No conflicting terminology
- [ ] No undefined metrics
- [ ] No orphan entities

## Human Credibility Checks

- [ ] LP narrative feels coherent
- [ ] Founder journey feels believable
- [ ] Disclosure model feels intentional
- [ ] Economic model appears internally consistent
