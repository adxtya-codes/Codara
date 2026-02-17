import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, role, portfolio, message } = body;

        // Create a transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Check if these exist
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'teamcodara@gmail.com',
            subject: `New Hiring Application: ${role} - ${name}`,
            text: `
Name: ${name}
Email: ${email}
Role: ${role}
Portfolio/LinkedIn: ${portfolio}

Message:
${message}
            `,
            html: `
<h3>New Hiring Application</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Role:</strong> ${role}</p>
<p><strong>Portfolio/LinkedIn:</strong> ${portfolio}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Application sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send application', details: (error as Error).message },
            { status: 500 }
        );
    }
}
