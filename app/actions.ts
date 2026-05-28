'use server'

import { supabase } from '@/lib/supabase'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// Update this when you're ready to change your notification email
const NOTIFY_EMAIL = 'admin@amavih.com'

export type FormState = { submitted: true } | { error: string } | null

export async function submitWaitlist(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string
  if (!email) return { error: 'Email required' }

  const { error } = await supabase.from('waitlist').insert({ email })

  if (error) {
    if (error.code === '23505') return { error: 'already_exists' }
    return { error: error.message }
  }

  await resend.emails.send({
    from: 'Zuko <onboarding@resend.dev>',
    to: NOTIFY_EMAIL,
    subject: 'New Zuko waitlist signup',
    html: `<p><strong>${email}</strong> just joined the Zuko waitlist.</p>`,
  })

  return { submitted: true }
}

export async function submitPartner(_prev: FormState, formData: FormData): Promise<FormState> {
  const name = formData.get('name') as string
  const business = formData.get('business') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  const { error } = await supabase.from('partner_contacts').insert({ name, business, email, message })

  if (error) return { error: error.message }

  await resend.emails.send({
    from: 'Zuko <onboarding@resend.dev>',
    to: NOTIFY_EMAIL,
    subject: `New partner inquiry from ${business}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Business:</strong> ${business}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message || '—'}</p>
    `,
  })

  return { submitted: true }
}
