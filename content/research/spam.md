---
title: Curbing Spam Transactions with Priority Fee Ordering
id: spam
tagline: >
  Many Ethereum L2s, such as Base or Solana, have a high volume of "speculative backrunning" transactions, that search for and exploit arbitrage dynamically (on-chain). These transactions are sometimes considered *spam*, as vast majority fail to find any arbitrage, but still waste a lot of gas on searching. And [some](https://writings.flashbots.net/mev-and-the-limits-of-scaling) believe that this represents a *barrier to scaling*; as block capacity grows, more of it will go to spammers, leaving less for other users. 
  
  We develop a formal model that computes the expected spam volume given other parameters, such as user demand and block capacity. We find evidence to that spam limits scaling, by lowering user welfare by a constant fraction, even as demand and capacity increase. We then show that *priority fee ordering*, as opposed to first-come first-serve sequencing, could dramatically lower the expected spam volume, preserving high user welfare.
# details: |
#   placeholder
coauthors: "with Wenhao Wang, Fan Zhang, Kushal Babel, and Lioba Heimbach"
tags:
- blockchain
date: "2026-02-01T00:00:00Z"
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
