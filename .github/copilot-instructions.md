# Eleventy Excellent - Copilot Instructions

This is an **Eleventy Excellent** static site generator project based on Andy Bell's buildexcellentwebsit.es methodology. It's a design-token-driven, modular Eleventy starter with Tailwind CSS integration.

## Architecture Overview

**Core Tech Stack:**
- Eleventy 3.x with ES modules
- TailwindCSS with design tokens
- PostCSS build pipeline
- WebC components
- Nunjucks templating (`.njk`)

**Key Principle:** Configuration is split across `src/_config/*` files rather than a monolithic eleventy.config.js. The main config imports organized modules for collections, filters, plugins, shortcodes, and events.

## Project Structure Patterns

### Configuration Organization
- `src/_config/collections.js` - Collection definitions (getAllPosts, tagList, etc.)
- `src/_config/plugins.js` - Plugin exports and custom transforms
- `src/_config/events.js` - Build events (CSS/JS compilation, image processing)
- `src/_config/filters.js` - Template filters (dates, markdown, slugify)
- `src/_config/shortcodes.js` - Custom shortcodes (image, svg, year)

### Data Layer
- `src/_data/` - Global data files (navigation.js, meta.js, designTokens/*.json)
- `src/_data/designTokens/` - JSON design tokens for colors, spacing, typography
- Design tokens are processed via `src/_config/utils/tokens-to-tailwind.js`

### Content Structure
- `src/posts/**/*.md` - Blog posts organized by year (2016/, 2017/, etc.)
- `src/pages/` - Static pages (about.md, privacy.md, etc.)
- Front matter uses `tags`, `date`, `title`, `description` consistently

### Asset Pipeline
- CSS: `src/assets/css/` → compiled to `src/_includes/css/` via PostCSS
- Images: Processed via `@11ty/eleventy-img` with webp/jpeg formats
- Scripts: Built via esbuild in `src/_config/events/build-js.js`

## Development Workflows

**Essential Commands:**
```bash
npm start          # Development server with watch mode
npm run build      # Production build with minification  
npm run clean      # Clean dist and compiled assets
npm run favicons   # Generate favicon variations
npm run colors     # Process design token colors
```

**Build Process:**
1. `eleventy.before` event runs CSS/JS compilation
2. Eleventy processes templates and collections
3. Image optimization happens during template processing
4. SVG to JPEG conversion runs after build in serve mode

## Key Conventions

### Design Token Integration
- Design tokens in `src/_data/designTokens/*.json` drive Tailwind config
- Use `clampGenerator()` for responsive spacing/typography
- Color tokens generate CSS custom properties AND Tailwind classes

### Image Handling
- Use `{% image %}` shortcode for optimized images with lazy loading
- Images auto-generate webp + fallback formats
- Open Graph images auto-generated for blog posts

### Template Patterns
- Layout aliases: `base`, `page`, `post`, `tags` 
- Base layout is `_layouts/base.njk` - handles meta, CSS, scripts
- Post layout includes automatic tag lists and metadata
- Use `markdownFormat` filter for processing markdown in data

### Component Strategy
- WebC components in `src/_includes/webc/`
- CSS-only components in `src/_includes/css/` (compiled from assets)
- Global CSS uses CUBE methodology (Composition, Utilities, Blocks, Exceptions)

### Content Collections
- `allPosts` - All blog posts sorted by date (reverse chronological)
- `tagList` - Unique tags excluding 'posts', 'docs', 'all'
- `showInSitemap` - Pages to include in sitemap.xml

## Configuration Specifics

### Eleventy Config
- Input: `src/`, Output: `dist/`
- Markdown engine: `njk` (markdownTemplateEngine)
- Watch targets include asset directories and WebC files
- Passthrough copy for fonts, images, favicons, and node_modules components

### Tailwind Integration
- Config imports design tokens and processes them via utility functions
- Custom screens: `ltsm`, `ltnavigation` (max-width), standard responsive breakpoints
- Spacing and typography use CSS clamp() for fluid scaling

### Environment Variables
- `ELEVENTY_ENV` controls development vs production builds
- `ELEVENTY_RUN_MODE=serve` enables additional build steps
- `URL` environment variable sets canonical site URL

## Debugging & Common Tasks

**Adding New Posts:** Create `.md` files in `src/posts/YYYY/` with proper front matter
**Custom Collections:** Add to `src/_config/collections.js` and register in main config
**New Design Tokens:** Add JSON files to `src/_data/designTokens/` and import in Tailwind config
**CSS Changes:** Edit in `src/assets/css/` - files auto-compile to `src/_includes/css/`
**Navigation:** Update `src/_data/navigation.js` for header/footer links

**Performance:** Images are automatically optimized. Use `{% image %}` shortcode for best results.
**SEO:** Meta tags, Open Graph, and JSON-LD structured data are handled by base layout.