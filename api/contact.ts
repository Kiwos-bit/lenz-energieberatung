
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, tel, service, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email and message are required' });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
        return res.status(500).json({ error: 'Mail service not configured' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Lenz Energieberatung <onboarding@resend.dev>',
                to: ['info@lenzenergieberatung.de'],
                reply_to: email,
                subject: `Neue Anfrage: ${service || 'Allgemein'} von ${name}`,
                html: `
          <h3>Neue Kontaktanfrage über die Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${tel || 'Nicht angegeben'}</p>
          <p><strong>Anliegen:</strong> ${service || 'Nicht angegeben'}</p>
          <br>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
            }),
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            const errorData = await response.json();
            console.error('Resend Error:', errorData);
            // Return specific error message from Resend if available
            return res.status(response.status).json({
                error: errorData.message || 'Failed to send email',
                details: errorData
            });
        }
    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
