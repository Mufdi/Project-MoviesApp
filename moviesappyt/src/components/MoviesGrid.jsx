import { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard.jsx'
import styles from './MovieGrid.module.css'
import { get } from '../utils/httpClient.js'


export function MoviesGrid () {
  // let movies = []
  const [movies, setMovies] = useState([])

  useEffect(() => {
    get("/discover/movie")
    .then(data => {
      setMovies (data.results)
    })
  }, [])

  return (
    <ul className={styles.moviesGrid}>
      {movies.map(movie =>
        <MovieCard key={movie.id} movie={movie}/>
      )}
    </ul>
  )
}
