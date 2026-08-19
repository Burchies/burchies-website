import { AnimatedSection } from './AnimatedSection'

const address = '54 Northcote Road, Northcote, Auckland 0627'
const mapSrc =
  'https://maps.google.com/maps?q=54+Northcote+Road,+Northcote,+Auckland+0627&hl=en-NZ&z=16&t=m&output=embed&iwloc=near'

export function WhereSection() {
  return (
    <section id="where" className="relative px-6 md:px-12 py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <AnimatedSection>
          <p className="font-display text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight text-ember mb-5">
            Our next spot
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal">
            The Beerspot{' '}
            <em className="font-editorial italic text-ember not-italic">
              Northcote.
            </em>
          </h2>
          <p className="mt-5 text-base md:text-lg text-charcoal/70 leading-relaxed">
            September 7th–13th
          </p>
          <address className="mt-7 not-italic text-sm md:text-base text-charcoal/70 leading-relaxed">
            {address}
          </address>
          <div className="mt-5 text-sm md:text-base text-charcoal/70 leading-relaxed">
            <p className="font-semibold text-charcoal">Opening hours</p>
            <p>Sun–Mon: 12pm–8pm</p>
            <p>Tue–Wed: 12pm–9pm</p>
            <p>Thu–Sat: 12pm–10pm</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            data-lenis-prevent
            className="relative w-full aspect-[4/5] md:aspect-square rounded-sm overflow-hidden bg-bone border border-charcoal/10 shadow-sm"
          >
            <iframe
              src={mapSrc}
              title="Map to The Beerspot Northcote"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
