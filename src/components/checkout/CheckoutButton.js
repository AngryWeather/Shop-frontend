import "./checkoutButton.css";

const CheckoutButton = props => {

    return (
        <div className="checkout">
            <button className="buy-button checkout-button" onClick={() => props.resetProducts([])}>
                {Number(props.length) === 1 ? `Checkout (${props.length} item)` : `Checkout (${props.length} items)`}
            </button>
        </div>
    );
}

export default CheckoutButton;