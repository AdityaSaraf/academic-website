---
title: Trial and Error for Hidden Graph Properties
id: hidden_graph
tagline: >
 We investigate a novel property testing setting, where access to a graph is *hidden* by an oracle. In this setting, some graphs can never be fully learned, even with infinite queries. Despite this, some properties *are* efficiently certifiable; we provide a reduction to the standard setting and use matroids to form sufficient conditions for which properties are efficiently certifiable in this hidden setting.
details: |
  In the standard property testing setting, researchers are interested in *sublinear* algorithms, since one can trivially learn the full input in linear time. In our setting, we fix the number of vertices and consider properties which are *monotone increasing* (in the number of edges), such as connectivity. Such properties are are fully defined by their *certificates*, minimal subgraphs which have the property (e.g. spanning trees for connectivity). While the number of vertices is known, the graph must be accessed through an oracle, which replies to potential certificates with the lexicographically first edge that doesn't exist in the graph (or $\text{SAT}$ if the certificate is valid). The algorithm must proceed in a *trial-and-error* fashion, guessing certificates and getting a small amount of information with each query. However, because of the lex-first nature of the oracle, there are examples where one cannot fully learn the graph, even with infinite queries.

  We develop a transfer theorem for this setting, by providing a poly-time reduction to the problem of certificate *extension* (in the non-hidden setting), which asks if one can extend a set of edges to a valid certificate. This problem is easy for some properties (connectivity) but NP-Hard for others (directed path). We provide some sufficient conditions for which properties are efficiently extensible by looking at whether the certificates form the bases of a matroid.
coauthors: "with Aarthi Sundaram"
tags:
- tcs
date: "2019-01-01T00:00:00Z"
links:
# - name: Custom Link
#   url: http://example.org
url_pdf: /files/hidden_graph.pdf
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'
---
