import Image from 'next/image'

const foodImages = [
  {
    src: '/menu/fried-chicken-bites.jpg',
    alt: "Burchie's fried chicken bites served with slaw, pickles, and sauce",
    label: 'fried chicken',
    position: 'object-center',
  },
  {
    src: '/menu/fried-chicken-sandwich.jpg',
    alt: "Burchie's fried chicken sandwich with slaw, pickles, and sauce",
    label: 'sandwich',
    position: 'object-center',
  },
  {
    src: '/food/crispy-chicken.jpg',
    alt: "Burchie's crispy fried cauliflower with slaw, pickles, and dipping sauce",
    label: 'fried cauliflower',
    position: 'object-center',
    lighting: 'brightness(1.02) contrast(1.08) saturate(1.05)',
  },
  {
    src: '/menu/loaded-chicken-fries.jpg',
    alt: "Burchie's loaded fries topped with fried chicken, sauce, and pickles",
    label: 'loaded fries',
    position: 'object-center',
  },
]

export function TopFoodStrip() {
  return (
    <section
      id="food"
      aria-labelledby="our-food-heading"
      className="bg-cream px-3 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
            Made fresh, served hot
          </p>
          <h2
            id="our-food-heading"
            className="mt-3 font-display text-5xl font-bold tracking-tight text-ember md:text-7xl"
          >
            Our food
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-6 md:gap-y-10">
          {foodImages.map((image) => (
            <figure key={image.label}>
              <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`object-cover ${image.position}`}
                  style={image.lighting ? { filter: image.lighting } : undefined}
                />
              </div>
              <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal md:mt-4">
                {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
