import { useState } from "react";
import SearchButton from "./search-button/SearchButton";
import "./search.css";

function Search() {
    const [value, setValue] = useState("");

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    return(
        <div id="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input type="search" value={value} onChange={handleChange}></input>
                <SearchButton></SearchButton>
            </form>
        </div>
    );
}

export default Search;