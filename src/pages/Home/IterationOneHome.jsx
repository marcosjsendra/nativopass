import Hero from '../../components/Hero/Hero.jsx'
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid.jsx'
import IterationOneSnakeRewards from '../../components/SnakeRewards/IterationOneSnakeRewards.jsx'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.jsx'

export default function IterationOneHome({ membershipState, onJoin }) {
  return (
    <div className="app-shell app-shell--iteration-1">
      <div className="app-content">
        <Hero
          iteration="iteration-1"
          membershipState={membershipState}
          onJoin={onJoin}
        />
        <CategoryGrid iteration="iteration-1" />
        <IterationOneSnakeRewards />
      </div>
      <BottomNavigation />
    </div>
  )
}
