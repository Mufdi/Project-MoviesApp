import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard.jsx";
import styles from "./MovieGrid.module.css";
import { get } from "../utils/httpClient.js";
import { Spinner } from "./Spinner.jsx";
import { useQuery } from "../hooks/useQuery.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty.jsx";

export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)

    // const query = useQuery();
    // const search = query.get("search");

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
            setMovies((prevMovies) => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages)
            console.log(data);
            setIsLoading(false);
        });
    }, [search, page]);

    if (!isLoading && movies.length === 0){
        return <Empty />
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </InfiniteScroll>
    );
}
