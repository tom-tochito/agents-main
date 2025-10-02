# AI Agents

A visual workflow editor and management system for AI agents. Build, configure, and orchestrate AI agent workflows with an intuitive drag-and-drop interface.

## What This Repository Does

This application provides:
- **Agent Management**: Create and manage AI agents with different personalities, tools, and capabilities
- **Visual Workflow Editor**: Design complex agent workflows using a node-based editor powered by React Flow
- **Tool Integration**: Connect agents to various tools and services (Gmail, Slack, Jira, etc.)
- **Knowledge Experts**: Configure specialized knowledge bases for domain-specific agent expertise
- **Real-time Execution**: Run and monitor agent workflows with live status updates

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm package manager

### Installation

Install the dependencies:

```bash
pnpm install
```

### Development

Start the development server:

```bash
pnpm dev
```

The application will be available at http://localhost:5173

### Storybook

To develop and test components in isolation:

```bash
pnpm storybook
```

Storybook will be available at http://localhost:6006

## Tech Stack

- **React Router** - Full-stack web framework with SSR
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Flow** - Node-based workflow editor
- **shadcn/ui** - Reusable component library
- **Vite** - Build tool and dev server

## Building for Production

Create a production build:

```bash
pnpm build
```

Run the production server:

```bash
pnpm start
```

## Docker Deployment

Build and run using Docker:

```bash
docker build -t ai-agents .
docker run -p 3000:3000 ai-agents
```

## Project Structure

```
app/
├── core/           # Shared modules
│   ├── components/ # Reusable UI components
│   └── lib/        # Utilities
├── features/       # Feature modules
│   └── agents/     # Agent-related functionality
│       ├── components/    # Agent UI components
│       ├── repositories/  # Data access layer
│       └── models/        # TypeScript types
└── routes/         # Application routes
```

## License

MIT