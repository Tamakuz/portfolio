import ContactEmail from "@/components/email/Email"
import { render } from "@react-email/render"
import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import { ReactElement } from "react"

export async function POST(req: NextRequest) {
  const body = await req.json()

  const { name, email, message, subject } = body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL as string,
      pass: process.env.NEXT_PUBLIC_PASSWORD as string,
    },
  })

  const emailHtml = await render(
    ContactEmail({ email, name, subject, message }) as ReactElement
  )

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL as string,
    subject: subject,
    replyTo: email,
    html: emailHtml,
  }

  try {
    await transporter.sendMail(mailOptions)
    return new Response("Email sent", { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response("Error sending email", { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  return new Response("Email sent", { status: 200 })
}
