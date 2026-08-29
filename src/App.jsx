import { useEffect, useState } from 'react'
import DeviceFrame from './components/DeviceFrame/DeviceFrame.jsx'
import IterationControls from './components/IterationControls/IterationControls.jsx'
import Home from './pages/Home/Home.jsx'
import MembershipPayment from './pages/MembershipPayment/MembershipPayment.jsx'

const iterations = ['original', 'iteration-1']

function getInitialIteration() {
  const iteration = new URLSearchParams(window.location.search).get('iteration')
  return iterations.includes(iteration) ? iteration : 'original'
}

export default function App() {
  const [iteration, setIteration] = useState(getInitialIteration)
  const [membershipState, setMembershipState] = useState('guest')
  const [activeScreen, setActiveScreen] = useState('home')

  useEffect(() => {
    const syncIterationFromUrl = () => {
      setIteration(getInitialIteration())
      setActiveScreen('home')
    }
    window.addEventListener('popstate', syncIterationFromUrl)
    return () => window.removeEventListener('popstate', syncIterationFromUrl)
  }, [])

  const selectIteration = (nextIteration) => {
    const url = new URL(window.location.href)
    url.searchParams.set('iteration', nextIteration)
    window.history.replaceState({}, '', url)
    setIteration(nextIteration)
    setActiveScreen('home')
  }

  const changeMembershipState = (nextState) => {
    setMembershipState(nextState)
    setActiveScreen('home')
  }

  const completeMembershipPayment = () => {
    setMembershipState('member')
    setActiveScreen('home')
  }

  const isMembershipPayment = iteration === 'iteration-1' && activeScreen === 'membership-payment'

  return (
    <main className="prototype-stage">
      <div className="prototype-workbench">
        <DeviceFrame>
          {isMembershipPayment ? (
            <MembershipPayment
              onCancel={() => setActiveScreen('home')}
              onPaymentComplete={completeMembershipPayment}
            />
          ) : (
            <Home
              iteration={iteration}
              membershipState={membershipState}
              onJoin={() => setActiveScreen('membership-payment')}
            />
          )}
        </DeviceFrame>

        <IterationControls
          iteration={iteration}
          membershipState={membershipState}
          onIterationChange={selectIteration}
          onMembershipStateChange={changeMembershipState}
        />
      </div>
    </main>
  )
}
