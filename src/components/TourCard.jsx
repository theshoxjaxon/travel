import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export default function TourCard({ tour, index = 0 }) {
  const { t } = useTranslation()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-800 via-transparent to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
          {tour.category.slice(0, 1).map(cat => (
            <span
              key={cat}
              className="bg-gold/90 text-navy text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
            >
              {cat.replace('-', ' ')}
            </span>
          ))}
        </div>

        {/* Duration pill */}
        <div className="absolute top-4 right-4 bg-navy/80 bg-blur text-white text-xs font-semibold px-3 py-1 rounded-full">
          {tour.duration} {t('tours.duration')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl text-white font-bold mb-1 group-hover:text-gold transition-colors">
          {tour.title}
        </h3>
        <p className="text-white/50 text-sm mb-4">{tour.subtitle}</p>

        <p className="text-white/60 text-sm leading-relaxed mb-6 line-clamp-2">
          {tour.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-white/40 mb-5">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {tour.groupSize}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {tour.difficulty}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {tour.startCity}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-white/40 text-xs">{t('tours.from')}</span>
            <div className="text-gold font-bold text-xl font-display">
              ${tour.price.toLocaleString()}
              <span className="text-white/30 text-xs font-sans ml-1">/{t('tours.perPerson')}</span>
            </div>
          </div>
          <Link
            to={`/tours/${tour.slug}`}
            className="btn-gold text-xs py-2.5 px-5 rounded-full"
          >
            {t('tours.viewDetails')}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
