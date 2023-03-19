import { useLocation } from "react-router-dom";
import Product from "../product/Product";


const Results = () => {
    const location = useLocation();

    return (
        <div className="products">
            {location.state.map((product) => (
                <Product title={product.title} price={product.price} description={product.description}
                    image={product.image} id={product.id} key={product.id}></Product>
            ))}
        </div>
    );
}

export default Results;