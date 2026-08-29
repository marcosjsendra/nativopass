import { useEffect, useRef, useState } from 'react'
import brandLogo from '../../../assets/logos/Nativopass-logo-7101F7.svg'
import brandIcon from '../../../assets/logos/Nativopass-n-icon-7101F7.svg'

const benefits = [
  'Descuentos en todos nuestros comercios aliados.',
  'Alertas tempranas de nuevas promociones.',
  'Premios semanales y mensuales en Nativo Rewards.',
  'Acceso anticipado a productos y lanzamientos.',
]

const plans = {
  annual: {
    name: 'ANUAL',
    price: '₡42.000',
    cadence: 'AL AÑO',
    detail: 'Equivale a ₡3.500 al mes',
    buttonLabel: 'PAGAR ₡42.000',
  },
  monthly: {
    name: 'MENSUAL',
    price: '₡5.000',
    cadence: 'AL MES',
    detail: 'Facturado mensualmente',
    buttonLabel: 'PAGAR ₡5.000',
  },
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.5 5-7 7 7 7" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="m4.5 10 3.25 3.25L15.5 5.5" />
    </svg>
  )
}

export default function MembershipPayment({ onCancel, onPaymentComplete }) {
  const [selectedPlan, setSelectedPlan] = useState('annual')
  const [isProcessing, setProcessing] = useState(false)
  const paymentTimerRef = useRef(null)
  const activePlan = plans[selectedPlan]

  useEffect(() => () => window.clearTimeout(paymentTimerRef.current), [])

  const submitPayment = (event) => {
    event.preventDefault()
    if (isProcessing) return

    setProcessing(true)
    paymentTimerRef.current = window.setTimeout(onPaymentComplete, 650)
  }

  return (
    <main className="membership-payment">
      <header className="membership-payment-header">
        <button className="membership-payment-back" type="button" onClick={onCancel} aria-label="Volver">
          <BackIcon />
        </button>

        <img className="membership-payment-logo" src={brandLogo} alt="NativoPass" />

        <span className="membership-payment-header-spacer" aria-hidden="true" />
      </header>

      <form className="membership-payment-form" onSubmit={submitPayment}>
        <div className="membership-payment-content">
          <section className="membership-payment-intro" aria-labelledby="membership-payment-title">
            <div className="membership-payment-kicker">
              <img src={brandIcon} alt="" aria-hidden="true" />
              <span>MIEMBROS+</span>
            </div>

            <h1 id="membership-payment-title">DISFRUTÁ MÁS.<br />PAGÁ MENOS.</h1>
            <p>Hacete Miembro+ y desbloqueá beneficios exclusivos durante todo el año.</p>
          </section>

          <section className="membership-benefits" aria-label="Beneficios de Miembros+">
            <ul>
              {benefits.map((benefit) => (
                <li key={benefit}>
                  <span className="membership-benefit-check"><CheckIcon /></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <fieldset className="membership-plans">
            <legend>ELEGÍ TU PLAN</legend>

            {Object.entries(plans).map(([planId, plan]) => {
              const isSelected = selectedPlan === planId

              return (
                <label className={`membership-plan ${isSelected ? 'is-selected' : ''}`} key={planId}>
                  <input
                    type="radio"
                    name="membership-plan"
                    value={planId}
                    checked={isSelected}
                    onChange={() => setSelectedPlan(planId)}
                    disabled={isProcessing}
                  />
                  <span className="membership-plan-radio" aria-hidden="true" />
                  <span className="membership-plan-name">
                    <strong>{plan.name}</strong>
                    <small>{plan.detail}</small>
                  </span>
                  <span className="membership-plan-price">
                    <strong>{plan.price}</strong>
                    <small>{plan.cadence}</small>
                  </span>
                  {planId === 'annual' && <span className="membership-plan-saving">AHORRÁ 30%</span>}
                </label>
              )
            })}
          </fieldset>
        </div>

        <div className="membership-payment-actions">
          <button className="membership-payment-submit" type="submit" disabled={isProcessing}>
            {isProcessing ? (
              <>
                <span className="membership-payment-spinner" aria-hidden="true" />
                PROCESANDO…
              </>
            ) : activePlan.buttonLabel}
          </button>
          <button
            className="membership-payment-cancel"
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            aria-label="Cancelar y volver al inicio"
          >
            CANCELAR
          </button>
        </div>
      </form>
    </main>
  )
}
