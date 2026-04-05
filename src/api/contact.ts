import { Resend } from 'resend';
import type { Request, Response } from 'express';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  investorType: string;
  message?: string;
}

export async function contactHandler(req: Request, res: Response) {
  try {
    const { name, email, phone, investorType, message } = req.body as ContactForm;

    if (!name || !email || !investorType) {
      return res.status(400).json({ error: 'Name, email, and investment strategy are required.' });
    }

    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'hello@zenbooks4u.com';

    // Send notification to business owner
    await resend.emails.send({
      from: 'Zen Books <notifications@zenbooks4u.com>',
      to: notificationEmail,
      subject: `New Lead: ${name} — ${investorType}`,
      html: `
        <h2>New Portfolio Review Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Strategy:</strong> ${investorType}</p>
        <p><strong>Message:</strong> ${message || 'None'}</p>
      `,
    });

    // Send confirmation to the lead
    await resend.emails.send({
      from: 'Zen Books <hello@zenbooks4u.com>',
      to: email,
      subject: 'We received your request — Zen Books',
      html: `
        <h2>Thanks for reaching out, ${name}!</h2>
        <p>We received your portfolio review request and will be in touch within 24 hours.</p>
        <p>In the meantime, feel free to explore our services at <a href="https://zenbooks4u.com">zenbooks4u.com</a>.</p>
        <br>
        <p>— The Zen Books Team</p>
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
}
