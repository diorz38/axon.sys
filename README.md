# AXON.SYS

A modern enterprise management system built with React, TypeScript, and Vite. AXON.SYS provides a tectonic approach to workspace management with a sophisticated, cyberpunk-inspired interface for managing projects, services, and administrative operations.

## 🌐 Live Demo
Check out the live application: [https://diorz38.github.io/axon.sys](https://diorz38.github.io/axon.sys)

## 🚀 Features

### Core Modules
- **Projects Management**: Track project progress, monitor real-time metrics, and manage project portfolios
- **Services Management**: Handle service tickets and manage infrastructure assets
- **Administrative Controls**: User management, role definitions, and access permissions

### Technical Highlights
- **Modern Tech Stack**: React 19, TypeScript, Vite for lightning-fast development
- **Sophisticated UI**: Built with Tailwind CSS v4 and Radix UI components
- **Advanced Routing**: TanStack Router for type-safe navigation
- **Module Architecture**: Modular design with context-based state management
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Theme System**: Built-in dark/light mode with custom CSS variables

## 🛠️ Technology Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework with native CSS configuration

### UI & Routing
- **Radix UI** - Accessible component primitives
- **TanStack Router** - Type-safe routing with advanced features
- **Lucide React** - Beautiful icon library
- **shadcn/ui** - High-quality component library

### Development
- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - Type-aware linting rules

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CardGrid.tsx
│   ├── DataTable.tsx
│   ├── Header.tsx
│   ├── MarketingHeader.tsx
│   ├── Pagination.tsx
│   ├── ScaffoldBackground.tsx
│   ├── Sidebar.tsx
│   └── StatCard.tsx
├── contexts/           # React context providers
│   ├── ModuleContext.tsx
│   └── ThemeContext.tsx
├── hooks/              # Custom React hooks
│   └── useIntersectionObserver.ts
├── layouts/            # Layout components
│   ├── DashboardLayout.tsx
│   └── MarketingLayout.tsx
├── pages/              # Page components
│   ├── admin/          # Admin module pages
│   ├── projects/       # Projects module pages
│   ├── services/       # Services module pages
│   ├── DashboardPage.tsx
│   ├── LandingPage.tsx
│   ├── LoginPage.tsx
│   └── ProfilePage.tsx
├── styles/             # Global styles
│   └── globals.css
└── types/              # TypeScript type definitions
    └── modules.ts
```

## 🎯 Module System

AXON.SYS is organized into three main modules:

### Projects Module (`/projects/*`)
- **List** (`/projects/list`) - View all projects in a card grid or table format
- **Progress** (`/projects/progress`) - Track project progress with detailed analytics
- **Monitoring** (`/projects/monitoring`) - Real-time monitoring dashboard

### Services Module (`/services/*`)
- **Tickets** (`/services/tickets`) - Support ticket management system
- **Assets** (`/services/assets`) - Infrastructure asset management

### Admin Module (`/admin/*`)
- **Users** (`/admin/users`) - User management and administration
- **Roles** (`/admin/roles`) - Role definitions and permissions
- **Permissions** (`/admin/permissions`) - Access control configuration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/axon.sys.git
cd axon.sys
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Theme Variables
The application uses CSS custom properties for theming:
- `--axon-accent` - Primary accent color
- `--bg` - Background color
- `--text` - Text color
- Additional theme variables for comprehensive theming

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Adaptive layouts for different screen sizes

### Typography
- Primary: Inter (system fonts)
- Monospace: JetBrains Mono (for code and data display)

## 🔧 Configuration

### Tailwind CSS v4
The project uses Tailwind CSS v4 with the new `@theme` configuration block in `src/styles/globals.css`.

### TypeScript
- Strict TypeScript configuration
- Type-safe routing with TanStack Router
- Comprehensive type definitions for all components and data structures

## 📊 Key Metrics

The dashboard provides real-time monitoring of:
- **Nodes**: Active connections (12,847+ tracked)
- **Latency**: System response time (0.4s average)
- **Efficiency**: System performance metrics (94.2% efficiency)
- **Teams**: Active operators and user management

## 🔐 Security Features

- Role-based access control (RBAC)
- Permission management system
- User authentication flows
- Admin-level security controls

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Android Chrome)

## 📈 Performance

- **Build Time**: < 5 seconds with Vite
- **Bundle Size**: Optimized with code splitting
- **Runtime**: React 19 concurrent features for smooth interactions
- **Loading**: Progressive loading with intersection observers

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About AXON SYSTEMIC LTD.

AXON SYSTEMIC LTD. builds structural frameworks for modern enterprises, treating space as a variable, not a constant. Our tectonic approach to workspace management helps high-performance teams scale without friction.

---

**Built with Tectonic V4** // **ST_GRID_01 // LONDON_OPERATIONS**