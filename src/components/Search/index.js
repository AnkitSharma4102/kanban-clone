import React from "react";
import { SearchIcon } from "../../assets/icons/SearchIcon";
import styles from "./search.module.css";

const Search = () => {
    return (
        <div className={styles.searchContainer}>
            <span className={styles.icon}>
                <SearchIcon />
            </span>
            <input
                type="text"
                id="search"
                name="search"
                placeholder="Search for anything..."
            />
        </div>
    )
}

export default Search