import styles from './MovieDetails.module.css'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { get } from '../utils/httpClient.js'
import { Spinner } from '../components/Spinner.jsx'
import { getMovieImg } from '../utils/getMovieImg'

export function MovieDetails () {
  const { movieId } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState(null)



  useEffect(() => {
    setIsLoading(true)
    get("/movie/" + movieId)
    .then(data => {
      setMovie(data)
      setIsLoading(false)
    })
  }, [movieId])

  if (isLoading) return <Spinner />

  const imageUrl = getMovieImg(movie.poster_path, 500)
  return (
    <div className={styles.detailsContainer}>
      <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.tite} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Title: </strong>{movie.tite} </p>
        <p><strong>Genres: </strong>{movie.genres.map(genre => genre.name).join(", ")}</p>
        <p><strong>Description: </strong>{movie.overview} </p>
      </div>
      {/* Details */}
    </div>
  )
}
