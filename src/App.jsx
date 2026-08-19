import DeviceFrame from './components/DeviceFrame/DeviceFrame.jsx'
import Home from './pages/Home/Home.jsx'

export default function App() {
  return (
    <main className="prototype-stage">
      <DeviceFrame>
        <Home />
      </DeviceFrame>
    </main>
  )
}
