import { Link } from "react-router-dom";
import "./cart.css";

const Cart = () => {


    return (
        <div className="cart">
           <Link to="/cart">Cart</Link>
        </div>
    );
}

export default Cart;