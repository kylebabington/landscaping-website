import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  /** Extra classes for the inner max-width container */
  containerClassName?: string
}

export function Section({
  id,
  children,
  className = '',
  containerClassName = '',
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className={`mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <div className={`mb-10 max-w-3xl sm:mb-12 ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl leading-tight font-semibold text-balance text-charcoal sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}
