---
title: "Trial and Error for Graph Properties"
authors:
- admin
- "Thomas Schneider"
- "Aarthi Sundaram"
date: "2018-09-01T00:00:00Z"
doi: ""

# # Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Preprint"
publication_short: ""

abstract: >
 In recent work, Bei, Chen and Zhang (STOC 2013) developed a trial and error model of computing with applications towards constraint satisfaction problems. In this model, an oracle hides the input and reveals some information about a violated constraint when given an unsatisfying assignment. For this paper, we consider an oracle that reveals the index of the lexicographically-first violated constraint. We model the problem of finding a certificate for a monotone graph property as a CSP and generalize this problem to certificate extension, the problem of extending a given subset of edges to a full certificate (a minimal subgraph with the property) if possible. We show a polynomial equivalence between certificate finding in graphs hidden by our "Lex-first" oracle and certificate extension in the unhidden context. We consider the complexity of "Fixed Size" certificate extensions, where the edge subset is of a limited size and show that certificate extension becomes harder with larger sizes. Finally, we use matroids to partially classify which monotone graph properties are extensible in polynomial time. These properties are easy in the hidden context, but our work in certificate extension is divorced from the hidden context and so may be of independent interest.

# Summary. An optional shortened abstract.
# summary: We augment an existing model of present bias with a competitive element. We show that competition, and a small amount of reward, can alleviate the substantial harms of present bias in various settings.

tags:
- Theoretical CS

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

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- hidden_graph

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---