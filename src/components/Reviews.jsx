const REVIEWS = [
  {
    stars: 5,
    quote: '"From logo design to our full app — Shidhu delivered everything on time and beyond expectations. The attention to detail is remarkable."',
    name: 'Arjun Joshi',
    role: 'Founder, Markflare',
    initials: 'AJ',
    avatar: 'from-violet-500 to-purple-600',
  },
  {
    stars: 5,
    quote: '"Our patient bookings increased 3× within a month of launching the new website. Best investment we made for the clinic."',
    name: 'Dr. Priya Sharma',
    role: 'Director, MedCare Diagnostics',
    initials: 'PS',
    avatar: 'from-rose-500 to-pink-600',
  },
  {
    stars: 5,
    quote: '"Professional, fast, and genuinely cares about results. The WhatsApp bot alone saves us 4 hours of admin work every day."',
    name: 'Rahul Mehta',
    role: 'Co-founder, HealthSync',
    initials: 'RM',
    avatar: 'from-cyan-500 to-blue-600',
  },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-1 justify-center mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews({ isDark }) {
  const sectionBg    = isDark ? 'bg-[#111111]'  : 'bg-white'
  const headingColor = isDark ? 'text-white'    : 'text-dark'
  const cardBg       = isDark ? 'bg-[#1e1e1e]'  : 'bg-gray-50'
  const cardBorder   = isDark ? 'border-white/10' : 'border-gray-100'
  const quoteColor   = isDark ? 'text-gray-300' : 'text-gray-600'
  const nameColor    = isDark ? 'text-white'    : 'text-dark'

  return (
    <section id="reviews" className={`py-24 px-6 transition-colors duration-300 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`font-display leading-none text-center mb-16 ${headingColor}`}
          style={{ fontSize: 'clamp(62px, 11vw, 160px)' }}
        >
          REVIEWS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className={`border rounded-3xl p-8 flex flex-col items-center text-center hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 ${cardBg} ${cardBorder}`}
            >
              <StarRow count={r.stars} />

              <blockquote className={`font-body text-sm leading-relaxed italic mb-8 flex-1 ${quoteColor}`}>
                {r.quote}
              </blockquote>

              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${r.avatar} flex items-center justify-center text-white font-body font-bold text-sm flex-shrink-0`}>
                  {r.initials}
                </div>
                <div className="text-left">
                  <p className={`font-body font-semibold text-sm ${nameColor}`}>{r.name}</p>
                  <p className="font-body text-gray-400 text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
