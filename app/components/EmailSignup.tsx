'use client'

import { useActionState, useEffect } from 'react'
import { submitWaitlist, type FormState } from '@/app/actions'

export default function EmailSignup({ onSuccess }: { onSuccess?: () => void }) {
  const [state, action, pending] = useActionState<FormState, FormData>(submitWaitlist, null)
  const submitted = !!(state && 'submitted' in state)

  useEffect(() => {
    if (submitted) onSuccess?.()
  }, [submitted, onSuccess])

  if (submitted) {
    return (
      <div className="flex flex-col gap-2">
        <p className="text-[15px] font-medium" style={{ color: '#292929' }}>
          You&apos;re on the list.
        </p>
        <p className="text-[14px]" style={{ color: '#9A9A85' }}>
          We&apos;ll be in touch when Zuko launches in London.
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="h-11 flex-1 rounded-full border px-5 text-[14px] outline-none transition-colors"
          style={{ borderColor: '#D5D3CC', backgroundColor: 'white', color: '#292929' }}
        />
        <button
          type="submit"
          disabled={pending}
          className="h-11 rounded-full px-6 text-[14px] font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50 whitespace-nowrap"
          style={{ backgroundColor: '#D4A843' }}
        >
          {pending ? 'Joining...' : 'Join the waitlist'}
        </button>
      </div>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          name="consent"
          id="waitlist-consent"
          required
          className="mt-0.5 accent-[#5E714B] flex-shrink-0"
        />
        <label htmlFor="waitlist-consent" className="text-[12px] leading-relaxed" style={{ color: '#9A9A85' }}>
          I agree to receive updates from Zuko and have read the{' '}
          <a href="/privacy" className="underline hover:opacity-70" style={{ color: '#6B6B5A' }}>Privacy Policy</a>.
        </label>
      </div>
      {state && 'error' in state && state.error === 'already_exists' && (
        <p className="text-[13px]" style={{ color: '#EA6134' }}>
          Looks like you&apos;re already on the list!
        </p>
      )}
    </form>
  )
}
