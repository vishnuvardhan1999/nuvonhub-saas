import { motion } from "framer-motion"
import { Palette, Package, Scale, BadgePoundSterling, Search, Megaphone, Video, MessageSquare } from "lucide-react"

const agents = [
  { icon: Palette, name: "Theme & SiteGen", desc: "Layout, logo, brand from your prompt." },
  { icon: Package, name: "ProductGen", desc: "Descriptions, SEO, JSON-LD, images." },
  { icon: Scale, name: "Brand Comparison", desc: "Feature/price/rating comparisons." },
  { icon: BadgePoundSterling, name: "Pricing Agent", desc: "Competitor-aware dynamic pricing." },
  { icon: Search, name: "SEO Agent", desc: "AI metadata + AI-readable feeds." },
  { icon: Megaphone, name: "Marketing Agent", desc: "Posts, ads, schedule automatically." },
  { icon: Video, name: "VideoGen Agent", desc: "Short videos for Reels & Shorts." },
  { icon: MessageSquare, name: "Chat & Support", desc: "Answers, upsells, after-sales." },
]

export default function AgentsGrid() {
  return (
    <section className="relative py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          The 8 Core <span className="gradient-text">AI Agents</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {agents.map((a, idx) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="glass rounded-2xl p-5"
            >
              <a.icon className="w-7 h-7" />
              <div className="mt-3 font-semibold">{a.name}</div>
              <div className="text-sm opacity-80">{a.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
