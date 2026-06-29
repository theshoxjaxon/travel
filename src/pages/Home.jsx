import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import TourCard from '../components/TourCard'
import ScrollReveal from '../components/ScrollReveal'
import { getFeaturedTours } from '../data/tours'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=90'

const WHY_ITEMS = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    titleKey: 'home.why1Title',
    textKey: 'home.why1Text',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titleKey: 'home.why2Title',
    textKey: 'home.why2Text',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    titleKey: 'home.why3Title',
    textKey: 'home.why3Text',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    titleKey: 'home.why4Title',
    textKey: 'home.why4Text',
  },
]

const TESTIMONIALS = [
  {
    text: "Sayohat planned every single detail perfectly. The Silk Road tour was the trip of a lifetime — I've already recommended it to six friends.",
    author: 'Emma Hartley',
    role: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80',
  },
  {
    text: "Professional, warm, and genuinely passionate about Central Asia. Our guide knew every hidden corner of Samarkand.",
    author: 'Markus Bauer',
    role: 'Munich, Germany',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    text: "The Kyrgyzstan trek exceeded every expectation. Song-Kol at sunrise is something I'll carry with me forever.",
    author: 'Yuki Tanaka',
    role: 'Tokyo, Japan',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80',
  },
]

export default function Home() {
  const { t } = useTranslation()
  const featuredTours = getFeaturedTours()

  return (
    <div className="overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img
            src={HERO_IMAGE}
            alt="Scenic mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-32">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/5 bg-blur border border-gold/30 text-gold text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            {t('hero.badge')}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-shadow mb-6"
          >
            {t('hero.headline')}{' '}
            <span className="text-gold italic">{t('hero.headlineAccent')}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            {t('hero.subtext')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/tours" className="btn-gold text-sm py-4 px-8 gold-glow">
              {t('hero.ctaTours')} →
            </Link>
            <a
              href="https://t.me/sayohat"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm py-4 px-8"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {t('hero.ctaTelegram')}
            </a>
          </motion.div>

          {/* Stat badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-wrap justify-center gap-4 mt-16"
          >
            {[
              { value: '500+', label: t('hero.stat1Label') },
              { value: '15+', label: t('hero.stat2Label') },
              { value: '4.9★', label: t('hero.stat3Label') },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-white/5 bg-blur border border-white/10 rounded-2xl px-6 py-3 text-center"
              >
                <div className="font-display text-2xl font-bold text-gold">{value}</div>
                <div className="text-white/50 text-xs mt-0.5 tracking-wide">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── FEATURED TOURS ───────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <ScrollReveal>
            <span className="section-label">{t('home.featuredToursLabel')}</span>
            <h2 className="section-title mb-4">{t('home.featuredToursTitle')}</h2>
            <p className="text-white/50 max-w-xl mx-auto leading-relaxed">
              {t('home.featuredToursSubtext')}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.map((tour, i) => (
            <TourCard key={tour.id} tour={tour} index={i} />
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <Link to="/tours" className="btn-outline text-sm py-3 px-8">
            {t('home.viewAllTours')} →
          </Link>
        </ScrollReveal>
      </section>

      {/* ─── WHY SAYOHAT ──────────────────────────────────────── */}
      <section className="py-24 bg-navy-800 relative overflow-hidden">
        {/* Decorative gold line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <div>
              <ScrollReveal>
                <span className="section-label">{t('home.whyLabel')}</span>
                <h2 className="section-title mb-6">{t('home.whyTitle')}</h2>
                <p className="text-white/50 leading-relaxed mb-8">{t('home.whySubtext')}</p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {WHY_ITEMS.map(({ icon, titleKey, textKey }, i) => (
                  <ScrollReveal key={titleKey} delay={i * 0.1}>
                    <div className="group p-5 rounded-xl border border-white/5 hover:border-gold/20 hover:bg-white/2 transition-all duration-300">
                      <div className="text-gold mb-3">{icon}</div>
                      <h3 className="text-white font-semibold text-sm mb-1">{t(titleKey)}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{t(textKey)}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: image collage */}
            <ScrollReveal delay={0.2} className="relative h-[500px] hidden lg:block">
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1585011664466-b7bbe92f34ef?w=600&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-2xl overflow-hidden border-4 border-navy-800">
                <img src="https://images.unsplash.com/photo-1601904438706-b3c4baea3dc7?w=400&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              {/* Gold accent box */}
              <div className="absolute bottom-16 right-8 bg-gold text-navy p-5 rounded-xl shadow-2xl">
                <div className="font-display text-4xl font-bold">12+</div>
                <div className="text-xs font-semibold mt-0.5">Years in Business</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <ScrollReveal>
            <span className="section-label">{t('home.testimonialsLabel')}</span>
            <h2 className="section-title">{t('home.testimonialsTitle')}</h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ text, author, role, avatar }, i) => (
            <ScrollReveal key={author} delay={i * 0.12}>
              <div className="bg-navy-800 border border-white/5 rounded-2xl p-7 hover:border-gold/20 transition-colors">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/70 text-sm leading-relaxed mb-6 italic">"{text}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover ring-2 ring-gold/20" />
                  <div>
                    <div className="text-white text-sm font-semibold">{author}</div>
                    <div className="text-white/40 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="section-title mb-4">{t('home.ctaTitle')}</h2>
            <p className="text-white/60 leading-relaxed mb-8">{t('home.ctaText')}</p>
            <Link to="/contact" className="btn-gold text-sm py-4 px-10 gold-glow">
              {t('home.ctaButton')} →
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
