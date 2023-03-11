import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../ProductContext";
import "./buyButton.css";

const BuyButton = props => {
    // store the product the user wants to buy
    const {products, setProducts} = useContext(ProductContext);

    const onClickHandler = () => {
        setProducts(products.concat(props.product));
    }


    return (
        <button className="buy-button" onClick={() => onClickHandler()}>
            Buy
        </button>
    );
}

export default BuyButton;