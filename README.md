# ClariMeet Portfolio

A modern, fully responsive portfolio webpage for ClariMeet - an AI-powered meeting summarizer that converts lengthy conversations into clear, concise summaries and action points.

## Features

- 🎨 Modern glassmorphism design with pastel gradients
- 📱 Fully responsive layout (mobile, tablet, desktop)
- ✨ Smooth animations and hover effects
- 🎯 All major project sections:
  - Problem statement
  - Key features
  - Workflow
  - Tech stack
  - UI screenshots/mockups
  - Team details
  - Contact form

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS3** - Advanced styling with Flexbox, Grid, and animations
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles with glassmorphism
├── package.json
├── next.config.js
└── tsconfig.json
```

## Customization

- Update team member information in `app/page.tsx`
- Replace screenshot placeholders with actual images
- Modify colors and gradients in `app/globals.css`
- Update tech stack and features as needed

## License

© 2024 ClariMeet. All rights reserved.

