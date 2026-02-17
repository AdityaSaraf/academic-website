---
title: "The CoinAlg Bind: Profitability-Fairness Tradeoffs in Collective Investment Algorithms"
id: coinalg
tagline: >
  We investigate trading bots or other collective investment strategies, and show that such systems face a fundamental dilemna: they can either guarantee economic fairness, by ensuring that the system is transparent, or profitability, but not both.
details: |
  Collective Investment Algorithms (CoinAlgs) are increasingly popular systems that deploy shared trading strategies for investor communities. Their goal is to democratize sophisticated -- often AI-based -- investing tools. We identify and demonstrate a fundamental profitability-fairness tradeoff in CoinAlgs that we call the CoinAlg Bind: CoinAlgs cannot ensure economic fairness without losing profit to arbitrage. We present a formal model of CoinAlgs, with definitions of privacy (incomplete algorithm disclosure) and economic fairness (value extraction by an adversarial insider). 
  
  We prove two complementary results that together demonstrate the CoinAlg Bind. First, privacy in a CoinAlg is a precondition for insider attacks on economic fairness. Conversely, in a game-theoretic model, lack of privacy, i.e., transparency, enables arbitrageurs to erode the profitability of a CoinAlg. Using data from Uniswap, a decentralized exchange, we empirically study both sides of the CoinAlg Bind. We quantify the impact of arbitrage against transparent CoinAlgs. We show the risks posed by a private CoinAlg: even low-bandwidth covert-channel information leakage enables unfair value extraction.
coauthors: "with Andrés Fábrega, James Austgen, Samuel Breckenridge, Jay Yu, Amy Zhao, Sarah Allen, and Ari Juels"
tags:
- blockchain
date: "2026-01-15T00:00:00Z"
links:
- name: Arxiv
  url: https://arxiv.org/abs/2601.00523
# url_pdf: /files/bdp.pdf
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'
---
