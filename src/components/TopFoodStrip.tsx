import Image from 'next/image'

const foodImages = [
  {
    src: '/food/loaded-chicken.jpg',
    alt: "Burchie's loaded fried chicken with pickles and house sauce",
    position: 'object-[58%_68%]',
  },
  {
    src: '/food/hero-sandwich.jpg',
    alt: "Burchie's crispy fried chicken sandwich with slaw, pickles, and house sauce",
    position: 'object-center',
  },
  {
    src: '/food/crispy-chicken.jpg',
    alt: "Burchie's crispy fried cauliflower with slaw, pickles, and dipping sauce",
    position: 'object-center',
  },
]

export function TopFoodStrip() {
  return (
    <section aria-label="Burchie's fried chicken" className="bg-cream px-3 py-3 md:px-6 md:py-6">
      <div className="mx-auto grid max-w-[1500px] grid-cols-3 gap-3 md:gap-6">
        {foodImages.map((image) => (
          <div key={image.src} className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 33vw, 33vw"
              className={`object-cover ${image.position}`}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
