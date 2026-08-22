import OriginalHome from './OriginalHome.jsx'
import IterationOneHome from './IterationOneHome.jsx'

const layouts = {
  original: OriginalHome,
  'iteration-1': IterationOneHome,
}

export default function Home({ iteration, membershipState, onMembershipStateChange }) {
  const ActiveLayout = layouts[iteration] ?? OriginalHome

  return (
    <ActiveLayout
      membershipState={membershipState}
      onMembershipStateChange={onMembershipStateChange}
    />
  )
}
