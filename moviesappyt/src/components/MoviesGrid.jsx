import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard.jsx'
import styles from './MovieGrid.module.css'
import { get } from '../utils/httpClient.js'
import { Spinner } from './Spinner.jsx'
import { useQuery } from '../hooks/useQuery.jsx'


export function MoviesGrid () {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const query = useQuery()
  const search = query.get("search")

  useEffect(() => {
    setIsLoading(true)
    const searchUrl = search
    ? "/search/movie?query=" + search
    : "/discover/movie"
    get(searchUrl)
    .then(data => {
      setMovies (data.results)
      setIsLoading(false)
    })
  }, [search])

  if(isLoading) return <Spinner />

  return (
    <ul className={styles.moviesGrid}>
      {movies.map(movie =>
        <MovieCard key={movie.id} movie={movie}/>
      )}
    </ul>
  )
}
