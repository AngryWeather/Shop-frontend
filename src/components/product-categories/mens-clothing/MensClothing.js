import { useEffect, useState } from "react";
import Product from "../../product/Product";

const MensClothing = () => {
    const [mensClothing, setMensClothing] = useState([]);

    useEffect(() => {
        const loadMensClothing = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
            const json = await response.json();
            setMensClothing(json);
        }
        
        loadMensClothing().catch(console.error);
    }, []);

    return (
        <div className="products">
            {mensClothing.map((product) => (
                <Product title={product.title} price={product.price} 
                    description = {product.description} image={product.image} key={product.id}></Product>
            ))}
        </div>
    );
};

export default MensClothing;