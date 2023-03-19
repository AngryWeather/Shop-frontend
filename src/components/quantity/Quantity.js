import { useState } from "react";
import "./quantity.css";

const Quantity = props => {
    // const [quantityClass, setQuantityClass] = useState("quantity");

    function changeQuantity(e) {
        props.changeQuantity(e.target.value);
    }

    return (
        <div className={props.quantityClass}>
            <label htmlFor="quantity-bought">Quantity</label>
            <input onChange={changeQuantity} id="quantity-bought" type="number" value={props.quantity} min="1"></input>
        </div>
    );
}

export default Quantity;