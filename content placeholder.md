Hello and welcome to my portfolio. I am currently a Research Scientist in Computer Science and Engineering at the University of Washington, hosted by [Anna Karlin](https://homes.cs.washington.edu/~karlin/). I recently completed my M.S. in Computer Science under Anna's supervision as well.

My primary research interests lie in the intersection of economics and computer science. I enjoy creating compelling and realistic mathematical models of behavior, and rigorously investigating the outcomes of these models. My Master's thesis formally modelled how agents might procrastinate when faced with a difficult task, and used competition to alleviate the harms of procrastination. I'm also broadly interested in theoretical computer science. I've recently worked on mechanisms for *Bayesian* differential privacy, a stronger version of the well-studied differential privacy that better protects correlated data. I have also investigated a unique property testing setting for graph properties, where the input graph was *hidden* by an oracle. Some graph properties are efficiently certifiable in this setting; we provided a partial classification. In the past, I've done research in Tech Policy/HCI and Natural Language Processing.

In addition to my CS interests, I'm also interested in Epistemology and Philosophy of Statistics. I've studied to what extent logic should be normative for reasoning (that is, to what extent rational agents are *obligated* to form beliefs according to logical laws). And I'm currently designing a new, *Collectivist* theory of statistical evidence that is compatible with weak, qualitative requirements on rationality. 

Title: Present Bias in Competitive Task Completion

coauthors: with Anna Karlin and Jamie Morgenstern

Can competition eliminate the harms of procrastination? We augment an existing model of present bias in task completion with a unique competitive twist, and find that a small amount of competition alleviates the significant harms of procrastination.

We study a model of *present bias* (the tendency to prefer short term gains) in task completion, which is modelled by graph traversals.  Existing research shows that procrastination can come at a significant cost: biased agents can take *exponentially* more costly paths through a given graph. We augment this model by having two agents compete to finish the task first, with the winner getting a reward. We show that, for any graph, a *constant* amount of reward convinces biased agents to behave optimally, even when their natural behavior would have exponentially higher cost. The amount of reward needed to guarantee optimal behavior with competition is also significantly less (in general) than several non-competitive reward schemes in the existing literature.

We build on a model originally proposed by Jon Kleinberg and Sigal Oren [KO14](https://arxiv.org/abs/1405.1254). In their model, tasks are represented by directed, acyclic graphs with designated start node $s$ and 

