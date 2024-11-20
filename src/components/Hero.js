import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero">
            <video
                src="https://smu-wad2.web.app/assets/revente-3629055a.mp4"
                autoPlay
                loop
                muted
                style={{
                    position: "absolute",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                }}
            ></video>

            <h2
                style={{
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.5rem",
                    textAlign: "center",
                }}
            >
                Reimagining Sustainable
            </h2>

            <h1
                style={{
                    color: "white",
                    fontSize: "8rem",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "0.5rem",
                    textAlign: "center",
                }}
            >
                Urban Edge
            </h1>

            <h3>
                A curated collection of pre-loved
                <br />
                fashion and lifestyle products
            </h3>
            <Link className="btn" to="/products">
                View All Products
            </Link>
        </section>
    );
};

export default Hero;
