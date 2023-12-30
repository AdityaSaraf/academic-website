---
title: Chunking Tasks for Present-Biased Agents
id: pb2
tagline: >
 A well known technique that instructors use to combat procrastination is to break up a large project into more manageable chunks. But how should this be done best? We formalize chunking within an existing model of present bias for task completion, derive algorithms for optimal chunking, and prove that a relatively small amount of chunking can ensure that biased agents behave optimally. 
details: |
  We build on a model originally proposed by Jon Kleinberg and Sigal Oren [[KO14]](https://arxiv.org/abs/1405.1254). In their model, tasks are represented by directed, acyclic graphs with designated start node $s$ and end node $t$. The agent traverses a shortest $s\to t$ path with one twist: when the evaluating the cost of a path, they multiply the cost of the first edge by their bias parameter, $b$. They traverse the first step of this biased path, and then *recompute* the best path. Existing results show that these biased agents can take *exponentially* more costly paths through a given graph.

  In our model, the task designer can chunk edges into smaller pieces. We show that, for edges along the shortest path, the optimal way to chunk an edge is to make initial pieces easier and later pieces progressively harder. For edges not along the shortest path, optimal chunking is significantly more complex, but we provide an efficient algorithm. We also show that with a linear number of chunks on each edge, the biased agent's cost can be exponentially lowered to within a constant factor of the true cheapest path. Finally, we show how to optimally chunk task graphs for multiple types of agents simultaneously.
coauthors: "with Joe Halpern"
publication: Published in *EC'23*
tags:
- tcs
date: "2022-06-27T00:00:00Z"
links:
- name: Arxiv
  url: https://arxiv.org/abs/2309.13244
url_slides: /files/chunking_slides.pdf
---
