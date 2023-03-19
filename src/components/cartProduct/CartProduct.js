import { useState } from "react";
import Quantity from "../quantity/Quantity";

const CartProduct = props => {
    const [quantity, setQuantity] = useState(props.quantity);

    return (
        <ol className="product" key={props.id}>
            <li>
                <img src={props.image} height="128" width="128" alt={props.title}></img>
            </li>
            <div className="data">
                <li className="title">{props.title}</li>
                <li className="price">Quantity: {props.quantity}</li>
                {/* <Quantity quantity={quantity} changeQuantity={setQuantity}></Quantity> */}
                <li className="price">To pay: {(props.price * quantity).toFixed(2)}$</li>
                <li className="description">{props.description}</li>
            </div>
        </ol>
    );
}

export default CartProduct;