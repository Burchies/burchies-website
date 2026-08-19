'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { AnimatedWords } from './AnimatedWords'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-charcoal">
        <Image
          src="/food/truck-hero.jpg"
          alt="Burchie standing beside the red-and-white Burchie's Fried Chicken trailer"
          fill
          sizes="100vw"
          className="object-cover object-[40%_50%] md:object-[52%_47%]"
          priority
          fetchPriority="high"
          quality={90}
        />

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-tr from-charcoal/90 from-0% via-charcoal/60 via-35% to-transparent to-65%"
        />
        <div aria-hidden className="absolute inset-0 bg-charcoal/25" />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ember/15 to-transparent mix-blend-soft-light"
        />
      </div>

      <div aria-hidden className="absolute inset-0 z-[1] noise pointer-events-none" />

      <div className="relative z-10 min-h-[100svh] flex flex-col justify-end md:justify-center px-6 md:px-12 pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl w-full mx-auto">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-[11px] md:text-xs tracking-[0.28em] text-amber uppercase font-semibold mb-5 md:mb-6 flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-amber" />
            Auckland · Since July 2025
          </motion.p>

          <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.9] font-bold tracking-tight text-cream">
            <AnimatedWords text="Fried chicken," as="span" className="block" />
            <AnimatedWords
              text="done properly."
              as="span"
              className="block font-editorial italic font-semibold text-amber"
            />
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.3 }}
            className="mt-8 md:mt-10 text-base md:text-xl max-w-xl text-cream/85 leading-relaxed"
          >
            Fried fresh. One truck. Wherever the queue goes.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.5 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/#where"
              className="text-[11px] tracking-[0.2em] uppercase px-7 py-4 bg-ember text-cream rounded-full relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold text-center"
            >
              See our next stop
            </Link>
            <Link
              href="/catering"
              className="text-[11px] tracking-[0.2em] uppercase px-7 py-4 text-cream rounded-full border border-cream/40 hover:border-cream hover:bg-cream hover:text-charcoal transition-all duration-200 font-semibold text-center backdrop-blur-sm"
            >
              Catering enquiries
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
