import { useState, useEffect } from "react";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import NavBar from "./components/nav-bar/NavBar.js";
import "./reset.css";
import {ProductContext} from "./ProductContext.js";


function App() {
  const [product, setProduct] = useState({});
  const value = {product, setProduct};

  useEffect(() => {
    console.log(product);
  }, [product])
  
  return (
    <ProductContext.Provider value={value}>
    <div className="app">
        <Header></Header>
        <NavBar></NavBar>
        <Main></Main>
    </div>
    </ProductContext.Provider>

  );
}

export default App;
