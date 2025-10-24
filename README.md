# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   ├── logo.png
│   └── placeholders/
│       ├── kabel-nym.webp
│       ├── lampu-led.jpg
│       ├── mcb.webp
│       └── stop-kontak.webp
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProductCard.astro
│   │   └── Welcome.astro
│   ├── data/
│   │   └── products.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── db.ts
│   ├── pages/
│   │   ├── api/
│   │   │   └── search.ts
│   │   ├── product/
│   │   │   └── [slug].astro
│   │   ├── blog.astro
│   │   ├── index.astro
│   │   ├── katalog.astro
│   │   ├── kategori.astro
│   │   └── merk.astro
│   └── styles/
│       └── global.css
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## Application Routes

This section documents the main pages and API endpoints of the application.

-   `/` (`src/pages/index.astro`): The homepage.
-   `/katalog` (`src/pages/katalog.astro`): Displays a full catalog of all products, fetched directly from the database.
-   `/product/[slug]` (`src/pages/product/[slug].astro`): Shows the detail page for a single product. It fetches the product from the database based on its unique `slug`.
-   `/kategori/[kategori]` (`src/pages/kategori/[kategori].astro`): (To be created) Will display all products belonging to a specific category.
-   `/merk/[brand]` (`src/pages/merk/[brand].astro`): (To be created) Will display all products belonging to a specific brand.
-   `/api/search` (`src/pages/api/search.ts`): An API endpoint for searching products.

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
