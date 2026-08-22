import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import MembershipCta from '../MembershipCta/MembershipCta.jsx'

const originalSlides = [
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

const iterationOneSlides = [
  {
    id: 'lifestyle-new',
    image: '/assets/images/nativo-pass-hero-slide1-new.png',
    alt: 'Miembro de NativoPass celebrando un beneficio desde su celular',
    title: (
      <>
        TU ESTILO DE VIDA,
        <strong> PREMIADO.</strong>
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

export default function Hero({ iteration, membershipState, onMembershipStateChange }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const isRedesignIteration = iteration === 'iteration-1'
  const slides = isRedesignIteration ? iterationOneSlides : originalSlides
  const [activeSlide, setActiveSlide] = useState(0)
  const [isLocationOpen, setLocationOpen] = useState(false)
  const [location, setLocation] = useState('Ubicación')
  const intervalRef = useRef(null)
  const activeSlideIndex = activeSlide % slides.length

  useEffect(() => {
    if (prefersReducedMotion || slides.length < 2) return undefined

    intervalRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 6500)

    return () => window.clearInterval(intervalRef.current)
  }, [prefersReducedMotion, slides.length])

  const advanceSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const chooseLocation = (nextLocation) => {
    setLocation(nextLocation)
    setLocationOpen(false)
  }

  const heroMediaContent = (
    <>
      {slides.map((slide, index) => (
        <img
          className={`hero-slide ${index === activeSlideIndex ? 'hero-slide--active' : ''}`}
          src={slide.image}
          alt={index === activeSlideIndex ? slide.alt : ''}
          aria-hidden={index !== activeSlideIndex}
          key={slide.id}
        />
      ))}

      <div className={`hero-brand ${isRedesignIteration ? 'hero-brand--plain' : ''}`}>
        <img src="/assets/logos/Nativopass-logo.svg" alt="NativoPass" />
      </div>

      <h1 className="hero-title" aria-live="polite">{slides[activeSlideIndex].title}</h1>

      {slides.length > 1 && (
        <span className="hero-progress" aria-hidden="true">
          <span key={activeSlideIndex} />
        </span>
      )}
    </>
  )

  return (
    <section
      className={`hero hero--${slides[activeSlideIndex].id} ${isRedesignIteration ? 'hero--iteration-one' : 'hero--original'}`}
      aria-roledescription={isRedesignIteration ? undefined : 'carousel'}
      aria-label="Beneficios NativoPass"
    >
      {isRedesignIteration ? (
        <div className="hero-media">
          {heroMediaContent}
          <MembershipCta
            membershipState={membershipState}
            onMembershipStateChange={onMembershipStateChange}
          />
        </div>
      ) : (
        <button className="hero-media" type="button" onClick={advanceSlide} aria-label="Ver siguiente promoción">
          {heroMediaContent}
        </button>
      )}

      {!isRedesignIteration && (
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
      )}
    </section>
  )
}
