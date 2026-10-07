import { useEffect, useState } from 'react'
import { LinkButton } from './ui/Button'

/** Bottom CTA on small screens; hidden when the contact section is in view. */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const contact = document.getElementById('contact')
    if (!contact) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry?.isIntersecting)
      },
      { threshold: 0.15 },
    )

    observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/80 bg-bg/95 p-3 backdrop-blur-md lg:hidden">
      <LinkButton href="#contact" className="w-full shadow-soft">
        Tell Me About Your Project
      </LinkButton>
    </div>
  )
}
