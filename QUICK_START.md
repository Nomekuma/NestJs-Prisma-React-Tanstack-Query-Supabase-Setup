# Quick Start Guide

## Initial Setup

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Set up environment variables**

   Create `.env` file in `apps/backend/`:

   ```env
   DATABASE_URL="your-database-url"
   PORT=3000
   ```

3. **Generate Prisma Client**

   ```bash
   cd apps/backend
   pnpm prisma:generate
   ```

4. **Run database migrations**
   ```bash
   cd apps/backend
   pnpm prisma:migrate
   ```

## Development

### Start everything

```bash
pnpm dev
```

This will start:

- Backend on http://localhost:3000
- Frontend on http://localhost:5173

### Start individual apps

```bash
# Backend only
pnpm backend:dev

# Frontend only
pnpm frontend:dev
```

## Building

```bash
# Build everything
pnpm build

# Build specific app
pnpm backend:build
pnpm frontend:build
```

## Database Management

```bash
# Generate Prisma Client
cd apps/backend && pnpm prisma:generate

# Create and apply migration
cd apps/backend && pnpm prisma:migrate

# Open Prisma Studio (GUI)
cd apps/backend && pnpm prisma:studio
```

## Useful Commands

```bash
# Format all files
pnpm format

# Lint all projects
pnpm lint

# Clean all build artifacts
pnpm clean
```

## Turbo Commands

```bash
# Run with full logs
turbo dev --verbosity=2

# Clear turbo cache
turbo clean

# Run task for specific package
turbo dev --filter=backend
turbo build --filter=frontend
```

## Troubleshooting

### Clear everything and reinstall

```bash
# Remove all node_modules
rm -rf node_modules apps/*/node_modules

# Remove lock files
rm -rf pnpm-lock.yaml apps/*/pnpm-lock.yaml

# Clear turbo cache
rm -rf .turbo

# Reinstall
pnpm install
```

### Prisma issues

```bash
# Regenerate Prisma Client
cd apps/backend
pnpm prisma:generate

# Reset database (⚠️ deletes all data)
pnpm prisma migrate reset
```

## Project Structure

```
Task/
├── .vscode/              # VS Code configuration
├── apps/
│   ├── backend/          # NestJS API
│   │   ├── prisma/       # Database schema
│   │   └── src/          # Source code
│   └── frontend/         # React app
│       ├── public/       # Static assets
│       └── src/          # Source code
├── .gitignore
├── package.json          # Root package.json
├── pnpm-workspace.yaml   # Workspace configuration
├── turbo.json            # Turborepo configuration
└── README.md
```
