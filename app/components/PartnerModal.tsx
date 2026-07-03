'use client'

import { useState } from 'react'
import Image from 'next/image'
import PartnerForm from './PartnerForm'

export default function PartnerModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-[13px] hover:opacity-70 transition-opacity"
        style={{ color: '#9A9A85' }}
      >
        Partner enquiries
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{ backgroundColor: '#FAFAF7' }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1 w-full" style={{ backgroundColor: '#5E714B' }} />
            <div className="p-10">
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 text-[22px] leading-none transition-opacity hover:opacity-40"
                style={{ color: '#B0ADA6' }}
                aria-label="Close"
              >
                ×
              </button>
              <Image src="/ZUKO-LOGO.png" alt="Zuko" width={90} height={32} className="mb-8" />
              <h2 className="text-[24px] font-bold leading-tight tracking-tight mb-3" style={{ color: '#292929' }}>
                List your venue or event on Zuko.
              </h2>
              <p className="text-[14px] leading-relaxed mb-8" style={{ color: '#6B6B5A' }}>
                Get in touch and we&apos;ll reach out before we launch.
              </p>
              <PartnerForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
