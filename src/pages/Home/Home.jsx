import OriginalHome from './OriginalHome.jsx'
import IterationOneHome from './IterationOneHome.jsx'

const layouts = {
  original: OriginalHome,
  'iteration-1': IterationOneHome,
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
