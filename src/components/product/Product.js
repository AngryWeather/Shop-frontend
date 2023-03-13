import BuyButton from "../buyButton/BuyButton";
import Quantity from "../quantity/Quantity";
import "./product.css";
import "../../purchase-data/purchaseData.css";
import { useContext, useState } from "react";
import { QuantityContext } from "../../QuantityContext";

const Product = props => {
    const [quantity, setQuantity] = useState(0);

    console.log(quantity);

    return (
        <ol className="product">
            <li>
                <img src={props.image} height="128" width="128" alt={props.title}></img>
            </li>
            <div className="data">
                <li className="title">{props.title}</li>
                <li className="price">{props.price}$</li>
                <li className="description">{props.description}</li>
            </div>
            <div className="purchase-data">
                {/* pass quantity data to the child component to change it */}
                <Quantity quantity={quantity} changeQuantity={setQuantity}></Quantity>
                <BuyButton quantity={quantity} product={props}></BuyButton>
            </div>
        </ol>
    );
}

export default Product;