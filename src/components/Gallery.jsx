import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const GALLERY_ITEMS = [
  {
    id: 1,
    label: 'Full Melt',
    image: 'https://images.pexels.com/photos/19826140/pexels-photo-19826140.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #1A3A2A 0%, #0D2218 100%)',
    size: 'tall',
  },
  {
    id: 2,
    label: 'Extração pura',
    image: 'https://images.pexels.com/photos/7667731/pexels-photo-7667731.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #C9973A 0%, #9B7228 100%)',
    size: 'normal',
  },
  {
    id: 3,
    label: 'Smoke session',
    image: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80',
    fallback: 'linear-gradient(135deg, #2a0a4a 0%, #0a0a1a 100%)',
    size: 'normal',
  },
  {
    id: 4,
    label: 'Flor premium',
    image: 'https://images.pexels.com/photos/3047447/pexels-photo-3047447.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #1A3A2A 0%, #080808 100%)',
    size: 'wide',
  },
  {
    id: 5,
    label: 'Trichomes',
    image: 'https://images.pexels.com/photos/30682042/pexels-photo-30682042.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #2D5A3D 0%, #0D2218 100%)',
    size: 'normal',
  },
  {
    id: 6,
    label: 'Óleo denso',
    image: 'https://images.pexels.com/photos/12399575/pexels-photo-12399575.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #C9973A 0%, #6B4C1E 100%)',
    size: 'tall',
  },
  {
    id: 7,
    label: 'Hash artesanal',
    image: 'https://images.pexels.com/photos/9259999/pexels-photo-9259999.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #922B21 0%, #3D0C08 100%)',
    size: 'normal',
  },
  {
    id: 8,
    label: 'Vapor vibes',
    image: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800&q=80',
    fallback: 'linear-gradient(135deg, #6a0572 0%, #0a0a1a 100%)',
    size: 'normal',
  },
  {
    id: 9,
    label: 'Cannabis pura',
    image: 'https://images.pexels.com/photos/30682036/pexels-photo-30682036.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #1A3A2A 0%, #C9973A 100%)',
    size: 'wide',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="galeria" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep-900 to-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-pepper/5 via-transparent to-forest/5" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-melt/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-melt" />
            <span className="text-amber-melt text-xs font-semibold tracking-widest uppercase">Galeria</span>
          </div>
          <h2 className="section-title mb-4">
            Galeria <span className="gradient-text">Melt</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto">
            Texturas, cores e atmosferas que traduzem a identidade da marca.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {GALLERY_ITEMS.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function GalleryItem({ item }) {
  const spanClass = {
    tall: 'row-span-2',
    wide: 'col-span-2',
    normal: '',
  }[item.size] || ''

  const handleError = (e) => {
    e.currentTarget.style.display = 'none'
    e.currentTarget.parentElement.style.background = item.fallback
  }

  return (
    <motion.div
      variants={itemVariants}
      className={`group relative rounded-2xl overflow-hidden cursor-default ${spanClass}`}
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.4)', background: '#141414' }}
    >
      {/* Image */}
      <img
        src={item.image}
        alt={item.label}
        loading="lazy"
        onError={handleError}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Neon border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-pepper/30 transition-all duration-500" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-pepper rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="text-cream font-semibold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {item.label}
          </span>
        </div>
      </div>

      {/* Corner tag */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <div className="w-6 h-6 rounded-full bg-pepper/80 flex items-center justify-center">
          <span className="text-cream text-xs">🌶</span>
        </div>
      </div>
    </motion.div>
  )
}
