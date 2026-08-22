import { useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

export default function OriginalSnakeRewards() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [started, setStarted] = useState(false)

  return (
    <section className="snake-section snake-section--original" aria-labelledby="snake-title-original">
      <div className="snake-card--original">
        <video
          className="snake-video--original"
          src="/assets/video/snake-animation.mp4"
          autoPlay={!prefersReducedMotion}
          muted
          loop={!prefersReducedMotion}
          playsInline
          aria-label="Animación del juego Snake de Nativo Rewards"
        />
        <div className="snake-shade--original" aria-hidden="true" />

        <header className="rewards-banner--original">
          <img src="/assets/icons/snake-game-section/nativo-reward-icon.svg" alt="" />
          <p><span>NATIVO</span> REWARDS</p>
        </header>

        <div className="snake-copy--original">
          <h2 id="snake-title-original">JUGÁ SNAKE Y GANÁ</h2>
          <p>PREMIOS SOLO<br />PARA MIEMBROS</p>
        </div>

        <button
          className="snake-button--original"
          type="button"
          onClick={() => setStarted(true)}
        >
          {started ? 'JUEGO LISTO' : <>INICIAR<br />JUEGO</>}
        </button>
      </div>
    </section>
  )
}
