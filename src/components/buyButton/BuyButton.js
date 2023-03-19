import { useContext } from "react";
import { ProductContext } from "../../ProductContext";
import "./buyButton.css";

const BuyButton = props => {
    // store the product the user wants to buy
    const {products, setProducts} = useContext(ProductContext);

    const getIndexOfCartProduct = () => {
        return products.findIndex(product => product.product.title === props.product.title);
    }

    const onClickHandler = () => {
        let index = getIndexOfCartProduct();

        if (index !== -1) {
            /* instead of adding the same product to the cart
            copy products array and update quantity object with the new value */
            let arr = [...products];
            arr[index]["quantity"] = Number(products[index]["quantity"]) + Number(props.quantity);
        } else {
            setProducts(products.concat({product: props.product, quantity: Number(props.quantity)}));
        }

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