import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import './HeroSnoopSlide.css'

/**
 * Animated Snoop Dogg concert slide inside the Hero section.
 * Sequence matches the banner animation, adapted for hero dimensions:
 * - beat 0: Initial background
 * - beat 1: Concert logo fades in
 * - beat 2: NativoPass logo fades in, concert logo moves up
 * - beat 3: Details row (03 DIC + Volvete Miembro+ side-by-side) fades in
 * - beat 4: Details row and logos settle into place
 * - beat 5: Snoop Dogg cutout glides in from bottom (constrained to hero)
 */
export default function HeroSnoopSlide({ isActive, onJoin, onAdvance }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [beat, setBeat] = useState(prefersReducedMotion ? 5 : 0)

  useEffect(() => {
    if (prefersReducedMotion) {
      setBeat(5)
      return undefined
    }

    if (!isActive) {
      setBeat(0)
      return undefined
    }

    // Reset to initial state and run beat sequence when slide becomes active
    setBeat(0)
    const delays = [350, 850, 1450, 2100, 2900]
    const timers = delays.map((delay, index) =>
      setTimeout(() => setBeat(index + 1), delay)
    )

    return () => timers.forEach(clearTimeout)
  }, [isActive, prefersReducedMotion])

  return (
    <div
      className={`hero-snoop-slide hero-snoop-slide--beat-${beat} ${isActive ? 'hero-snoop-slide--active' : ''}`}
      aria-hidden={!isActive}
      onClick={onAdvance}
    >
      {/* Background texture */}
      <img
        className="hero-snoop__bg"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-background@2x.png"
        alt=""
        aria-hidden="true"
      />

      {/* NativoPass brown logo — exact match of .hero-brand position & size */}
      <div className="hero-snoop__brand">
        <img
          src="/assets/images/conciertos/assets-ready/2x/nativopass-logo-brown@2x.png"
          alt="NativoPass"
        />
      </div>

      {/* Snoop Dogg Costa Rica logo — fades in beat 1, floats up beat 2 & 3 */}
      <img
        className="hero-snoop__concert-logo"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-logo-costarica@2x.png"
        alt="Snoop Dogg Costa Rica"
      />

      {/* Details row: Date next to Promo message in one div */}
      <div
        className="hero-snoop__details"
        onClick={(e) => {
          e.stopPropagation()
          onJoin?.()
        }}
        role="button"
        tabIndex={isActive ? 0 : -1}
        aria-label="03 de diciembre, Vuélvete miembro y participa para ganar 2 entradas"
      >
        <img
          className="hero-snoop__date"
          src="/assets/images/conciertos/assets-ready/2x/snoopdogg-date@2x.png"
          alt="03 de diciembre"
        />
        <img
          className="hero-snoop__promo"
          src="/assets/images/conciertos/assets-ready/2x/snoopdogg-promomessage@2x.png"
          alt="Vuélvete miembro y participa para ganar 2 entradas"
        />
      </div>

      {/* Snoop Dogg cutout — constrained to hero section, slides up from bottom on beat 5 */}
      <img
        className="hero-snoop__face"
        src="/assets/images/conciertos/snoopdogg/SnoopDoggSubject-front.png"
        alt=""
        aria-hidden="true"
      />

      {/* Guest Membership CTA card on top of Snoop Dogg cutout */}
      <div className="hero-snoop__cta-region">
        <section
          className="membership-cta membership-cta--guest hero-snoop__cta"
          aria-label="Invitación a unirse a NativoPass"
        >
          <img
            className="membership-cta-backdrop"
            src="/assets/images/conciertos/assets-ready/2x/snoopdogg-background@2x.png"
            alt=""
            aria-hidden="true"
          />
          <strong className="membership-guest-title hero-snoop__cta-title">
            DESBLOQUEÁ<br />MIEMBROS+
          </strong>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onJoin?.()
            }}
          >
            UNIRME
          </button>
        </section>
      </div>
    </div>
  )
}
