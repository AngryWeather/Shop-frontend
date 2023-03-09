import { useEffect, useState } from "react";
import Category from "../category/Category";
import "./categories.css";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const json = await response.json();
            setCategories(json);
        }
        loadCategories()
        .catch(console.error);
    }, []);

    return (
        <div className="categories">
            {categories.map((category) => (
                <ul>
                    <Category category={category} key={category}></Category>
                </ul>
            ))}
        </div>
    );

    
}

export default Categories;