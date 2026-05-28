import Image from 'next/image'
import EmailSignup from './components/EmailSignup'
import PartnerForm from './components/PartnerForm'
import PhotoGrid from './components/PhotoGrid'

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAFAF7', color: '#292929' }}>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <Image
          src="/logo.png"
          alt="Zuko"
          width={140}
          height={50}
          priority
        />
        <span
          className="text-[13px] rounded-full px-4 py-1.5 font-medium"
          style={{ backgroundColor: '#5E714B', color: '#FAFAF7' }}
        >
          Coming soon to London
        </span>
      </nav>

      {/* Hero */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <h1
            className="text-[56px] sm:text-[72px] font-bold leading-[1.0] tracking-tight"
            style={{ color: '#292929' }}
          >
            Dog friendly,{' '}
            <span style={{ color: '#5E714B' }}><em>for real.</em></span>
          </h1>
        </div>

        {/* Scrolling photo grid */}
        <div className="mb-0">
          <PhotoGrid />
        </div>
      </section>

      {/* Waitlist */}
      <section className="py-28 px-6" style={{ backgroundColor: '#F0EDE6' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="text-[36px] sm:text-[48px] font-bold leading-tight tracking-tight mb-3"
            style={{ color: '#292929' }}
          >
            No more guessing. No more calling ahead.
          </h2>
          <p className="text-[16px] mb-8" style={{ color: '#6B6B5A' }}>
            Join the waitlist and we&apos;ll let you know when we&apos;re live.
          </p>
          <EmailSignup />
          <p className="mt-4 text-[13px]" style={{ color: '#9A9A85' }}>
            No spam, ever.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #E5E3DC' }} />

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <p className="text-[12px] uppercase tracking-widest mb-16" style={{ color: '#9A9A85' }}>
          What you&apos;ll find on Zuko
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              style={{ backgroundColor: '#EAF0E4' }}
            >
              ☕
            </div>
            <h3 className="text-[16px] font-semibold" style={{ color: '#292929' }}>
              Cafes &amp; Restaurants
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: '#6B6B5A' }}>
              Discover dog-friendly tables inside and out, with honest reviews
              from owners like you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              style={{ backgroundColor: '#EAF0E4' }}
            >
              🐾
            </div>
            <h3 className="text-[16px] font-semibold" style={{ color: '#292929' }}>
              Dog-Friendly Events
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: '#6B6B5A' }}>
              Discover local events where dogs are welcome — from markets and
              pop-ups to walks and meetups.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
              style={{ backgroundColor: '#EAF0E4' }}
            >
              🏨
            </div>
            <h3 className="text-[16px] font-semibold" style={{ color: '#292929' }}>
              Hotels &amp; Stays
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: '#6B6B5A' }}>
              Plan a weekend away without leaving your dog behind. Filter stays
              that truly welcome dogs.
            </p>
          </div>
        </div>
        <p className="mt-12 text-[12px] uppercase tracking-widest text-center font-bold italic" style={{ color: '#9A9A85' }}>
          And so much more...
        </p>
      </section>

      {/* About — full-width green section */}
      <section style={{ backgroundColor: '#5E714B' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-[12px] uppercase tracking-widest mb-10" style={{ color: '#A8BF96' }}>
            About us
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-start">
            <div>
              <h2
                className="text-[36px] font-bold leading-tight tracking-tight mb-8"
                style={{ color: '#FAFAF7' }}
              >
                Built because we needed it ourselves.
              </h2>
              <p className="text-[15px] leading-relaxed mb-5" style={{ color: '#C8D9BB' }}>
                We&apos;re two sisters who built this because we couldn&apos;t find what we needed
                ourselves. With a 40kg Labrador in London, we got used to the routine: outdated
                reviews, vague pet policies, and a lot of calling ahead just to confirm we
                wouldn&apos;t be turned away at the door. The information was scattered, stale,
                or simply wrong.
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#C8D9BB' }}>
                So we&apos;re building something better — a platform with verified, up-to-date
                pet policies direct from venues, so dog owners can stop guessing and start going.
              </p>
            </div>
            {/* Founders photo */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/founders.jpg"
                alt="Zuko founders with their Labrador"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner contact */}
      <section className="py-28 px-6" style={{ backgroundColor: '#FAFAF7' }}>
        <div className="max-w-2xl mx-auto">
          <p className="text-[12px] uppercase tracking-widest mb-6" style={{ color: '#9A9A85' }}>
            For venues &amp; partners
          </p>
          <h2
            className="text-[36px] sm:text-[48px] font-bold leading-tight tracking-tight mb-4"
            style={{ color: '#292929' }}
          >
            Want to list your venue on Zuko?
          </h2>
          <p className="text-[16px] mb-10" style={{ color: '#6B6B5A' }}>
            Get in touch and we&apos;ll reach out before we launch.
          </p>
          <PartnerForm />
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #E5E3DC' }} />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/logo.png"
          alt="Zuko"
          width={80}
          height={29}
        />
        <p className="text-[13px]" style={{ color: '#9A9A85' }}>
          © {new Date().getFullYear()} Zuko. All rights reserved.
        </p>
      </footer>

    </div>
  )
}
