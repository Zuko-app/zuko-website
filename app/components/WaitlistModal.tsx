'use client'

import { useState, useEffect } from 'react'
import EmailSignup from './EmailSignup'

export default function WaitlistModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('waitlist-seen')) return
    const timer = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem('waitlist-seen', 'true')
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setOpen(false)
    sessionStorage.setItem('waitlist-seen', 'true')
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[11px] rounded-full px-5 py-2.5 font-bold uppercase tracking-widest transition-all hover:scale-105 animate-badge-flash"
        style={{
          backgroundColor: '#FAFAF7',
          color: '#292929',
          border: '2px dashed #D4A843',
          letterSpacing: '0.1em',
        }}
      >
        Join the waitlist
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-10"
            style={{ backgroundColor: '#FAFAF7' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-[20px] leading-none transition-opacity hover:opacity-50"
              style={{ color: '#292929' }}
              aria-label="Close"
            >
              ×
            </button>

            {!submitted && (
              <>
                <h2
                  className="text-[28px] font-bold leading-tight tracking-tight mb-3"
                  style={{ color: '#292929' }}
                >
                  No more guessing. No more calling ahead.
                </h2>
                <p className="text-[15px] mb-8" style={{ color: '#6B6B5A' }}>
                  Join the waitlist and we&apos;ll let you know when Zuko launches in London.
                </p>
              </>
            )}
            <EmailSignup onSuccess={() => setSubmitted(true)} />
            <p className="mt-4 text-[12px]" style={{ color: '#9A9A85' }}>
              No spam, ever.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
