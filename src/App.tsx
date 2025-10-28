import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Hero from "./components/Hero"
import HowItWorks from "./components/HowItWorks"
import AgentsGrid from "./components/AgentsGrid"
import CTA from "./components/CTA"

export default function App() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div className="min-h-screen">
      <Hero />
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <HowItWorks />
          <AgentsGrid />
          <CTA />
        </motion.div>
      </div>
      <footer className="py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} Nuvonhub Ltd · Build. Automate. Grow.
      </footer>
    </div>
  )
}
