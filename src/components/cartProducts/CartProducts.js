import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../ProductContext";
import CartProduct from "../cartProduct/CartProduct";
import CheckoutButton from "../checkout/CheckoutButton";
import "./cartProducts.css";

const CartProducts = () => {
    const {products, setProducts} = useContext(ProductContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const calculateTotal = () => {
            setTotal(products.reduce((a, b) => a + b.product.price * b.quantity, 0));
        }

        calculateTotal();
    }, [products])

    return (
        <div>
            {/* Display total with 2 decimal places */}
            <p className="total">Total: {total.toFixed(2)}$</p>
            <CheckoutButton length={products.length} resetProducts={setProducts}></CheckoutButton>
            <div className="products">
                {products.map((elem) => (
                    <CartProduct title={elem.product.title} description={elem.product.description}
                        image={elem.product.image} price={elem.product.price}
                        quantity={elem.quantity} key={elem.product.id}></CartProduct>
                ))}
            </div>
        </div>
    );
}

export default CartProducts;