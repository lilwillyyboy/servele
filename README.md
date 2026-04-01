# Servele Unlimited 🎾

A Wordle-style deduction game for ATP tennis fans. Guess the mystery player using ranking, nationality, age, titles, playing hand and backhand type as clues.

## Live

Deployed at: your-domain.vercel.app

## How to play

- Search for any ATP player in the top 100 (rankings as of 30 March 2026, post Miami Open)
- Each guess reveals colour-coded feedback on 6 attributes
- 🟩 Correct · 🟨 Close · ⬜ Wrong
- Arrows (↑↓) on numeric fields show which direction the mystery player's value is
- Solve as many puzzles as you want — a new player loads immediately after each correct guess
- **Streak** counts consecutive calendar days (Pacific Time) with at least one correct solve

## Attributes

| Attribute | Close threshold |
|-----------|----------------|
| Ranking   | ±20 places     |
| Age       | ±2 years       |
| Titles    | ±3 titles      |
| Country, Hand, Backhand | exact only |

## Accounts & Leaderboard

- Register with email + username + password
- Stats (puzzles solved, avg guesses, fastest solve, streak) sync to your account
- Leaderboard shows top 50 across 4 categories

## Project structure

```
servele/
├── index.html      # Markup and modals
├── style.css       # All styles (light + dark mode)
├── app.js          # Game logic, auth, storage, leaderboard
├── vercel.json     # Vercel deployment config
└── README.md
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Framework preset: **Other**
4. Root directory: `/` (default)
5. Click **Deploy**

No build step required — pure static HTML/CSS/JS.

## Local development

Just open `index.html` in a browser. No server or build tool needed.

```bash
# Or use any static server, e.g.:
npx serve .
python3 -m http.server 3000
```

> **Note:** Account data is stored in the browser's `localStorage`. Each browser/device has its own store — there is no cross-device sync in the current version.

## Data

Player database: PIF ATP Men's Singles Rankings, 30 March 2026 (post Miami Open).  
Rankings, ages, and career title counts are accurate as of that date.

## Best opening guess

Based on exhaustive simulation across all 100 players: **Jenson Brooksby (#41)** eliminates the most players on average (96.7 out of 99), narrowly ahead of Camilo Ugo Carabelli (#66).
