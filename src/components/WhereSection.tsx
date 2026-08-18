import { AnimatedSection } from './AnimatedSection'

export function WhereSection() {
  return (
    <section id="where" className="relative px-6 md:px-12 py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
            Our next stop
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal max-w-3xl">
            The Beerspot{' '}
            <em className="font-editorial italic text-ember not-italic">
              Northcote.
            </em>
          </h2>
          <p className="mt-5 text-base md:text-lg text-charcoal/70 leading-relaxed">
            September 7th–13th
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
