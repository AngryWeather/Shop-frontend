import { useEffect, useState } from "react";
import Category from "../category/category";
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
            {/* category doesn't have a unique key so need to use index */}
            {categories.map((category, index) => (
                <ul>
                    <Category category={category} key={index}></Category>
                </ul>
            ))}
        </div>
    );

    
}

export default Categories;