export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          HR &amp; Recruiting Tool
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Format LinkedIn Job Posts<br />
          <span className="text-[#58a6ff]">for Any ATS Platform</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Paste a LinkedIn job description and instantly get ATS-optimized output for Indeed, Workday, Greenhouse, Lever, and more — no manual reformatting needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Formatting — $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-xs text-[#8b949e] mt-1">ATS Platforms</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">&lt;10s</div>
            <div className="text-xs text-[#8b949e] mt-1">Per Conversion</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-[#8b949e] mt-1">Copy-Ready Output</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited job post conversions',
              'Indeed, Workday, Greenhouse, Lever, iCIMS',
              'AI-powered ATS optimization',
              'One-click copy &amp; download',
              'Priority email support'
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: f }} />
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which ATS platforms are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support Indeed, Workday, Greenhouse, Lever, and iCIMS. More platforms are added regularly based on user requests.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the AI formatting work?</h3>
            <p className="text-[#8b949e] text-sm">Our AI analyzes your LinkedIn job post and restructures it to match each ATS platform's field requirements, character limits, and formatting rules — automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} ATS Formatter. All rights reserved.
      </footer>
    </main>
  );
}
