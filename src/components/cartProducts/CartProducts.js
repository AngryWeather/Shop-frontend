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