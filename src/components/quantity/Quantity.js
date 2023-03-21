import "./quantity.css";
import "../../center.css";

const Quantity = props => {

    function changeQuantity(e) {
        props.changeQuantity(e.target.value);
    }

    return (
        <div className={`${props.quantityClass} center`}>
            <label htmlFor="quantity-bought">Quantity</label>
            <input onChange={changeQuantity} id="quantity-bought" type="number" value={props.quantity} min="1"></input>
        </div>
    );
}

export default Quantity;