---
title: Pricing Crypto Lending Pools with Options
id: crypto
tagline: >
 Cryptocurrency lending pools offer overcollaterized loans with one cryptocurrency held as collateral and a different currency given out as a loan. Because they are overcollaterized, they do not increase the borrower's liquidity, and so should not be compared to standard loans. Rather, lending pools allow borrowers to increase their exposure to a particular currency, just as options allow investors to increase their exposure in the standard financial world. As a result, we build models to price the interest rates and other parameters of lending pools by replicating them as options, and using ideas from options pricing. 
details: |
  Lending pool loans are overcollaterized, and if the value of the collateral dips too low, the entire loan is liquidated: the borrower cannot repay the loan to claim their collateral, which is instead sold off at a discount. Borrowers have the option to "top-up" their loans at any time by depositing more collateral which they retrieve when they repay the loan.

  We first use the famous Black-Scholes model, which assumes that the price of the asset (i.e., the crypto) obeys geometric brownian motion, that the market is frictionless, and that trades are continuous. If we simplify lending pools by ignoring the ability of borrowers to top up their loans, we can replicate lending pool loans via (down-and-out) barrier options, which are options that are called off when the price of the asset dips too low. This lets us get a simple model for pricing interest rates and collaterization parameters of lending pools.

  However, modeling top-ups requires us to deviate from the Black-Scholes model. In particular, top-ups are trivial if there is no discount factor. So, we augment the Black-Scholes model to allow for discounting, and implement simulations to price interest rates with top-ups. To do so, we consider loans which borrowers are allowed to top-up a finite number of times. We show that such loans can be considered nested barrier options, such that topping up $k$ times is a barrier option with a rebate equivalent to the value of being allowed to top-up only $k-1$ times. We show, via simulations, that the values of these limited top-up options converges quickly.

  Finally, we study lending pools in practice, and show the discount rates induced by their interest rates, under our model.
coauthors: "with Joe Halpern and Rafael Pass"
tags:
- tcs
date: "2022-09-01T00:00:00Z"
links:
# - name: Custom Link
#   url: http://example.org
# url_code: '#'
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
# url_slides: ''
# url_source: '#'
# url_video: '#'
---
