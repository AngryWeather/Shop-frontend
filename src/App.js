import { useState } from "react";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import NavBar from "./components/nav-bar/NavBar.js";
import "./reset.css";
import {ProductContext} from "./ProductContext.js";


function App() {

  console.log("RENDER APP");
  const [products, setProducts] = useState([]);
  const value = {products, setProducts};
  
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
