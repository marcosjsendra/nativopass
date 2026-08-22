import Hero from '../../components/Hero/Hero.jsx'
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid.jsx'
import OriginalSnakeRewards from '../../components/SnakeRewards/OriginalSnakeRewards.jsx'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.jsx'

export default function OriginalHome() {
  return (
    <div className="app-shell app-shell--original">
      <div className="app-content">
        <Hero iteration="original" />
        <CategoryGrid iteration="original" />
        <OriginalSnakeRewards />
      </div>
      <BottomNavigation />
    </div>
  )
}
