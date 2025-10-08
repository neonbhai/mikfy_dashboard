# MIKFY Dashboard

A comprehensive dashboard platform for managing headless Shopify sites, specifically designed for Korean beauty product businesses. Built with Next.js 15, TypeScript, and modern web technologies to provide real-time insights and efficient management tools.

![MIKFY Dashboard Preview](./public/brand/mikfy-logo.svg)

## Overview

MIKFY Dashboard is a powerful business intelligence platform that connects to headless Shopify stores to provide:

- **Real-time Analytics**: Performance metrics, sales trends, and customer insights
- **Order Management**: Complete order lifecycle tracking and fulfillment management
- **Inventory Control**: Product catalog management with stock monitoring and alerts
- **Financial Reports**: Revenue analysis, profit tracking, and business intelligence
- **User Management**: Account settings and multi-user support

## Features

### Analytics Dashboard

- Real-time sales performance charts
- Customer behavior analytics
- Sales channel performance tracking
- Geographic sales distribution
- Session and page view metrics

### Order & Fulfillment Management

- Order timeline tracking with status updates
- Priority order alerts and notifications
- Customer order history
- Fulfillment workflow management
- Order filtering and search capabilities

### Inventory Management

- Product catalog with image management
- Real-time stock level monitoring
- Low stock and out-of-stock alerts
- Stock movement history tracking
- Inventory value calculations

### Financial Reports

- Revenue and profit analysis
- Sales goal tracking with progress indicators
- Customer acquisition metrics
- Financial chart visualizations
- Business performance insights

### Settings & Configuration

- User profile management
- Account settings and preferences
- Role-based access control
- Business information management

## Technology Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Build Tool**: Turbopack for fast development

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (dashboard)/        # Dashboard route group
│   │   ├── analytics/      # Analytics page
│   │   ├── inventory/      # Inventory management
│   │   ├── orders/         # Order management
│   │   ├── overview/       # Main dashboard
│   │   ├── reports/        # Financial reports
│   │   ├── search/         # Search functionality
│   │   └── settings/       # User settings
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home redirect
├── components/             # Reusable UI components
│   ├── analytics/          # Analytics-specific components
│   ├── billing/            # Billing and invoice components
│   ├── brand/              # Logo and branding
│   ├── header/             # Page headers and search
│   ├── icons/              # Custom icon components
│   ├── inventory/          # Inventory management components
│   ├── notifications/      # Notification panels
│   ├── orders/             # Order-related components
│   ├── overview/           # Dashboard overview components
│   ├── reports/            # Financial report components
│   ├── settings/           # Settings page components
│   ├── shared/             # Shared utility components
│   └── sidebar/            # Navigation sidebar
└── public/                 # Static assets
    ├── avatars/            # User avatars
    ├── brand/              # Company branding
    ├── icons/              # UI icons
    ├── products/           # Product images
    └── temp-figma/         # Design assets
```

## Getting Started

### Prerequisites

- Node.js 18+ or later
- pnpm package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mikfy-dashboard
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start the production server
pnpm start
```

## Progressive Web App (PWA)

The dashboard is configured as a PWA with:

- Offline functionality
- Installable on mobile devices
- Responsive design for all screen sizes
- Optimized performance with Turbopack

## Design System

### Color Palette

- **Primary**: Dark theme with `#1D222E` for navigation
- **Background**: Light theme with `#FAFAFC`
- **Accent Colors**: Various brand colors for different metrics
- **Status Colors**: Green for success, red for alerts, yellow for warnings

### Typography

- **Primary Font**: Geist Sans for body text
- **Mono Font**: Geist Mono for code and numbers
- **Font Sizes**: Responsive scaling from mobile to desktop

### Components

- **Atomic Design**: Small, focused components (< 50 lines)
- **TypeScript**: Full type safety across all components
- **Responsive**: Mobile-first responsive design
- **Accessibility**: ARIA labels and semantic HTML

## Development Guidelines

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Component Size**: Keep components under 50 lines
- **Console Logs**: Extensive logging for debugging

### Component Creation

- Use atomic design principles
- Implement responsive designs by default
- Follow established file organization
- Create new files for each component

### State Management

- **React Query**: For server state management
- **useState/useContext**: For local component state
- Avoid prop drilling with context providers

### Error Handling

- Toast notifications for user feedback
- Proper error boundaries
- Extensive console logging for debugging
- User-friendly error messages

## Security Features

- Input validation and sanitization
- Type-safe API interactions
- Secure authentication flows
- OWASP security guidelines compliance

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Turbopack for fast builds
- **Caching**: Proper cache strategies for static assets

### Development Workflow

- Follow the established component structure
- Maintain TypeScript strict mode
- Test on multiple screen sizes
- Ensure accessibility compliance

---
