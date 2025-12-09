# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

폰마카세 (Phone-Makase) is a Korean food recommendation app that helps users decide what to eat for lunch, dinner, or late-night meals. It's built with React + Vite and uses Tailwind CSS for styling. The app provides randomized franchise restaurant menu recommendations based on the time of day.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173 by default)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Application Structure

The app is a **single-page application (SPA)** built with **TypeScript**. The codebase is organized into a modular structure:

```
src/
├── types/          # TypeScript type definitions
│   └── index.ts    # MenuItem, Theme, MealTime, ViewState types
├── constants/      # Static data
│   ├── menus.ts    # All menu data (MENUS object)
│   └── themes.ts   # Theme configurations (THEMES object)
├── utils/          # Helper functions
│   └── icons.tsx   # Icon mapping utility (getIconByType)
├── components/     # React components
│   ├── Header.tsx
│   ├── BottomNav.tsx
│   ├── Card.tsx
│   ├── Toast.tsx
│   ├── StartView.tsx
│   ├── LoadingView.tsx
│   ├── ResultView.tsx
│   └── index.ts    # Component exports
├── App.tsx         # Main application component
└── main.tsx        # Entry point
```

**Entry point**: `src/main.tsx` → renders `<App />` into `#root`

### Data Architecture

All menu data is **hardcoded** in `src/constants/menus.ts`:
- `MENUS.lunch`: 100 lunch menu items
- `MENUS.dinner`: 100 dinner menu items
- `MENUS.latenight`: 100 late-night menu items

Each menu item has: `id`, `brand` (franchise name), `name` (menu item), `type` (food category like burger, chicken, korean, etc.)

Theme configurations are defined in `src/constants/themes.ts` with pre-configured colors for each meal time.

### State Management

The app uses basic React `useState` with no external state libraries:
- `currentTab`: Which meal time tab is active (lunch/dinner/latenight)
- `viewState`: Current view ('start' | 'loading' | 'result')
- `recommendation`: Currently selected random menu item
- `theme`: Color scheme that changes based on meal time

### View System

Three mutually exclusive views controlled by `viewState`:
1. **StartView** - Initial state with "딸깍!" button
2. **LoadingView** - 1-second loading animation
3. **ResultView** - Shows random menu recommendation with share/retry options

### Theming System

Each tab (lunch/dinner/latenight) has its own theme with these properties:
- `bg`: Background color (yellow for lunch, orange for dinner, indigo for late-night)
- `text`: Text color
- `lightBg`: Light background for badges
- `button`: Button color
- `titleColor`: Title text color

Theme switches automatically via `useEffect` when `currentTab` changes.

## Key Implementation Details

### Random Menu Selection

When user clicks "딸깍!", the app:
1. Sets `viewState` to 'loading'
2. Waits 1 second (setTimeout)
3. Picks random item from `MENUS[currentTab]`
4. Sets `viewState` to 'result'

### Share Functionality

The share button (`handleShare`) uses the deprecated `document.execCommand('copy')` method to copy text to clipboard. Consider upgrading to the modern Clipboard API (`navigator.clipboard.writeText()`) for better browser compatibility.

### Icon Mapping

The `getIconByType()` helper in `src/utils/icons.tsx` maps food types to Lucide React icons. Each menu card shows a large, low-opacity background icon based on its type (burger → Sandwich icon, chicken → Drumstick icon, etc.)

## TypeScript

The project uses TypeScript with strict mode enabled. Key type definitions in `src/types/index.ts`:
- `MenuItem`: Menu item structure with id, brand, name, and type
- `MealTime`: Union type for 'lunch' | 'dinner' | 'latenight'
- `ViewState`: Union type for 'start' | 'loading' | 'result'
- `Theme`: Theme object structure with bg, text, lightBg, button, and titleColor
- `Tab`: Tab configuration with id, label, and icon component

## Styling Approach

- **Tailwind CSS** for all styling (no separate CSS modules)
- **Inline styles** for animations defined in JSX
- **Mobile-first** responsive design with `md:` breakpoints
- Heavy use of Tailwind's utility classes for shadows, transitions, and transforms

## Language & Content

- All UI text is in **Korean** (한국어)
- Menu data contains real Korean franchise restaurant names and menu items
- The app is designed for Korean users making food choices
