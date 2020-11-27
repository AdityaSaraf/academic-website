---
title: Privacy for Correlated Data
id: privacy
tagline: >
 Differential privacy (DP) is the gold standard for provable database privacy guarantees. In this work, we investigate a stronger privacy definition, *Bayesian* differential privacy (BDP), which is necessary for correlated data. We provide optimal mechanisms for BDP when data correlations can be modeled by a Markov chain.
details: |
  Though DP is a popular choice is many settings, we argue that DP either does not apply or provides insufficient guarantees when the database is correlated (and this correlation structure is easily inferrable). Unfortunately, databases almost always store correlated data (examples include location data, medical data, power grids, social networks, etc.), *and* the correlation models are often easily learned from historical data, and so should be assumed to be public knowledge. We thus investigate a stronger notion of privacy, BDP, which offers strong guarantees even when adversaries know the correlation structure.

  We provide optimal mechanisms (in terms of noise-privacy tradeoffs) for achieving BDP with Markov chain data. Our mechanism is *non-interactive*, since it outputs a sanitized database, and *local*, since it doesn't require a centralized data curator. We also experiment on real world heart rate data, demonstrating that our mechanism is robust to somewhat varying correlation models.
coauthors: "with Grant Schoenebeck, Jie Gao, and Fang-Yi Yu"
tags:
- tcs
date: "2020-06-01T00:00:00Z"
links:
# - name: Custom Link
#   url: http://example.org
url_pdf: /files/bdp.pdf
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'
---
