import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./cart.css";

const Cart = () => {
    console.log("CART");
    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setProducts(products.concat(location.state));   
    }, [location])

    return (
        <div className="cart">
           <a href="/cart">Cart</a>
        </div>
    );
}

export default Cart;