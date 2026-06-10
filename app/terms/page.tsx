import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions — Zuko',
}

export default function Terms() {
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
          Terms &amp; Conditions
        </h1>
        <p className="text-[14px] mb-16" style={{ color: '#9A9A85' }}>Last updated June 10, 2026</p>

        <div className="flex flex-col gap-10" style={{ color: '#6B6B5A' }}>

          <section>
            <p className="text-[15px] leading-relaxed">
              These Terms and Conditions govern your use of the Zuko website at <strong style={{ color: '#292929' }}>thezukoapp.com</strong>, operated by <strong style={{ color: '#292929' }}>Amavih Ltd</strong> (trading as Zuko). By accessing or using our website, you agree to be bound by these terms. If you do not agree, please do not use the site.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>1. About Zuko</h2>
            <p className="text-[15px] leading-relaxed">
              Zuko is a pre-launch app that helps dog owners find verified dog-friendly venues, events, and stays. This website is a pre-launch landing page. The app itself is not yet available to the public. Information on this website is provided for informational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>2. Waitlist</h2>
            <p className="text-[15px] leading-relaxed">
              By joining our waitlist, you provide your email address and consent to receive updates from Zuko about our launch and related news. You can unsubscribe at any time by emailing{' '}
              <a href="mailto:team@thezukoapp.com" style={{ color: '#5E714B' }}>team@thezukoapp.com</a>. Joining the waitlist does not guarantee access to the app or any specific features.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>3. Partner and venue enquiries</h2>
            <p className="text-[15px] leading-relaxed">
              Submitting a partner or venue enquiry via our contact form does not constitute a binding agreement. We will review all enquiries and be in touch before launch. Submission of a form does not guarantee listing on the Zuko platform.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>4. Intellectual property</h2>
            <p className="text-[15px] leading-relaxed">
              All content on this website, including text, images, logos, and design, is owned by or licensed to Amavih Ltd and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this site without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>5. Disclaimer</h2>
            <p className="text-[15px] leading-relaxed">
              This website is provided on an "as is" basis. We make no warranties, express or implied, regarding the accuracy, completeness, or availability of any content. We reserve the right to modify or discontinue the website or any feature at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>6. Limitation of liability</h2>
            <p className="text-[15px] leading-relaxed">
              To the fullest extent permitted by law, Amavih Ltd shall not be liable for any indirect, incidental, or consequential loss or damage arising from your use of this website or reliance on any content herein.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>7. Third-party links</h2>
            <p className="text-[15px] leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites and encourage you to review their terms and policies independently.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>8. Changes to these terms</h2>
            <p className="text-[15px] leading-relaxed">
              We may update these Terms and Conditions from time to time. The updated version will be indicated by a revised date at the top of this page. Continued use of the website after any changes constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>9. Governing law</h2>
            <p className="text-[15px] leading-relaxed">
              These terms are governed by the laws of England and Wales. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold mb-4" style={{ color: '#292929' }}>10. Contact us</h2>
            <p className="text-[15px] leading-relaxed">
              If you have any questions about these Terms and Conditions, please contact us at{' '}
              <a href="mailto:team@thezukoapp.com" style={{ color: '#5E714B' }}>team@thezukoapp.com</a>.
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
