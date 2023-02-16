import "./product.css";

const Product = props => {
    return (
        <ol className="product">
            <li>
                <img src={props.image} height="128" width="128"></img>
            </li>
            <div class="data">
                <li class="title">{props.title}</li>
                <li class="price">{props.price}$</li>
                <li class="description">{props.description}</li>
            </div>
           
        </ol>
    );
}

export default Product;