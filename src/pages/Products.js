import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/products";

const Products = () => {
    const { products, loading } = useContext(ProductContext);

    if (!products.length && !loading) {
        return <h3>No Products Available</h3>;
    }

    return (
        <section className="books">
            {loading && <h3 style={{ textAlign: "center" }}>Loading...</h3>}

            {/* Item cards */}
            {products.map(({ id, image, name }) => (
                <article
                    key={id}
                    className="book"
                    style={{
                        marginBottom: "12rem",
                    }}
                >
                    <div
                        className="book-image"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "white",
                            padding: "0",
                        }}
                    >
                        <img
                            src={image}
                            alt={name}
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain",
                                borderRadius: "5px 5px 0 0",
                                boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </div>

                    <Link
                        to={`/products/${id}`}
                        className="btn book-link"
                        style={{
                            borderRadius: "0 0 5px 5px",
                            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)",
                            textTransform: "none",
                        }}
                    >
                        View
                    </Link>
                </article>
            ))}
        </section>
    );
};

export default Products;
