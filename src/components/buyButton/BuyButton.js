import { useContext, useState } from "react";
import { ProductContext } from "../../ProductContext";
import "./buyButton.css";

const BuyButton = props => {
    // store the product the user wants to buy
    const {products, setProducts} = useContext(ProductContext);
    console.log(products);

    const productExistsInCart = () => {
        return products.find(product => product.product.title === props.product.title);
    }

    const onClickHandler = () => {
        setProducts(products.concat({product: props.product, quantity: Number(props.quantity)}));
        // reset quantity input field to 1
        props.changeQuantity(1);
    }


    return (
        <button className="buy-button" onClick={() => onClickHandler()}>
            Buy
        </button>
    );
}

export default BuyButton;