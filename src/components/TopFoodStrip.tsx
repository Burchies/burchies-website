import Image from 'next/image'

const foodImages = [
  {
    src: '/food/hero-sandwich.jpg',
    alt: "Burchie's crispy fried chicken sandwich with slaw, pickles, and house sauce",
    label: 'sandwich',
    position: 'object-center',
  },
  {
    src: '/food/chicken-and-slaws.jpg',
    alt: "Burchie's crispy fried chicken with slaw, pickles, and dipping sauce",
    label: 'fried chicken',
    position: 'object-center',
  },
  {
    src: '/food/crispy-chicken.jpg',
    alt: "Burchie's crispy fried cauliflower with slaw, pickles, and dipping sauce",
    label: 'fried cauliflower',
    position: 'object-center',
  },
  {
    src: '/food/loaded-chicken.jpg',
    alt: "Burchie's loaded fries with fried chicken, pickles, and house sauce",
    label: 'loaded fries',
    position: 'object-[58%_68%]',
  },
]

export function TopFoodStrip() {
  return (
    <section
      id="food"
      aria-labelledby="our-food-heading"
      className="bg-cream px-6 py-16 md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 md:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
            Made fresh, served hot
          </p>
          <h2
            id="our-food-heading"
            className="mt-3 font-display text-5xl font-bold tracking-tight text-charcoal md:text-7xl"
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
