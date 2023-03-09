import { useEffect, useState } from "react";

const Homepage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadAllProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const json = await response.json();
            setProducts(json);
        }

        loadAllProducts().catch(console.error);
    }, []);

    
}

export default Homepage;