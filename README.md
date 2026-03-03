# Flashcard App

> 🚀 **Live Demo:** [https://flashcard-rho-peach.vercel.app/](https://flashcard-rho-peach.vercel.app/)

A flashcard study app built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. It lets you flip through JavaScript/React Q&A cards with progress tracking.

LiveDemo: https://flashcard-rho-peach.vercel.app/

## Features

- 📚 10 JavaScript & React flashcards
- 📊 Progress bar showing current position
- 👁️ Show / hide answer toggle
- ⬅️ ➡️ Previous / Next navigation

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (Radix UI) |
| Icons | Lucide React |

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/                     # shadcn/ui primitives
├── features/
│   └── flashcard/
│       ├── components/
│       │   ├── card-container.tsx   # Flashcard display
│       │   ├── footer.tsx           # Navigation buttons
│       │   └── progress.tsx         # Progress bar
│       ├── data/
│       │   └── flashcards.ts        # Flashcard data
│       └── view/
│           └── flashcard-app.tsx    # Root feature component
├── hooks/
│   └── use-mobile.ts
└── lib/
    └── utils.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
