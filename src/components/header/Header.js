import "./header.css";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import Cart from "../cart/Cart";

const Header = () => {
    return (
      <div className="header">
        <Logo></Logo>
        <Search></Search>
        <Cart></Cart>
      </div>  
    );
}

export default Header;