import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../../ProductContext";
import "./cart.css";

const Cart = () => {


    return (
        <div className="cart">
           <Link to="/cart">Cart</Link>
        </div>
    );
}

export default Cart;