import { useEffect, useRef, useState } from 'react'
import { categories } from '../../data/categories.js'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion.js'

export default function CategoryGrid({ iteration }) {
  const [selected, setSelected] = useState(null)
  const [hasEnteredView, setHasEnteredView] = useState(false)
  const sectionRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const shouldRevealOnScroll = iteration === 'iteration-1' && !prefersReducedMotion

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
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.2,
      },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [shouldRevealOnScroll])

  const revealClass = shouldRevealOnScroll
    ? ` category-section--scroll-reveal${hasEnteredView ? ' category-section--visible' : ''}`
    : ''

  return (
    <section
      ref={sectionRef}
      className={`category-section${revealClass}`}
      aria-label="Categorías de beneficios"
    >
      <div className="category-grid">
        {categories.map((category, index) => (
          <button
            className={`category-card ${selected === category.id ? 'category-card--selected' : ''}`}
            style={{ '--category-gradient': category.gradient, '--category-index': index }}
            type="button"
            aria-pressed={selected === category.id}
            onClick={() => setSelected((current) => (current === category.id ? null : category.id))}
            key={category.id}
          >
            <span className="category-icon">
              <img src={category.icon} alt="" />
            </span>
            <span className="category-label">{category.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
