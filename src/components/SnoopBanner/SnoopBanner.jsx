import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import './SnoopBanner.css'

/**
 * Animated Snoop Dogg giveaway banner.
 * 6-beat sequence driven by CSS classes; JS only advances the beat index.
 *   beat-0  initial blank state
 *   beat-1  concert logo fades in (center)
 *   beat-2  nativopass logo fades in (top)
 *   beat-3  content moves up, date fades in below
 *   beat-4  content moves up more, promo message fades in, face fades in
 *   beat-5  face slides/moves to the left (final hold)
 */
export default function SnoopBanner() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [beat, setBeat] = useState(prefersReducedMotion ? 5 : 0)

  useEffect(() => {
    if (prefersReducedMotion) return
    // Cumulative delay (ms) for each beat transition
    const delays = [400, 900, 1500, 2200, 3100]
    const timers = delays.map((delay, i) =>
      setTimeout(() => setBeat(i + 1), delay)
    )
    return () => timers.forEach(clearTimeout)
  }, [prefersReducedMotion])

  return (
    <div
      className={`snoop-banner snoop-banner--beat-${beat}`}
      aria-label="Nativopass sortea 2 entradas al concierto de Snoop Dogg en Costa Rica"
    >
      {/* Background texture — always visible */}
      <img
        className="snoop-banner__bg"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-background@2x.png"
        alt=""
        aria-hidden="true"
      />

      {/* NATIVOPASS logo — absolutely top-center, fades in on beat 2 */}
      <img
        className="snoop-banner__nativo-logo"
        src="/assets/images/conciertos/assets-ready/2x/nativopass-logo-brown@2x.png"
        alt="Nativopass"
      />

      {/* Concert logo (COSTA RICA / SNOOP DOGG) — center, fades in on beat 1, moves up each beat */}
      <img
        className="snoop-banner__concert-logo"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-logo-costarica@2x.png"
        alt="Snoop Dogg Costa Rica"
      />

      {/* Date badge — below concert logo, fades in on beat 3 */}
      <img
        className="snoop-banner__date"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-date@2x.png"
        alt="03 de diciembre"
      />

      {/* Promo message — fades in on beat 4 */}
      <img
        className="snoop-banner__promo"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-promomessage@2x.png"
        alt="Vuélvete miembro y participa para ganar 2 entradas"
      />

      {/* Snoop face — fades in on beat 4, slides left to center on beat 5 */}
      <img
        className="snoop-banner__face"
        src="/assets/images/conciertos/snoopdogg/SnoopDoggSubject-front.png"
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}
