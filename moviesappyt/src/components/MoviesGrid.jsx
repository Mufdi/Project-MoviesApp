import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard.jsx'
import styles from './MovieGrid.module.css'
import { get } from '../utils/httpClient.js'
import { Spinner } from './Spinner.jsx'


export function MoviesGrid () {
  // let movies = []
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    get("/discover/movie")
    .then(data => {
      setMovies (data.results)
      setIsLoading(false)
    })
  }, [])

  if(isLoading) return <Spinner />

  return (
    <ul className={styles.moviesGrid}>
      {movies.map(movie =>
        <MovieCard key={movie.id} movie={movie}/>
      )}
    </ul>
  )
}
