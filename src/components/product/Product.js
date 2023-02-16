const Product = props => {
    return (
        <ol className="product">
            <li>
                <img src={props.image} height="64"></img>
            </li>
            <li>{props.title}</li>
            <li>{props.price}</li>
            <li>{props.description}</li>
        </ol>
    );
}

export default Product;