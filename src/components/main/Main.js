import { Route, Routes } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import Electronics from "../product-categories/electronics/Electronics";
import Jewelery from "../product-categories/jewelery/Jewelery";
import MensClothing from "../product-categories/mens-clothing/MensClothing";
import WomensClothing from "../product-categories/womens-clothing/WomensClothing";
import Results from "../results/Results";
import CartProducts from "../cartProducts/CartProducts";

const Main = props => {

    return (
        <main>
            <Routes> 
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/electronics" element={<Electronics/>}></Route>
                <Route path="/jewelery" element={<Jewelery/>}></Route>
                <Route path="/men's clothing" element={<MensClothing/>}></Route>
                <Route path="/women's clothing" element={<WomensClothing/>}></Route>
                <Route path="/results" element={<Results/>}></Route>
                <Route path="/cart" element={<CartProducts/>}></Route>
            </Routes>
        </main>
    );
}

export default Main;