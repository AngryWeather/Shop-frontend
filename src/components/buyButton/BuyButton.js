import {useState } from "react";
import { useNavigate } from "react-router-dom";
import "./buyButton.css";

const BuyButton = props => {
    // store the product the user wants to buy
    const [product, setProduct] = useState({});
    // const navigate = useNavigate();

    const onClickHandler = () => {
        setProduct(props);
    }

    return (
        <button className="buy-button" onClick={onClickHandler}>
            Buy
        </button>
    );
}

export default BuyButton;