import { useEffect, useState } from "react";
import SearchButton from "./search-button/SearchButton";
import "./search.css";
import { useNavigate } from "react-router-dom";

function Search() {
    const [value, setValue] = useState("");
    const [products, setProducts] = useState([]);
    const [match, setMatch] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadAllProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const json = await response.json();
            setProducts(json);
        }

        loadAllProducts().catch(console.error);
    }, []);

    useEffect(() => {

        // match is empty on the first render
        if (match.length > 0) {
            navigate("/results", {state: match});
            setMatch(0);
        }
        
    }, [match, navigate])

    const search =  () => {
        setMatch(products.filter(n => n.title.toLowerCase().includes(value.toLowerCase())));
    }

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        search();
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