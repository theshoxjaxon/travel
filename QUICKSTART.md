# Sayohat — Quick Start

## Install & Run

```bash
cd sayohat
npm install        # already done
npm run dev        # http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview    # preview the built output
```

## Project Structure

```
sayohat/
├── public/
│   └── favicon.svg
├── src/
│   ├── i18n.js                    # i18next config
│   ├── locales/
│   │   ├── en.json                # English
│   │   ├── uz.json                # Uzbek
│   │   └── ru.json                # Russian
│   ├── data/
│   │   └── tours.js               # 6 tours with full itineraries
│   ├── components/
│   │   ├── Layout.jsx             # Root layout wrapper
│   │   ├── Navbar.jsx             # Sticky nav + mobile menu
│   │   ├── Footer.jsx             # Full footer
│   │   ├── LanguageSwitcher.jsx   # EN/UZ/RU dropdown
│   │   ├── TourCard.jsx           # Reusable tour card
│   │   ├── CustomCursor.jsx       # Luxury dot + ring cursor
│   │   ├── WhatsAppFAB.jsx        # Floating WhatsApp button
│   │   └── ScrollReveal.jsx       # Framer Motion scroll utility
│   └── pages/
│       ├── Home.jsx               # Hero, featured tours, why us, testimonials, CTA
│       ├── Tours.jsx              # All tours with category filter
│       ├── TourDetail.jsx         # Overview / itinerary / included tabs + booking sidebar
│       ├── About.jsx              # Story, stats, team
│       └── Contact.jsx            # Form + Telegram/WhatsApp cards
└── tailwind.config.js             # Navy + Gold palette
```

## Customisation

- **Tours data**: edit `src/data/tours.js`
- **Translations**: edit `src/locales/{en,uz,ru}.json`
- **Colors**: `tailwind.config.js` → `navy` and `gold`
- **Contact links**: search for `https://t.me/sayohat` and `https://wa.me/998901234567`
