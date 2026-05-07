import ScrollExpandMedia from './ui/scroll-expansion-hero'

const STATS = [
  { value: '10+',  label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '4+',   label: 'Years Experience' },
  { value: '9',    label: 'Services Offered' },
]

function IntroContent() {
  return (
    <div className="max-w-4xl mx-auto text-center py-8">
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {STATS.map(s => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="font-display text-white text-4xl md:text-5xl">{s.value}</span>
            <span className="font-body text-gray-400 text-xs tracking-widest uppercase">{s.label}</span>
          </div>
        ))}
      </div>

      <p className="font-body text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
        Full-stack developer and digital growth specialist based in Mumbai.
        I build high-converting websites, AI-powered bots, and complete digital systems
        that help businesses grow and stand out online.
      </p>

      <a
        href="#home"
        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent text-white font-body font-medium text-sm shadow-xl shadow-accent/30 hover:bg-accent-light transition-colors duration-200"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        EXPLORE MY WORK
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </div>
  )
}

export default function PortfolioIntro() {
  return (
    <ScrollExpandMedia
      mediaType="image"
      mediaSrc="https://images.unsplash.com/photo-1547658719-da2b51169166?w=1280&q=80"
      bgImageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80"
      title="SHIDHU PORTFOLIO"
      date="Developer & Designer"
      scrollToExpand="↕ Scroll to expand"
      textBlend
    >
      <IntroContent />
    </ScrollExpandMedia>
  )
}
