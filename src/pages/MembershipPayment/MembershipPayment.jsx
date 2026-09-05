import { useEffect, useRef, useState } from 'react'
import brandLogo from '../../../assets/logos/Nativopass-logo-7101F7.svg'
import brandIcon from '../../../assets/logos/Nativopass-n-icon-7101F7.svg'

const benefits = [
  'Ganá premios de hasta más de 1,000,000 de colones.',
  'Obtén regalías exclusivas en nuestros comercios afiliados.',
  'Prueba gratis de 14 días y sin compromiso. Podés cancelar en cualquier momento.',
]

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
  const [isProcessing, setProcessing] = useState(false)
  const paymentTimerRef = useRef(null)

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
        <span aria-hidden="true" />
      </header>

      <form className="membership-payment-form" onSubmit={submitPayment}>
        <section className="membership-payment-intro" aria-labelledby="membership-payment-title">
          <h1 id="membership-payment-title">
            <span>VUELVETE</span>
            <span className="membership-payment-title-line">
              <img src={brandIcon} alt="" aria-hidden="true" /> MIEMBRO+
            </span>
          </h1>
          <p>Y PARTICIPA EN NUESTROS TORNEOS</p>
        </section>

        <ul className="membership-benefits" aria-label="Beneficios de Miembro+">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span className="membership-benefit-check" aria-hidden="true"><CheckIcon /></span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <p className="membership-price">
          <strong>₡2,500</strong>
          <span>colones por mes</span>
        </p>

        <fieldset className="membership-card">
          <legend>Datos de la tarjeta</legend>

          <label className="membership-field membership-field--wide">
            <span>Nombre completo</span>
            <input name="card-name" type="text" autoComplete="cc-name" placeholder="Como aparece en la tarjeta" minLength="3" required />
          </label>

          <label className="membership-field membership-field--wide">
            <span>Número de tarjeta</span>
            <input name="card-number" type="text" inputMode="numeric" autoComplete="cc-number" placeholder="0000 0000 0000 0000" pattern="[0-9 ]{13,23}" maxLength="23" required />
          </label>

          <label className="membership-field">
            <span>Vencimiento</span>
            <input name="card-expiry" type="text" inputMode="numeric" autoComplete="cc-exp" placeholder="MM/AA" pattern="[0-9]{2}/[0-9]{2}" maxLength="5" required />
          </label>

          <label className="membership-field">
            <span>CVV</span>
            <input name="card-cvv" type="password" inputMode="numeric" autoComplete="cc-csc" placeholder="123" pattern="[0-9]{3,4}" maxLength="4" required />
          </label>

          <button className="membership-payment-submit" type="submit" disabled={isProcessing}>
            {isProcessing ? (
              <>
                <span className="membership-payment-spinner" aria-hidden="true" />
                Procesando…
              </>
            ) : 'Pagar'}
          </button>
        </fieldset>
      </form>
    </main>
  )
}
