import '../../styles/menu-drawer.css'

const menuItems = [
  {
    id: 'profile',
    label: 'Mi Perfil',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: 'subscription',
    label: 'Suscripción',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
]

const chevron = (
  <svg className="menu-drawer-item-chevron" viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

export default function MenuDrawer({ onClose, onNavigate }) {
  return (
    <div
      className="menu-drawer-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      onClick={onClose}
    >
      <div className="menu-drawer" onClick={(e) => e.stopPropagation()}>
        <span className="menu-drawer-handle" aria-hidden="true" />
        <p className="menu-drawer-title">Mi cuenta</p>
        <nav>
          {menuItems.map(({ id, label, icon }) => (
            <button
              key={id}
              type="button"
              className="menu-drawer-item"
              onClick={() => { onNavigate(id); onClose() }}
            >
              {icon}
              <span>{label}</span>
              {chevron}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
