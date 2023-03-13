import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import "./buyButton.css";

const BuyButton = props => {
    // store the product the user wants to buy
    const {products, setProducts} = useContext(ProductContext);

    const onClickHandler = () => {
        setProducts(products.concat({product: props.product, quantity: Number(props.quantity)}));
    }


    return (
        <button className="buy-button" onClick={() => onClickHandler()}>
            Buy
        </button>
    );
}

export default BuyButton;