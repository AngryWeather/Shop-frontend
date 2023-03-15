const CartProduct = props => {
    return (
        <ol className="product">
            <li>
                <img src={props.image} height="128" width="128" alt={props.title}></img>
            </li>
            <div className="data">
                <li className="title">{props.title}</li>
                <li className="price">Quantity: {props.quantity}</li>
                <li className="price">To pay: {(props.price * props.quantity).toFixed(2)}$</li>
                <li className="description">{props.description}</li>
            </div>
        </ol>
    );
}

export default CartProduct;