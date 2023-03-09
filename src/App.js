import { useState } from "react";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import NavBar from "./components/nav-bar/NavBar.js";
import "./reset.css";


function App() {
  const [product, setProduct] = useState({});
  
  return (
    <div className="app">
        <Header></Header>
        <NavBar></NavBar>
        <Main></Main>
    </div>
  );
}

export default App;
