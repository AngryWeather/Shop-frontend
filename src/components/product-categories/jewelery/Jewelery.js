import { useEffect, useState } from "react";
import Product from "../../product/Product";

const Jewelery = () => {
    const [jewelery, setJewelery] = useState([]);

    useEffect(() => {
        const loadJewelery = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
            const json = await response.json();
            setJewelery(json);
        }
        
        loadJewelery().catch(console.error);
    }, []);

    return (
        <div className="products">
            {jewelery.map((product) => (
                <Product title={product.title} price={product.price} 
                    description = {product.description} image={product.image} 
                    id={product.id} key={product.id}></Product>
            ))}
        </div>
    );
};

export default Jewelery;