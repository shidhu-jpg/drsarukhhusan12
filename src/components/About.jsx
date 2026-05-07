import { motion } from 'framer-motion'

const TECH_BADGES = [
  { icon: '⚛️', label: 'React',    grad: 'from-cyan-400 to-blue-600',     x: '88%', y: '8%',  size: 52, delay: 0 },
  { icon: '🖱️', label: 'Node.js',  grad: 'from-green-400 to-emerald-600', x: '78%', y: '32%', size: 44, delay: 0.4 },
  { icon: '✦',  label: 'Design',   grad: 'from-pink-400 to-rose-600',     x: '92%', y: '58%', size: 40, delay: 0.8 },
  { icon: '🙂', label: 'UX',       grad: 'from-amber-400 to-orange-500',  x: '82%', y: '78%', size: 48, delay: 0.2 },
]

export default function About() {
  return (
    <section id="about" className="bg-dark relative overflow-hidden py-24 px-6">
      {/* Animated 3D floating badge icons */}
      {TECH_BADGES.map((b) => (
        <motion.div
          key={b.label}
          className="pointer-events-none select-none absolute hidden sm:flex"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
          initial={{ opacity: 0, scale: 0, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: b.delay, duration: 0.6, type: 'spring', stiffness: 180, damping: 14 }}
        >
          <motion.div
            style={{ width: '100%', height: '100%' }}
            animate={{ y: [0, -8, 0], rotate: [0, 4, 0, -4, 0] }}
            transition={{ duration: 5 + b.delay, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
          >
            <div
              className={`w-full h-full rounded-2xl bg-gradient-to-br ${b.grad} flex flex-col items-center justify-center gap-0.5 border border-white/20 opacity-75`}
              style={{
                boxShadow: '0 8px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
              }}
            >
              <span style={{ fontSize: b.size * 0.38, lineHeight: 1 }}>{b.icon}</span>
              <span className="text-white font-bold tracking-wider" style={{ fontSize: b.size * 0.16 }}>
                {b.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="font-display text-white leading-none mb-10"
          style={{ fontSize: 'clamp(72px, 13vw, 180px)' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <motion.p
            className="font-body text-gray-300 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            I'm a full-stack developer and digital growth specialist based in Mumbai, India.
            I help businesses — especially clinics and healthcare brands — build powerful online
            presences that drive real results. From high-converting websites to complete
            digital marketing systems, I deliver work that actually moves the needle.
          </motion.p>

          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-gray-500 text-sm leading-relaxed">
              With hands-on experience across React, Node.js, SEO, and AI-driven automation,
              I bring both technical depth and strategic thinking to every project.
              Let's build something that makes your competitors nervous.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-accent text-white font-body font-medium text-sm shadow-lg shadow-accent/20"
                whileHover={{ scale: 1.06, boxShadow: '0 16px 36px rgba(124,58,237,0.35)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                CONTACT ME
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-body font-medium text-sm"
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.5)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.18 }}
              >
                VIEW MY SKILLS →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
