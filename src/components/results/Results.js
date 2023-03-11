import { useLocation } from "react-router-dom";
import Product from "../product/Product";


const Results = () => {
    const location = useLocation();
    console.log(location);

    return (
        <div className="products">
            {location.state.map((product) => (
                <Product title={product.title} price={product.price} description={product.description}
                    image={product.image} key={product.id}></Product>
            ))}
        </div>
    );
}

export default Results;