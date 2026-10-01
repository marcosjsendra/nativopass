import { useState } from 'react'
import '../../styles/profile-screen.css'

const PLACEHOLDER_AVATAR = 'https://i.pravatar.cc/280?img=57'
const USER_NAME = 'Alex Brisson'
const USER_EMAIL = 'abrissonb@gmail.com'
const USER_ID = 'ID #8492-AX'
const MAX_SCORE = '1,500'

const mailIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 8 10 7 10-7" />
  </svg>
)

const lockIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 1 1 8 0v4" />
  </svg>
)

const lockRefreshIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    <path d="M12 15v2" />
  </svg>
)

const checkIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const eyeIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const trophyIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 9H4a2 2 0 0 1-2-2V5h4M18 9h2a2 2 0 0 0 2-2V5h-4" />
    <path d="M6 5v4a6 6 0 0 0 12 0V5H6Z" />
    <path d="M12 15v4M9 19h6" />
  </svg>
)

const logoutIcon = (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

function PasswordField({ name, label, placeholder, autoComplete }) {
  const [visible, setVisible] = useState(false)
  return (
    <div className="profile-field-group">
      <span className="profile-field-label">{label}</span>
      <div className="profile-field">
        <span className="profile-field-icon-left">{lockIcon}</span>
        <input
          type={visible ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-label={label}
        />
        <button
          type="button"
          className="profile-field-icon-right"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        >
          {eyeIcon}
        </button>
      </div>
    </div>
  )
}

export default function ProfileScreen({ onBack }) {
  return (
    <section className="profile-screen" aria-labelledby="profile-title">
      <button type="button" className="profile-back-btn" onClick={onBack} aria-label="Volver">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m14 5-7 7 7 7M7 12h13" />
        </svg>
      </button>

      {/* Avatar + identity */}
      <div className="profile-identity">
        <div className="profile-avatar">
          <img src={PLACEHOLDER_AVATAR} alt={`Foto de perfil de ${USER_NAME}`} />
        </div>
        <span className="profile-welcome-label">¡Bienvenido!</span>
        <span className="profile-welcome-name">{USER_NAME}</span>
        <span className="profile-user-id">{USER_ID}</span>
      </div>

      {/* Score card */}
      <div className="profile-score-card" aria-label="Máximo puntaje">
        <div>
          <span className="profile-score-label">Máximo Puntaje</span>
          <span className="profile-score-value">{MAX_SCORE}</span>
        </div>
        <div className="profile-score-icon" aria-hidden="true">
          {trophyIcon}
        </div>
      </div>

      {/* Form */}
      <form className="profile-form" onSubmit={(e) => e.preventDefault()}>
        {/* Email */}
        <div className="profile-field-group">
          <span className="profile-field-label">Correo Electrónico</span>
          <div className="profile-field">
            <span className="profile-field-icon-left">{mailIcon}</span>
            <input
              type="email"
              name="email"
              defaultValue={USER_EMAIL}
              autoComplete="email"
              aria-label="Correo electrónico"
            />
            <span className="profile-field-icon-right">{checkIcon}</span>
          </div>
        </div>

        <PasswordField
          name="password"
          label="Contraseña"
          placeholder="••••••••••"
          autoComplete="new-password"
        />

        <PasswordField
          name="password-confirm"
          label="Validar Contraseña"
          placeholder="Validar Contraseña"
          autoComplete="new-password"
        />
      </form>

      {/* Actions */}
      <div className="profile-actions">
        <button type="submit" form="profile-form" className="profile-submit-btn">
          Actualizar Perfil
        </button>
        <button type="button" className="profile-logout-btn" onClick={onBack}>
          {logoutIcon}
          Cerrar sesión
        </button>
      </div>
    </section>
  )
}
