# Food Recipes (React)

A simple, fast recipe search app built with React, React Router, and Tailwind CSS. Search recipes via the Forkify API, view details, and manage a local favorites list with light/dark theme support.

## Features
- Search recipes by keyword using the Forkify API
- View recipe details: image, publisher, and ingredients
- Add/remove favorites (stored in `localStorage`)
- Light/Dark theme toggle (persisted in `localStorage`)
- Loading states and basic error/info messages
- Responsive UI styled with Tailwind CSS

## Tech Stack
- React 18 (Create React App)
- React Router v6
- Tailwind CSS (dark mode via `class`)
- Forkify API (`https://forkify-api.herokuapp.com/api/v2`)

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Install
```bash
npm install
```

### Run Dev Server
```bash
npm start
```
This runs the app in development at `http://localhost:3000/`.

### Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

## Project Structure
```
src/
  components/
    Loader.jsx
    navbar/
      index.jsx
    recipe-item/
      index.jsx
  context/
    index.jsx        # Global context: search, recipes, favorites, theme, info/error
  pages/
    home/
      index.jsx
    favorites/
      index.jsx
    details/
      index.jsx
  App.js             # Routes: /, /favorites, /recipe-item/:id
```

## How It Works
- `Navbar` contains search input and theme toggle. Submitting triggers a fetch to Forkify search endpoint.
- `Home` lists results via `RecipeItem` cards.
- `Details` fetches a single recipe by `:id` and displays ingredients with Add/Remove Favorites.
- `Favorites` shows locally saved favorites.
- Global state persists `recipeList`, `favorites`, `searchParam`, and `theme` in `localStorage`.

## Configuration
Tailwind is configured with dark mode via `class` in `tailwind.config.js`. Content scanning includes `./src/**/*.{js,jsx,ts,tsx}`.

No API key is required for Forkify public endpoints used here.

## Accessibility
- Keyboard-focusable controls
- Reduced motion friendly (basic spinner only)
- Sufficient contrast in both themes (tweak as needed)

## Troubleshooting
- If recipes do not load, check network tab and CORS. The app shows an error message on fetch failures.
- If theme doesn’t persist, confirm browser `localStorage` is enabled and not blocked in private mode.

## Scripts
- `npm start` – Start dev server
- `npm run build` – Production build
- `npm test` – Run tests (CRA default)
- `npm run eject` – Eject configuration (irreversible)

## License
MIT
