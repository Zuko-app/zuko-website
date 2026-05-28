'use client'

import { useActionState } from 'react'
import { submitWaitlist, type FormState } from '@/app/actions'

export default function EmailSignup() {
  const [state, action, pending] = useActionState<FormState, FormData>(submitWaitlist, null)

  if (state && 'submitted' in state) {
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
    <form action={action} className="flex flex-col gap-3 sm:flex-row sm:gap-2">
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
        style={{ backgroundColor: '#5E714B' }}
      >
        {pending ? 'Joining...' : 'Join the waitlist'}
      </button>
      {state && 'error' in state && state.error === 'already_exists' && (
        <p className="text-[13px] mt-1" style={{ color: '#EA6134' }}>
          Looks like you&apos;re already on the list!
        </p>
      )}
    </form>
  )
}
