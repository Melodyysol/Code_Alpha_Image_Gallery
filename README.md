# Frontend App

This is the React + Vite frontend for the Image Gallery application.

## Overview

The frontend provides the user-facing experience for:

- account registration and sign-in
- dashboard navigation
- gallery browsing and search
- category-based image filtering
- profile image management
- user security and session flow

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS
- DaisyUI
- React Router
- Lucide Icons
- Framer Motion

## Project Structure

```bash
frontend/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── custom-hooks/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── utilities/
│   ├── api.ts
│   ├── main.tsx
│   ├── index.css
│   └── routes/
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── eslint.config.js
├── index.html
└── README.md
```

## Installation

```bash
cd frontend
npm install
```

## Run locally

```bash
npm run dev
```

By default, Vite runs on:

- http://localhost:5173

## Production build

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Environment and API Notes

The frontend depends on the backend API being available and correctly configured. Ensure the backend server is running before testing authentication, uploads, or gallery-related features.

## Key user flows

- sign up for an account
- sign in to access the dashboard
- search and filter images
- browse the gallery
- update profile-related actions

## Styling

The design uses Tailwind CSS with DaisyUI to keep the interface modern, responsive, and consistent throughout the application.

## Useful commands

```bash
npm run dev
npm run build
npm run lint
```

## Troubleshooting

- App fails to load: verify the dev server started successfully.
- API requests fail: confirm the backend is running and reachable.
- Styling issues: rebuild the app and confirm the Tailwind/DaisyUI setup.
