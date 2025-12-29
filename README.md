# React Portfolio Site

This is a personal portfolio website built with React, Vite, and Framer Motion.

<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## Features

- ⚡️ **Fast Development**: Powered by Vite
- ⚛️ **Framework**: React 19
- 🎨 **Styling**: TailwindCSS (or your specific styling setup if different) & Lucide React for icons
- 🎥 **Animations**: Framer Motion
- 🚀 **Deployment**: Automated via GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repo-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### local Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Building for Production

Build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured to automatically deploy to **GitHub Pages** using GitHub Actions.

### Setup

1.  Go to your repository **Settings**.
2.  Navigate to **Pages** (under Code and automation).
3.  Under **Build and deployment**, set **Source** to **GitHub Actions**.
4.  Push your changes to the `main` branch.
5.   The `Deploy to GitHub Pages` workflow will trigger automatically.

## Project Structure

- `src/`: Source code
- `public/`: Static assets
- `.github/workflows/`: CI/CD configurations
