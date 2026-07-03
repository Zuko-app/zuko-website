'use client'

import { useState } from 'react'
import Image from 'next/image'
import EmailSignup from './EmailSignup'

export default function WaitlistModal() {
  const [open, setOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)


  const handleClose = () => {
    setOpen(false)
    sessionStorage.setItem('waitlist-seen', 'true')
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[11px] rounded-full px-5 py-2 font-bold uppercase tracking-widest transition-all hover:opacity-80 self-center"
        style={{ backgroundColor: '#D4A843', color: '#FAFAF7', letterSpacing: '0.1em' }}
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
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#FAFAF7' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gold accent bar */}
            <div className="h-1 w-full" style={{ backgroundColor: '#D4A843' }} />

            <div className="p-10">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-6 text-[22px] leading-none transition-opacity hover:opacity-40"
                style={{ color: '#B0ADA6' }}
                aria-label="Close"
              >
                ×
              </button>

              {/* Logo */}
              <Image src="/ZUKO-LOGO.png" alt="Zuko" width={90} height={32} className="mb-8" />

              {!submitted && (
                <>
                  <h2
                    className="text-[24px] font-bold leading-tight tracking-tight mb-3"
                    style={{ color: '#292929' }}
                  >
                    No more guessing.<br />No more calling ahead.
                  </h2>
                  <p className="text-[14px] mb-8 leading-relaxed" style={{ color: '#6B6B5A' }}>
                    Join the waitlist and we&apos;ll let you know when Zuko launches in London.
                  </p>
                </>
              )}
              <EmailSignup onSuccess={() => setSubmitted(true)} />
              <p className="mt-4 text-[12px]" style={{ color: '#B0ADA6' }}>
                No spam, ever.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
