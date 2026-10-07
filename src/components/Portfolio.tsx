import { portfolioItems } from '../data/portfolio'
import { Reveal } from './ui/Reveal'
import { ImagePlaceholder } from './ui/ImagePlaceholder'
import { Section, SectionHeading } from './ui/Section'

export function Portfolio() {
  return (
    <Section id="work" className="bg-bg">
      <Reveal>
        <SectionHeading
          title="Recent Work"
          description="Project photos will live here. Until then, these slots mark the kinds of residential work to expect."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => {
          const hasBeforeAfter = Boolean(item.beforeSrc && item.afterSrc)

          return (
            <Reveal key={item.id}>
              {hasBeforeAfter ? (
                <article className="overflow-hidden rounded-md border border-border">
                  <div className="grid grid-cols-2 gap-px bg-border">
                    <ImagePlaceholder
                      label="Before"
                      src={item.beforeSrc}
                      aspectClassName="aspect-square"
                    />
                    <ImagePlaceholder
                      label="After"
                      src={item.afterSrc}
                      aspectClassName="aspect-square"
                    />
                  </div>
                  <div className="border-t border-border bg-white/50 px-4 py-3">
                    <h3 className="text-sm font-semibold text-charcoal">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ) : (
                <article className="overflow-hidden rounded-md border border-border transition duration-200 hover:shadow-soft">
                  <ImagePlaceholder label={item.title} src={item.imageSrc} />
                </article>
              )}
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
