import { useEffect, useState } from 'react'
import DeviceFrame from './components/DeviceFrame/DeviceFrame.jsx'
import IterationControls from './components/IterationControls/IterationControls.jsx'
import MenuDrawer from './components/MenuDrawer/MenuDrawer.jsx'
import Home from './pages/Home/Home.jsx'
import MembershipPayment from './pages/MembershipPayment/MembershipPayment.jsx'
import MembershipPaymentRedesign from './pages/MembershipPayment/MembershipPaymentRedesign.jsx'
import ProfileScreen from './pages/Profile/ProfileScreen.jsx'
import SubscriptionScreen from './pages/Subscription/SubscriptionScreen.jsx'
import SnoopBannerScreen from './pages/SnoopBanner/SnoopBannerScreen.jsx'
import SnoopTournamentScreen from './pages/SnoopTournament/SnoopTournamentScreen.jsx'

const iterations = ['original', 'iteration-1', 'iteration-2', 'iteration-3', 'iteration-4']

function getInitialIteration() {
  const iteration = new URLSearchParams(window.location.search).get('iteration')
  return iterations.includes(iteration) ? iteration : 'original'
}

export default function App() {
  const [iteration, setIteration] = useState(getInitialIteration)
  const [membershipState, setMembershipState] = useState('guest')
  const [activeScreen, setActiveScreen] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const syncIterationFromUrl = () => {
    setIteration(getInitialIteration())
    setActiveScreen('home')
  }

  // Sync iteration from URL on back/forward
  useEffect(() => {
    window.addEventListener('popstate', syncIterationFromUrl)
    return () => window.removeEventListener('popstate', syncIterationFromUrl)
  })

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

  const isMembershipPayment = iteration !== 'original' && activeScreen === 'membership-payment'
  const PaymentPage = new URLSearchParams(window.location.search).get('pricing') === 'backup'
    ? MembershipPayment
    : MembershipPaymentRedesign

  const renderScreen = () => {
    if (isMembershipPayment) {
      return (
        <PaymentPage
          onCancel={() => setActiveScreen('home')}
          onPaymentComplete={completeMembershipPayment}
        />
      )
    }
    if (activeScreen === 'profile') {
      return <ProfileScreen onBack={() => setActiveScreen('home')} />
    }
    if (activeScreen === 'subscription') {
      return <SubscriptionScreen onBack={() => setActiveScreen('home')} />
    }
    if (activeScreen === 'snoop-banner') {
      return <SnoopBannerScreen onBack={() => setActiveScreen('home')} />
    }
    if (activeScreen === 'snoop-tournament') {
      return <SnoopTournamentScreen onBack={() => setActiveScreen('home')} />
    }
    return (
      <Home
        iteration={iteration}
        membershipState={membershipState}
        onJoin={() => setActiveScreen('membership-payment')}
        onMenuClick={() => setMenuOpen(true)}
        onPlayNow={() => setActiveScreen('snoop-tournament')}
      />
    )
  }

  return (
    <main className="prototype-stage">
      <div className="prototype-workbench">
        <DeviceFrame>
          {renderScreen()}
          {menuOpen && (
            <MenuDrawer
              onClose={() => setMenuOpen(false)}
              onNavigate={(screen) => setActiveScreen(screen)}
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
