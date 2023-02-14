import SearchButton from "./search-button/SearchButton";
import "./search.css";

const Search = () => {
    return(
        <div id="search-container">
            <form>
                <label htmlFor="search"></label>
                <input type="search"></input>
                <SearchButton></SearchButton>
            </form>
        </div>
    );
}

export default Search;