import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = "pratyuktnag@gmail.com";  // ✅ YOUR Gmail address

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    if (!email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail, // ✅ still onboarding@resend.dev
      to: [toEmail],   // ✅ always send to your Gmail
      subject: `New Contact Form Submission: ${subject}`,
      react: (
        <>
          <h2>New message from: {email}</h2>
          <p><strong>Subject:</strong> {subject}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
        </>
      ),
    });

    console.log("Email sent to Gmail:", data);
    return NextResponse.json({ status: "sent", id: data.id });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
