import { Resend } from 'resend'

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, phone, message } = await req.json()

  if (!name || !phone || !message) {
    return Response.json({ error: 'All fields required' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Shabir Carpets <onboarding@resend.dev>',
      to: 'northfacepk@gmail.com',
      subject: `New Inquiry from ${name}`,
      html: `<div style="font-family: sans-serif;"><h2 style="color: #0A1628;">New Inquiry - Shabir Carpets Chitral</h2><p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Message:</b> ${message}</p></div>`,
    })
    return Response.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return Response.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
