# Zing Cloud - Premium Cloud Services Platform

## Overview

Zing Cloud is a premium cloud hosting services platform that offers VPS servers, cloud game servers, and dedicated servers. The application features a modern glassmorphism design with purple-to-blue gradients and provides a static marketing website with interactive service catalog, authentication modals, and responsive layouts.

The project is built as a full-stack application with a static frontend that can be deployed to GitHub Pages, combined with a Node.js/Express backend infrastructure ready for future API integration. The architecture supports both static file serving and dynamic API routes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Design System**: The application uses a glassmorphism-first design approach with heavy emphasis on semi-transparent blue-tinted glass effects, purple-to-blue-to-black gradient flows, and premium tech aesthetics. The design is reference-based, inspired by modern cloud hosting platforms like AsakaCloud.vn.

**Static Site Structure**: The root directory contains standalone HTML/CSS/JS files (`index.html`, `styles.css`, `app.js`) that can be served directly without build steps. This allows for GitHub Pages deployment while maintaining the full-stack architecture.

**React Application**: A parallel React-based frontend exists in the `client/` directory using:
- Vite as the build tool and dev server
- Wouter for client-side routing
- TanStack React Query for data fetching and state management
- Shadcn UI component library with Radix UI primitives
- Tailwind CSS for styling with custom theme configuration

**Component Architecture**: The React app uses a modular component structure with reusable UI components in `client/src/components/ui/`. Components follow accessibility standards with ARIA labels and keyboard navigation support. The design system enforces consistent spacing (Tailwind units), typography (Inter font family), and interactive states (hover/active elevations).

**State Management**: Client-side state is managed through React Query with custom query functions that handle API requests, error states, and unauthorized behaviors. The query client is configured with infinite stale time and disabled refetch behaviors for optimal performance.

### Backend Architecture

**Server Framework**: Express.js application serving both static files and API routes. The server supports:
- Static file serving from the root directory for the marketing site
- Vite middleware integration for React app development
- Custom logging middleware for API request tracking
- JSON body parsing with raw body preservation for webhook support

**Development vs Production**: 
- Development mode runs Vite dev server with HMR, custom error overlays, and Replit-specific tooling
- Production mode serves pre-built static files from `dist/public`
- Build process uses esbuild for server bundling and Vite for client bundling

**Routing Strategy**: The application uses a hybrid routing approach:
- Root-level files (`index.html`, `app.js`, `styles.css`) for static marketing pages
- `/api/*` routes reserved for backend API endpoints (currently minimal, ready for expansion)
- Client-side routing through Wouter for React SPA pages
- Fallback to `index.html` for SPA routing support

### Data Storage

**ORM and Database**: 
- Drizzle ORM configured for PostgreSQL via Neon serverless driver
- Schema defined in `shared/schema.ts` with user authentication tables
- Database migrations stored in `./migrations` directory
- Connection managed through `DATABASE_URL` environment variable

**Storage Interface**: An abstraction layer (`server/storage.ts`) provides CRUD operations:
- `IStorage` interface defines data access methods
- `MemStorage` implements in-memory storage for development/testing
- Design allows easy swapping to database-backed storage without changing business logic
- Currently implements basic user management (create, get by ID, get by username)

**Session Management**: Infrastructure includes `connect-pg-simple` for PostgreSQL-backed session storage, enabling persistent user sessions across server restarts.

### External Dependencies

**UI Component Library**: Radix UI provides accessible, unstyled primitives for complex components (dialogs, dropdowns, tooltips, etc.). These are wrapped in Shadcn UI styled components with consistent theming.

**Styling Framework**: Tailwind CSS via CDN for the static site, and as a build dependency for the React app. Custom configuration extends the base theme with glassmorphism utilities, custom color schemes, and elevation classes.

**Development Tools**:
- QRCode.js (CDN) for generating QR codes in checkout flows
- Vite plugins for error overlays, Replit integration, and development banners
- TypeScript for type safety across client, server, and shared code

**Third-Party Services**:
- Google Fonts (Inter font family) loaded via CDN
- Neon Database for PostgreSQL hosting
- Replit-specific plugins for development environment integration

**Build and Runtime**:
- Node.js with ES Modules
- tsx for TypeScript execution in development
- esbuild for production server bundling
- Vite for client-side asset bundling and optimization