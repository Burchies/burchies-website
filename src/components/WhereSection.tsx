import { AnimatedSection } from './AnimatedSection'

const address = '515 West Coast Road, Oratia, Auckland 0604'
const mapSrc =
  'https://maps.google.com/maps?q=515+West+Coast+Road,+Oratia,+Auckland+0604&hl=en-NZ&z=16&t=m&output=embed&iwloc=near'

export function WhereSection() {
  return (
    <section id="where" className="relative px-6 md:px-12 py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <AnimatedSection>
          <p className="font-display text-[1.575rem] md:text-[2.625rem] font-bold leading-[0.95] tracking-tight text-ember mb-5">
            Our next stop
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal">
            Oratia Bowling{' '}
            <em className="font-editorial italic text-ember not-italic">
              Club.
            </em>
          </h2>
          <p className="mt-5 text-base md:text-lg text-charcoal/70 leading-relaxed">
            Friday 25th September
          </p>
          <address className="mt-7 not-italic text-sm md:text-base text-charcoal/70 leading-relaxed">
            {address}
          </address>
          <div className="mt-5 text-sm md:text-base text-charcoal/70 leading-relaxed">
            <p className="font-semibold text-charcoal">Opening hours</p>
            <p>Fri: 5pm–8pm</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            data-lenis-prevent
            className="relative w-full aspect-[4/5] md:aspect-square rounded-sm overflow-hidden bg-bone border border-charcoal/10 shadow-sm"
          >
            <iframe
              src={mapSrc}
              title="Map to Oratia Bowling Club"
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
