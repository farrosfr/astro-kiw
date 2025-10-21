import mysql from 'mysql2/promise';

// Astro exposes environment variables via `import.meta.env`
const dbHost = import.meta.env.DB_HOST;
const dbUser = import.meta.env.DB_USER;
const dbPassword = import.meta.env.DB_PASSWORD;
const dbName = import.meta.env.DB_NAME;

if (!dbHost || !dbUser || !dbPassword || !dbName) {
  throw new Error(
    'Database credentials are not set in the environment variables. Please check your .env file.'
  );
}

export const pool = mysql.createPool({
  host: dbHost,
  user: dbUser,
  password: dbPassword,
  database: dbName,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
