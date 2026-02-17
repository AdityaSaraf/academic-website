---
title: Timing Games in Responsive Consensus Protocols
id: timing_games
tagline: >
  Timing games are when block proposers intentionally delay their proposals to extract more MEV. While causing some issues on ETH, timing games are much worse with responsive consensus protocols, potentially defeating responsiveness entirely. We introduce a dynamic block reward, with higher rewards going to validators with shorter round durations; these durations are measured by votes from the other validators. We show that proposing early is a Nash equilibrium in this mechanism, and prove some coalition-resistant guarantees. Much of the coalition analysis hinges on the fact that validators want a higher rate of reward, so others delaying hurts them. Thus, our work shows a surprising result: rather than responsiveness being an unattainable property due to timing games, responsiveness itself can promote faster block proposals.
details: |
  Block proposers can extract more MEV by proposing later within their window, as more transactions appear and markets diverge. This gives rise to *timing games*, where block proposers try to wait as long as possible before proposing. On Ethereum, this results in a small number of missed blocks. But in a *responsive* protocol, the round durations are dynamic, with the new round beginning as soon as quorum is achieved on the current block. Timing games are much more problematic here, causing everyone to wait as long as possible to propose, thus defeating responsiveness. 

  We develop a model of timing games that reveals find a prisoner's dilemma structure. Cooperation (proposing promptly) is in the validators' best interest, as the overall system runs faster, increasing their rate of reward. But individual incentives encourage validators to delay proposals selfishly. This motivates our voting approach, as that allows validators to coordinate to reach the better equilibrium. 

  We also analyze latency fairness. Ideally, everyone's average rewards should be directly proportional to their stake. In reality, having lower latency to the rest of the network means you can potentially wait longer, or include more transactions in the same time period. This problem exists even with static block rewards, but does get worse for our dynamic block rewards. However, our analysis of real-world data suggests that the fairness degradation is very small. 
coauthors: "with Kaya Alpturer, Kushal Babel"
tags:
- blockchain
date: "2025-11-15T00:00:00Z"
links:
- name: Arxiv
  url: https://arxiv.org/abs/2510.25144
# url_pdf: /files/bdp.pdf
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'
---
