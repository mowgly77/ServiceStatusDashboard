# Service Status Dashboard

A service status dashboard application built with Next.js, React, and TypeScript following the requirements of using only necessary libraries (no Tailwind CSS).

## Project Overview

This project was built as a take-home assignment that demonstrates:
- Server-Side Rendering (SSR) with Next.js App Router
- Block loader implementation during data fetching
- Custom CSS styling without external frameworks
- TypeScript for type safety
- Responsive design principles

## How the Project Was Built

### 1. Project Initialization
```bash
npx create-next-app@latest status-page-app --typescript --tailwind --eslint --app
```
Then removed Tailwind CSS as per requirements.

### 2. Core Architecture Decisions

**Next.js App Router**: Used for modern React patterns and SSR capabilities
**TypeScript**: For type safety and better development experience
**Custom CSS**: Pure CSS without frameworks to meet requirements
**Server Components**: For optimal SSR performance

### 3. Key Implementation Details

#### Server-Side Rendering (SSR)
- Uses Next.js App Router with Server Components
- Implements `export const dynamic = 'force-dynamic'` to prevent static generation
- Server renders the initial page with loading states

#### Block Loader Implementation
- `loading.tsx` file provides the loading UI during SSR
- Shows all services in "Loading" state initially
- Transitions to real data after 5-10 second delay

#### Data Flow
1. User visits page → Server renders loading state
2. `getServiceStatus()` function simulates API call with delay
3. After delay, real service data is returned
4. Page updates with actual service statuses

## Project Structure Explained

```
status-page-app/
├── components/                 # Reusable React components
│   ├── ServiceStatusBadge.tsx # Badge component for service status
│   └── StatusPage.tsx         # Main dashboard component
├── data/
│   └── mockData.ts            # Mock service data
├── lib/
│   └── data.ts                # Data fetching logic and delay simulation
├── src/
│   └── app/                   # Next.js App Router directory
│       ├── globals.css        # Global CSS styles (no frameworks)
│       ├── layout.tsx         # Root layout component
│       ├── loading.tsx        # Loading UI for SSR
│       └── page.tsx           # Main page component
├── types.ts                   # TypeScript type definitions
├── .gitignore                 # Git ignore rules
└── README.md                  # This documentation
```

### Component Breakdown

#### `ServiceStatusBadge.tsx`
- Handles individual service status display
- Maps status types to CSS classes
- Provides visual feedback with colors

#### `StatusPage.tsx`
- Main dashboard component
- Sorts services alphabetically
- Manages loading state display

#### `page.tsx` (Server Component)
- Handles data fetching on the server
- Implements the 5-10 second delay
- Renders final UI with real data

#### `loading.tsx`
- Provides loading UI during SSR
- Shows block loader while waiting for data

#### `globals.css`
- Custom CSS without external frameworks
- Responsive design with media queries
- Status badge styling with animations

## Technologies Used

- **Next.js 16**: React framework with App Router for SSR
- **React 19**: Latest React with Server Components
- **TypeScript**: Static typing for JavaScript
- **Custom CSS**: Pure CSS without frameworks (as required)

## Installation & Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd status-page-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Access the application**
Open `http://localhost:3000` in your browser

## How It Works

### Initial Load Process
1. User navigates to the page
2. Next.js renders `loading.tsx` immediately (Block Loader)
3. Server executes `getServiceStatus()` with 5-10 second delay
4. After delay, page updates with real service data

### Service States
- 🟢 **Online**: Green badge - service functioning correctly
- 🟡 **Degraded**: Yellow badge - service with minor issues  
- 🔴 **Offline**: Red badge - service unavailable
- ⚪ **Loading**: Gray badge with pulse animation - temporary loading state

### Key Features Implemented

✅ **Server-Side Rendering**: Page renders on server before sending to client  
✅ **Block Loader**: Loading states visible during data fetching  
✅ **5-10 Second Delay**: Simulates real API response time  
✅ **Alphabetical Sorting**: Services automatically sorted by name  
✅ **Custom CSS**: Pure CSS styling without external frameworks  
✅ **Responsive Design**: Works on mobile and desktop  
✅ **TypeScript**: Full type safety throughout the application  

## Development Notes

### Why No Tailwind CSS?
The requirements explicitly stated: "The application should only be built using libraries that are necessary to accomplish the requirements of this app (no tailwind, for example)"

### SSR Implementation
- Uses Next.js App Router for modern SSR patterns
- Server Components for optimal performance
- `dynamic = 'force-dynamic'` prevents static generation

### CSS Architecture
- Custom CSS classes for maintainability
- Responsive design with CSS Grid and Flexbox
- CSS animations for loading states
- BEM-like naming convention

## Production Build

```bash
npm run build
npm start
```

## Testing the Application

1. Start the development server
2. Navigate to `http://localhost:3000`
3. Observe the loading states for 5-10 seconds
4. Verify services update with real statuses
5. Check responsive design on different screen sizes

## Requirements Compliance

This implementation fulfills all specified requirements:
- ✅ React-based application
- ✅ Server-Side Rendering (SSR)
- ✅ Block loader during data fetching
- ✅ 5-10 second delay simulation
- ✅ Alphabetical service ordering
- ✅ Unique status badges
- ✅ No unnecessary libraries (no Tailwind CSS)
- ✅ Complete documentation