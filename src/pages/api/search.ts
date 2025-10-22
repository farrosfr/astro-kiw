import type { APIRoute } from 'astro';
import { pool } from '../../lib/db';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify({ error: 'Query pencarian dibutuhkan' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const [rows] = await pool.execute(
      `SELECT id, name, imageUrl FROM products WHERE name LIKE ? OR description LIKE ? LIMIT 10`,
      ['%' + query + '%', '%' + query + '%']
    );

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Terjadi kesalahan pada server' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};