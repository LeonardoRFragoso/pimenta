import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero({ waLink }) {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToGallery = () => {
    const el = document.querySelector('#galeria')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 scale-110">
          <img
            src="https://images.pexels.com/photos/19826140/pexels-photo-19826140.jpeg?auto=compress&cs=tinysrgb&w=1920"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep/80 via-deep/60 to-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-pepper/20 via-transparent to-deep/40" />

        {/* Neon glow spots */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-pepper/15 blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-forest/20 blur-[120px] animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-amber-melt/10 blur-[80px] animate-pulse-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-24">
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-pepper/30"
        >
          <span className="w-2 h-2 rounded-full bg-pepper animate-pulse" />
          <span className="text-cream/70 text-xs font-medium tracking-widest uppercase">
            Projeto visual & conceitual
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
        >
          <span className="gradient-text animate-glow">Melt</span>
          <br />
          <span className="text-cream">Pimenta</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-cream/70 font-light mb-4 italic font-display"
        >
          Extrações artesanais, óleos e haxishes com identidade própria.
        </motion.p>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-sm sm:text-base text-cream/50 max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Criada por Luiza Pimenta, a Melt Pimenta é sobre cultura cannábica com estética,
          atitude e um processo artesanal feito com cuidado e intenção.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base w-full sm:w-auto justify-center"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Falar no WhatsApp
          </a>
          <button
            onClick={scrollToGallery}
            className="btn-secondary text-base w-full sm:w-auto justify-center"
          >
            Ver galeria
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-pepper/60 to-transparent animate-float" />
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep to-transparent" />
    </section>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
