import { useEffect, useRef, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

export default function IterationOneSnakeRewards() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [started, setStarted] = useState(false)
  const [hasEnteredView, setHasEnteredView] = useState(false)
  const sectionRef = useRef(null)
  const shouldRevealOnScroll = !prefersReducedMotion

  useEffect(() => {
    if (!shouldRevealOnScroll) return undefined

    const section = sectionRef.current
    const scrollRoot = section?.closest('.app-shell')

    if (!section || !scrollRoot || !('IntersectionObserver' in window)) {
      setHasEnteredView(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        setHasEnteredView(true)
        observer.unobserve(entry.target)
      },
      {
        root: scrollRoot,
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [shouldRevealOnScroll])

  const revealClass = shouldRevealOnScroll
    ? ` snake-card--scroll-reveal${hasEnteredView ? ' snake-card--visible' : ''}`
    : ''

  return (
    <section
      ref={sectionRef}
      className="snake-section snake-section--iteration-one"
      aria-labelledby="snake-title-iteration-one"
    >
      <div className={`snake-card--iteration-one${revealClass}`}>
        <video
          className="snake-video--iteration-one"
          src="/assets/video/snake-promo-seedance-concept.mp4"
          autoPlay={!prefersReducedMotion}
          muted
          loop={!prefersReducedMotion}
          playsInline
          preload="auto"
          aria-label="Animación neón del juego Snake de Nativo Rewards"
        />
        <div className="snake-shade--iteration-one" aria-hidden="true" />
        <div className="snake-reveal-scan--iteration-one" aria-hidden="true" />

        <header className="rewards-banner--iteration-one">
          <img
            className="rewards-token--iteration-one"
            src="/assets/images/snake-game/reward-token.png"
            alt=""
          />
          <p>
            <span><strong>NATIVO</strong><br></br> REWARD</span>
          </p>
        </header>

        <div className="snake-copy--iteration-one">
          <h2 id="snake-title-iteration-one">
            <span>JUGÁ</span>
            <span>SUMÁ</span>
            <span>CANJEÁ</span>
          </h2>
          <p>ATRAPÁ MANZANAS<br />DESBLOQUEÁ PREMIOS</p>
        </div>

        <button
          className="snake-button--iteration-one"
          type="button"
          onClick={() => setStarted(true)}
        >
          <span>{started ? '¡A JUGAR!' : 'JUGÁ AHORA'}</span>
        </button>
      </div>
    </section>
  )
}
