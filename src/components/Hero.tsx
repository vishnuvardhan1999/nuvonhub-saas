import { motion } from "framer-motion"
import GlowButton from "./ui/GlowButton"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle, #9B5CFF, transparent 60%)' }} />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
           style={{ background: 'radial-gradient(circle, #0066FF, transparent 60%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="gradient-text">The Universal AI Commerce Builder</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-5 text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
        >
          Launch a full online store with website, marketing, chatbot, dynamic pricing, and videos — in under one hour.
        </motion.p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <GlowButton>Launch Free Demo</GlowButton>
          <button className="glass px-5 py-3 rounded-2xl font-semibold">
            See How It Works
          </button>
        </div>

        {/* Live Agent Mode */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 mx-auto max-w-3xl glass rounded-2xl p-4 text-left"
        >
          <div className="text-sm opacity-80 mb-2">Live Agent Mode</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <Badge status="done" label="ThemeGen" />
            <Badge status="done" label="ProductGen" />
            <Badge status="loading" label="MarketingAgent" />
            <Badge status="done" label="PricingAgent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Badge({ status, label }: { status: "done" | "loading", label: string }) {
  return (
    <div className="flex items-center gap-2 glass rounded-xl px-3 py-2">
      <span className={`inline-block w-2.5 h-2.5 rounded-full ${status === 'done' ? 'bg-emerald-400' : 'bg-yellow-400 animate-pulse'}`} />
      <span className="opacity-90">{label}</span>
    </div>
  )
}
