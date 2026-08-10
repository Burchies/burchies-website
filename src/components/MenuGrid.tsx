'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { MenuCard } from './MenuCard'
import { SideCard } from './SideCard'
import { menu, sides } from '@/data/menu'
import { AnimatedSection } from './AnimatedSection'

export function MenuGrid() {
  const reduce = useReducedMotion()

  return (
    <section id="menu" className="relative bg-amber px-6 md:px-12 py-16 md:py-24 noise">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-charcoal/70 font-semibold mb-3">
            What you came for
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal max-w-3xl">
            Pick your <em className="font-editorial italic text-ember not-italic">heat.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-charcoal/75 leading-relaxed">
            Choose your style, then ask the crew for the current price and
            allergen guidance at the truck. Recipes and availability can change
            between stops.
          </p>
        </AnimatedSection>

        <motion.div
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
        >
          {menu.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <MenuCard {...item} />
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 pt-10 border-t border-charcoal/20">
            <p className="text-[11px] tracking-widest uppercase text-charcoal/70 font-semibold mb-5">
              On the side
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
              {sides.map((side) => (
                <SideCard key={side.name} side={side} />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-8 text-xs text-charcoal/60 italic">
            Current pricing and allergen information are confirmed at each stop.
            Please ask the crew before ordering if you have an allergy.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
