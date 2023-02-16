import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from "./App";
import Electronics from "./components/product-categories/electronics/Electronics";
import Jewelery from "./components/product-categories/jewelery/Jewelery";
import MensClothing from "./components/product-categories/mens-clothing/MensClothing";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <App></App>
            <Routes>
                <Route path="/electronics" element={<Electronics/>}></Route>
                <Route path="/jewelery" element={<Jewelery/>}></Route>
                <Route path="/men's clothing" element={<MensClothing/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;