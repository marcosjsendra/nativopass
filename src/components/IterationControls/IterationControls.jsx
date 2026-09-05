const iterationOptions = [
  { id: 'original', label: 'Original' },
  { id: 'iteration-1', label: 'Iteration 1' },
  { id: 'iteration-2', label: 'Iteration 2' },
]

export default function IterationControls({
  iteration,
  membershipState,
  onIterationChange,
  onMembershipStateChange,
}) {
  return (
    <aside className="iteration-controls" aria-label="Controles del prototipo">
      <div className="iteration-control-group">
        <p>Iteraciones</p>
        <div className="iteration-tabs" role="tablist" aria-label="Seleccionar iteración">
          {iterationOptions.map((option) => (
            <button
              className={iteration === option.id ? 'is-active' : ''}
              type="button"
              role="tab"
              aria-selected={iteration === option.id}
              onClick={() => onIterationChange(option.id)}
              key={option.id}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {iteration !== 'original' && (
        <div className="iteration-control-group iteration-state-controls">
          <p>Estado del CTA</p>
          <div className="iteration-state-tabs" role="group" aria-label="Estado de membresía">
            <button
              className={membershipState === 'guest' ? 'is-active' : ''}
              type="button"
              aria-pressed={membershipState === 'guest'}
              onClick={() => onMembershipStateChange('guest')}
            >
              Sin sesión
            </button>
            <button
              className={membershipState === 'member' ? 'is-active' : ''}
              type="button"
              aria-pressed={membershipState === 'member'}
              onClick={() => onMembershipStateChange('member')}
            >
              Miembro
            </button>
          </div>
        </div>
      )}
    </aside>
  )
}
