const CheckoutButton = props => {
    return (
        <button>
            {props.length == 1 ? `Checkout (${props.length} item)` : `Checkout (${props.length} items)`}
        </button>
    );
}

export default CheckoutButton;