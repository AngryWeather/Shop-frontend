import { useState, useContext, useEffect } from "react";
import Quantity from "../quantity/Quantity";
import { ProductContext } from "../../ProductContext";

const CartProduct = props => {
    const {products, setProducts} = useContext(ProductContext);
    const [quantity, setQuantity] = useState(props.quantity);
   
    useEffect(() => {
        let arr = [...products];
        
        const getIndexOfCartProduct = () => {
            return products.findIndex(product => product.product.title === props.title);
        }

        const updateQuantity = () => {
            let index = getIndexOfCartProduct();
            let productQuantity = Number(products[index]["quantity"]);
    
            if (productQuantity > quantity) {
                // subtract the difference between last quantity and the new one
                arr[index]["quantity"] = productQuantity - (productQuantity - quantity);
            } else if (productQuantity < quantity) {
                arr[index]["quantity"] = productQuantity + (quantity - productQuantity);
            }
    
            setProducts(arr);
        }

        updateQuantity();
    }, [quantity]);

    return (
        <ol className="product" key={props.id}>
            <li>
                <img src={props.image} height="128" width="128" alt={props.title}></img>
            </li>
            <div className="data">
                <li className="title">{props.title}</li>
                <Quantity quantity={quantity} changeQuantity={setQuantity}></Quantity>
                <li className="price">To pay: {(props.price * quantity).toFixed(2)}$</li>
                <li className="description">{props.description}</li>
            </div>
        </ol>
    );
}

export default CartProduct;