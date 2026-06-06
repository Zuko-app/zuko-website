'use client'

import { useActionState } from 'react'
import { submitPartner, type FormState } from '@/app/actions'

export default function PartnerForm() {
  const [state, action, pending] = useActionState<FormState, FormData>(submitPartner, null)

  if (state && 'submitted' in state) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-[15px] font-medium" style={{ color: '#292929' }}>
          Thanks for getting in touch!
        </p>
        <p className="text-[14px]" style={{ color: '#9A9A85' }}>
          We&apos;ll be in touch with you soon.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-4">
      {state && 'error' in state && (
        <p className="text-[13px]" style={{ color: '#EA6134' }}>
          Something went wrong. Please try again.
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="h-11 rounded-full border px-5 text-[14px] outline-none transition-colors"
          style={{ borderColor: '#D5D3CC', backgroundColor: 'white', color: '#292929' }}
        />
        <input
          type="text"
          name="business"
          required
          placeholder="Business name"
          className="h-11 rounded-full border px-5 text-[14px] outline-none transition-colors"
          style={{ borderColor: '#D5D3CC', backgroundColor: 'white', color: '#292929' }}
        />
      </div>
      <input
        type="email"
        name="email"
        required
        placeholder="Email address"
        className="h-11 rounded-full border px-5 text-[14px] outline-none transition-colors"
        style={{ borderColor: '#D5D3CC', backgroundColor: 'white', color: '#292929' }}
      />
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us a bit about your venue..."
        className="rounded-2xl border px-5 py-3 text-[14px] outline-none transition-colors resize-none"
        style={{ borderColor: '#D5D3CC', backgroundColor: 'white', color: '#292929' }}
      />
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          id="partner-consent"
          required
          className="mt-1 accent-[#5E714B]"
        />
        <label htmlFor="partner-consent" className="text-[12px] leading-relaxed" style={{ color: '#9A9A85' }}>
          I agree to be contacted by Zuko and have read the{' '}
          <a href="/privacy" className="underline hover:opacity-70" style={{ color: '#6B6B5A' }}>Privacy Policy</a>.
        </label>
      </div>
      <button
        type="submit"
        disabled={pending}
        className="h-11 rounded-full px-6 text-[14px] font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50 self-start"
        style={{ backgroundColor: '#D4A843' }}
      >
        {pending ? 'Sending...' : 'Get in touch'}
      </button>
    </form>
  )
}
