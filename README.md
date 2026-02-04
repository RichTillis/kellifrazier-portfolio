# Kelli Frazier Portfolio

A personal portfolio website built with Gatsby.js v2, based on the Dimension template by HTML5 UP.

## About

This portfolio showcases Kelli Frazier's professional background, including:

- Educational philosophy
- Career history
- Resume and letters of recommendation
- Professional resources
- Contact information

## Prerequisites

- **Node.js 18.x** (recommended)
- **npm** (comes with Node.js)
- **nvm** (optional, for managing Node versions)

If using nvm:
```bash
nvm install 18
nvm use 18
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kellifrazier-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

## Development

Start the development server:
```bash
npm run develop
```

The site will be available at:
- **Main site:** http://localhost:8000/
- **Netlify CMS:** http://localhost:8000/admin/
- **GraphQL Explorer:** http://localhost:8000/___graphql

## Building for Production

Create an optimized production build:
```bash
npm run build
```

The output will be in the `public/` directory.

## Deployment

### Netlify (Recommended)

This project is configured for Netlify deployment:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "Add new site" > "Import an existing project"
4. Connect your repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `public`
   - **Node version:** Set `NODE_VERSION` environment variable to `18`
6. Click "Deploy site"

Netlify will automatically rebuild and deploy when you push changes.

### Manual Deployment

For other hosting platforms, build the site and upload the `public/` folder:

```bash
npm run build
```

The `public/` directory contains static files that can be served by any web server or CDN (AWS S3, GitHub Pages, Vercel, etc.).

## Project Structure

```
src/
  components/    # React components (Header, Main, Footer, Layout)
  pages/         # Page components
  assets/
    scss/        # Stylesheets
    css/         # Compiled CSS
  images/        # Image assets
  documents/     # PDFs (resume, recommendations)
gatsby-config.js # Gatsby configuration
```

## Technologies

- [Gatsby.js](https://www.gatsbyjs.com/) v2 - Static site generator
- [React](https://reactjs.org/) - UI library
- [Sass](https://sass-lang.com/) - CSS preprocessor
- [Netlify CMS](https://www.netlifycms.org/) - Content management

## License

MIT
