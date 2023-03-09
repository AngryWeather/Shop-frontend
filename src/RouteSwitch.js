import { BrowserRouter, Routes, Route  } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart/Cart";
import Homepage from "./components/homepage/Homepage";
import Electronics from "./components/product-categories/electronics/Electronics";
import Jewelery from "./components/product-categories/jewelery/Jewelery";
import MensClothing from "./components/product-categories/mens-clothing/MensClothing";
import WomensClothing from "./components/product-categories/womens-clothing/WomensClothing";
import Results from "./components/results/Results";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import NavBar from "./components/nav-bar/NavBar";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    )
}

export default RouteSwitch;