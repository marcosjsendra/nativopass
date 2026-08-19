import Hero from '../../components/Hero/Hero.jsx'
import CategoryGrid from '../../components/CategoryGrid/CategoryGrid.jsx'
import SnakeRewards from '../../components/SnakeRewards/SnakeRewards.jsx'
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation.jsx'

export default function Home() {
  return (
    <div className="app-shell">
      <div className="app-content">
        <Hero />
        <CategoryGrid />
        <SnakeRewards />
      </div>
      <BottomNavigation />
    </div>
  )
}
