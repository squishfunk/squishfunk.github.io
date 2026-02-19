# Agent Operational Guide for Portfolio Blog

This document outlines the operational protocols, coding standards, aesthetic rules, and commands for AI agents operating in this repository.

## 1. Project Architecture & Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5+ (Strict Mode)
- **Styling**: Tailwind CSS v4 (Utility-first, class-based Dark Mode enabled)
- **Icons**: Lucide React
- **Design System**: Brutalist / Wadi3-style Grid (Hard borders, extreme typography, fixed layouts)
- **Content**: Markdown-based Blog parsed via `gray-matter` & `remark`
- **Deployment**: Static Site Generation (SSG) via `output: 'export'` for GitHub Pages

## 2. Operational Commands

Always validate changes using these commands before finalizing a task.

### Build & Run
- **Start Development Server**: `npm run dev`
- **Production Build**: `npm run build` (CRITICAL: Must pass to ensure SSG works)

### Code Quality
- **Linting**: `npm run lint` (ESLint)
- **Type Checking**: `npx tsc --noEmit`

### Testing
*Note: No test runner (Jest/Vitest) is currently configured. Rely on strict TypeScript checks and build processes.*
- **Run Tests**: *N/A*
- **Run Single Test**: *N/A*

## 3. Code Style & Standards

### Language Policy (CRITICAL)
- **English Only**: ALL code, comments, documentation, commit messages, and project files MUST be written entirely in English. Do NOT use any other language in the codebase.

### File Structure & Naming
- **Components**: `src/components/[PascalCase].tsx` (e.g., `Header.tsx`, `ThemeToggle.tsx`)
- **Pages**: `src/app/**/page.tsx`
- **Utilities**: `src/lib/[camelCase].ts` (e.g., `posts.ts`)
- **Component Naming**: PascalCase.
- **Function/Variable Naming**: camelCase.
- **Constants**: UPPER_SNAKE_CASE.
- **Blog Content**: `content/blog/*.md` (Markdown files with YAML frontmatter).

### TypeScript Guidelines
- **Strict Typing**: Always define explicit interfaces for props. Avoid `any` at all costs.
- **Data Fetching**: Type the parsed markdown data explicitly (see `src/lib/posts.ts`).

### Component Guidelines
- **Server Components by Default**: Only use `'use client'` when state (`useState`), effects (`useEffect`), or browser APIs (like `next-themes`) are required.
- **Imports**: Always use the `@/` alias for internal imports (e.g., `import { Header } from '@/components/Header';`).

## 4. Design System & Aesthetic Directives (CRITICAL)

The project uses a highly specific "Brutalist Grid" design language inspired by Wadi3/Bento aesthetics. DO NOT introduce generic "AI slop" like rounded soft shadows or floating glass cards.

### Layout & Spacing
- **100vh Fixed Grids**: The main layout must fit precisely within `h-screen` using `overflow-hidden` and `flex-col`. Do not force the user to scroll down to see the footer on the home page.
- **Hard Borders**: Use 1px solid borders to define the grid structure:
  - Dark Mode: `border-white/10`
  - Light Mode: `border-gray-200`
- **Container**: Wrap the main grid in `max-w-[100vw]` or `max-w-7xl` with `border-x`.

### Typography
- **Contrast**: Extreme typographic contrast is required.
- **Headers**: Massive serif typography. Use `font-serif` (Playfair Display) with tight tracking (`tracking-tighter` or `tracking-[-0.05em]`) and extremely tight line-height (`leading-[0.85]`).
- **Metadata**: Tiny, monospace, uppercase typography for labels. Use `font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-500`.
- **Body**: Clean sans-serif (Geist Sans).

### Interaction & States
- **Hover Effects**: Grid cells should respond to interaction. Use subtle background shifts: `hover:bg-gray-50 dark:hover:bg-white/5 transition-colors duration-300`.
- **Links**: No default underlines. Use horizontal shifts on icons (`group-hover:-translate-x-1`) or color changes.

### Theming
- **Dark Mode Default**: The design looks best in dark mode. The project uses `next-themes` with Tailwind v4's class-based strategy (`@custom-variant dark` is in `globals.css`).
- **Hydration Safe Toggles**: When working with the theme, always ensure components wait for the client-side `mounted` state before rendering the toggle icon to avoid hydration mismatches.

## 5. Error Handling & Edge Cases

- **Markdown Files**: Handle cases gracefully if the `content/blog` directory is missing or empty (return empty arrays).
- **Static Export Limitations**: Never use `next/image` standard optimization or dynamic server routes (like `headers()` or `cookies()`). Ensure `images: { unoptimized: true }` remains in `next.config.ts`.
- **Empty States**: If no blog posts exist, show a clean, monospace placeholder like `NO ENTRIES FOUND`.

## 6. Workflow for Agents

1.  **Analyze**: Read `package.json`, `tailwind.config` equivalent (`globals.css` for v4), and this file.
2.  **Contextualize**: Verify if you are modifying a Server or Client component.
3.  **Aesthetic Check**: Before writing UI code, ask yourself: "Is this brutalist? Is it a grid? Am I adding soft, generic UI?" If yes to the last, rewrite it.
4.  **Implement**: Write the code. Use standard Tailwind utilities.
5.  **Verify**: Always run `npm run build` after changes to ensure SSG generation hasn't broken.
6.  **Refine**: Ensure theme transitions (`dark:` variants) are comprehensive across text, borders, and backgrounds.

---
*Generated by Antigravity Agent for consistent coding practices.*