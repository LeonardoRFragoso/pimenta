import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact({ waLink }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep via-deep-800 to-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest/10 via-transparent to-pepper/10" />

      {/* Decorative glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-pepper/10 blur-[120px]" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 text-xs font-semibold tracking-widest uppercase">Online agora</span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="section-title mb-6"
        >
          Quer falar com{' '}
          <span className="gradient-text">a Luiza?</span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-cream/50 text-lg mb-12 leading-relaxed"
        >
          Entre em contato pelo WhatsApp para trocar ideia sobre a Melt Pimenta.
        </motion.p>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 neon-border"
        >
          {/* Decorative top pattern */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pepper/40" />
            <span className="text-2xl">🌶️</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pepper/40" />
          </div>

          <p className="text-cream/60 text-sm mb-8 italic">
            "Manda uma mensagem, a gente se fala."
          </p>

          {/* WhatsApp button */}
          <motion.a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20BC5A] text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg"
            style={{ boxShadow: '0 8px 30px rgba(37, 211, 102, 0.35)' }}
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chamar no WhatsApp
          </motion.a>

          {/* Sub info */}
          <div className="mt-6 flex items-center justify-center gap-2 text-cream/30 text-xs">
            <span>Luiza Pimenta</span>
            <span>·</span>
            <span>Melt Pimenta</span>
          </div>
        </motion.div>
      </div>
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
