import { Link } from "react-router-dom";
import "./logo.css";

const Logo = () => {
    return (
        <div id="logo">
            <Link to="/"><h1>Store</h1></Link>
        </div>
    );
}

export default Logo;