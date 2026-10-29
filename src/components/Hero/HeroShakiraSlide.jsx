import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import './HeroShakiraSlide.css'

/**
 * Animated Shakira concert slide inside the Hero section.
 * Sequence matches the concert animation:
 * - beat 0: Initial background
 * - beat 1: Concert logo (Shakira Costa Rica + Las Mujeres Ya No Lloran) fades in
 * - beat 2: NativoPass logo fades in, concert logo shifts up
 * - beat 3: Details box (Volvete Miembro+ participa para ganar 2 entradas) fades in
 * - beat 4: Details box and logos settle into place
 * - beat 5: Shakira cutout glides in from bottom + Guest CTA banner fades in
 */
export default function HeroShakiraSlide({ isActive, membershipState, onJoin, onAdvance }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [beat, setBeat] = useState(prefersReducedMotion ? 5 : 0)
  const isMember = membershipState === 'member'

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
      className={`hero-shakira-slide hero-shakira-slide--beat-${beat} ${isActive ? 'hero-shakira-slide--active' : ''}`}
      aria-hidden={!isActive}
      onClick={onAdvance}
    >
      {/* Background texture */}
      <img
        className="hero-shakira__bg"
        src="/assets/images/conciertos/shakira/shakira-background.png"
        alt=""
        aria-hidden="true"
      />

      {/* NativoPass white logo — matches brand placement on hero */}
      <div className="hero-shakira__brand">
        <img
          src="/assets/images/conciertos/shakira/nativopass-logo-white.png"
          alt="NativoPass"
        />
      </div>

      {/* Shakira Costa Rica & World Tour logo group — fades in beat 1, floats up beat 2 & 3 */}
      <div className="hero-shakira__concert-group">
        <img
          className="hero-shakira__concert-logo"
          src="/assets/images/conciertos/shakira/shakira-logo-cr.png"
          alt="Shakira Costa Rica"
        />
        <img
          className="hero-shakira__tour-subtitle"
          src="/assets/images/conciertos/shakira/las-mujeres-ya-no-lloran.png"
          alt="Las Mujeres Ya No Lloran World Tour"
        />
      </div>

      {/* Details / Promo message box: Volvete Miembro+ participa para ganar 2 entradas */}
      <div
        className="hero-shakira__details"
        onClick={(e) => {
          e.stopPropagation()
          onJoin?.()
        }}
        role="button"
        tabIndex={isActive ? 0 : -1}
        aria-label="Vuélvete miembro y participa para ganar 2 entradas"
      >
        <img
          className="hero-shakira__promo"
          src="/assets/images/conciertos/shakira/volvete-miembro-promo-text.png"
          alt="Volvete Miembro+ participa para ganar 2 entradas"
        />
      </div>

      {/* Shakira cutout — constrained to hero section, slides up from bottom on beat 5 */}
      <img
        className="hero-shakira__face"
        src="/assets/images/conciertos/shakira/shakira-face-1.png"
        alt=""
        aria-hidden="true"
      />

      {/* Guest Membership CTA card on top of Shakira cutout (hidden when user is a member) */}
      {!isMember && (
        <div className="hero-shakira__cta-region">
          <section
            className="membership-cta membership-cta--guest hero-shakira__cta"
            aria-label="Invitación a unirse a NativoPass"
          >
            <img
              className="membership-cta-backdrop"
              src="/assets/images/conciertos/shakira/shakira-background.png"
              alt=""
              aria-hidden="true"
            />
            <strong className="membership-guest-title hero-shakira__cta-title">
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
      )}
    </div>
  )
}
