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
        <img src={logoSrc} width={320} height={114} style={{ objectFit: 'contain' }} />

        {/* Tagline */}
        <div
          style={{
            fontSize: '52px',
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
            bottom: '40px',
            fontSize: '26px',
            color: '#9A9A85',
            letterSpacing: '2px',
          }}
        >
          thezukoapp.com
        </div>
      </div>
    ),
    { ...size }
  )
}
