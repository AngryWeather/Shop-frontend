import { useEffect, useState } from "react";
import Product from "../../product/Product";

const WomensClothing = () => {
    const [womensClothing, setWomensClothing] = useState([]);

    useEffect(() => {
        const loadWomensClothing = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/women\'s clothing");
            const json = await response.json();
            setWomensClothing(json);
        }
        
        loadWomensClothing().catch(console.error);
    }, []);

    return (
        <div className="products">
            {womensClothing.map((product) => (
                <Product title={product.title} price={product.price} 
                    description = {product.description} image={product.image} key={product.id}></Product>
            ))}
        </div>
    );
};

export default WomensClothing;