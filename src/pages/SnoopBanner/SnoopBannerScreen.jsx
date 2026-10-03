import SnoopBanner from '../../components/SnoopBanner/SnoopBanner.jsx'
import './SnoopBannerScreen.css'

export default function SnoopBannerScreen({ onBack }) {
  return (
    <div className="snoop-screen">
      <button className="snoop-screen__back" type="button" onClick={onBack} aria-label="Volver">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <SnoopBanner />
    </div>
  )
}
