import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

const slides = [
  {
    id: 'lifestyle',
    image: '/assets/images/nativo-pass-hero-slide1.png',
    alt: 'Mujer disfrutando sus beneficios NativoPass desde el celular',
    title: (
      <>
        TU ESTILO DE VIDA,
        <strong> PREMIADO.</strong>
      </>
    ),
  },
  {
    id: 'qr',
    image: '/assets/images/nativo-pass-hero-slide2.png',
    alt: 'Teléfono NativoPass rodeado de regalos, descuentos y recompensas',
    title: (
      <>
        <strong>ESCANEA EL QR EN NUESTROS COMERCIOS</strong>
        <span> AFILIADOS Y APROVECHA TUS DESCUENTOS.</span>
      </>
    ),
  },
]

const locations = ['Alajuela', 'Puntarenas', 'San José', 'Limón', 'Liberia', 'Cartago']

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s7-6.07 7-13A7 7 0 0 0 5 9c0 6.93 7 13 7 13Z" />
      <circle cx="12" cy="9" r="2.35" />
    </svg>
  )
}

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [activeSlide, setActiveSlide] = useState(0)
  const [isLocationOpen, setLocationOpen] = useState(false)
  const [location, setLocation] = useState('Ubicación')
  const intervalRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion) return undefined

    intervalRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(intervalRef.current)
  }, [prefersReducedMotion])

  const advanceSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const chooseLocation = (nextLocation) => {
    setLocation(nextLocation)
    setLocationOpen(false)
  }

  return (
    <section className={`hero hero--${slides[activeSlide].id}`} aria-roledescription="carousel" aria-label="Beneficios NativoPass">
      <button className="hero-media" type="button" onClick={advanceSlide} aria-label="Ver siguiente promoción">
        {slides.map((slide, index) => (
          <img
            className={`hero-slide ${index === activeSlide ? 'hero-slide--active' : ''}`}
            src={slide.image}
            alt={index === activeSlide ? slide.alt : ''}
            aria-hidden={index !== activeSlide}
            key={slide.id}
          />
        ))}

        <div className="hero-brand">
          <img src="/assets/logos/Nativopass-logo.svg" alt="NativoPass" />
        </div>

        <h1 className="hero-title" aria-live="polite">{slides[activeSlide].title}</h1>

        <span className="hero-progress" aria-hidden="true">
          <span key={activeSlide} />
        </span>
      </button>

      <div className="location-picker">
        <button
          className={`location-trigger ${isLocationOpen ? 'location-trigger--open' : ''}`}
          type="button"
          aria-expanded={isLocationOpen}
          aria-controls="location-menu"
          onClick={() => setLocationOpen((open) => !open)}
        >
          <PinIcon />
          <span>{location}</span>
          <i aria-hidden="true" />
        </button>

        {isLocationOpen && (
          <div className="location-menu" id="location-menu">
            {locations.map((item) => (
              <button type="button" onClick={() => chooseLocation(item)} key={item}>
                <span>{item}</span>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
