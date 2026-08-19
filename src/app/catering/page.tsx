import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { AnimatedSection } from '@/components/AnimatedSection'
import { EnquiryForm } from '@/components/EnquiryForm'

const socialImage = '/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_2.jpg'

export const metadata: Metadata = {
  title: "Catering — Burchie's Fried Chicken",
  description:
    "Book Burchie's Fried Chicken food truck for weddings, corporate events, birthdays, and private parties across Auckland. Minimum 20 guests.",
  alternates: {
    canonical: '/catering',
  },
  openGraph: {
    title: "Catering — Burchie's Fried Chicken",
    description:
      "Book Burchie's Fried Chicken food truck for weddings, corporate events, birthdays, and private parties across Auckland.",
    type: 'website',
    locale: 'en_NZ',
    url: '/catering',
    images: [
      {
        url: socialImage,
        alt: "Burchie's Fried Chicken catering setup",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Catering — Burchie's Fried Chicken",
    description:
      "Book Burchie's Fried Chicken food truck for weddings, corporate events, birthdays, and private parties across Auckland.",
    images: [socialImage],
  },
}

const perks = [
  {
    title: 'We park, we cook, we go.',
    body:
      'You get the trailer, the fryer, the crew, and a stack of crispy fried chicken. No mess, no fuss.',
  },
  {
    title: 'Vegetarian and vegan friendly.',
    body:
      "We don't just serve chicken, we serve great vegetarian and vegan options too.",
  },
  {
    title: 'Auckland-wide, mostly.',
    body:
      'Anywhere from Pūhoi to Papakura. Further afield? Ask — we travel for good vibes.',
  },
]

export default function CateringPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40">
        <section className="px-6 md:px-12 pb-14 md:pb-20 bg-cream">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.85fr] gap-10 md:gap-16 items-center">
            <AnimatedSection>
              <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
                Catering enquiries
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight text-charcoal">
                Feeding a <em className="font-editorial italic text-ember not-italic">crowd?</em>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-charcoal/80 max-w-xl leading-relaxed">
                Weddings, corporate lunches, birthdays, private parties — we roll the trailer up and take care of everything. Tell us the details below and Burchie will get back to you asap
              </p>
            </AnimatedSection>

            <div className="relative w-full max-w-md md:max-w-[30rem] md:ml-auto aspect-[4/5] overflow-hidden rounded-sm shadow-md">
              <img
                src="/catering/trailer-event-v2.jpg"
                alt="People visiting the Burchie’s food trailer"
                className="h-full w-full object-cover object-[center_62%]"
              />
            </div>
          </div>
        </section>

        <div aria-hidden className="checker-band" />

        <section className="px-6 md:px-12 py-14 md:py-20 bg-bone noise">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-base text-charcoal/70 leading-relaxed">{p.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <div aria-hidden className="checker-band" />

        <section className="px-6 md:px-12 py-20 md:py-28 bg-cream">
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <p className="text-[11px] tracking-widest uppercase text-ember font-semibold mb-3">
                Slide into the DMs
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] tracking-tight text-charcoal">
                Book the truck.
              </h2>
              <p className="mt-3 text-sm text-charcoal/60">
                Minimum 20 guests. We&rsquo;ll confirm availability within a day.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="mt-10">
                <EnquiryForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <div aria-hidden className="checker-band" />
      </main>
      <Footer />
    </>
  )
}
