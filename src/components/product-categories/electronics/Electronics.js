import { useEffect, useState } from "react";
import Product from "../../product/Product";

const Electronics = () => {
    const [electronics, setElectronics] = useState([]);

    useEffect(() => {
        const loadElectronics = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/electronics");
            const json = await response.json();
            setElectronics(json);
        }
        
        loadElectronics().catch(console.error);
    }, []);

    return (
        <div className="products">
            {electronics.map((product) => (
                <Product title={product.title} price={product.price} 
                    description = {product.description} image={product.image}
                    id={product.id} key={product.id}>
                </Product>
            ))}
        </div>
    );
};

export default Electronics;