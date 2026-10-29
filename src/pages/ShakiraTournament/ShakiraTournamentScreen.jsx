import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import './ShakiraTournamentScreen.css'

export default function ShakiraTournamentScreen({ onBack }) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      className={`shakira-tournament ${prefersReducedMotion ? 'shakira-tournament--reduced-motion' : ''}`}
      aria-label="Campeonato Shakira Costa Rica — Condiciones y participación"
    >
      {/* Background starry texture covering full screen */}
      <img
        className="shakira-tournament__bg"
        src="/assets/images/conciertos/shakira/shakira-background.png"
        alt=""
        aria-hidden="true"
      />

      {/* Circular back button to return to Home */}
      <button
        className="shakira-tournament__back"
        type="button"
        onClick={onBack}
        aria-label="Volver a la pantalla principal"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* ── TOP SECTION: Shakira visuals centered & pushed to top ── */}
      <header className="shakira-tournament__hero">
        {/* NativoPass white logo — centered at top */}
        <div className="shakira-tournament__brand">
          <img
            src="/assets/images/conciertos/shakira/nativopass-logo-white.png"
            alt="NativoPass"
          />
        </div>

        {/* Concert title group: Shakira Costa Rica + Las Mujeres Ya No Lloran */}
        <div className="shakira-tournament__concert-group">
          <img
            className="shakira-tournament__concert-logo"
            src="/assets/images/conciertos/shakira/shakira-logo-cr.png"
            alt="Shakira Costa Rica"
          />
          <img
            className="shakira-tournament__tour-subtitle"
            src="/assets/images/conciertos/shakira/las-mujeres-ya-no-lloran.png"
            alt="Las Mujeres Ya No Lloran World Tour"
          />
        </div>

        {/* Shakira cutout — centered below the titles */}
        <img
          className="shakira-tournament__face"
          src="/assets/images/conciertos/shakira/shakira-face-1.png"
          alt=""
          aria-hidden="true"
        />
      </header>

      {/* ── MIDDLE RIBBON: Promotional banner (#284459 themed) ── */}
      <div className="shakira-tournament__ribbon">
        <p className="shakira-tournament__ribbon-line1">PARTICIPA PARA</p>
        <p className="shakira-tournament__ribbon-line2">
          GANAR <strong>2 ENTRADAS</strong>
        </p>
      </div>

      {/* ── BOTTOM SECTION: Conditions box (#284459 dark blue) ── */}
      <section className="shakira-tournament__conditions" aria-labelledby="shakira-conditions-title">
        <h2 id="shakira-conditions-title" className="shakira-tournament__conditions-title">
          CONDICIONES
        </h2>

        <ul className="shakira-tournament__rules">
          <li>
            <span className="shakira-tournament__bullet">•</span>
            <span>Fecha del campeonato: 7 al 13 de Diciembre 2026</span>
          </li>
          <li>
            <span className="shakira-tournament__bullet">•</span>
            <span>Podés jugar un máximo de 3 veces por día. El ganador que logre acumular la mayor cantidad de puntos al finalizar el torneo será el ganador.</span>
          </li>
          <li>
            <span className="shakira-tournament__bullet">•</span>
            <span>El ganador se anunciará en redes sociales y recibirá por correo electrónico la confirmación del premio e indicaciones para canjearlo.</span>
          </li>
        </ul>

        {/* Retro arcade button: Iniciar Juego with dark blue (#284459) background */}
        <button
          className="shakira-tournament__play-button"
          type="button"
          aria-label="Iniciar juego del torneo"
        >
          <img
            src="/assets/images/conciertos/snoopdogg/retro-button-orange-square.svg"
            alt="INICIAR JUEGO"
          />
        </button>
      </section>

      {/* Bottom footer accent */}
      <div className="shakira-tournament__footer-accent" aria-hidden="true" />
    </div>
  )
}
