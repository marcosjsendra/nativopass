import OriginalHome from './OriginalHome.jsx'
import IterationOneHome from './IterationOneHome.jsx'
import IterationTwoHome from './IterationTwoHome.jsx'
import IterationThreeHome from './IterationThreeHome.jsx'
import IterationFourHome from './IterationFourHome.jsx'

const layouts = {
  original: OriginalHome,
  'iteration-1': IterationOneHome,
  'iteration-2': IterationTwoHome,
  'iteration-3': IterationThreeHome,
  'iteration-4': IterationFourHome,
}

export default function Home({ iteration, membershipState, onJoin }) {
  const ActiveLayout = layouts[iteration] ?? OriginalHome

  return (
    <ActiveLayout
      membershipState={membershipState}
      onJoin={onJoin}
    />
  )
}
