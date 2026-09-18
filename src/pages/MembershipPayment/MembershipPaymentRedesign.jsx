import { useEffect, useRef, useState } from 'react'
import brandLogo from '../../../assets/logos/Nativopass-logo-7101F7.svg'
import '../../styles/membership-payment-redesign.css'

const benefits = [
  <>Ganá premios de <strong>hasta más de ₡1.000.000.</strong></>,
  <>Obtené <strong>regalías exclusivas</strong> en nuestros comercios afiliados.</>
]

export default function MembershipPaymentRedesign({ onCancel, onPaymentComplete }) {
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
    <section className="membership-renewal" aria-labelledby="membership-renewal-title">
      <header className="membership-renewal-hero">
        <div className="membership-renewal-nav">
          <button type="button" onClick={onCancel} aria-label="Volver">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 5-7 7 7 7M7 12h13" /></svg>
          </button>
          <img src={brandLogo} alt="NativoPass" />
          <span aria-hidden="true" />
        </div>
        <div className="membership-renewal-intro">
          <h1 id="membership-renewal-title">Volvete <span aria-label="Miembro más">Miembro</span></h1>
          <p>Y participá en nuestros torneos</p>
        </div>
      </header>

      <div className="membership-renewal-content">
        <ul className="membership-renewal-benefits" aria-label="Beneficios de Miembro+">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <span className="membership-renewal-check" aria-hidden="true">
                <svg viewBox="0 0 20 20"><path d="m4.5 10 3.25 3.25L15.5 5.5" /></svg>
              </span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <section className="membership-renewal-plan" aria-labelledby="membership-renewal-plan-title">
          <div className="membership-renewal-price-row">
            <h2 id="membership-renewal-plan-title">Membresía mensual</h2>
            <p><strong>₡2.500</strong><span> / mes</span></p>
          </div>
          <p className="membership-renewal-plan-note">Se cobra al finalizar tu prueba de 14 días.</p>
        </section>

        <form className="membership-renewal-form" onSubmit={submitPayment}>
          <fieldset disabled={isProcessing}>
            <legend>Datos de la tarjeta</legend>
            <div className="membership-renewal-fields">
              <label className="membership-renewal-field--wide">
                <span>Nombre completo</span>
                <input name="card-name" type="text" autoComplete="cc-name" placeholder="Como aparece en la tarjeta" minLength="3" required />
              </label>
              <label className="membership-renewal-field--wide">
                <span>Número de tarjeta</span>
                <input name="card-number" type="text" inputMode="numeric" autoComplete="cc-number" placeholder="0000 0000 0000 0000" pattern="[0-9 ]{13,23}" maxLength="23" required />
              </label>
              <label>
                <span>Vencimiento</span>
                <input name="card-expiry" type="text" inputMode="numeric" autoComplete="cc-exp" placeholder="MM / AA" pattern="(0[1-9]|1[0-2]) ?/ ?[0-9]{2}" maxLength="7" title="Ingresá el vencimiento en formato MM / AA, con un mes entre 01 y 12." required />
              </label>
              <label>
                <span>CVV</span>
                <input name="card-cvv" type="password" inputMode="numeric" autoComplete="cc-csc" placeholder="123" pattern="[0-9]{3,4}" maxLength="4" required />
              </label>
            </div>
          </fieldset>

          <div className="membership-renewal-action">
            <button type="submit" disabled={isProcessing} aria-describedby="membership-renewal-disclaimer" aria-live="polite">
              {isProcessing ? 'Procesando…' : 'INICIÁ PRUEBA GRATIS'}
              {!isProcessing && <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16m-6-6 6 6-6 6" /></svg>}
            </button>
            <p id="membership-renewal-disclaimer">Prueba gratis de <strong>14 días</strong>, sin compromiso.<br /> Cancelá cuando quieras.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
