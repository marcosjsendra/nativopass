import { useState } from 'react'
import '../../styles/subscription-screen.css'

const ROWS = [
  { label: 'Plan',                      value: 'AFILIACIÓN MENSUAL', bold: true },
  { label: 'Monto',                     value: '₡2,500 CRC',        bold: true },
  { label: 'Fecha de Inicio',           value: '2026-05-06' },
  { label: 'Fecha de Conclusión',       value: '2026-10-06' },
  { label: 'Días de prueba disponibles', value: 'Superados',         badge: true },
]

const backArrow = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m14 5-7 7 7 7M7 12h13" />
  </svg>
)

export default function SubscriptionScreen({ onBack }) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [deleteAccount, setDeleteAccount] = useState(false)

  return (
    <section className="subscription-screen" aria-labelledby="subscription-title">

      {/* Back button */}
      <button type="button" className="subscription-back-btn" onClick={onBack} aria-label="Volver">
        {backArrow}
      </button>

      {/* Hero */}
      <div className="subscription-hero">
        <div className="subscription-hero-icon" aria-hidden="true">
          <img
            src="/docs/Screens/Subscription/check_circle_24dp_E3E3E3_FILL0_wght300_GRAD0_opsz24.svg"
            alt=""
            width="28"
            height="28"
          />
        </div>
        <h1 id="subscription-title" className="subscription-title">Suscripción</h1>
        <p className="subscription-subtitle">Detalles y estado de tu membresía activa</p>
      </div>

      {/* Status badge */}
      <div className="subscription-status">
        <span className="subscription-status-badge">
          <span className="subscription-status-dot" />
          Estado: Activa
        </span>
      </div>

      {/* Payment card */}
      <div className="subscription-card" aria-label="Detalle de pago">
        <div className="subscription-card-header">
          <div className="subscription-card-header-left">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="1" y="4" width="22" height="16" rx="2" />
              <path d="M1 10h22" />
            </svg>
            Detalle de Pago
          </div>
          <span className="subscription-card-status">Activo</span>
        </div>

        <div className="subscription-rows">
          {ROWS.map(({ label, value, bold, badge }) => (
            <div className="subscription-row" key={label}>
              <span className="subscription-row-label">{label}</span>
              {badge
                ? <span className="subscription-row-badge">{value}</span>
                : <span className={`subscription-row-value${bold ? '' : ''}`} style={bold ? { fontWeight: 700 } : { fontWeight: 400 }}>{value}</span>
              }
            </div>
          ))}
        </div>
      </div>

      {/* Bordered bottom section */}
      <div className="subscription-bottom-card">
        {/* Info notice */}
        <p className="subscription-notice">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Tu afiliación se renueva automáticamente el próximo ciclo de facturación. Puedes gestionar o cancelar el servicio en cualquier momento sin penalizaciones adicionales.
        </p>

        <button
          type="button"
          className="subscription-cancel-btn"
          onClick={() => setShowConfirm(true)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          Cancelar Suscripción
        </button>
      </div>

      {/* Checkbox — outside the bordered card */}
      <div className="subscription-action">
        <label className="subscription-delete-label">
          <input
            type="checkbox"
            checked={deleteAccount}
            onChange={(e) => setDeleteAccount(e.target.checked)}
          />
          También eliminar mi cuenta
        </label>
      </div>

      {/* Confirm modal */}
      {showConfirm && (
        <div
          className="subscription-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="confirm-cancel-title"
          onClick={() => setShowConfirm(false)}
        >
          <div className="subscription-modal" onClick={(e) => e.stopPropagation()}>
            <h2 id="confirm-cancel-title">¿Cancelar suscripción?</h2>
            <p>
              {deleteAccount
                ? 'Tu suscripción y cuenta serán eliminadas. Esta acción no se puede deshacer.'
                : 'Perderás el acceso al final del período actual.'}
            </p>
            <div className="subscription-modal-actions">
              <button type="button" className="subscription-modal-keep" onClick={() => setShowConfirm(false)}>
                Mantener
              </button>
              <button type="button" className="subscription-modal-confirm" onClick={() => setShowConfirm(false)}>
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
