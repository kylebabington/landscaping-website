import { Reveal } from './ui/Reveal'
import { ImagePlaceholder } from './ui/ImagePlaceholder'
import { Section, SectionHeading } from './ui/Section'

/** Set to '/images/kyle.jpg' (or similar) when a real photo is ready. */
const ABOUT_IMAGE_SRC: string | undefined = undefined

export function About() {
  return (
    <Section id="about" className="bg-surface/60">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionHeading
            title="Practical Landscaping. Real Plant Knowledge."
            description="With about 20 years of hands-on experience in landscaping, horticulture, garden centers, and plant care, Kyle brings practical judgment to residential properties — what will thrive, what will become a maintenance headache, and what is worth doing now."
          />
          <div className="-mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Landscapes change over seasons and years. The goal is straightforward
              work that fits your yard, your time, and how much upkeep you actually
              want.
            </p>
            <p className="font-medium text-charcoal">
              20 years of hands-on horticulture and landscaping experience.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <ImagePlaceholder
            label="Photo of Kyle working outdoors"
            src={ABOUT_IMAGE_SRC}
            className="rounded-md border border-border"
            aspectClassName="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </Reveal>
      </div>
    </Section>
  )
}
