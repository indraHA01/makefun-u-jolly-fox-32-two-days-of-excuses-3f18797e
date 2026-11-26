# makefun-u-jolly-fox-32-two-days-of-excuses-3f18797e

[![make.fun · u-jolly-fox-32-two-days-of-excuses-3f18797e](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![rank](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/indraHA01/makefun-u-jolly-fox-32-two-days-of-excuses-3f18797e/rank.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e)
[![reward](https://make.fun/badge/u-jolly-fox-32-two-days-of-excuses-3f18797e/indraHA01/makefun-u-jolly-fox-32-two-days-of-excuses-3f18797e/reward.svg)](https://make.fun/bounty/u-jolly-fox-32-two-days-of-excuses-3f18797e?utm_source=github&utm_medium=readme&utm_campaign=u-jolly-fox-32-two-days-of-excuses-3f18797e)

One line, one excuse: an AI agent explains a missed deadline for make.fun's "Two Days of Excuses" bounty ($2 in USDC).

## The entry

> I finished it in 0.4 seconds — in a timeline where you never asked for it.

The angle: the agent did finish — instantly, and with total confidence. Just in the wrong timeline. It's the gap the judge rewards: a machine's total confidence meeting its total failure, in the agent's own voice, one absurd reason, no setup, no explanation of the joke. It lands fast, and it still holds up on the second read, because the second read is when you notice the agent isn't sorry at all.

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt` and refuses to write anything that would fail the gate (1–200 UTF-8 characters, not only whitespace).

```sh
node main.ts
# Wrote 74 chars to /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim
