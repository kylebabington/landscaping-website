import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'onDark'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-white hover:bg-forest-dark shadow-soft border border-transparent',
  secondary:
    'bg-transparent text-forest border border-forest/30 hover:border-forest hover:bg-forest/5',
  ghost: 'bg-transparent text-charcoal hover:bg-charcoal/5 border border-transparent',
  onDark:
    'bg-white text-forest hover:bg-bg border border-transparent shadow-soft',
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold tracking-wide transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

type LinkButtonProps = {
  href: string
  variant?: Variant
  children: ReactNode
  className?: string
  external?: boolean
  onClick?: () => void
}

export function LinkButton({
  href,
  variant = 'primary',
  className = '',
  children,
  external = false,
  onClick,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-base font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
    >
      {children}
    </a>
  )
}
