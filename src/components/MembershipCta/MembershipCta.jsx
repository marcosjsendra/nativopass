import { useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

export default function MembershipCta({ backdropImage, membershipState, onJoin }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [points] = useState(() => Math.floor(Math.random() * 1601) + 600)
  const pointsLabel = new Intl.NumberFormat('en-US').format(points)
  const remainingDays = 2
  const isMember = membershipState === 'member'

  const showRewards = () => {
    document.querySelector('.snake-section')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    })
  }

  return (
    <div className="membership-cta-region">
      <section
        className={`membership-cta ${isMember ? 'membership-cta--member' : 'membership-cta--guest'}`}
        aria-label={isMember ? 'Resumen de membresía' : 'Invitación a unirse a NativoPass'}
        aria-live="polite"
      >
        <img className="membership-cta-backdrop" src={backdropImage} alt="" aria-hidden="true" />

        {isMember ? (
          <>
            <strong className="membership-member-title">SOS MIEMBRO+</strong>
            <span className="membership-points"><b>{pointsLabel}</b> PTS</span>
            <div className="membership-days-row">
              <p className="membership-days">Días restantes<br />para participar:</p>
              <span className="membership-day-count" aria-label={`${remainingDays} días restantes`}>{remainingDays}</span>
            </div>
            <button type="button" onClick={showRewards}>VER RANKING</button>
          </>
        ) : (
          <>
            <strong className="membership-guest-title">DESBLOQUEÁ MIEMBROS+</strong>
            <span className="membership-guest-copy">Jugá, sumá puntos y ganá premios cada semana.</span>
            <button type="button" onClick={onJoin}>UNIRME</button>
          </>
        )}
      </section>
    </div>
  )
}
