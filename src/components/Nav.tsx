'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useDialogFocus } from '@/lib/useDialogFocus'

const links = [
  { href: '/#menu', label: 'Our menu' },
  { href: '/#where', label: 'Our next stop' },
  { href: '/#gallery', label: 'Our gallery' },
  { href: '/#socials', label: 'Our socials' },
  { href: '/catering', label: 'Book an event' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const dialogRef = useDialogFocus(menuOpen, closeMenu)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [closeMenu])

  const transparent = isHome && !scrolled && !menuOpen
  const textColor = transparent ? 'text-cream' : 'text-charcoal'

  return (
    <>
      <header
        className={
          'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 ' +
          (transparent ? 'bg-transparent' : 'bg-cream/95 backdrop-blur-sm shadow-sm')
        }
      >
        <Link
          href="/"
          onClick={(e) => {
            if (isHome) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
              closeMenu()
            }
          }}
          aria-label="Burchie's Fried Chicken — home"
          className="flex items-center gap-3 leading-none transition-colors duration-300"
        >
          <span className="relative block w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden ring-2 ring-cream/40 shadow-sm">
            <Image
              src="/logo.jpg"
              alt="Burchie's Fried Chicken logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className={'flex items-baseline gap-2 ' + textColor}>
            <span className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight">Burchie&rsquo;s</span>
            <span className="font-editorial italic text-sm sm:text-base md:text-lg text-ember">fried chicken</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                'text-[11px] tracking-widest uppercase transition-opacity duration-300 hover:opacity-60 ' +
                textColor
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/#where"
            className="text-[11px] tracking-widest uppercase px-5 py-2.5 bg-ember text-cream rounded-sm relative overflow-hidden btn-shimmer hover:scale-[1.02] transition-transform duration-200 font-semibold"
          >
            Find the truck
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className={'md:hidden flex flex-col gap-1.5 p-2 -m-2 ' + textColor}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden className={'block w-6 h-px bg-current transition-all duration-300 ' + (menuOpen ? 'rotate-45 translate-y-2' : '')} />
          <span aria-hidden className={'block w-6 h-px bg-current transition-all duration-300 ' + (menuOpen ? 'opacity-0' : '')} />
          <span aria-hidden className={'block w-6 h-px bg-current transition-all duration-300 ' + (menuOpen ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="fixed inset-0 z-[60] bg-ember flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              type="button"
              onClick={closeMenu}
              data-dialog-close
              aria-label="Close menu"
              className="absolute top-5 right-6 md:right-12 flex flex-col gap-1.5 p-2 -m-2 text-cream"
            >
              <span aria-hidden className="block w-6 h-px bg-current rotate-45 translate-y-[3px]" />
              <span aria-hidden className="block w-6 h-px bg-current -rotate-45 -translate-y-[3px]" />
            </button>
            {links.map(({ href, label }) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.4 }}
              >
                <Link
                  href={href}
                  onClick={closeMenu}
                  className="font-display text-4xl text-cream tracking-tight block px-8 py-2"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
