import { useEffect, useState } from "react";
import Product from "../product/Product";
import SearchButton from "./search-button/SearchButton";
import "./search.css";
import Results from "../results/Results";
import { useNavigate } from "react-router-dom";

function Search() {
    const [value, setValue] = useState("");
    const [products, setProducts] = useState([]);
    const [match, setMatch] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [result, setResult] = useState({});
    const navigate = useNavigate("/results");

    useEffect(() => {
        const loadAllProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const json = await response.json();
            setProducts(json);
        }

        loadAllProducts().catch(console.error);
    }, []);

    useEffect(() => {
        // const product = document.querySelector(".products");
        console.log(match);
        // setResult(<div className="results">
        //     {match.map((product) => (
        //         <Product title={product.title} price={product.price} description={product.description}
        //         image={product.image} id={product.id}></Product>
        //     ))}
        // </div>)

        if (match.length > 0) {
            navigate("/results", {state: match});
        }
    }, [match])

    const search =  () => {
        setMatch(products.filter(n => n.title.toLowerCase().includes(value.toLowerCase())));
    }

    const handleChange = event => {
        setValue(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setIsSubmitted(true);
        search();
    }

    return(
        <div id="search-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                <input type="search" value={value} onChange={handleChange}></input>
                <SearchButton></SearchButton>
            </form>
            {/* {isSubmitted && <Results></Results>} */}
        </div>
    );
}

export default Search;