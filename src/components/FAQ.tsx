import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

export function FAQ() {
  return (
    <Section id="faq" className="bg-surface/40">
      <Reveal>
        <SectionHeading
          title="Frequently Asked Questions"
          description="Quick answers before you reach out."
        />
      </Reveal>

      <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </Section>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  return (
    <div>
      <h3>
        <button
          type="button"
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="font-display text-lg font-semibold text-charcoal">
            {question}
          </span>
          <ChevronDown
            size={20}
            className={`shrink-0 text-muted transition duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={panelId}
        hidden={!open}
        className="pb-5 text-base leading-relaxed text-muted"
      >
        {answer}
      </div>
    </div>
  )
}
