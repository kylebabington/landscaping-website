import { Menu, X } from 'lucide-react'
import { useEffect, useId, useRef, useState } from 'react'
import { navLinks, siteConfig } from '../config/site'
import { LinkButton } from './ui/Button'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    // Move focus into the open menu for keyboard users
    firstLinkRef.current?.focus()
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open
          ? 'border-b border-border/80 bg-bg/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-forest"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-forest sm:text-xl"
          onClick={close}
        >
          {siteConfig.businessName}
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-charcoal/90 transition hover:bg-forest/5 hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <LinkButton href="#contact" className="ml-2">
            Tell Me About Your Project
          </LinkButton>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-border bg-bg/80 text-forest lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </nav>

      {open ? (
        <div
          id={menuId}
          className="border-t border-border bg-bg lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-medium text-charcoal"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <LinkButton href="#contact" className="mt-2 w-full" onClick={close}>
              Tell Me About Your Project
            </LinkButton>
          </div>
        </div>
      ) : null}
    </header>
  )
}
