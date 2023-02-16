import "./category.css";
import {useNavigate} from "react-router-dom";

const Category = props => {
    // const navigate = useNavigate();
    // const handleClick = () => navigate(`/${props.category}`);

    return (
        <li className="category">
            <a href={`/${props.category}`}>
                {props.category}
            </a>
        </li>
    );
}

export default Category;