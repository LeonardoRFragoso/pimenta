import React from 'react'
import { motion } from 'framer-motion'

export default function AgeGate({ onConfirm, onReject }) {
  return (
    <div
      className="min-h-screen bg-deep flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3047447/pexels-photo-3047447.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep/90" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pepper/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 max-w-md w-full"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-10"
        >
          <div className="text-5xl mb-4">🌶️</div>
          <h1 className="font-display text-3xl font-bold gradient-text tracking-wide">
            Melt Pimenta
          </h1>
        </motion.div>

        {/* Age check card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass rounded-2xl p-8 neon-border"
        >
          <div className="w-12 h-px bg-pepper mx-auto mb-6" />
          <h2 className="text-cream text-xl font-semibold mb-2 font-display">
            Você tem mais de 18 anos?
          </h2>
          <p className="text-cream/40 text-sm mb-8">
            Este conteúdo é destinado a adultos.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onConfirm}
              className="flex-1 btn-primary justify-center text-sm"
            >
              Sim, entrar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onReject}
              className="flex-1 px-6 py-4 border border-cream/20 text-cream/50 font-semibold rounded-full transition-all duration-300 hover:border-cream/40 hover:text-cream/70 text-sm"
            >
              Não, sair
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-cream/20 text-xs"
        >
          Projeto visual/conceitual. Conteúdo destinado a maiores de 18 anos.
        </motion.p>
      </motion.div>
    </div>
  )
}
