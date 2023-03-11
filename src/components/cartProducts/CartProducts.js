import Product from "../product/Product";
import { useContext } from "react";
import { ProductContext } from "../../ProductContext";

const CartProducts = () => {
    const {products} = useContext(ProductContext);

    return (
        <div className="products">
            {products.map((elem) => (
                <Product title={elem.title} price={elem.price} 
                description = {elem.description} image={elem.image} key={elem.id} id={elem.id}></Product>
            ))}
        </div>
    );
}

export default CartProducts;