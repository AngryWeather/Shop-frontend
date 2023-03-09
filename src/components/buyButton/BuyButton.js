import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import "./buyButton.css";

const BuyButton = props => {
    // store the product the user wants to buy
    const {product, setProduct} = useContext(ProductContext);

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