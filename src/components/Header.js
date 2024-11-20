import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="main-head">
            <nav>
                <h1 id="logo">Urban Edge</h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Store</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                        <Link to="/checkout">Checkout</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
