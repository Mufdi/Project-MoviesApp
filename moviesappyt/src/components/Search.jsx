import styles from "./Search.module.css";
import { CgSearch } from "react-icons/cg";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery.jsx";

export function Search() {
    const query = useQuery();
    const search = query.get("search");

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Title"
                    aria-label="Search movies"
                    value={search}
                    onChange={(e) => {
                      const value = e.target.value;
                        history.push("/?search=" + value);
                    }}
                />
                    <CgSearch size={25} color="black" className={styles.searchButton} />
            </div>
        </form>
    );
}
