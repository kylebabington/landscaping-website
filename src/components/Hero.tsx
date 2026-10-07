import { MapPin } from 'lucide-react'
import { siteConfig } from '../config/site'
import { LinkButton } from './ui/Button'

/**
 * Hero photo: set HERO_IMAGE_SRC to a path under /public/images/ when ready.
 * Example: '/images/hero.jpg'
 */
const HERO_IMAGE_SRC: string | undefined = undefined

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-forest text-white"
    >
      <div className="absolute inset-0">
        {HERO_IMAGE_SRC ? (
          <img
            src={HERO_IMAGE_SRC}
            alt=""
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="h-full w-full bg-[radial-gradient(ellipse_at_20%_20%,#3a5c45_0%,transparent_50%),linear-gradient(160deg,#1f3d2b_0%,#162b1e_55%,#243f30_100%)]"
            aria-hidden
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest-dark/92 via-forest-dark/78 to-forest/45"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pt-28 pb-20 sm:justify-center sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        <div className="hero-enter max-w-2xl">
          <p className="mb-4 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {siteConfig.businessName}
          </p>
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/75 uppercase">
            Landscaping • Garden Care • Indianapolis
          </p>
          <h1 className="font-display text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl lg:text-6xl">
            Make Your Yard Look Like Someone Actually Cares About It.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 text-pretty sm:text-xl">
            Garden bed cleanup, planting, hedge trimming, mulching, landscape
            design and seasonal cleanup backed by 20 years of hands-on
            horticulture experience.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white/80">
            <MapPin size={16} aria-hidden />
            <span>{siteConfig.serviceArea}</span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="#contact" variant="onDark">
              Tell Me About Your Project
            </LinkButton>
            <LinkButton
              href="#services"
              variant="secondary"
              className="border-white/35 text-white hover:border-white hover:bg-white/10"
            >
              View Services
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}
