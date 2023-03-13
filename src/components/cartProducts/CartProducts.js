import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import CartProduct from "../cartProduct/CartProduct";

const CartProducts = () => {
    const {products} = useContext(ProductContext);

    return (
        <div className="products">
            {products.map((elem) => (
                <CartProduct title={elem.product.title} description={elem.product.description}
                    image={elem.product.image} price={elem.product.price}
                    quantity={elem.quantity}></CartProduct>
            ))}
        </div>
    );
}

export default CartProducts;