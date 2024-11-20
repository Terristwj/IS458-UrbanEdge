import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    const product = products.find((product) => {
        return product.id === id;
    });
    if (!product) {
        return <h3>Loading...</h3>;
    }

    const { image: url, name, description, author, price } = product;

    return (
        <section className="book-details">
            <div className="detail-image">
                <img src={url} alt="10x Rule" width={300} />
            </div>
            <div className="detail-description">
                <h2>{name}</h2>
                <p>{description}</p>
                <h3>{author}</h3>
                <h4>Price - $ {price}</h4>
                <button
                    className="btn"
                    onClick={() => {
                        addToCart({ ...product, id });
                        navigate("/cart");
                    }}
                    style={{
                        cursor: "pointer",
                    }}
                >
                    Add to Cart
                </button>
            </div>
        </section>
    );
};

export default ProductDetails;
