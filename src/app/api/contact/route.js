// Purpose: Handle POST request to send an email using nodemailer
import { NextResponse } from "next/server";

// Handle POST request to send an email using nodemailer
export async function POST(request) {
  require("dotenv").config(); // Load environment variables for email configuration

  const data = await request.json(); // Parse incoming request JSON data
  let nodemailer = require("nodemailer"); // Import nodemailer for email functionality

  try {
    // Configure the email transporter using SMTP details
    const transporter = nodemailer.createTransport({
      port: 465, // Secure SMTP port
      host: "smtp.gmail.com", // SMTP server
      service: "gmail",
      auth: {
        user: process.env.EMAIL, // Sender email from environment variables
        pass: process.env.PASSWORD, // Sender password from environment variables
      },
    });

    // Define the email content
    const info = await transporter.sendMail({
      from: `"${data.name}"`, // Display name in the sender field
      to: process.env.EMAIL, // Recipient email address
      subject: `Inquiry from Website Contact Form`, // Email subject line
      text: "", // Plain text body (left empty as HTML is used below)
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
              /* Styling for the email container and text */
              body { font-family: Arial, sans-serif; }
              .email-container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #fff; border: 2px solid #48AEDD; border-radius: 10px; }
              p { font-size: 20px; line-height: 1.5; margin-bottom: 10px; border: 2px solid #48AEDD; border-radius: 50px 20px; background-color: #48AEDD; color: white; padding: 5px; text-align: center; font-weight: 900; }
              ul { list-style-type: none; padding: 0; }
              li { margin-bottom: 5px; }
              .signature { font-style: italic; font-size: 14px; }
          </style>
      </head>
      <body>
          <div class="email-container">
              <p>${data.subject}</p> <!-- Dynamic subject -->
              <ul>
                  <li><strong>Name:</strong> ${data.name}</li>
                  <li><strong>Email:</strong> ${data.email}</li>
                  <li><strong>Phone:</strong> ${data.phoneNumber}</li>
                  <li><strong>Message:</strong><br>${data.message}</li>
              </ul>
          </div>
      </body>
      </html>
      `,
    });

    // Check if the email was successfully sent
    if (info.messageId) {
      return NextResponse.json({
        error: false,
        message: "Message successfully sent! Thank you for contacting Yuta Asakura",
      });
    }

    // Return error response if email sending failed
    return NextResponse.json({
      error: true,
      message: "Something went wrong please try again.",
    });
  } catch (e) {
    console.log(e); // Log any errors encountered during email sending
    return NextResponse.json({
      error: true,
      message: "Something went wrong please try again.",
    });
  }
}
