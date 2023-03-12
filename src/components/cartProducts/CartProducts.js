import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import CartProduct from "../cartProduct/CartProduct";

const CartProducts = () => {
    const {products} = useContext(ProductContext);

    return (
        <div className="products">
            {products.map((elem) => (
                <CartProduct title={elem.title} description={elem.description}
                    image={elem.image} price={elem.price}></CartProduct>
            ))}
        </div>
    );
}

export default CartProducts;