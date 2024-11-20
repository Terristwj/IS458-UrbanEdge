import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Amplify
import { Amplify } from "aws-amplify";

// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";

// Components
import Header from "./components/Header";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const App = () => {
    return (
        <div
            style={{
                overflowX: "hidden",
                height: "100dvh",
            }}
        >
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route exact path="/products" element={<Products />} />
                    <Route
                        path="/products/:id"
                        element={<ProductDetails></ProductDetails>}
                    />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <ToastContainer
                    position="top-center"
                    closeOnClick
                    theme="colored"
                />
            </BrowserRouter>
        </div>
    );
};

export default App;
