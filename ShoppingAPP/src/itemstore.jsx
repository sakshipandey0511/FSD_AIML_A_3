import { useState, useEffect } from "react";
import Item from "./Item";

const ItemStore = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const URL = "https://dummyjson.com/products";

            try {
                const res = await fetch(URL);
                const data = await res.json();
                setItems(data.products);
            } 
            catch (err) {
                console.log("error", err);
            }
        }

        loadProducts();
    }, []);

    return (
        <div>
            {items.map((item, index) => {
                return <Item key={index} props={item} />;
            })}
        </div>
    );
};

export default ItemStore;