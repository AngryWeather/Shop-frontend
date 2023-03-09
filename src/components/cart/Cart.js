import { useState } from "react";
import "./cart.css";

const Cart = () => {
    console.log("CART");
    const [products, setProducts] = useState([]);

    return (
        <div className="cart">
           <a href="/cart">Cart</a>
        </div>
    );
}

export default Cart;