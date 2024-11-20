import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "../api/queries";
import { processOrder } from "../api/mutations";

const ProductContext = React.createContext();

const client = generateClient();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const checkout = async (orderDetails) => {
        const payload = {
            id: uuidv4(),
            ...orderDetails,
        };
        try {
            await client.graphql({
                query: processOrder,
                variables: { input: payload },
            });
            console.log("Order is successful");
        } catch (err) {
            console.log(err);
        }
    };

    const fetchProducts = async () => {
        try {
            setLoading(true);
            // Switch authMode to API_KEY for public access
            const { data } = await client.graphql({
                query: listProducts,
                authMode: "apiKey",
            });

            const products = data.listProducts.items;
            const featured = products.filter((product) => {
                return !!product.featured;
            });
            setProducts(products);
            setFeatured(featured);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
    };

    return (
        <ProductContext.Provider
            value={{ products, featured, loading, checkout }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
