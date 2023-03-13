import { useState } from "react";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import NavBar from "./components/nav-bar/NavBar.js";
import "./reset.css";
import {ProductContext} from "./ProductContext.js";
import { QuantityContext } from "./QuantityContext.js";


function App() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const value = {products, setProducts};
  const quantityValue = {quantity, setQuantity};
  
  return (
    <QuantityContext.Provider value={quantityValue}>
    <ProductContext.Provider value={value}>
    <div className="app">
        <Header></Header>
        <NavBar></NavBar>
        <Main></Main>
    </div>
    </ProductContext.Provider>
    </QuantityContext.Provider>
  );
}

export default App;
