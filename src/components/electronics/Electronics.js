import { useEffect, useState } from "react";

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
}

return (
    <div className="products">
        {products.map((product) => {
            
        })}
    </div>
);

export default Electronics;