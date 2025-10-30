# Astro Starter Kit: Basics

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
└── package.json
```

Astro follows a clear and organized project structure. Here’s a breakdown of the key directories and their roles within this project:

- `src/components/`: Contains reusable UI components like `Header.astro`, `Footer.astro`, and `ProductCard.astro`. These components are used across different pages to build a consistent user interface.
- `src/pages/`: This directory is responsible for the application's routing. Each file in this directory corresponds to a specific URL, including dynamic routes for product details, categories, and brands.
- `src/data/`: Holds data, such as the `products.ts` file, which likely contains product information used throughout the application.
- `src/lib/`: Contains shared logic and utility functions. For example, `db.ts` might handle database connections or queries.
- `public/`: Stores static assets like images (`logo.png`), fonts, and the `favicon.svg` that are served directly by the browser.

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Components

This project uses several reusable components to build its user interface:

- `Header.astro`: The main navigation header for the application, displayed on all pages.
- `Footer.astro`: The footer section, also displayed on all pages.
- `ProductCard.astro`: A component to display a single product's summary, used in catalog and search result pages.
- `Welcome.astro`: A component for the welcome section on the homepage.

## Application Routes

This section documents the main pages and API endpoints of the application.

- `/` (`src/pages/index.astro`): The homepage.
- `/katalog` (`src/pages/katalog.astro`): Displays a full catalog of all products.
- `/product/[slug]` (`src/pages/product/[slug].astro`): Shows the detail page for a single product based on its unique `slug`.
- `/kategori` (`src/pages/kategori.astro`): Displays a list of all available product categories.
- `/kategori/[kategori]` (`src/pages/kategori/[kategori].astro`): Displays all products belonging to a specific category.
- `/merk` (`src/pages/merk.astro`): Displays a list of all available product brands.
- `/merk/[brand]` (`src/pages/merk/[brand].astro`): Displays all products belonging to a specific brand.
- `/blog` (`src/pages/blog.astro`): A page for blog posts.
- `/api/search` (`src/pages/api/search.ts`): An API endpoint for searching products.
- `/api/rfq` (`src/pages/api/rfq.ts`): An API endpoint for "Request for Quote" submissions.

## State Management

In this project, state management is handled locally within the components that require it. There is no global state management library (like Nanostores or Redux) implemented. Any client-side interactivity relies on standard browser APIs and client-side scripts defined within the Astro components themselves. This approach keeps the project lightweight and is well-suited for content-focused websites where global state is not a primary concern.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
