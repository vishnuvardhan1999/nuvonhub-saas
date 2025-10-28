import { motion } from "framer-motion"

export default function GlowButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative px-5 py-3 rounded-2xl font-semibold text-white"
      style={{ background: 'linear-gradient(90deg, #0066FF, #9B5CFF)' }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-2xl shadow-glow" />
    </motion.button>
  )
}
