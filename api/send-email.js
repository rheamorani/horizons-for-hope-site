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
      subject: 'Welcome to HorizonsForHope — Personalized Tutoring That Cares',
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 650px; margin: 0 auto; background-color: #fffaf5; border-radius: 10px; padding: 30px; border: 1px solid #f0e6dd;">
          
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f7931e; font-size: 28px; margin: 0;">HorizonsForHope</h1>
            <p style="color: #555; font-size: 16px; margin-top: 8px;">Empowering students through compassion and collaboration</p>
            <hr style="border: none; height: 2px; background-color: #f7931e; width: 60px; margin: 15px auto;">
          </div>
    
          <div style="color: #333; font-size: 16px; line-height: 1.6;">
            <p>Dear Friend,</p>
    
            <p>Thank you for reaching out to <strong>HorizonsForHope</strong>! We’re thrilled to connect with you and share more about how we’re helping students learn with confidence, curiosity, and care.</p>
    
            <h3 style="color: #f7931e; margin-top: 25px;">🌟 Who We Are</h3>
            <p>Founded by students at <strong>Carnegie Vanguard High School</strong>, HorizonsForHope was created by people who understand how challenging it can be to learn in a competitive environment. We built this program to give back — by offering one-on-one tutoring that’s <em>personalized, supportive, and local</em>.</p>
    
            <h3 style="color: #f7931e; margin-top: 25px;">📘 What We Offer</h3>
            <ul style="margin-left: 20px;">
              <li><strong>Personalized Tutoring:</strong> Tailored support in subjects like math, computer science, writing, and more.</li>
              <li><strong>Peer-to-Peer Learning:</strong> Students learn from tutors who have recently faced the same academic challenges — and know what works.</li>
              <li><strong>Mentorship Beyond Academics:</strong> We emphasize confidence, time management, and motivation as much as grades.</li>
              <li><strong>Flexible Scheduling:</strong> Sessions that fit your needs — online or in-person throughout the Houston area.</li>
            </ul>
    
            <h3 style="color: #f7931e; margin-top: 25px;">💬 Our Philosophy</h3>
            <p>We believe education should feel <strong>encouraging, not intimidating</strong>. Every student deserves the kind of guidance that helps them feel seen, capable, and inspired to learn. Our tutors build relationships — not just lessons — to help students reach their fullest potential.</p>
    
            <div style="background-color: #fff1e0; border-left: 4px solid #f7931e; padding: 15px 20px; margin: 25px 0; border-radius: 6px;">
              <p style="margin: 0; color: #555;"><strong>Next Steps:</strong></p>
              <ul style="margin: 10px 0 0 20px;">
                <li>We’ll follow up soon to learn more about your goals and match you with the right tutor.</li>
                <li>In the meantime, visit our site to learn more about our mission and volunteer opportunities.</li>
              </ul>
            </div>
    
            <p>Thank you again for taking the time to connect with us — we’re so excited to help you grow and learn with confidence.</p>
    
            <p>Warm regards,<br>
            <strong>The HorizonsForHope Team</strong></p>
          </div>
    
          <hr style="border: none; height: 1px; background-color: #eee; margin: 30px 0;">
          <div style="text-align: center; color: #888; font-size: 12px;">
            <p>This message was sent by HorizonsForHope.<br>
            <a href="https://horizonsforhope.com" style="color: #f7931e; text-decoration: none;">horizonsforhope.com</a></p>
            <p>Please do not reply to this automated message.</p>
          </div>
        </div>
      `,
    });
    

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Function error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
