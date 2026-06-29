import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

const TEAM = [
  {
    name: 'Alisher Karimov',
    role: 'Founder & CEO',
    bio: 'Born in Samarkand, Alisher has been leading tours since 2010. Fluent in 5 languages.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
  },
  {
    name: 'Dilnoza Yusupova',
    role: 'Head of Experiences',
    bio: 'Former hotel GM turned tour designer. She crafts every itinerary by hand.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&q=80',
  },
  {
    name: 'James Whitfield',
    role: 'Lead English Guide',
    bio: 'Cambridge historian and long-time Tashkent resident. His lectures feel like time travel.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  },
  {
    name: 'Madina Sultanova',
    role: 'Client Relations',
    bio: 'Your first point of contact and the reason every client feels like a VIP.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
  },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen pt-24 pb-24 overflow-x-hidden">
      {/* Hero section */}
      <div className="relative h-[50vh] overflow-hidden mb-0">
        <img
          src="https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=1600&q=80"
          alt="Samarkand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center px-6"
          >
            <span className="section-label">{t('about.label')}</span>
            <h1 className="font-display text-5xl md:text-6xl text-white font-bold leading-tight">
              {t('about.title').split('\n').map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Story */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <p className="text-white/70 text-base leading-relaxed mb-5">{t('about.p1')}</p>
              <p className="text-white/70 text-base leading-relaxed mb-5">{t('about.p2')}</p>
              <p className="text-white/70 text-base leading-relaxed">{t('about.p3')}</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=600&q=80"
                alt="Silk Road"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gold text-navy p-5 rounded-xl shadow-2xl">
              <div className="font-display text-4xl font-bold">2012</div>
              <div className="text-xs font-semibold">Founded</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10">
            <span className="section-label">{t('about.statsLabel')}</span>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: t('about.stat1'), label: t('about.stat1Label') },
              { val: t('about.stat2'), label: t('about.stat2Label') },
              { val: t('about.stat3'), label: t('about.stat3Label') },
              { val: t('about.stat4'), label: t('about.stat4Label') },
            ].map(({ val, label }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-2xl border border-white/5 hover:border-gold/20 transition-colors">
                  <div className="font-display text-4xl font-bold text-gold mb-2">{val}</div>
                  <div className="text-white/50 text-sm">{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <ScrollReveal>
            <span className="section-label">{t('about.teamLabel')}</span>
            <h2 className="section-title">{t('about.teamTitle')}</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map(({ name, role, bio, image }, i) => (
            <ScrollReveal key={name} delay={i * 0.1}>
              <div className="group text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-2 ring-white/10 group-hover:ring-gold/40 transition-all duration-300">
                  <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-white font-semibold mb-0.5">{name}</h3>
                <div className="text-gold text-xs font-semibold mb-2">{role}</div>
                <p className="text-white/50 text-xs leading-relaxed">{bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
