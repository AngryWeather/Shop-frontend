import { useEffect, useState } from "react";

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const loadCategories = async () => {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const json = await response.json();
            console.log("json ", json);
            setCategories(json);
        }
        loadCategories()
        .catch(console.error);
    }, []);


    
}

export default Categories;