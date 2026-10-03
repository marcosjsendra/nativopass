import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'
import './SnoopTournamentScreen.css'

export default function SnoopTournamentScreen({ onBack }) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div
      className={`snoop-tournament ${prefersReducedMotion ? 'snoop-tournament--reduced-motion' : ''}`}
      aria-label="Campeonato Snoop Dogg Costa Rica — Condiciones y participación"
    >
      {/* Background damask texture covering full screen */}
      <img
        className="snoop-tournament__bg"
        src="/assets/images/conciertos/assets-ready/2x/snoopdogg-background@2x.png"
        alt=""
        aria-hidden="true"
      />

      {/* Circular back button to return to Home */}
      <button
        className="snoop-tournament__back"
        type="button"
        onClick={onBack}
        aria-label="Volver a la pantalla principal"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* ── TOP SECTION: Snoop Dogg visuals ── */}
      <header className="snoop-tournament__hero">
        {/* NativoPass brown logo — centered at top */}
        <div className="snoop-tournament__brand">
          <img
            src="/assets/images/conciertos/assets-ready/2x/nativopass-logo-brown@2x.png"
            alt="NativoPass"
          />
        </div>

        {/* Pre-composed composite artwork (concert logo + date + sideways Snoop) */}
        <img
          className="snoop-tournament__hero-composite"
          src="/assets/images/conciertos/snoopdogg/snoopdogg-top-part-promo@3x.png"
          alt="Snoop Dogg Costa Rica — 03 de diciembre"
        />
      </header>

      {/* ── MIDDLE RIBBON: Gold promotional banner ── */}
      <div className="snoop-tournament__ribbon">
        <p className="snoop-tournament__ribbon-line1">Y PARTICIPA PARA</p>
        <p className="snoop-tournament__ribbon-line2">
          GANAR <strong>2 ENTRADAS</strong>
        </p>
      </div>

      {/* ── BOTTOM SECTION: Chocolate conditions box ── */}
      <section className="snoop-tournament__conditions" aria-labelledby="tournament-conditions-title">
        <h2 id="tournament-conditions-title" className="snoop-tournament__conditions-title">
          CONDICIONES
        </h2>

        <ul className="snoop-tournament__rules">
          <li>
            <span className="snoop-tournament__bullet">•</span>
            <span>Fecha del campeonato: 1 de Noviembre - 10 de Noviembre 2026</span>
          </li>
          <li>
            <span className="snoop-tournament__bullet">•</span>
            <span>Podés jugar un máximo de 3 veces por día. El ganador que logre acumular la mayor cantidad de puntos al finalizar el torneo será el ganador.</span>
          </li>
          <li>
            <span className="snoop-tournament__bullet">•</span>
            <span>El ganador se anunciará en redes sociales y recibirá por correo electrónico la confirmación del premio e indicaciones para canjearlo.</span>
          </li>
        </ul>

        {/* Retro arcade button: Iniciar Juego */}
        <button
          className="snoop-tournament__play-button"
          type="button"
          aria-label="Iniciar juego del torneo"
        >
          <img
            src="/assets/images/conciertos/snoopdogg/retro-button-orange-square.svg"
            alt="INICIAR JUEGO"
          />
        </button>
      </section>

      {/* Bottom damask footer accent */}
      <div className="snoop-tournament__footer-accent" aria-hidden="true" />
    </div>
  )
}
