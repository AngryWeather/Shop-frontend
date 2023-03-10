import { Link } from "react-router-dom";
import "./category.css";

const Category = props => {
    
    return (
        <li className="category">
            <Link to={`/${props.category}`}>
                {props.category}
            </Link>
        </li>
    );
}

export default Category;