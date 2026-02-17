---
title: Throughput vs. Censorship with Multiple (Rational) Concurrent Proposers
id: mcp_cr
tagline: >
  Standard blockchain consensus protocols have a single proposer for each round. In their round, this proposer has a monopoly on block production; they alone can decide which transactions are included. Thus, this "monopolist" can easily censor transactions, either for their own preferences, or because they were bribed. For this reason, many blockchains are considering protocols with multiple concurrent proposers (MCP). This allows many proposers to build a single block, by having each construct a sub-block separately and then taking the union to form the main block.

  We formalize a notion of *economic censorship resistance* (eCR), and show that MCP can significantly increase the eCR as compared to a single proposer. However, with MCP, proposers can submit the same transaction, which decreases the overall throughput. We design an algorithm to compute an equilibrium for the block-building and censorship process with MCP, and use it to evaluate the throughput vs eCR tradeoffs, given a variety of different transaction fee mechanisms.
# details: |
#   placeholder
coauthors: "with Ioannis Kaklamanis, Fatima Elsheimy, Sarisht Wadhwa, and Fan Zhang"
tags:
- blockchain
date: "2026-02-15T00:00:00Z"
links:
# - name: Arxiv
#   url: https://arxiv.org/abs/2601.00523
# url_pdf: /files/bdp.pdf
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'
---
