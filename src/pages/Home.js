import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

import { ProductContext } from "../context/products";

const Home = () => {
    const { featured, loading } = useContext(ProductContext);

    if (!featured.length && !loading) {
        return <h3>No Products Available</h3>;
    }

    return (
        <>
            <Hero />

            <section className="featured">
                <header className="featured-head">
                    <h3>Featured Collection</h3>
                </header>
                <div
                    className="books featured-list"
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1rem",
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        padding: "1rem 5rem",
                        width: "100%",
                    }}
                >
                    {loading && (
                        <h3 style={{ textAlign: "center" }}>Loading...</h3>
                    )}

                    {/* Item cards */}
                    {featured.map(({ id, image, name }) => (
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
                                        boxShadow:
                                            "0px 10px 10px rgba(0, 0, 0, 0.5)",
                                    }}
                                />
                            </div>

                            <Link
                                to={`/products/${id}`}
                                className="btn book-link"
                                style={{
                                    borderRadius: "0 0 5px 5px",
                                    boxShadow:
                                        "0px 10px 10px rgba(0, 0, 0, 0.5)",
                                    textTransform: "none",
                                }}
                            >
                                View
                            </Link>
                        </article>
                    ))}
                </div>
            </section>

            <br />
            <footer
                style={{
                    backgroundColor: "#333",
                    color: "white",
                    padding: "2rem 0",
                    marginTop: "2rem",
                    textAlign: "center",
                }}
            >
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Urban Edge</p>
                </div>
            </footer>
        </>
    );
};

export default Home;
