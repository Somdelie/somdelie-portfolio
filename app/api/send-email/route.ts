import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to admin using Nodemailer
    const adminMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || 'admin@cautious.co.za',
      subject: `Portfolio Contact: ${subject}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background: #f5f5f5;
              }
              .header {
                background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #ff6b35;
                margin-bottom: 5px;
                display: block;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
              .value {
                background: #f9f9f9;
                padding: 15px;
                border-radius: 8px;
                border-left: 4px solid #ff6b35;
                font-size: 15px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1 style="margin: 0; font-size: 28px;">📬 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">From:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${email}" style="color: #ff6b35; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">Subject:</span>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <span class="label">Message:</span>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your portfolio contact form</p>
              <p style="margin: 5px 0;">Reply directly to this email to respond to ${name}</p>
            </div>
          </body>
        </html>
      `,
    };

    try {
      console.log('📧 Sending admin email to:', adminMailOptions.to);
      console.log('📧 From:', adminMailOptions.from);
      const adminResult = await transporter.sendMail(adminMailOptions);
      console.log('✅ Admin email sent successfully:', adminResult.messageId);
    } catch (adminError) {
      console.error('❌ Nodemailer error (admin):', adminError);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-reply to sender
    const autoReplyMailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for reaching out! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 0;
                background: #f5f5f5;
              }
              .container {
                background: #ffffff;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                margin: 20px;
              }
              .header {
                background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                color: white;
                padding: 40px 30px;
                text-align: center;
              }
              .logo {
                font-size: 48px;
                margin-bottom: 10px;
              }
              .content {
                padding: 40px 30px;
              }
              .greeting {
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin-bottom: 20px;
              }
              .message {
                font-size: 16px;
                color: #555;
                margin-bottom: 15px;
                line-height: 1.8;
              }
              .highlight-box {
                background: linear-gradient(135deg, #fff5f0 0%, #ffe8dc 100%);
                border-left: 4px solid #ff6b35;
                padding: 20px;
                border-radius: 8px;
                margin: 30px 0;
              }
              .highlight-box h3 {
                color: #ff6b35;
                margin: 0 0 10px 0;
                font-size: 18px;
              }
              .info-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
                margin: 30px 0;
              }
              .info-card {
                background: #f9f9f9;
                padding: 20px;
                border-radius: 8px;
                text-align: center;
              }
              .info-icon {
                font-size: 32px;
                margin-bottom: 10px;
              }
              .info-title {
                font-weight: bold;
                color: #333;
                font-size: 14px;
                margin-bottom: 5px;
              }
              .info-value {
                color: #ff6b35;
                font-size: 13px;
              }
              .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                color: white;
                padding: 15px 40px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: bold;
                margin: 20px 0;
                box-shadow: 0 4px 10px rgba(255, 107, 53, 0.3);
              }
              .footer {
                background: #f9f9f9;
                padding: 30px;
                text-align: center;
                color: #666;
                font-size: 13px;
                border-top: 1px solid #e0e0e0;
              }
              .social-links {
                margin: 20px 0;
              }
              .social-links a {
                display: inline-block;
                margin: 0 10px;
                color: #ff6b35;
                text-decoration: none;
              }
              @media only screen and (max-width: 600px) {
                .info-grid {
                  grid-template-columns: 1fr;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">✨</div>
                <h1 style="margin: 0; font-size: 28px;">Message Received!</h1>
              </div>
              
              <div class="content">
                <div class="greeting">Hi ${name}! 👋</div>
                
                <p class="message">
                  Thank you so much for taking the time to reach out to me! I've successfully received your message and I'm excited to read it.
                </p>
                
                <div class="highlight-box">
                  <h3>📋 Your Message Summary</h3>
                  <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
                  <p style="margin: 5px 0; color: #666; font-size: 14px;">Received on ${new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' })}</p>
                </div>
                
                <p class="message">
                  I make it a priority to respond to all inquiries personally. You can expect to hear back from me within <strong>24-48 hours</strong>. If your matter is urgent, feel free to reach out directly via phone or email.
                </p>
                
                <div class="info-grid">
                  <div class="info-card">
                    <div class="info-icon">📧</div>
                    <div class="info-title">Email</div>
                    <div class="info-value">admin@cautiousndlovu.co.za</div>
                  </div>
                  <div class="info-card">
                    <div class="info-icon">📱</div>
                    <div class="info-title">Phone</div>
                    <div class="info-value">+27 603 121 981</div>
                  </div>
                  <div class="info-card">
                    <div class="info-icon">⚡</div>
                    <div class="info-title">Response Time</div>
                    <div class="info-value">24-48 hours</div>
                  </div>
                  <div class="info-card">
                    <div class="info-icon">🌍</div>
                    <div class="info-title">Location</div>
                    <div class="info-value">Johannesburg, SA</div>
                  </div>
                </div>
                
                <p class="message">
                  In the meantime, feel free to explore my portfolio to learn more about my work and experience.
                </p>
                
                <center>
                  <a href="https://cautiousndlovu.co.za" class="cta-button">View My Portfolio 🚀</a>
                </center>
              </div>
              
              <div class="footer">
                <p style="margin: 0 0 15px 0; font-size: 14px; color: #333;">
                  <strong>Looking forward to connecting with you!</strong>
                </p>
                <p style="margin: 5px 0;">Best regards,<br><strong style="color: #ff6b35;">Cautious Ndlovu</strong></p>
                <p style="margin: 5px 0;">Full Stack Developer | Johannesburg, South Africa</p>
                
                <div class="social-links">
                  <a href="mailto:admin@cautiousndlovu.co.za">📧 Email</a>
                  <a href="tel:+27603121981">📱 Call</a>
                </div>
                
                <p style="margin-top: 20px; color: #999; font-size: 11px;">
                  This is an automated confirmation email. Please do not reply directly to this email.
                  <br>If you need immediate assistance, please contact me directly.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    try {
      console.log('📧 Sending auto-reply to:', autoReplyMailOptions.to);
      const autoReplyResult = await transporter.sendMail(autoReplyMailOptions);
      console.log('✅ Auto-reply sent successfully:', autoReplyResult.messageId);
    } catch (autoReplyError) {
      console.error('❌ Auto-reply error:', autoReplyError);
      // Don't fail the request if auto-reply fails, admin email is more important
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
