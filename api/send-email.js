import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, subject, message } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Send email to admin using Resend Node.js SDK
    const { data, error } = await resend.emails.send({
      from: 'HorizonsForHope <noreply@horizonsforhope.com>',
      to: ['info@horizonsforhope.com'],
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Interest from Website</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the HorizonsForHope website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    // Send confirmation email to user
    await resend.emails.send({
      from: 'HorizonsForHope <noreply@horizonsforhope.com>',
      to: [email],
      subject: 'Thank you for your interest in HorizonsForHope',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Interest!</h2>
          <p>Dear Friend,</p>
          <p>Thank you for your interest in HorizonsForHope. We have received your email and will be in touch soon to discuss our programs and opportunities.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Schedule a meeting with our team</li>
            <li>Explore our curriculum</li>
            <li>Learn about volunteer opportunities</li>
          </ul>
          <p>Best regards,<br>The HorizonsForHope Team</p>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Function error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
