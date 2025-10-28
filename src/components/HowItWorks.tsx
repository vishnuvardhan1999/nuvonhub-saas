import { motion } from "framer-motion"
import { Brush, FileSpreadsheet, Bot, BadgePoundSterling, Rocket } from "lucide-react"

const steps = [
  { icon: Brush, title: "Choose Theme", desc: "Pick from 100+ AI-ready designs." },
  { icon: FileSpreadsheet, title: "Describe Business", desc: "Tell us what you sell & where." },
  { icon: Bot, title: "AI Builds Everything", desc: "Pages, SEO, chatbot, and posts." },
  { icon: BadgePoundSterling, title: "Dynamic Pricing", desc: "Stay competitive & profitable." },
  { icon: Rocket, title: "Deploy", desc: "Coolify / Vercel / Your Server." },
]

export default function HowItWorks() {
  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          How It <span className="gradient-text">Works</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <s.icon className="w-8 h-8 mx-auto mb-3 text-white/90" />
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm opacity-80 mt-1">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
