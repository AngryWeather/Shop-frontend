import "./navBar.css";
import Categories from "../categories/categories";
const NavBar = () => {
    return (
        <nav>
            <li>
                <Categories></Categories>
                <ul></ul>
            </li>
        </nav>
    );
}

export default NavBar;