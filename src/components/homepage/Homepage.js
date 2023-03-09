import { useEffect, useState } from "react";
import Product from "../product/Product";

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

    return (
        <div className="products">
            {products.map((product) => (
                <Product title={product.title} price={product.price} 
                    description = {product.description} image={product.image} key={product.id}
                ></Product>
            ))}
        </div>
    );
}

export default Homepage;