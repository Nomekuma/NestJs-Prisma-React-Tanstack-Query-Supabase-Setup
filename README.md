# Task Monorepo

A full-stack application built with Turborepo, featuring a NestJS backend and React frontend.

## Structure

```
Task/
├── apps/
│   ├── backend/    # NestJS API with Prisma
│   └── frontend/   # React + Vite application
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Tech Stack

### Backend
- **Framework**: NestJS
- **Database**: Prisma ORM
- **Language**: TypeScript

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **State Management**: TanStack Query
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

```bash
# Install all dependencies
pnpm install
```

### Development

```bash
# Run both frontend and backend in development mode
pnpm dev

# Run only backend
pnpm backend:dev

# Run only frontend
pnpm frontend:dev
```

### Build

```bash
# Build all apps
pnpm build

# Build specific app
pnpm backend:build
pnpm frontend:build
```

### Database Setup

```bash
# Navigate to backend
cd apps/backend

# Generate Prisma Client
pnpm prisma:generate

# Run migrations
pnpm prisma:migrate

# Open Prisma Studio
pnpm prisma:studio
```

## Available Scripts

### Root Level

- `pnpm dev` - Run all apps in development mode
- `pnpm build` - Build all apps
- `pnpm lint` - Lint all apps
- `pnpm clean` - Clean build artifacts
- `pnpm format` - Format code with Prettier

### Backend

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm start:prod` - Start production server
- `pnpm prisma:generate` - Generate Prisma Client
- `pnpm prisma:migrate` - Run database migrations
- `pnpm prisma:studio` - Open Prisma Studio

### Frontend

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm preview` - Preview production build

## Turborepo

This monorepo uses [Turborepo](https://turbo.build/repo) for task orchestration and caching.

### Remote Caching

To enable Remote Caching, authenticate with your Vercel account:

```bash
npx turbo login
```

Then link your Turborepo:

```bash
npx turbo link
```

## License

ISC
