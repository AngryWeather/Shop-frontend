import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../ProductContext";
import CartProduct from "../cartProduct/CartProduct";

const CartProducts = () => {
    const {products} = useContext(ProductContext);
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        setTotal(products.reduce((a, b) => a + b.product.price * b.quantity, 0));
    }

    useEffect(() => {
        calculateTotal();
    }, [])

    console.log(total);

    return (
        <div>
            {/* Display total with 2 decimal places */}
            <p className="total">Total: {total.toFixed(2)}$</p>
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