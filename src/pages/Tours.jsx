import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import TourCard from '../components/TourCard'
import ScrollReveal from '../components/ScrollReveal'
import { tours } from '../data/tours'

const FILTERS = [
  { key: 'all', labelKey: 'tours.filterAll' },
  { key: 'central-asia', labelKey: 'tours.filterCentral' },
  { key: 'silk-road', labelKey: 'tours.filterSilk' },
  { key: 'adventure', labelKey: 'tours.filterAdventure' },
  { key: 'luxury', labelKey: 'tours.filterLuxury' },
]

export default function Tours() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? tours
    : tours.filter(t => t.category.includes(active))

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-14">
        <ScrollReveal>
          <span className="section-label">Curated Journeys</span>
          <h1 className="section-title mb-4">{t('tours.pageTitle')}</h1>
          <p className="text-white/50 max-w-lg mx-auto">{t('tours.pageSubtext')}</p>
        </ScrollReveal>
      </div>

      {/* Filters */}
      <ScrollReveal className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {FILTERS.map(({ key, labelKey }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                active === key
                  ? 'bg-gold text-navy shadow-lg gold-glow'
                  : 'bg-navy-800 text-white/60 border border-white/10 hover:border-gold/30 hover:text-white'
              }`}
            >
              {t(labelKey)}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filtered.length === 0 ? (
          <div className="text-center text-white/40 py-20">{t('tours.noTours')}</div>
        ) : (
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} index={i} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
