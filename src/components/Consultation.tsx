import { LinkButton } from './ui/Button'
import { Reveal } from './ui/Reveal'

export function Consultation() {
  return (
    <section
      id="consultation"
      className="scroll-mt-24 bg-forest px-5 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl leading-tight font-semibold text-balance sm:text-4xl">
            Not Sure What to Do With Your Landscape?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85 text-pretty">
            You don&apos;t need to know the name of every plant or exactly what
            service to ask for. Tell me what isn&apos;t working, what you&apos;d
            like the area to look like, and how much maintenance you want.
            I&apos;ll help you figure out a practical direction.
          </p>
          <div className="mt-8">
            <LinkButton href="#contact" variant="onDark">
              Tell Me About the Area
            </LinkButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
