'use client'

import { useEffect, useRef, type RefObject } from 'react'

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export function useDialogFocus(
  open: boolean,
  onClose: () => void,
): RefObject<HTMLDivElement | null> {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return

    const previousActive = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    const dialog = dialogRef.current

    const focusDialog = () => {
      const first = dialog?.querySelector<HTMLElement>('[data-dialog-close]')
        ?? dialog?.querySelector<HTMLElement>(FOCUSABLE)
        ?? dialog
      first?.focus()
    }

    const animationFrame = window.requestAnimationFrame(focusDialog)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialog) return

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(FOCUSABLE),
      )

      if (focusable.length === 0) {
        event.preventDefault()
        dialog.focus()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      window.__lenis?.start()

      if (previousActive?.isConnected) {
        previousActive.focus()
      }
    }
  }, [open, onClose])

  return dialogRef
}
