import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', destination: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise(res => setTimeout(res, 1200)) // simulate API call
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen pt-32 pb-24 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="section-label">{t('contact.label')}</span>
          <h1 className="section-title mb-4">{t('contact.title')}</h1>
          <p className="text-white/50 max-w-md mx-auto">{t('contact.pageSubtext')}</p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Form */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy-800 border border-green-500/20 rounded-2xl p-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-white font-bold mb-2">{t('contact.successTitle')}</h3>
                <p className="text-white/50">{t('contact.successText')}</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',destination:'',message:'' }) }}
                  className="btn-outline text-sm mt-8 py-3 px-8"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-navy-800 border border-white/5 rounded-2xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t('contact.nameLabel')} name="name" placeholder={t('contact.namePlaceholder')} value={form.name} onChange={handleChange} required />
                  <Field label={t('contact.emailLabel')} name="email" type="email" placeholder={t('contact.emailPlaceholder')} value={form.email} onChange={handleChange} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t('contact.phoneLabel')} name="phone" placeholder={t('contact.phonePlaceholder')} value={form.phone} onChange={handleChange} />
                  <Field label={t('contact.destinationLabel')} name="destination" placeholder={t('contact.destinationPlaceholder')} value={form.destination} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t('contact.messagePlaceholder')}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gold w-full justify-center text-sm py-4 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      {t('contact.sending')}
                    </span>
                  ) : (
                    <>{t('contact.submit')} →</>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Info sidebar */}
        <div className="space-y-4">
          {/* Telegram */}
          <ScrollReveal>
            <a
              href="https://t.me/sayohat"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#229ED9]/10 border border-[#229ED9]/20 rounded-2xl p-5 hover:bg-[#229ED9]/15 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#229ED9]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#229ED9]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold group-hover:text-[#229ED9] transition-colors">Telegram</div>
                <div className="text-white/40 text-xs">{t('contact.telegramCta')}</div>
              </div>
            </a>
          </ScrollReveal>

          {/* WhatsApp */}
          <ScrollReveal delay={0.1}>
            <a
              href="https://wa.me/998901234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-5 hover:bg-[#25D366]/15 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <div className="text-white text-sm font-semibold group-hover:text-[#25D366] transition-colors">WhatsApp</div>
                <div className="text-white/40 text-xs">{t('contact.whatsappCta')}</div>
              </div>
            </a>
          </ScrollReveal>

          {/* Address & Hours */}
          <ScrollReveal delay={0.2}>
            <div className="bg-navy-800 border border-white/5 rounded-2xl p-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">{t('contact.addressLabel')}</span>
                </div>
                <p className="text-white/70 text-sm">{t('contact.address')}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-white/60 text-xs uppercase tracking-wider font-semibold">{t('contact.hoursLabel')}</span>
                </div>
                <p className="text-white/70 text-sm">{t('contact.hours')}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

function Field({ label, name, type = 'text', placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="block text-white/60 text-xs font-medium mb-2 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-gold/40 transition-colors"
      />
    </div>
  )
}
