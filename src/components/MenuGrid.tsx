import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

export function MenuGrid() {
  return (
    <section id="menu" className="relative bg-amber px-6 md:px-12 py-16 md:py-24 noise">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-ember">
            Our menu
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-10 md:mt-14 mx-auto max-w-[760px] overflow-hidden">
            <Image
              src="/menu/burchies-menu.webp"
              alt="Burchie’s menu with mains, sides, and sauces"
              width={2670}
              height={4412}
              sizes="(max-width: 768px) calc(100vw - 3rem), 760px"
              className="w-full h-auto scale-[1.014]"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
