import {
  isPhoneConfigured,
  isSchedulingConfigured,
  navLinks,
  siteConfig,
} from '../config/site'
import { LinkButton } from './ui/Button'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-forest text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl font-semibold">
            {siteConfig.businessName}
          </p>
          <p className="mt-2 text-white/75">
            {siteConfig.city}, {siteConfig.state}
          </p>
          {isPhoneConfigured ? (
            <p className="mt-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                className="text-white/90 underline-offset-2 hover:underline"
              >
                {siteConfig.phone}
              </a>
            </p>
          ) : null}
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/85 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <LinkButton href="#contact" variant="onDark">
            Tell Me About Your Project
          </LinkButton>
          {isSchedulingConfigured ? (
            <LinkButton
              href={siteConfig.schedulingUrl}
              variant="secondary"
              className="border-white/30 text-white hover:border-white hover:bg-white/10"
              external
            >
              Schedule a Consultation
            </LinkButton>
          ) : null}
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-sm text-white/60 sm:px-6 lg:px-8">
          © {year} {siteConfig.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
