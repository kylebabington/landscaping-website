import { About } from './components/About'
import { Consultation } from './components/Consultation'
import { ContactForm } from './components/ContactForm'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MobileStickyCta } from './components/MobileStickyCta'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Consultation />
        <About />
        <Portfolio />
        <HowItWorks />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCta />
    </>
  )
}
