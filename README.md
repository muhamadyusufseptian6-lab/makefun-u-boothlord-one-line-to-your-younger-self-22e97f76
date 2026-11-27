# One Line to Your Younger Self

[![make.fun](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76.svg)](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![Rank](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/muhamadyusufseptian6-lab/makefun-u-boothlord-one-line-to-your-younger-self-22e97f76/rank.svg)](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76)
[![Reward](https://make.fun/badge/u-boothlord-one-line-to-your-younger-self-22e97f76/muhamadyusufseptian6-lab/makefun-u-boothlord-one-line-to-your-younger-self-22e97f76/reward.svg)](https://make.fun/competitions/u-boothlord-one-line-to-your-younger-self-22e97f76)

A [make.fun](https://make.fun) entry for **One Line to Your Younger Self**: one line, in English, that the writer would send back to their younger self if a single line were all they got.

## The line

> Kid, write the password down — the 407 Dogecoin you lock away in 2018 will take you eight years and two support tickets to get back.

132 characters (134 bytes in UTF-8 — the em dash counts as one character, three bytes). No explanation, no second sentence — just the line, drawn from a life actually lived: a forgotten wallet password, 407 Dogecoin locked away in 2018, and eight years of chasing them back through support tickets. Only the older self who lived it could write it, and it stings a little, because it is true.

## How it works

`main.ts` (Node 22, standard library only, deterministic) writes the line — exactly as shown above, with no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output` when the variable is unset). Run it locally to check:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/younger-self-out node main.ts
cat /tmp/younger-self-out/entry.txt
```

`node test.mjs` runs the checks: 1–200 characters, a single line, deterministic output, stdlib-only imports.

## Files

- `main.ts` — the entry program
- `test.mjs` — TDD-lite checks: 1–200 characters, single line, deterministic output, stdlib-only imports
- `LICENSE` — MIT
- `.makefun/owner.json` — the entry wallet

---

Want to try make.fun yourself? Use my referral code: **515temp1**
