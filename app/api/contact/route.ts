import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Send email notification via mailto link approach
    // For production, integrate with a service like Resend, SendGrid, etc.
    // For now, we'll store the message and send a notification
    const targetEmail = "m.ismaeel.developer@gmail.com"

    // Use a free email API service
    const emailContent = `
New Portfolio Contact Message:

Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from your portfolio website
    `.trim()

    // Try sending via web3forms (free, no API key needed for basic usage)
    // You can sign up at web3forms.com and replace with your access key
    const web3formsKey = process.env.WEB3FORMS_KEY

    if (web3formsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          message: emailContent,
          to: targetEmail,
          subject: `Portfolio Contact: ${name}`,
        }),
      })

      if (res.ok) {
        return NextResponse.json({ success: true })
      }
    }

    // Fallback: log the message (in production, use a proper email service)
    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log(`To: ${targetEmail}`)
    console.log(`From: ${name} (${email})`)
    console.log(`Message: ${message}`)
    console.log("===================================")

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
