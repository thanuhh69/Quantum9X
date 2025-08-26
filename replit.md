# Overview

This is a full-stack educational technology platform called Quantum9x built with React, Express, and TypeScript. The application serves as a landing page and platform for an educational technology company that offers various tech courses including programming, data science, AI/ML, mobile development, cybersecurity, and cloud computing. The platform emphasizes "quantum-speed learning" and modern educational methodologies.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: Extensive use of Radix UI primitives wrapped in custom components following the shadcn/ui pattern
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Component Structure**: Modular component architecture with reusable UI components in `/components/ui/`

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: Hot reload setup with Vite integration for development mode
- **API Structure**: RESTful API with routes prefixed under `/api`
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) that can be extended
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Centralized schema definitions in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations stored in `/migrations`
- **Current Implementation**: In-memory storage for development with prepared interfaces for database integration

## Authentication and Authorization
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions (configured but not fully implemented)
- **User Schema**: Basic user model with username/password fields and UUID primary keys
- **Storage Interface**: Prepared methods for user CRUD operations

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon Database
- **drizzle-orm** & **drizzle-kit**: Modern TypeScript ORM and migration toolkit
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight routing library for React

### UI and Design
- **@radix-ui/***: Comprehensive collection of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: Utility for creating component variants
- **date-fns**: Date manipulation library

### Development Tools
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Development tooling for Replit environment
- **tsx**: TypeScript execution for development

### Form and Validation
- **react-hook-form**: Form state management
- **@hookform/resolvers**: Form validation resolvers
- **zod**: TypeScript-first schema validation
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation

### Additional Libraries
- **embla-carousel-react**: Carousel component functionality
- **cmdk**: Command palette component
- **nanoid**: URL-safe unique ID generator