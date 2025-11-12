import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json() as ContactPayload;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Log config (without password)
    console.log('Email config:', {
      host: process.env.EMAIL_SMTP_SERVER,
      port: process.env.EMAIL_PORT,
      username: process.env.EMAIL_USERNAME,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      hasPassword: !!process.env.EMAIL_PASSWORD,
    });

    // Create SMTP transporter using IONOS
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SMTP_SERVER || 'smtp.ionos.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // false for STARTTLS on port 587
      requireTLS: true, // Force TLS
      auth: {
        user: process.env.EMAIL_USERNAME?.trim(),
        pass: process.env.EMAIL_PASSWORD?.trim(),
      },
    });

    // Verify connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || `New Contact Form Submission from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
          <hr style="margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Email send error:', error);
      return NextResponse.json(
        { error: 'Failed to send email', detail: error.message },
        { status: 500 }
      );
    }
    console.error('Unknown email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
