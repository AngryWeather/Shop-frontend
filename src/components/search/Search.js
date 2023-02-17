import { useEffect, useState } from "react";
import Product from "../product/Product";
import SearchButton from "./search-button/SearchButton";
import "./search.css";

function Search() {
    const [value, setValue] = useState("");
    const [products, setProducts] = useState([]);
    const [match, setMatch] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const loadAllProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const json = await response.json();
            setProducts(json);
        }

        loadAllProducts().catch(console.error);
    }, []);

    useEffect(() => {
       setIsSubmitted(true);
    }, [match])

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
            {/* {isSubmitted && <Product></Product>} */}
        </div>
    );
}

export default Search;