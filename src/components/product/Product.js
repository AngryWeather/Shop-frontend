import BuyButton from "../buyButton/BuyButton";
import "./product.css";

const Product = props => {
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
            <BuyButton className="buy-button"></BuyButton>
        </ol>
    );
}

export default Product;