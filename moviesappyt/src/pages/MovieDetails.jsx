import styles from './MovieDetails.module.css'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { get } from '../utils/httpClient.js'

export function MovieDetails () {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    get("/movie/" + movieId)
    .then(data => {
      setMovie(data)
    })
  }, [movieId])

  if (!movie) return null

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path
  return (
    <div className={styles.detailsContainer}>
    <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.tite} />
    <div className={`${styles.col} ${styles.movieDetails}`}>
      <p className={styles.firstItem}><strong>Title: </strong>{movie.tite} </p>
      <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
      <p><strong>Description: </strong>{movie.overview} </p>
    </div>
      Details
    </div>
  )
}