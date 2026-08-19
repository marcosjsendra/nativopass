import { useState } from 'react'
import { categories } from '../../data/categories.js'

export default function CategoryGrid() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="category-section" aria-label="Categorías de beneficios">
      <div className="category-grid">
        {categories.map((category) => (
          <button
            className={`category-card ${selected === category.id ? 'category-card--selected' : ''}`}
            style={{ '--category-gradient': category.gradient }}
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
