import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search.jsx'

export function LandingPage () {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  )
}
