import "./header.css";
import Logo from "../logo/Logo";
import Search from "../search/Search";

const Header = () => {
    return (
      <div className="header">
        <Logo></Logo>
        <Search></Search>
      </div>  
    );
}

export default Header;