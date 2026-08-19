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
              Burchie&rsquo;s started in May 2025 with a trailer, a recipe, and a stubborn belief that fried chicken should be done properly — not rushed, not reheated, not just a side.
            </p>
            <p>
              Every bird gets a 24-hour buttermilk marinade, then double-fried until the crust cracks when you look at it. Fried cauliflower too, because our vegetarian friends deserve better than iceberg lettuce.
            </p>
            <p>
              You&rsquo;ll find us parked up at Auckland markets, breweries, and pubs most nights of the week. Bring a picnic blanket, an appetite, and maybe a mate — the queue moves fast.
            </p>
          </div>
          <p className="mt-8 font-editorial italic text-amber text-base">
            — Burchie, owner
          </p>
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
