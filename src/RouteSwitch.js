import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart/Cart";
import Homepage from "./components/homepage/Homepage";
import Electronics from "./components/product-categories/electronics/Electronics";
import Jewelery from "./components/product-categories/jewelery/Jewelery";
import MensClothing from "./components/product-categories/mens-clothing/MensClothing";
import WomensClothing from "./components/product-categories/womens-clothing/WomensClothing";
import Results from "./components/results/Results";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <App></App>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/electronics" element={<Electronics/>}></Route>
                <Route path="/jewelery" element={<Jewelery/>}></Route>
                <Route path="/men's clothing" element={<MensClothing/>}></Route>
                <Route path="/women's clothing" element={<WomensClothing/>}></Route>
                <Route path="/results" element={<Results/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;