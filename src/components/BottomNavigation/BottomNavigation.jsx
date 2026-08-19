import { useState } from 'react'

const items = [
  { id: 'home', label: 'Inicio', icon: '/assets/icons/nav-bar/home.svg' },
  { id: 'qr', label: 'Escanear QR', icon: '/assets/icons/nav-bar/qr-codes.svg' },
  { id: 'menu', label: 'Menú', icon: '/assets/icons/nav-bar/menu.svg' },
]

export default function BottomNavigation() {
  const [active, setActive] = useState('home')

  return (
    <nav className="bottom-navigation" aria-label="Navegación principal">
      {items.map((item, index) => (
        <div className="bottom-nav-slot" key={item.id}>
          {index > 0 && <span className="nav-divider" aria-hidden="true" />}
          <button
            className={active === item.id ? 'is-active' : ''}
            type="button"
            aria-label={item.label}
            aria-current={active === item.id ? 'page' : undefined}
            onClick={() => setActive(item.id)}
          >
            <img src={item.icon} alt="" />
          </button>
        </div>
      ))}
    </nav>
  )
}
