require('dotenv').config();
import 'dotenv/config';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { first_name, last_name, email, phone_number, area, cleaning_type, info } = await req.json();

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, 
        auth: {
          user: process.env.EMAIL_USER, 
          pass: process.env.EMAIL_PASS  
        }
      });

      const mailOptions = {
        from: email, 
        to: 'cleaningresco@gmail.com',
        subject: 'Resco Cleaning: Contact Form Submission',
        html: `
          <h2>Contact Form Submission</h2>
          <p><strong>First Name:</strong> ${first_name}</p>
          <p><strong>Last Name:</strong> ${last_name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone_number}</p>
          <p><strong>Service Area/Location:</strong> ${area}</p>
          <p><strong>Cleaning Type:</strong> ${cleaning_type}</p>
          <p><strong>Info:</strong> ${info}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: 'Email has been sent' });

    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ message: 'Error sending email' });
    }
  } else {
    return NextResponse.json({ message: 'Method not allowed' });
  }
}
