import { useContext } from "react";
import { ProductContext } from "../../ProductContext";

const RemoveButton = props => {
    const {products, setProducts} = useContext(ProductContext);

    const removeProduct = e => {
        const arr = [...products];
        setProducts(arr.filter(product => product.product.title !== props.title));
    }

    return (
        <div className="center">
            <button onClick={removeProduct} className="buy-button">X</button>
        </div>
    );
}

export default RemoveButton;