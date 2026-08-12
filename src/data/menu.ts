import type { MenuItem } from '@/components/MenuCard'

export const menu: MenuItem[] = [
  {
    name: 'Loaded fries',
    description:
      'Crinkle-cut fries loaded with fried chicken bites, pickles, and your choice of sauce.',
    punchline: 'The messy one. Worth it.',
    imageSrc: '/menu/loaded-chicken-fries.jpg',
    imageAlt: "Loaded fries topped with fried chicken, sauce, and pickles",
  },
  {
    name: 'Fried chicken sandwich',
    description:
      'Buttermilk fried chicken thigh, slaw, pickles, brioche bun, and your choice of sauce.',
    punchline: 'Crispy, saucy, properly stacked.',
    imageSrc: '/menu/fried-chicken-sandwich.jpg',
    imageAlt: "Burchie's fried chicken sandwich with slaw, pickles, and sauce",
  },
  {
    name: 'Fried chicken bites',
    description:
      'Buttermilk fried chicken bites, slaw, pickles, and your choice of sauce.',
    punchline: 'New on the menu.',
    imageSrc: '/menu/fried-chicken-bites.jpg',
    imageAlt: "Burchie's fried chicken bites served with slaw, pickles, and sauce",
  },
  {
    name: 'Fried cauliflower',
    description:
      'Crispy fried cauliflower bites, slaw, pickles, and your choice of sauce.',
    punchline: 'The veggie main.',
    veg: true,
    imageAlt: 'Crispy fried cauliflower bites with slaw, pickles, and sauce',
  },
]

export interface Side {
  name: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

export const sides: Side[] = [
  {
    name: 'Rainbow slaw',
    description: 'Red cabbage, carrot, onion, lightly dressed. Keeps you honest.',
    imageSrc: '/instagram/2026-02-11_07-00-20_DUm8RCHj8Qv_4.jpg',
    imageAlt: "Rainbow slaw served alongside Burchie's chicken",
  },
  {
    name: 'Fries',
    description: 'Crinkle-cut, chicken salt, straight from the fryer.',
    imageSrc: '/fries.avif',
    imageAlt: 'A hand reaching into a box of golden french fries',
  },
]
