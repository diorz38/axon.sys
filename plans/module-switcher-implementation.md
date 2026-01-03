# Module Switcher Implementation Plan

## Overview
Transform the Dashboard Page to include a module-based navigation system with dynamic sidebar menus and dedicated pages for each module.

## Module Structure

```
┌─────────────────────────────────────────────────────────────┐
│                      Module Switcher                        │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  ▼ Projects (Selected)                              │   │
│  │    Services                                         │   │
│  │    ─────────────────                                │   │
│  │    Admin                                             │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

## Module Navigation Hierarchy

```mermaid
graph TD
    A[Module Switcher] --> B[Projects]
    A --> C[Services]
    A --> D[Admin]
    
    B --> B1[/projects/list]
    B --> B2[/projects/progress]
    B --> B3[/projects/monitoring]
    
    C --> C1[/services/tickets]
    C --> C2[/services/assets]
    
    D --> D1[/admin/users]
    D --> D2[/admin/roles]
    D --> D3[/admin/permissions]
    
    style A fill:#ff4d00
    style B fill:#e0e0e0
    style C fill:#e0e0e0
    style D fill:#e0e0e0
```

## Page Types and Components

### 1. Tabular View Pages (List, Users, Tickets, Assets)
- Statistics cards on top
- TanStack Table with pagination
- Data grid layout

### 2. Dashboard Copy Pages (Progress, Monitoring)
- Copy content from DashboardPage
- Stats grid
- Activity feed
- Quick actions

### 3. Cards List Pages (Roles, Permissions)
- Cards grid (3 cards per row)
- Pagination controls
- Card hover effects

## File Structure

```
src/
├── components/
│   ├── Sidebar.tsx (modify - add module switcher)
│   ├── StatCard.tsx (extract from DashboardPage)
│   ├── DataTable.tsx (new - TanStack Table wrapper)
│   ├── CardGrid.tsx (new - Cards list with pagination)
│   └── Pagination.tsx (new - Reusable pagination)
├── contexts/
│   └── ModuleContext.tsx (new - Module state management)
├── layouts/
│   └── DashboardLayout.tsx (modify - handle module state)
├── pages/
│   ├── projects/
│   │   ├── ProjectsListPage.tsx (new)
│   │   ├── ProjectsProgressPage.tsx (new)
│   │   └── ProjectsMonitoringPage.tsx (new)
│   ├── services/
│   │   ├── ServicesTicketsPage.tsx (new)
│   │   └── ServicesAssetsPage.tsx (new)
│   └── admin/
│       ├── AdminUsersPage.tsx (new)
│       ├── AdminRolesPage.tsx (new)
│       └── AdminPermissionsPage.tsx (new)
├── types/
│   └── modules.ts (new - Module types and config)
└── main.tsx (modify - add all new routes)
```

## Module Configuration

```typescript
// types/modules.ts
export type ModuleType = 'projects' | 'services' | 'admin'

export interface ModuleConfig {
  id: ModuleType
  label: string
  icon: React.ElementType
  routes: ModuleRoute[]
}

export interface ModuleRoute {
  path: string
  label: string
  icon: React.ElementType
}
```

## Implementation Steps

### Step 1: Install Dependencies
```bash
npm install @tanstack/react-table
```

### Step 2: Create Module Types and Config
- Define ModuleType enum
- Create module configuration array
- Export module menu items

### Step 3: Create ModuleContext
- Manage current module state
- Provide module switcher function
- Share module data across components

### Step 4: Modify Sidebar.tsx
- Replace static navItems with module-based menu
- Add dropdown for module switcher in sidebar header
- Display current module's menu items
- Add horizontal separator before Admin

### Step 5: Modify DashboardLayout.tsx
- Wrap with ModuleContext provider
- Update Header title based on current module
- Pass module state to Sidebar

### Step 6: Create Shared Components

#### StatCard.tsx
Extract from DashboardPage.tsx, make reusable

#### DataTable.tsx
```typescript
interface DataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  pagination?: boolean
}
```

#### CardGrid.tsx
```typescript
interface CardGridProps<T> {
  data: T[]
  renderItem: (item: T) => React.ReactNode
  itemsPerRow?: number
  pagination?: boolean
}
```

#### Pagination.tsx
Reusable pagination component with page controls

### Step 7: Create Module Pages

#### Projects Module
- **ProjectsListPage**: Tabular view with stats (Projects count, Active, Completed, etc.)
- **ProjectsProgressPage**: Dashboard content copy
- **ProjectsMonitoringPage**: Dashboard content copy

#### Services Module
- **ServicesTicketsPage**: Tabular view with stats (Open, In Progress, Closed, etc.)
- **ServicesAssetsPage**: Tabular view with stats (Total, Active, Maintenance, etc.)

#### Admin Module
- **AdminUsersPage**: Tabular view with stats (Total, Active, Inactive, etc.)
- **AdminRolesPage**: Cards grid (3 per row) with pagination
- **AdminPermissionsPage**: Cards grid (3 per row) with pagination

### Step 8: Update Routes in main.tsx
Add all new routes:
```typescript
<Route path="/projects/list" element={<DashboardLayout><ProjectsListPage /></DashboardLayout>} />
<Route path="/projects/progress" element={<DashboardLayout><ProjectsProgressPage /></DashboardLayout>} />
<Route path="/projects/monitoring" element={<DashboardLayout><ProjectsMonitoringPage /></DashboardLayout>} />
<Route path="/services/tickets" element={<DashboardLayout><ServicesTicketsPage /></DashboardLayout>} />
<Route path="/services/assets" element={<DashboardLayout><ServicesAssetsPage /></DashboardLayout>} />
<Route path="/admin/users" element={<DashboardLayout><AdminUsersPage /></DashboardLayout>} />
<Route path="/admin/roles" element={<DashboardLayout><AdminRolesPage /></DashboardLayout>} />
<Route path="/admin/permissions" element={<DashboardLayout><AdminPermissionsPage /></DashboardLayout>} />
```

### Step 9: Add CSS Styles
- Dropdown menu styles
- Pagination button styles
- Card grid responsive layout
- Table styles (header, rows, hover states)

### Step 10: Testing
- Test module switching
- Test navigation between pages
- Test pagination on all pages
- Test responsive design
- Test dark mode compatibility

## Design System Consistency

All pages must follow:
- Theme variables from globals.css
- Font: JetBrains Mono for labels, Inter for content
- Accent color: #ff4d00 (axon-accent)
- Border color: var(--color-structural)
- Background: var(--color-bg-surface) for cards
- Text: var(--color-text-muted) for secondary text
- Hover effects: hover:bg-black/5 dark:hover:bg-white/5

## Dummy Data Structure

### Tabular Data (for List, Users, Tickets, Assets)
```typescript
interface TableData {
  id: string
  name: string
  status: 'active' | 'inactive' | 'pending'
  createdAt: string
  [key: string]: any
}
```

### Card Data (for Roles, Permissions)
```typescript
interface CardData {
  id: string
  title: string
  description: string
  badge?: string
  icon?: React.ElementType
}
```

## Notes
- All pages should use the unified design system
- Pagination should be consistent across all pages
- Module switching should update the sidebar menu dynamically
- Header title should reflect current page context
