---
title: Present Bias in Competitive Task Completion
id: pb
tagline: >
 Can competition eliminate the harms of procrastination? We augment an existing model of present bias in task completion with a unique competitive twist, and find that a small amount of competition alleviates the significant harms of procrastination.
details: |
  We build on a model originally proposed by Jon Kleinberg and Sigal Oren [[KO14]](https://arxiv.org/abs/1405.1254). In their model, tasks are represented by directed, acyclic graphs with designated start node $s$ and end node $t$. The agent traverses a shortest $s\to t$ path with one twist: when the evaluating the cost of a path, they multiple the cost of the first edge by their bias parameter, $b$. They traverse the first step of this biased path, and then *recompute* the best path. Existing results show that these biased agents can take *exponentially* more costly paths through a given graph.

  We augment this model by having two agents compete to finish the task first, with the winner getting a reward. We show that, for any graph, a very small amount of reward convinces biased agents to behave optimally, even when their natural behavior would have exponentially high cost. The amount of reward needed to guarantee optimal behavior with competition is also significantly less (in general) than several non-competitive reward schemes in the existing literature.
coauthors: "with Anna Karlin and Jamie Morgenstern"
publication: Published in *WINE'20*
tags:
- tcs
date: "2020-06-27T00:00:00Z"
links:
- name: Arxiv
  url: https://arxiv.org/abs/2009.13741
url_pdf: /files/pb_comp.pdf
url_slides: /files/pb_slides.pdf
---
