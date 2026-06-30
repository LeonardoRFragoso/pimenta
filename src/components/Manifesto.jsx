import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Manifesto() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30682036/pexels-photo-30682036.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-pepper/20 to-deep" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-transparent to-deep/80" />
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-pepper/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full bg-amber-melt/15 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-forest/15 blur-[150px]" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-amber-melt/40 glass">
            <span className="text-amber-melt text-lg">✦</span>
            <span className="text-amber-melt text-xs font-bold tracking-widest uppercase">Manifesto</span>
            <span className="text-amber-melt text-lg">✦</span>
          </div>
        </motion.div>

        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-display font-black mb-8 leading-tight"
          style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)' }}
        >
          <span className="text-cream">Derreter o comum.</span>
          <br />
          <span className="gradient-text">Esquentar o visual.</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-0.5 mx-auto mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #C9973A, transparent)' }}
        />

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-cream/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          A Melt Pimenta é sobre presença. Sobre extratos feitos com cuidado, cultura cannábica
          com identidade e uma estética que fica na memória.
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-14 flex items-center justify-center gap-8 flex-wrap"
        >
          {['Extração', 'Artesanal', 'Haxixe', 'Óleo', 'Cannabis'].map((word, i) => (
            <span
              key={word}
              className="text-cream/25 text-xs tracking-[0.3em] uppercase font-medium"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {word}
            </span>
          ))}
        </motion.div>

        {/* Large decorative text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="text-[12rem] md:text-[18rem] font-black font-display opacity-[0.025] text-cream"
            style={{ letterSpacing: '-0.05em' }}
          >
            MELT
          </span>
        </div>
      </div>
    </section>
  )
}
