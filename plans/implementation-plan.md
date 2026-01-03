# AXON.SYS React Implementation Plan

This document outlines the plan for migrating the AXON template to a modern React stack.

## Tech Stack
- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS v4 (native CSS-based configuration)
- **Routing**: Tanstack Router
- **UI Components**: shadcn/ui (Radix UI)
- **Icons**: Lucide React (to replace template SVGs where appropriate)

## Project Structure
- `/src/components`: Reusable UI elements (shadcn/ui + custom)
- `/src/layouts`: Layout wrappers for Dashboard and Marketing pages
- `/src/pages`: Main view components (Landing, Login, Dashboard)
- `/src/routes`: Tanstack Router configuration
- `/src/styles`: Tailwind v4 configuration and global CSS

## Design Migration Notes
- **Theme Variables**: Use the existing CSS variables for `--bg`, `--axon-accent`, etc.
- **Scaffolding Grid**: Port the `.scaffold-bg` logic to a React component or global CSS.
- **Tectonic Fonts**: Ensure "JetBrains Mono" and "Inter" are correctly loaded.
- **Dark Mode**: Integrate template's `.dark` class logic with a React-friendly theme provider.

## Implementation Steps
1. **Setup**: Scaffold Vite and install dependencies.
2. **Tailwind v4**: Configure the new `@theme` block in CSS.
3. **Routing**: Define `/`, `/login`, and `/dashboard` routes.
4. **Layouts**: Create the Sidebar and Header as shared components.
5. **Pages**: Block-by-block migration of HTML/CSS to TSX.
6. **Polishing**: Implement the intersection observer reveals and mouse-move grid effect.
