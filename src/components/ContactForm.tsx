import { useState, type FormEvent, type ReactNode } from 'react'
import {
  formSubmitEndpoint,
  isEmailConfigured,
  isSchedulingConfigured,
  siteConfig,
} from '../config/site'
import { Button, LinkButton } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { Section, SectionHeading } from './ui/Section'

const helpOptions = [
  'Bed cleanup',
  'Mulching',
  'Hedge or shrub trimming',
  'Planting',
  'Garden bed design',
  'Spring or fall cleanup',
  'Snow or ice removal',
  'Something else',
  "I'm not sure what I need",
] as const

const budgetOptions = [
  'Under $250',
  '$250–$500',
  '$500–$1,000',
  '$1,000–$2,500',
  '$2,500+',
  'Not sure',
] as const

type FormState = {
  name: string
  email: string
  phone: string
  zip: string
  helpWith: string[]
  description: string
  budget: string
  /** FormSubmit honeypot — must stay empty */
  _honey: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  zip: '',
  helpWith: [],
  description: '',
  budget: '',
  _honey: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email', string>>>(
    {},
  )

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const toggleHelp = (option: string) => {
    setForm((prev) => ({
      ...prev,
      helpWith: prev.helpWith.includes(option)
        ? prev.helpWith.filter((item) => item !== option)
        : [...prev.helpWith, option],
    }))
  }

  const validate = () => {
    const next: Partial<Record<'name' | 'email', string>> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!isValidEmail(form.email.trim())) next.email = 'Enter a valid email.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    if (!isEmailConfigured) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim() || 'Not provided',
          zip: form.zip.trim() || 'Not provided',
          helpWith: form.helpWith.length
            ? form.helpWith.join(', ')
            : 'Not specified',
          description: form.description.trim() || 'Not provided',
          budget: form.budget || 'Not sure',
          _honey: form._honey,
          _subject: `New project request from ${form.name.trim()}`,
          _template: 'table',
        }),
      })

      if (!response.ok) throw new Error('FormSubmit request failed')
      setStatus('success')
      setForm(initialState)
    } catch {
      setStatus('error')
    }
  }

  return (
    <Section id="contact" className="bg-bg pb-28 lg:pb-24">
      <Reveal>
        <SectionHeading
          title="Tell Me About Your Project"
          description="You don't need to know exactly what service you need. Describe what's going on and what you'd like to change."
        />
      </Reveal>

      {status === 'success' ? (
        <Reveal>
          <div
            className="rounded-md border border-border bg-white/70 px-6 py-10 text-center shadow-soft sm:px-10"
            role="status"
          >
            <h3 className="font-display text-2xl font-semibold text-charcoal">
              Thanks — I received your project request.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
              I&apos;ll review the details and get back to you as soon as I can.
            </p>
            {isSchedulingConfigured ? (
              <div className="mt-6">
                <LinkButton href={siteConfig.schedulingUrl} external>
                  Schedule a Consultation
                </LinkButton>
              </div>
            ) : (
              <p className="mt-6 text-sm text-muted">
                Scheduling link will appear here once configured in{' '}
                <code className="text-charcoal">site.ts</code>.
              </p>
            )}
            <div className="mt-4">
              <Button
                variant="ghost"
                onClick={() => setStatus('idle')}
                className="text-sm"
              >
                Send another request
              </Button>
            </div>
          </div>
        </Reveal>
      ) : (
        <Reveal>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-md border border-border bg-white/70 p-5 shadow-soft sm:p-8"
          >
            {/* FormSubmit honeypot — leave empty; hide from users */}
            <input
              type="text"
              name="_honey"
              value={form._honey}
              onChange={(e) => updateField('_honey', e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />

            <fieldset className="space-y-5">
              <legend className="font-display text-xl font-semibold text-charcoal">
                Contact Information
              </legend>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  required
                  error={errors.name}
                >
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={inputClass(Boolean(errors.name))}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </Field>

                <Field
                  id="email"
                  label="Email"
                  required
                  error={errors.email}
                >
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={inputClass(Boolean(errors.email))}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </Field>

                <Field id="phone" label="Phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={inputClass(false)}
                  />
                </Field>

                <Field id="zip" label="ZIP code">
                  <input
                    id="zip"
                    name="zip"
                    autoComplete="postal-code"
                    value={form.zip}
                    onChange={(e) => updateField('zip', e.target.value)}
                    className={inputClass(false)}
                  />
                </Field>
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="font-display text-xl font-semibold text-charcoal">
                What do you need help with?
              </legend>
              <p className="mt-1 text-sm text-muted">Select all that apply.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {helpOptions.map((option) => {
                  const checked = form.helpWith.includes(option)
                  const id = `help-${option}`
                  return (
                    <label
                      key={option}
                      htmlFor={id}
                      className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition ${
                        checked
                          ? 'border-forest/40 bg-forest/5 text-charcoal'
                          : 'border-border bg-bg/50 text-charcoal/90 hover:border-forest/25'
                      }`}
                    >
                      <input
                        id={id}
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleHelp(option)}
                        className="h-4 w-4 accent-forest"
                      />
                      <span>{option}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="mt-8">
              <Field id="description" label="Tell me what's going on">
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Describe the area, what you'd like changed, and anything else you think I should know."
                  value={form.description}
                  onChange={(e) => updateField('description', e.target.value)}
                  className={`${inputClass(false)} resize-y`}
                />
              </Field>
            </div>

            <fieldset className="mt-8">
              <legend className="font-display text-xl font-semibold text-charcoal">
                Approximate Budget
              </legend>
              <p className="mt-1 text-sm text-muted">Optional.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {budgetOptions.map((option) => {
                  const id = `budget-${option}`
                  return (
                    <label
                      key={option}
                      htmlFor={id}
                      className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition ${
                        form.budget === option
                          ? 'border-forest/40 bg-forest/5'
                          : 'border-border bg-bg/50 hover:border-forest/25'
                      }`}
                    >
                      <input
                        id={id}
                        type="radio"
                        name="budget"
                        value={option}
                        checked={form.budget === option}
                        onChange={() => updateField('budget', option)}
                        className="h-4 w-4 accent-forest"
                      />
                      <span>{option}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            {status === 'error' ? (
              <p className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                {isEmailConfigured
                  ? 'Something went wrong sending your request. Please try again in a moment.'
                  : 'Form delivery is not configured yet. Replace YOUR_EMAIL_HERE in src/config/site.ts, then activate FormSubmit via the confirmation email on first submit.'}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="submit" disabled={status === 'submitting'} className="sm:min-w-48">
                {status === 'submitting' ? 'Sending…' : 'Send My Project'}
              </Button>
              {isSchedulingConfigured ? (
                <LinkButton
                  href={siteConfig.schedulingUrl}
                  variant="secondary"
                  external
                >
                  Schedule a Consultation
                </LinkButton>
              ) : null}
            </div>
          </form>
        </Reveal>
      )}
    </Section>
  )
}

function inputClass(hasError: boolean) {
  return `mt-1.5 w-full rounded-md border bg-bg px-3.5 py-3 text-base text-charcoal placeholder:text-muted/70 transition focus:border-forest focus:outline-none ${
    hasError ? 'border-red-400' : 'border-border'
  }`
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-charcoal">
        {label}
        {required ? (
          <span className="text-forest" aria-hidden>
            {' '}
            *
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
