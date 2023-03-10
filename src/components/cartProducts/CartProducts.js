import Product from "../product/Product";
import { useState, useContext, useEffect } from "react";
import { ProductContext } from "../../ProductContext";

const CartProducts = () => {
    console.log("CART");
    const {products, setProducts} = useContext(ProductContext);
    console.log(products);

    return (
        <div className="products">
            {products.map((elem) => (
                <Product title={elem.title} price={elem.price} 
                description = {elem.description} image={elem.image} key={elem.id} id={elem.id}></Product>
            ))}
        </div>
    );
}

export default CartProducts;