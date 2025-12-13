import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("API /api/contact called");
  const body = await request.json();
  console.log("BODY:", body);
  const { name, email, number, subject, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER, 
    replyTo: email,
    subject: subject || "Kontakt forma",
    text: `
From: ${name}
Email: ${email}
Number: ${number}
Subject: ${subject}
Message: ${message}
    `,
    html: `
      <b>From:</b> ${name} (${email}) <br/>
      <b>Number:</b> ${number} <br/>
      <b>Subject:</b> ${subject} <br/>
      <b>Message:</b><br/>
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
}
