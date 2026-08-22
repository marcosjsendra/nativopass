import { useEffect, useState } from 'react'
import DeviceFrame from './components/DeviceFrame/DeviceFrame.jsx'
import IterationControls from './components/IterationControls/IterationControls.jsx'
import Home from './pages/Home/Home.jsx'

const iterations = ['original', 'iteration-1']

function getInitialIteration() {
  const iteration = new URLSearchParams(window.location.search).get('iteration')
  return iterations.includes(iteration) ? iteration : 'original'
}

export default function App() {
  const [iteration, setIteration] = useState(getInitialIteration)
  const [membershipState, setMembershipState] = useState('guest')

  useEffect(() => {
    const syncIterationFromUrl = () => setIteration(getInitialIteration())
    window.addEventListener('popstate', syncIterationFromUrl)
    return () => window.removeEventListener('popstate', syncIterationFromUrl)
  }, [])

  const selectIteration = (nextIteration) => {
    const url = new URL(window.location.href)
    url.searchParams.set('iteration', nextIteration)
    window.history.replaceState({}, '', url)
    setIteration(nextIteration)
  }

  return (
    <main className="prototype-stage">
      <div className="prototype-workbench">
        <DeviceFrame>
          <Home
            iteration={iteration}
            membershipState={membershipState}
            onMembershipStateChange={setMembershipState}
          />
        </DeviceFrame>

        <IterationControls
          iteration={iteration}
          membershipState={membershipState}
          onIterationChange={selectIteration}
          onMembershipStateChange={setMembershipState}
        />
      </div>
    </main>
  )
}
