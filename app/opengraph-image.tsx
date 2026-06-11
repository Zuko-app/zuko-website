import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Zuko — Dog friendly places, without the guesswork'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  const logoData = readFileSync(join(process.cwd(), 'public/logo.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          backgroundColor: '#FAFAF7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '36px',
        }}
      >
        {/* Logo */}
        <img src={logoSrc} width={560} height={200} style={{ objectFit: 'contain' }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: '72px',
            color: '#6B6B5A',
            letterSpacing: '1px',
          }}
        >
          Dog friendly, for real.
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            fontSize: '32px',
            color: '#9A9A85',
            letterSpacing: '3px',
          }}
        >
          thezukoapp.com
        </div>
      </div>
    ),
    { ...size }
  )
}
