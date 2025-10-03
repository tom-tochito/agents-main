# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **AI Agents** workflow editor application using **React Router**, **React**, **TypeScript**, and **TailwindCSS**. The project provides a visual interface for creating and managing AI agent workflows with a node-based editor. It uses `pnpm` as the package manager and includes Storybook for isolated component development.

-----

## Essential Commands

### Development

```bash
# Start the development server on http://localhost:5173
pnpm dev

# Start Storybook on http://localhost:6006
pnpm storybook
```

### Adding Components

```bash
# Add specific shadcn/ui components
pnpm dlx shadcn-ui@latest add button
```

### Build & Production

```bash
# Create a production-ready build
pnpm build

# Run the production server
pnpm start

# Type check the entire codebase
pnpm typecheck
```

### Docker

```bash
docker build -t ai-agents .
docker run -p 3000:3000 ai-agents
```

-----

## Architecture

The architecture separates concerns into a `core` directory for shared code and a `features` directory for domain-specific modules. It uses a **Repository Pattern** with **Mock Repositories** for data access and a **Service Layer** for business logic.

### Directory Structure

  - `app/` - Main application code
      - `core/` - Shared modules used across the application
          - `components/` - Reusable UI components
          - `hooks/` - Custom React hooks
          - `repositories/` - **Shared mock repositories (data access layer)**
          - `services/` - **Shared business logic that orchestrates repository calls**
          - `models/` - Data models and TypeScript types
          - `lib/` - Utility functions (includes `cn()`)
      - `features/` - Feature-specific modules
          - `[entity]/` - A specific feature folder (e.g., `prompts/`, `organizations/`)
              - `components/` - Components used only within this feature
              - `hooks/` - Hooks used only within this feature
              - `repositories/` - **Mock repositories specific to this feature**
              - `services/` - **Business logic services for this feature**
              - `models/` - Models and types for this feature
      - `routes/` - Route components using file-based routing
      - `root.tsx` - The root component, including error boundaries and global layout
      - `app.css` - Global styles with Tailwind CSS directives
  - `build/` - Production output
  - Path alias: `~/` maps to the `app/` directory

### Data Layer Interaction

All data access is simulated through a **mock repository** layer, enabling frontend development without a live backend.

  - **Repository Layer Abstraction**: Do **not** use `fetch` or `axios` directly within components or route loaders. All data access must be abstracted into a dedicated **mock repository**.
      - A **repository** is a `class` (e.g., `UserMockRepository`) that provides hardcoded or generated mock data.
      - These classes should mimic the interface of a real repository, often returning `Promise`-wrapped data to simulate network latency.
      - A **service** uses one or more mock repositories to implement complex business logic.
  - **File Locations**:
      - Shared mock repositories (e.g., for user authentication) belong in `app/core/repositories/`.
      - Feature-specific mock repositories (e.g., for managing prompts) belong in `app/features/prompts/repositories/`.

### Key Technologies

  - **Remix**: A full-stack web framework with a focus on web standards and SSR.
  - **React**: The UI library.
  - **Vite**: The build tool and development server.
  - **TailwindCSS**: A utility-first CSS framework.
  - **shadcn/ui**: A collection of reusable UI components.

-----

## Development Practices

  - **TypeScript Strict Mode**: The project enforces strict mode. Ensure all code is strongly typed.
  - **Component Usage**: 
      - **Always prefer existing UI components** from `app/core/components/ui/` over creating new ones or using raw HTML elements.
      - The project has a comprehensive set of shadcn/ui components including Table, Dialog, Button, Input, Select, Badge, Card, etc.
      - Import components with their full path: `~/core/components/ui/[component]/[component]` (e.g., `~/core/components/ui/button/button`)
      - Use the Table components (Table, TableHeader, TableBody, TableRow, TableCell, etc.) instead of raw HTML table elements
      - Only create new components when existing ones cannot meet the requirements
  - **Styling**: Use the `cn()` utility from `~/core/lib/utils` for conditional or merged classNames in components.
  - **Code Organization**: Strictly follow the `core/` vs. `features/` separation.
      - Code in `core/` should be generic and reusable across the entire application.
      - Code in `features/` should be self-contained and specific to a single domain.
  - **Routing**: When creating new route files in `app/routes/`, always add the corresponding route configuration to `app/routes.ts` using the appropriate route helper (index, route, etc.)
