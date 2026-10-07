import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

const steps = [
  {
    number: '1',
    title: 'Tell Me About Your Project',
    description: 'Complete the short project form with as much detail as you have.',
  },
  {
    number: '2',
    title: "We'll Talk It Through",
    description:
      'Kyle reviews the request and follows up if more information is needed.',
  },
  {
    number: '3',
    title: 'Get a Plan or Estimate',
    description:
      'For appropriate projects, discuss the work, timing, and expected cost.',
  },
  {
    number: '4',
    title: 'Schedule the Work',
    description:
      'Choose a time that works and get the project taken care of.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface/50">
      <Reveal>
        <SectionHeading
          title="How It Works"
          description="A straightforward process from first note to finished work."
        />
      </Reveal>

      <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <Reveal key={step.number}>
            <li className="relative h-full border-t border-forest/25 pt-5">
              <span className="font-display text-4xl font-semibold text-forest/25">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
