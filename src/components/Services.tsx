import { services } from '../data/services'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function Services() {
  return (
    <Section id="services" className="bg-bg">
      <Reveal>
        <SectionHeading
          title="Landscaping Help for the Jobs That Still Matter"
          description="You do not need a huge landscaping project to get professional help. Kyle handles practical residential work — including the smaller jobs large companies often overlook."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <Reveal key={service.id}>
              <article className="group flex h-full flex-col rounded-md border border-border bg-white/60 p-6 transition duration-200 hover:border-forest/25 hover:shadow-soft">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-md bg-forest/8 text-forest transition group-hover:bg-forest group-hover:text-white">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {service.description}
                </p>
                {service.items.length > 0 ? (
                  <ul className="mt-4 space-y-1.5 border-t border-border/80 pt-4 text-sm text-charcoal/90">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
