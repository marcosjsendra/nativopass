import { useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

export default function SnakeRewards() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [started, setStarted] = useState(false)

  return (
    <section className="snake-section" aria-labelledby="snake-title">
      <div className="snake-card">
        <video
          className="snake-video"
          src="/assets/video/snake-animation.mp4"
          autoPlay={!prefersReducedMotion}
          muted
          loop={!prefersReducedMotion}
          playsInline
          aria-label="Animación del juego Snake de Nativo Rewards"
        />
        <div className="snake-shade" aria-hidden="true" />

        <header className="rewards-banner">
          <img src="/assets/icons/snake-game-section/nativo-reward-icon.svg" alt="" />
          <p><span>NATIVO</span> REWARDS</p>
        </header>

        <div className="snake-copy">
          <h2 id="snake-title">JUGÁ SNAKE Y GANÁ</h2>
          <p>PREMIOS SOLO<br />PARA MIEMBROS</p>
        </div>

        <button className="snake-button" type="button" onClick={() => setStarted(true)}>
          {started ? 'JUEGO LISTO' : <>INICIAR<br />JUEGO</>}
        </button>
      </div>
    </section>
  )
}
