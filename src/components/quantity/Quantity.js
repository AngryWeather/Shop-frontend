import "./quantity.css";

const Quantity = () => {
    return (
        <div className="quantity">
            <label htmlFor="quantity-bought">Quantity</label>
            <input id="quantity-bought" type="number"></input>
        </div>
    );
}

export default Quantity;