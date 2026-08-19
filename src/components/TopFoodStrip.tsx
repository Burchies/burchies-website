import Image from 'next/image'

const foodImages = [
  {
    src: '/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg',
    alt: "Burchie's golden crispy fried chicken",
    label: 'fried chicken',
    position: 'object-center',
  },
  {
    src: '/instagram/2025-06-05_23-05-07_DKiXJr7hSPL.jpg',
    alt: "Burchie's crispy fried chicken sandwich",
    label: 'sandwich',
    position: 'object-center',
  },
  {
    src: '/instagram/2025-07-08_23-06-21_DL3VhpgBdEo_5.jpg',
    alt: "Burchie's Korean-style fried cauliflower",
    label: 'fried cauliflower',
    position: 'object-center',
  },
  {
    src: '/instagram/2025-07-17_03-54-25_DMMc2gBv-n3.jpg',
    alt: "Burchie's Korean-style loaded fries",
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
