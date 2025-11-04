# B2B Electrical Supplies Project - SonusHUB for KIW

> This repository contains the source code for the B2B electrical supplies platform developed by SonusHUB for KIW.

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

## Tech Stack

This project is built with the following technologies:

- **[Astro](https://astro.build/)**: The web framework for building fast, content-focused websites.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[MySQL](https://www.mysql.com/)**: The database used for storing product and RFQ data.

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
- `/product/[slug]` (`src/pages/product/[slug].astro`): Shows the detail page for a single product based on its unique `slug`. This page now includes an "Unduh Datasheet" button.
- `/kategori` (`src/pages/kategori.astro`): Displays a list of all available product categories.
- `/kategori/[kategori]` (`src/pages/kategori/[kategori].astro`): Displays all products belonging to a specific category.
- `/merk` (`src/pages/merk.astro`): Displays a list of all available product brands.
- `/merk/[brand]` (`src/pages/merk/[brand].astro`): Displays all products belonging to a specific brand.
- `/blog` (`src/pages/blog.astro`): A page for blog posts.
- `/api/search` (`src/pages/api/search.ts`): An API endpoint for searching products.
- `/api/rfq` (`src/pages/api/rfq.ts`): An API endpoint for "Request for Quote" submissions.

## State Management

In this project, state management is handled locally within the components that require it. There is no global state management library (like Nanostores or Redux) implemented. Any client-side interactivity relies on standard browser APIs and client-side scripts defined within the Astro components themselves. This approach keeps the project lightweight and is well-suited for content-focused websites where global state is not a primary concern.

## Database

This project uses a **MySQL** database to store product information. The connection is managed through a connection pool using the `mysql2` library, as configured in `src/lib/db.ts`.

### `products` Table

This is the primary table in the database, containing all product data.

| Column      | Type          | Description                                                  |
| :---------- | :------------ | :----------------------------------------------------------- |
| `id`        | `INT` (PK)    | The unique identifier for each product.                      |
| `name`      | `VARCHAR(255)`| The name of the product.                                     |
| `description`| `TEXT`        | A detailed description of the product.                       |
| `price`     | `DECIMAL`     | The price of the product.                                    |
| `imageUrl`  | `VARCHAR(255)`| The URL path to the product's image.                         |
| `slug`      | `VARCHAR(255)`| A URL-friendly slug for the product page (e.g., `kabel-nym-3x2-5mm`). |
| `kategori`  | `VARCHAR(255)`| The category the product belongs to.                         |
| `brand`     | `VARCHAR(255)`| The brand name of the product.                               |
| `datasheetUrl`| `VARCHAR(255)`| (Planned) The URL path to the product's datasheet. Currently a placeholder. |
| `created_at`| `TIMESTAMP`   | The timestamp when the product was added (defaults to `CURRENT_TIMESTAMP`). |

### `rfq` (Request for Quote) Table

This table stores submissions from the "Request for Quote" form.

| Column          | Type          | Description                                                 |
| :-------------- | :------------ | :---------------------------------------------------------- |
| `id`            | `INT` (PK)    | The unique identifier for each RFQ submission.              |
| `product_id`    | `INT`         | Foreign key referencing the `id` of the requested product.  |
| `product_name`  | `VARCHAR(255)`| The name of the product at the time of the request.         |
| `quantity`      | `INT`         | The quantity of the product being requested.                |
| `customer_name` | `VARCHAR(255)`| The name of the customer submitting the request.            |
| `company_name`  | `VARCHAR(255)`| The customer's company name (optional).                     |
| `email`         | `VARCHAR(255)`| The customer's email address.                               |
| `phone`         | `VARCHAR(50)` | The customer's phone number.                                |
| `message`       | `TEXT`        | Any additional message from the customer (optional).        |
| `created_at`    | `TIMESTAMP`   | The timestamp when the RFQ was submitted.                   |

## Live Preview

To see a live preview of this project, visit: [astro.sonushub.id](https://astro.sonushub.id)
