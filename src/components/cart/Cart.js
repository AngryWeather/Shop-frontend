import { useState } from "react";
import "./cart.css";

const Cart = () => {
    const [products, setProducts] = useState([]);

    return (
        <div className="cart">
           <p>Cart</p>
        </div>
    );
}

export default Cart;