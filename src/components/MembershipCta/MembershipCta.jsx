import { useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

export default function MembershipCta({ membershipState, onMembershipStateChange }) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [points] = useState(() => Math.floor(Math.random() * 1601) + 600)
  const pointsLabel = new Intl.NumberFormat('en-US').format(points)
  const remainingDays = 2

  const showRewards = () => {
    document.querySelector('.snake-section')?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'center',
    })
  }

  return (
    <div className="membership-cta-region">
      {membershipState === 'member' ? (
        <section className="membership-cta membership-cta--member" aria-label="Resumen de membresía" aria-live="polite">
          <strong className="membership-member-title">SOS MIEMBRO+</strong>
          <span className="membership-points"><b>{pointsLabel}</b> PTS</span>
          <div className="membership-days-row">
            <p className="membership-days">Días restantes<br />para participar:</p>
            <span className="membership-day-count" aria-label={`${remainingDays} días restantes`}>{remainingDays}</span>
          </div>
          <button type="button" onClick={showRewards}>VER RANKING</button>
        </section>
      ) : (
        <section className="membership-cta membership-cta--guest" aria-label="Invitación a unirse a NativoPass" aria-live="polite">
          <strong className="membership-guest-title">DESBLOQUEÁ MIEMBROS+</strong>
          <span className="membership-guest-copy">Jugá, sumá puntos y ganá premios cada semana.</span>
          <button type="button" onClick={() => onMembershipStateChange('member')}>UNIRME</button>
        </section>
      )}
    </div>
  )
}
