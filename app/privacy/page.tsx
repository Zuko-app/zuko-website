import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — Zuko',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAFAF7', color: '#292929' }}>

      {/* Nav */}
      <div className="sticky top-0 z-40 w-full" style={{ backgroundColor: '#FAFAF7' }}>
        <nav className="flex items-center justify-between px-6 py-3 max-w-6xl mx-auto">
          <Link href="/">
            <Image src="/logo.png" alt="Zuko" width={140} height={50} priority />
          </Link>
          <Link
            href="/"
            className="text-[13px] rounded-full px-5 py-2.5 font-medium transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#D4A843', color: '#FAFAF7' }}
          >
            Back to home
          </Link>
        </nav>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-20">

        <p className="text-[12px] uppercase tracking-widest mb-4" style={{ color: '#9A9A85' }}>Legal</p>
        <h1 className="text-[48px] font-bold leading-tight tracking-tight mb-3" style={{ color: '#292929' }}>
          Privacy Policy
        </h1>
        <p className="text-[14px] mb-16" style={{ color: '#9A9A85' }}>Last updated June 10, 2026</p>

        <div className="flex flex-col gap-10" style={{ color: '#6B6B5A' }}>

          <section>
            <p className="text-[15px] leading-relaxed">
              This Privacy Notice for <strong style={{ color: '#292929' }}>Amavih Ltd</strong> (doing business as <strong style={{ color: '#292929' }}>Zuko</strong>) describes how and why we collect, store, use, and share your personal information when you use our services, including when you visit <strong style={{ color: '#292929' }}>thezukoapp.com</strong> or use the Zuko app.
            </p>
            <p className="text-[15px] leading-relaxed mt-4">
              Questions or concerns? Please contact us at{' '}
              <a href="mailto:team@thezukoapp.com" style={{ color: '#5E714B' }}>team@thezukoapp.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>1. What information do we collect?</h2>
            <p className="text-[15px] leading-relaxed mb-3">We collect personal information that you voluntarily provide to us, including:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[15px] leading-relaxed">
              <li><strong style={{ color: '#292929' }}>Waitlist signups:</strong> your email address</li>
              <li><strong style={{ color: '#292929' }}>Partner enquiries:</strong> your name, business name, email address, and any message you provide</li>
            </ul>
            <p className="text-[15px] leading-relaxed mt-3">We do not collect sensitive personal information.</p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>2. How do we process your information?</h2>
            <p className="text-[15px] leading-relaxed mb-3">We process your information to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[15px] leading-relaxed">
              <li>Notify you when Zuko launches in London</li>
              <li>Respond to partner and venue enquiries</li>
              <li>Send administrative updates about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>3. What legal bases do we rely on?</h2>
            <p className="text-[15px] leading-relaxed mb-3">Under UK GDPR, we rely on the following legal bases:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[15px] leading-relaxed">
              <li><strong style={{ color: '#292929' }}>Consent</strong> — you have given us permission to contact you by ticking the consent checkbox on our forms. You may withdraw your consent at any time by emailing us.</li>
              <li><strong style={{ color: '#292929' }}>Legitimate interests</strong> — responding to partner and business enquiries.</li>
              <li><strong style={{ color: '#292929' }}>Legal obligations</strong> — where we are required to process data by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>4. When and with whom do we share your information?</h2>
            <p className="text-[15px] leading-relaxed mb-3">We do not sell your personal information. We share data only with the following service providers who help us operate our services:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[15px] leading-relaxed">
              <li><strong style={{ color: '#292929' }}>Supabase</strong> — secure database storage for email addresses and enquiry data</li>
              <li><strong style={{ color: '#292929' }}>Resend</strong> — email delivery service used to send notifications</li>
            </ul>
            <p className="text-[15px] leading-relaxed mt-3">Both providers process data in accordance with GDPR.</p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>5. How long do we keep your information?</h2>
            <p className="text-[15px] leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the purposes described in this notice, or as required by law. Waitlist emails will be deleted after the app launch period. You may request deletion at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>6. How do we keep your information safe?</h2>
            <p className="text-[15px] leading-relaxed">
              We have appropriate technical and organisational measures in place to protect your personal information. However, no electronic transmission over the internet can be guaranteed 100% secure. We do our best to protect your data but cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>7. Do we collect information from minors?</h2>
            <p className="text-[15px] leading-relaxed">
              We do not knowingly collect data from or market to children under 13 years of age. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>8. What are your privacy rights?</h2>
            <p className="text-[15px] leading-relaxed mb-3">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-[15px] leading-relaxed">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
              <li>Object to processing of your data</li>
              <li>Lodge a complaint with the ICO (Information Commissioner's Office) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: '#5E714B' }}>ico.org.uk</a></li>
            </ul>
            <p className="text-[15px] leading-relaxed mt-3">
              To exercise any of these rights, email us at{' '}
              <a href="mailto:team@thezukoapp.com" style={{ color: '#5E714B' }}>team@thezukoapp.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>9. Do we make updates to this notice?</h2>
            <p className="text-[15px] leading-relaxed">
              We may update this Privacy Notice from time to time. The updated version will be indicated by a revised date at the top of this page. We encourage you to review this notice periodically.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>10. How can you contact us?</h2>
            <p className="text-[15px] leading-relaxed">
              Amavih Ltd (trading as Zuko)<br />
              Email: <a href="mailto:team@thezukoapp.com" style={{ color: '#5E714B' }}>team@thezukoapp.com</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #E5E3DC' }} />
      <footer className="max-w-6xl mx-auto px-6 py-10 flex items-center justify-between">
        <Image src="/logo.png" alt="Zuko" width={80} height={29} />
        <p className="text-[13px]" style={{ color: '#9A9A85' }}>
          © {new Date().getFullYear()} Zuko. All rights reserved.
        </p>
      </footer>

    </div>
  )
}
