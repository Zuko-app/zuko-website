import Image from 'next/image'
import PartnerForm from './components/PartnerForm'
import PhotoGrid from './components/PhotoGrid'
import WaitlistModal from './components/WaitlistModal'

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAFAF7', color: '#292929' }}>

      {/* Nav */}
      <div className="sticky top-0 z-40 w-full" style={{ backgroundColor: '#FAFAF7' }}>
      <nav className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
        <Image
          src="/logo.png"
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
            Find trusted dog-friendly places without the guesswork.
          </p>
        </div>

        {/* Scrolling photo grid */}
        <PhotoGrid />
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {[
            {
              stat: '11.1M',
              description: 'dogs in the UK — yet finding a dog-friendly spot still means Googling and hoping for the best.',
              source: 'PDSA, 2025',
            },
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
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-24">
        <div className="flex items-center justify-center mb-10" style={{ gap: '0.35em' }}>
          <p className="text-[44px] font-bold leading-none tracking-tight" style={{ color: '#292929' }}>
            What you&apos;ll find on
          </p>
          <Image src="/logo.png" alt="Zuko" width={130} height={46} style={{ marginBottom: '2px' }} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { src: '/G-NEW.png', category: 'Cafes & Restaurants', description: 'Dog-friendly tables inside and out' },
            { src: '/G-2.png', category: 'Events', description: 'Markets, pop-ups, walks & meetups' },
            { src: '/G-1.1.JPG', category: 'Hotels & Stays', description: 'Weekends away with your dog' },
          ].map((item) => (
            <div
              key={item.category}
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: '3 / 4' }}
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
              As owners of a 40kg Labrador, we know how frustrating it is trying to work out where your dog is genuinely welcome. Information is often outdated, inconsistent, or impossible to find. So we&apos;re building a better way to discover trusted dog-friendly places — without the guesswork.
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

      {/* Partner contact */}
      <section className="relative w-full" style={{ minHeight: '760px' }}>
        {/* Background photo */}
        <Image
          src="/G-ABOUT.jpg"
          alt="Partner with Zuko"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Floating card */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24" style={{ minHeight: '760px' }}>
          <div className="w-full max-w-lg rounded-2xl p-10" style={{ backgroundColor: '#FAFAF7' }}>
            <p className="text-[11px] uppercase tracking-widest mb-3" style={{ color: '#9A9A85' }}>
              For venues &amp; partners
            </p>
            <h2
              className="text-[28px] font-bold leading-tight tracking-tight mb-2"
              style={{ color: '#292929' }}
            >
              Want to list your event or venue on Zuko?
            </h2>
            <p className="text-[14px] mb-8" style={{ color: '#6B6B5A' }}>
              Get in touch and we&apos;ll reach out before we launch.
            </p>
            <PartnerForm />
          </div>
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
