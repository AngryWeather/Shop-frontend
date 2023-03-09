import "./category.css";

const Category = props => {
    
    return (
        <li className="category">
            <a href={`/${props.category}`}>
                {props.category}
            </a>
        </li>
    );
}

export default Category;