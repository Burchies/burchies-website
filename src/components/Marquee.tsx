'use client'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

interface Props {
  items: string[]
  className?: string
}

/**
 * Seamless infinite marquee.
 *
 * The first group is measured, then enough identical copies are rendered to
 * cover the viewport even at the moment the animation loops. This prevents a
 * blank patch on wide screens when the final item passes by.
 */
export function Marquee({ items, className = '' }: Props) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLUListElement>(null)
  const [distance, setDistance] = useState(0)
  const [copyCount, setCopyCount] = useState(3)

  useEffect(() => {
    const group = groupRef.current
    const viewport = viewportRef.current
    if (!group || !viewport) return

    const update = () => {
      const groupWidth = group.getBoundingClientRect().width
      const viewportWidth = viewport.getBoundingClientRect().width
      if (!groupWidth) return

      setDistance(Math.ceil(groupWidth))
      setCopyCount(Math.max(3, Math.ceil(viewportWidth / groupWidth) + 2))
    }

    update()
    const observer = new ResizeObserver(update)
    observer.observe(group)
    observer.observe(viewport)
    return () => observer.disconnect()
  }, [items])

  const trackStyle: CSSProperties =
    distance > 0 ? ({ '--marquee-distance': `${distance}px` } as CSSProperties) : {}

  const groupClass =
    'flex items-center gap-10 md:gap-14 pr-10 md:pr-14 shrink-0'
  const itemClass =
    'font-display text-2xl md:text-4xl font-bold tracking-tight uppercase inline-flex items-center gap-10 md:gap-14 whitespace-nowrap'

  return (
    <div
      ref={viewportRef}
      className={`relative bg-ember text-cream py-6 md:py-8 overflow-hidden noise ${className}`}
    >
      <div
        className={`marquee-track flex will-change-transform${distance > 0 ? ' marquee-track--ready' : ''}`}
        style={trackStyle}
      >
        {Array.from({ length: copyCount }, (_, copyIndex) => (
          <ul
            key={copyIndex}
            ref={copyIndex === 0 ? groupRef : undefined}
            aria-hidden={copyIndex > 0}
            className={groupClass}
          >
            {items.map((item, itemIndex) => (
              <li key={`${copyIndex}-${itemIndex}`} className={itemClass}>
                <span>{item}</span>
                <span aria-hidden className="text-amber">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
