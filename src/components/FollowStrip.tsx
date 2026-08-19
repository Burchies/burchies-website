import Image from 'next/image'
import { AnimatedSection } from './AnimatedSection'

const cards = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/burchies.fried.chicken/',
    title: 'Follow us',
    body: '@burchies.fried.chicken - schedule updates, new menu items and other goodies.',
    cta: 'Say g\u2019day',
    imageSrc: '/instagram/2026-03-30_02-29-00_DWfaTdwjwzs.jpg',
    imageAlt: 'Burchie at the truck',
    // Instagram's signature warm→pink→purple gradient (approximated).
    badgeClass:
      'text-white bg-[linear-gradient(45deg,#F58529_0%,#DD2A7B_50%,#8134AF_100%)]',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61576948422449',
    title: 'Like our page',
    body: 'Stay in the loop on markets, events, pop-ups and catering openings.',
    cta: 'Say hey',
    imageSrc: '/gallery/crispy-chicken.jpg',
    imageAlt: 'Crispy fried chicken bites',
    badgeClass: 'text-white bg-[#1877F2]',
  },
  {
    label: 'Twitch',
    href: 'https://twitch.tv/burchietv',
    title: 'Watch Burchie cook',
    body: 'twitch.tv/burchietv - live from the food truck! watch us cook, serve customers, run the daily chaos, play games, and get into plenty of shenanigans.',
    cta: 'Tune in',
    imageSrc: '/socials/twitch-table.jpg',
    imageAlt: 'Friends at an outdoor table',
    badgeClass: 'text-white bg-[#9146FF]',
  },
]

export function FollowStrip() {
  return (
    <section id="socials" className="px-6 md:px-12 py-14 md:py-16 bg-bone">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-ember text-center mb-8">
          Our socials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <AnimatedSection key={c.label} delay={i * 0.1}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full bg-cream border border-charcoal/10 rounded-sm overflow-hidden hover:border-ember hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative h-40 md:h-44 bg-bone overflow-hidden">
                  <Image
                    src={c.imageSrc}
                    alt={c.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm ${c.badgeClass}`}
                  >
                    {c.label}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight group-hover:text-ember transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-charcoal/70 mt-3 flex-1">{c.body}</p>
                  <span className="inline-block mt-5 text-xs tracking-widest uppercase border-b border-charcoal/30 group-hover:border-ember pb-px self-start">
                    {c.cta} &rarr;
                  </span>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
