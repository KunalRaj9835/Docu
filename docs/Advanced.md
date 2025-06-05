---
id: Advanced
title: Advanced
description: Tools for testing, visualizing, and deploying your custom trading strategies.
---

# Advanced

The Advanced section in **TradeVed** is built for experienced traders who are ready to test, refine, and deploy their own strategies using real data and broker connectivity. All tools here require a connected broker account.

This stage is about execution — converting ideas into logic, simulating outcomes, and running trades with precision.

---

## Backtesting

**Backtesting** allows you to test your trading logic against historical market data. This helps validate a strategy’s performance before going live.

Key features:

- Write custom strategies in code (no templates or blocks)
- Backtest on historical data with time filters and instrument selection
- Access raw metrics like win rate, drawdown, expectancy, and execution count
- Review logs, order flow, and edge cases

![TradeVed Demo](/img/Journal.png)

This tool is built for accuracy, not convenience — giving you direct control over every test parameter.

---

## Strategy Visualizer

The **Strategy Visualizer** is focused on options trading and risk modeling. It helps you evaluate how your strategy behaves under different conditions.

Capabilities include:

- Simulate payoff curves based on strike, expiry, and underlying price
- Calculate Greeks (Delta, Gamma, Theta, Vega, Rho) in real-time
- Adjust volatility, time to expiry, and spot price to see projected impact
- Analyze break-even points, max loss/profit, and exposure

This is essential for options traders looking to reduce blind spots and anticipate market shifts.

---

## Strategy to Algo

**Strategy to Algo** bridges your tested logic with live execution. Once you're satisfied with a backtest, you can convert it into an automated strategy.

Features:

- Write or edit strategy logic in code
- Push logic directly to execution layer via broker connection
- Set controls (capital allocation, trade limits, kill-switches)
- Monitor status and logs during live runs

You can use this either to simulate live conditions or to execute real trades. It’s designed for flexibility and control.

---

## Summary of Workflow

1. **Write and test** your strategy using Backtesting  
2. **Visualize behavior** and edge cases using Strategy Visualizer  
3. **Deploy and monitor** through Strategy to Algo with full broker integration

Every action here happens in the real market environment — nothing is theoretical.

---

## What to Expect

This section is for execution, not experimentation. It is expected that you:

- Know what you’re testing
- Understand your risk and exposure
- Operate with clear trade logic

The outcome is simple: to run strategies that make decisions — and ideally, make profits — without hesitation.

