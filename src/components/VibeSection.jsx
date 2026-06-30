import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const CARDS = [
  {
    title: 'Extração',
    text: 'Processo artesanal, concentrado e feito com intenção.',
    emoji: '🟡',
    image: 'https://images.pexels.com/photos/7667731/pexels-photo-7667731.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #6B4C1E 0%, #C9973A 100%)',
    accent: '#C9973A',
    label: 'EXTRACT',
  },
  {
    title: 'Cultivo',
    text: 'Da planta ao produto. Origem, cuidado e identidade.',
    emoji: '🌿',
    image: 'https://images.pexels.com/photos/2178565/pexels-photo-2178565.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #0D2218 0%, #2D5A3D 100%)',
    accent: '#2D5A3D',
    label: 'PLANT',
  },
  {
    title: 'Cultura',
    text: 'Uma estética ligada à cena, ao fumo e à atitude.',
    emoji: '🖤',
    image: 'https://images.pexels.com/photos/415848/pexels-photo-415848.jpeg?auto=compress&cs=tinysrgb&w=800',
    fallback: 'linear-gradient(135deg, #3D0C08 0%, #C0392B 100%)',
    accent: '#C0392B',
    label: 'VIBES',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function VibeSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="vibe" className="section-padding relative overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep-800 to-deep" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-pepper/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pepper/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-pepper" />
            <span className="text-pepper text-xs font-semibold tracking-widest uppercase">A Identidade</span>
          </div>
          <h2 className="section-title mb-4">
            A vibe da{' '}
            <span className="gradient-text">Melt</span>
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
            A Melt Pimenta nasceu da cultura cannábica: extrações artesanais, óleos e haxishes
            feitos com intenção e estética própria. Uma marca que não precisa explicar — só sentir.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {CARDS.map((card) => (
            <VibeCard key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function VibeCard({ card }) {
  const handleError = (e) => {
    e.currentTarget.style.display = 'none'
    e.currentTarget.parentElement.style.background = card.fallback
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default"
      style={{ boxShadow: `0 8px 40px rgba(0,0,0,0.5)`, background: '#141414' }}
    >
      {/* Background image */}
      <img
        src={card.image}
        alt={card.title}
        loading="lazy"
        onError={handleError}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/50 to-transparent" />
      <div
        className="absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-35"
        style={{ background: `linear-gradient(135deg, ${card.accent}40, transparent 60%)` }}
      />

      {/* Label badge */}
      <div className="absolute top-4 right-4">
        <span
          className="text-xs font-bold tracking-widest px-3 py-1 rounded-full"
          style={{ background: `${card.accent}30`, color: card.accent, border: `1px solid ${card.accent}50` }}
        >
          {card.label}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-3xl mb-3">{card.emoji}</div>
        <h3 className="font-display text-3xl font-bold text-cream mb-2">{card.title}</h3>
        <div
          className="w-8 h-0.5 mb-3 transition-all duration-500 group-hover:w-16"
          style={{ background: card.accent }}
        />
        <p className="text-cream/60 text-sm leading-relaxed">{card.text}</p>
      </div>
    </motion.div>
  )
}
