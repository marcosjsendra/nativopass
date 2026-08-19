export default function DeviceFrame({ children }) {
  return (
    <section className="device-frame" aria-label="Vista previa móvil de NativoPass">
      <div className="device-speaker" aria-hidden="true" />
      <div className="device-screen">{children}</div>
    </section>
  )
}
