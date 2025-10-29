import type { APIRoute } from 'astro';
import { pool } from '../../lib/db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { productId, productName, quantity, customerName, companyName, email, phone, message } = data;

    if (!productId || !productName || !quantity || !customerName || !email || !phone) {
      return new Response(JSON.stringify({
        message: 'Missing required fields',
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Insert RFQ into database
    const [result] = await pool.query(
      'INSERT INTO rfq (product_id, product_name, quantity, customer_name, company_name, email, phone, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [productId, productName, quantity, customerName, companyName, email, phone, message]
    );

    // --- Placeholder for Email Notification to Business Team ---
    // In a real application, you would integrate with an email service (e.g., Nodemailer, SendGrid, Mailgun)
    // and send an email to your sales team here.
    console.log('RFQ submitted. Business team would be notified via email.');
    console.log('RFQ Details:', data);
    // -----------------------------------------------------------

    return new Response(JSON.stringify({
      message: 'RFQ submitted successfully!',
      rfqId: (result as any).insertId,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Error submitting RFQ:', error);
    return new Response(JSON.stringify({
      message: 'Failed to submit RFQ',
      error: (error as Error).message,
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
