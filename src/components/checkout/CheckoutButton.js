const CheckoutButton = props => {
    console.log(props);
    return (
        <button>
            Checkout ({props.length} items)
        </button>
    );
}

export default CheckoutButton;