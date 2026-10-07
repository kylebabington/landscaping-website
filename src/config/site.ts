/**
 * Central business configuration.
 *
 * Replace placeholder values before going live:
 * - email: used for FormSubmit lead delivery (see formSubmitEndpoint)
 * - phone: only shown in the UI once replaced
 * - schedulingUrl: Cal.com / Calendly (or similar) consultation link
 */
export const siteConfig = {
  businessName: 'Kyle Babington Landscaping',
  city: 'Indianapolis',
  state: 'Indiana',
  serviceArea: 'Indianapolis and surrounding areas',
  /** FormSubmit destination — replace YOUR_EMAIL_HERE with a real address */
  email: 'kylebabington@gmail.com',
  /** Replace YOUR_PHONE_HERE to show a phone number in the footer */
  phone: '(765) 720-3220',
  /** Replace YOUR_CAL_URL_HERE with your Cal.com (or similar) booking URL */
  schedulingUrl: 'https://cal.com/kyle-babington-q7dlpy/landscaping-consultation',
}

/** Derived from siteConfig.email — do not hard-code a separate endpoint. */
export const formSubmitEndpoint = `https://formsubmit.co/ajax/${siteConfig.email}`

export const isEmailConfigured = siteConfig.email !== 'YOUR_EMAIL_HERE'
export const isPhoneConfigured = siteConfig.phone !== 'YOUR_PHONE_HERE'
export const isSchedulingConfigured =
  siteConfig.schedulingUrl !== 'YOUR_CAL_URL_HERE'

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
] as const
