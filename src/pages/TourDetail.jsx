import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import { getTourBySlug } from '../data/tours'

const INCLUDED_KEYS = ['included1','included2','included3','included4','included5','included6']
const NOT_INCLUDED_KEYS = ['notIncluded1','notIncluded2','notIncluded3']
const TABS = ['overview', 'itinerary', 'included']

export default function TourDetail() {
  const { slug } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [tab, setTab] = useState('overview')
  const [imgIdx, setImgIdx] = useState(0)

  const tour = getTourBySlug(slug)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="section-title mb-4">Tour Not Found</h2>
          <Link to="/tours" className="btn-gold">Back to Tours</Link>
        </div>
      </div>
    )
  }

  const images = tour.gallery || [tour.image]

  return (
    <div className="min-h-screen">
      {/* Hero image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.img
          key={imgIdx}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={images[imgIdx]}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />

        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-24 left-6 md:left-10 flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Thumbnail strip */}
        {images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                className={`w-12 h-8 rounded overflow-hidden border-2 transition-all ${i === imgIdx ? 'border-gold' : 'border-white/20'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Title overlay */}
        <div className="absolute bottom-12 left-6 md:left-16 right-6">
          <div className="flex gap-2 flex-wrap mb-3">
            {tour.category.map(cat => (
              <span key={cat} className="bg-gold text-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {cat.replace('-', ' ')}
              </span>
            ))}
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white font-bold mb-1">{tour.title}</h1>
          <p className="text-white/60 text-lg">{tour.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid lg:grid-cols-3 gap-10">
        {/* Main */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex gap-1 border-b border-white/10 mb-8">
            {TABS.map(tabKey => (
              <button
                key={tabKey}
                onClick={() => setTab(tabKey)}
                className={`px-5 py-3 text-sm font-medium transition-colors relative ${
                  tab === tabKey ? 'text-gold' : 'text-white/50 hover:text-white'
                }`}
              >
                {t(`tourDetail.${tabKey}`)}
                {tab === tabKey && (
                  <motion.div layoutId="tab-line" className="absolute bottom-0 left-0 right-0 h-px bg-gold" />
                )}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {tab === 'overview' && (
              <div>
                <p className="text-white/70 leading-relaxed text-base mb-8">{tour.description}</p>
                <h3 className="text-white font-semibold mb-4">Highlights</h3>
                <ul className="space-y-3">
                  {tour.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <span className="text-gold mt-0.5">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {tab === 'itinerary' && (
              <div className="space-y-0">
                {tour.itinerary.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.05} className="relative pl-10 pb-8">
                    {/* Timeline line */}
                    {i < tour.itinerary.length - 1 && (
                      <div className="absolute left-[14px] top-8 bottom-0 w-px bg-white/10" />
                    )}
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-7 h-7 rounded-full bg-navy-700 border-2 border-gold/40 flex items-center justify-center">
                      <span className="text-gold text-[10px] font-bold">{item.day}</span>
                    </div>
                    <div className="bg-navy-800 rounded-xl p-5 border border-white/5 hover:border-gold/20 transition-colors">
                      <div className="text-gold text-xs font-semibold mb-1 uppercase tracking-wider">
                        {t('tourDetail.day')} {item.day}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {tab === 'included' && (
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {t('tourDetail.included')}
                  </h3>
                  <ul className="space-y-2.5">
                    {INCLUDED_KEYS.map(key => (
                      <li key={key} className="flex items-start gap-2.5 text-white/70 text-sm">
                        <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                        {t(`tourDetail.${key}`)}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-400 font-semibold mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {t('tourDetail.notIncluded')}
                  </h3>
                  <ul className="space-y-2.5">
                    {NOT_INCLUDED_KEYS.map(key => (
                      <li key={key} className="flex items-start gap-2.5 text-white/70 text-sm">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                        {t(`tourDetail.${key}`)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-28">
            {/* Price card */}
            <div className="bg-navy-800 border border-gold/20 rounded-2xl p-6 mb-4">
              <div className="text-white/40 text-xs mb-1">{t('tours.from')}</div>
              <div className="font-display text-4xl font-bold text-gold mb-1">
                ${tour.price.toLocaleString()}
              </div>
              <div className="text-white/40 text-xs mb-6">/ {t('tours.perPerson')}</div>

              {/* Details grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: '🗓', label: t('tourDetail.duration'), value: `${tour.duration} ${t('tourDetail.days')}` },
                  { icon: '👥', label: t('tourDetail.groupSize'), value: `${tour.groupSize} ${t('tourDetail.people')}` },
                  { icon: '⚡', label: t('tourDetail.difficulty'), value: tour.difficulty },
                  { icon: '📍', label: t('tourDetail.startCity'), value: tour.startCity },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="text-center p-3 bg-white/3 rounded-lg">
                    <div className="text-xl mb-1">{icon}</div>
                    <div className="text-white/40 text-[10px] mb-0.5">{label}</div>
                    <div className="text-white text-sm font-semibold">{value}</div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-gold w-full justify-center text-sm py-3.5 mb-3">
                {t('tourDetail.bookNow')} →
              </Link>
              <a
                href="https://t.me/sayohat"
                target="_blank"
                rel="noreferrer"
                className="btn-outline w-full justify-center text-sm py-3.5"
              >
                Ask on Telegram
              </a>
            </div>

            {/* Help box */}
            <div className="bg-gold/5 border border-gold/10 rounded-xl p-5 text-center">
              <p className="text-white/60 text-xs leading-relaxed">
                Need a custom group quote or have questions? Our team responds within 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
