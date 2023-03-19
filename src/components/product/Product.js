import BuyButton from "../buyButton/BuyButton";
import Quantity from "../quantity/Quantity";
import "./product.css";
import "../../purchase-data/purchaseData.css";
import { useState } from "react";

const Product = props => {
    const [quantity, setQuantity] = useState(1);

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
                <BuyButton quantity={quantity} product={props} key={props.id} 
                    changeQuantity={setQuantity}>
                </BuyButton>
            </div>
        </ol>
    );
}

export default Product;