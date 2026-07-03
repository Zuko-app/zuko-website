import Image from 'next/image'
import Link from 'next/link'
import PartnerModal from './components/PartnerModal'
import PhotoGrid from './components/PhotoGrid'
import WaitlistModal from './components/WaitlistModal'

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAFAF7', color: '#292929' }}>

      {/* Nav */}
      <div className="sticky top-0 z-40 w-full" style={{ backgroundColor: '#FAFAF7' }}>
      <nav className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
        <Image
          src="/ZUKO-LOGO.png"
          alt="Zuko"
          width={140}
          height={50}
          priority
        />
        <WaitlistModal />
      </nav>
      </div>

      {/* Hero */}
      <section className="pt-16 pb-16">
        <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
          <h1
            className="text-[56px] sm:text-[80px] font-bold leading-[1.0] tracking-tight mb-6"
            style={{ color: '#292929' }}
          >
            Dog friendly,{' '}
            <span style={{ color: '#5E714B' }}><em>for real.</em></span>
          </h1>
          <p className="text-[18px] leading-relaxed mx-auto max-w-xl" style={{ color: '#6B6B5A' }}>
            The app that helps dog owners discover trusted cafés, restaurants, hotels, pubs, events and more.
          </p>
        </div>

        {/* Scrolling photo grid */}
        <PhotoGrid />
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-12">
        <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight mb-16 text-center" style={{ color: '#292929' }}>
          &ldquo;Dog-friendly&rdquo; rarely means what it should.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            {
              stat: '1 in 4',
              description: 'dog owners have left a venue they\'d already researched because it turned out not to be truly welcoming.',
              source: 'DogBuddy',
            },
            {
              stat: '47%',
              description: 'of dog owners would cancel plans entirely if their dog can\'t come.',
              source: 'Boutique Hotelier',
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-10">
              <p className="text-[48px] sm:text-[56px] font-bold leading-none tracking-tight" style={{ color: '#5E714B' }}>
                {item.stat}
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: '#292929' }}>
                {item.description}
              </p>
              <p className="text-[12px] mt-auto" style={{ color: '#B0ADA6' }}>
                Source: {item.source}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-center mb-16" style={{ color: '#292929' }}>
          Your next dog-friendly adventure starts here.
        </h2>
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
{[
            {
              number: '01',
              title: 'Discover',
              description: 'Find cafés, restaurants, hotels, pubs and events near you.',
            },
            {
              number: '02',
              title: 'Check',
              description: 'See verified pet policies, photos and community reviews.',
            },
            {
              number: '03',
              title: 'Explore',
              description: 'Head out with confidence and discover more with your dog.',
            },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-start gap-3 flex-1">
              <div style={{ color: '#D4A843' }}>
                {i === 0 && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                )}
                {i === 1 && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                )}
                {i === 2 && (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <ellipse cx="6" cy="6.5" rx="2" ry="2.5"/>
                    <ellipse cx="10.5" cy="4" rx="1.8" ry="2.2"/>
                    <ellipse cx="15" cy="4" rx="1.8" ry="2.2"/>
                    <ellipse cx="19" cy="6.5" rx="2" ry="2.5"/>
                    <path d="M12 10c-3 0-6 2-6 5.5 0 2 1.5 3.5 3 3.5.8 0 1.5-.3 2-.5h2c.5.2 1.2.5 2 .5 1.5 0 3-1.5 3-3.5 0-3.5-3-5.5-6-5.5z"/>
                  </svg>
                )}
              </div>
              <p className="text-[17px] font-semibold tracking-wide uppercase" style={{ color: '#292929' }}>{step.title}</p>
              <p className="text-[14px] leading-relaxed" style={{ color: '#6B6B5A' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-8 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: '/G-NEW.png', category: 'Cafes & Restaurants', description: 'Dog-friendly tables inside and out' },
            { src: '/G-2.png', category: 'Events', description: 'Markets, pop-ups, walks & meetups' },
            { src: '/G-1.1.JPG', category: 'Hotels & Stays', description: 'Weekends away with your dog' },
          ].map((item) => (
            <div
              key={item.category}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '3 / 4.5' }}
            >
              <Image
                src={item.src}
                alt={item.category}
                fill
                className="object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.0) 55%)' }}
              />
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[11px] uppercase tracking-widest mb-1" style={{ color: '#A8BF96' }}>
                  {item.category}
                </p>
                <p className="text-[16px] font-semibold leading-snug" style={{ color: '#FAFAF7' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[12px] uppercase tracking-widest text-center font-bold italic" style={{ color: '#9A9A85' }}>
          And so much more...
        </p>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <p className="text-[12px] uppercase tracking-widest" style={{ color: '#9A9A85' }}>
              Our story
            </p>
            <h2
              className="text-[36px] sm:text-[48px] font-bold leading-tight tracking-tight"
              style={{ color: '#292929' }}
            >
              Built because we needed it ourselves.
            </h2>
            <p className="text-[16px] leading-relaxed" style={{ color: '#6B6B5A' }}>
              We&apos;re two sisters who built Zuko after one too many disappointing &ldquo;dog-friendly&rdquo; experiences.
            </p>
            <p className="text-[16px] leading-relaxed" style={{ color: '#6B6B5A' }}>
              As owners of a 40kg Labrador, we know how frustrating it is trying to work out where your dog is genuinely welcome. Information is often outdated, inconsistent, or impossible to find. So we&apos;re building a better way to discover trusted dog-friendly places, without the guesswork.
            </p>
          </div>
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden" style={{ height: '540px' }}>
            <Image
              src="/founders.jpg"
              alt="Zuko founders with their Labrador"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 25%' }}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24">
        <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight tracking-tight text-center mb-4" style={{ color: '#292929' }}>
          Don&apos;t just take our word for it.
        </h2>
        <p className="text-[16px] leading-relaxed text-center mb-16 max-w-xl mx-auto" style={{ color: '#6B6B5A' }}>
          Real stories from dog owners who&apos;ve experienced the frustration of finding genuinely dog-friendly places.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              quote: "We've turned up to places labelled 'dog-friendly' only to be told dogs weren't allowed inside. It's frustrating and embarrassing.",
              name: 'Gabrielle S',
              descriptor: 'XL Bully Owner, London',
              bg: '#EAF0E4',
              initials: 'GS',
              image: '/TEST_3.jpg',
            },
            {
              quote: "We spend so much time scrolling through websites, reviews and social media just to figure out if somewhere is actually dog-friendly. Having one trusted source would be a huge time-saver.",
              name: 'Priya K',
              descriptor: 'Cavapoo Owner, London',
              bg: '#E8E4F0',
              initials: 'PK',
              image: '/TEST_2.png',
            },
            {
              quote: "I take my dog everywhere with me, but finding new places I can trust is always hit and miss!",
              name: 'James R',
              descriptor: 'Vizla owner, London',
              bg: '#F0EBE0',
              initials: 'JR',
              image: '/TEST_1.1.png',
            },
          ].map((t) => (
            <div key={t.name} className="flex flex-col items-center text-center gap-5 p-8 rounded-2xl" style={{ backgroundColor: '#F5F4EF' }}>
              {/* Circular avatar */}
              {t.image ? (
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 relative">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
              ) : (
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-[18px] font-bold flex-shrink-0"
                  style={{ backgroundColor: t.bg, color: '#5E714B' }}
                >
                  {t.initials}
                </div>
              )}
              <p className="text-[15px] leading-relaxed italic" style={{ color: '#6B6B5A' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-[14px] font-semibold" style={{ color: '#292929' }}>{t.name}</p>
                <p className="text-[12px] mt-1" style={{ color: '#9A9A85' }}>{t.descriptor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #E5E3DC' }} />

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Image
          src="/ZUKO-LOGO.png"
          alt="Zuko"
          width={80}
          height={29}
        />
        {/* Social links */}
        <div className="flex items-center gap-5">
          <a href="https://instagram.com/thezukoapp" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" style={{ color: '#9A9A85' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@thezukoapp" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-60" style={{ color: '#9A9A85' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
            </svg>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <PartnerModal />
          <Link href="/privacy" className="text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#9A9A85' }}>
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[13px] hover:opacity-70 transition-opacity" style={{ color: '#9A9A85' }}>
            Terms &amp; Conditions
          </Link>
          <p className="text-[13px]" style={{ color: '#9A9A85' }}>
            © {new Date().getFullYear()} Zuko. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  )
}
