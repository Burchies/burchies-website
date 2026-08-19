import { AnimatedSection } from './AnimatedSection'
import { PhotoTile } from './PhotoTile'

export function StoryBlock() {
  return (
    <section id="story" className="relative px-6 md:px-12 py-16 md:py-24 bg-cream">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <AnimatedSection>
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight text-charcoal">
            Our story
          </h2>
          <div className="mt-8 space-y-5 text-charcoal/80 text-base md:text-lg leading-relaxed">
            <p>
              Burchie’s launched in July 2025 with a trailer, a dream, and an incurable addiction to fried chicken.
            </p>
            <p>
              What started as a craving for seriously good, crispy chicken quickly became a mission: bring bold flavours, proper sides, and good energy wherever we park up. For over a year, we’ve been serving up fried chicken made to hit the spot—while continually tweaking, tasting, and perfecting every recipe along the way.
            </p>
            <p>
              We’re all about the crunch, the flavour, and the vibes. Whether you’re grabbing a quick feed, catching us at an event, or bringing your mates along, Burchie’s is here to make your day a little tastier.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <PhotoTile
            src="/instagram/2025-06-17_01-24-32_DK-72e9yo2w_5.jpg"
            alt="Burchie lying on the ground in front of the newly-wrapped Burchie's truck"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full aspect-[4/5]"
          />
          <p className="mt-3 text-[11px] tracking-widest uppercase text-charcoal/50">
            Truck wrap reveal · June 2025
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
