import GlowButton from "./ui/GlowButton"

export default function CTA() {
  return (
    <section className="relative py-16">
      <div className="max-w-5xl mx-auto px-6 text-center glass rounded-2xl">
        <h3 className="text-2xl md:text-3xl font-bold">
          Build. Automate. Grow. — <span className="gradient-text">In One Hour.</span>
        </h3>
        <p className="mt-3 text-white/80">
          Launch a production-ready store with autonomous agents that price, market, chat, and generate videos for you.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <GlowButton>Start Free</GlowButton>
          <button className="glass px-5 py-3 rounded-2xl font-semibold">Book a Demo</button>
        </div>
      </div>
    </section>
  )
}
