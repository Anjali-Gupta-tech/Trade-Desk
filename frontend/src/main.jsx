import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import HomePage from "./landing_page/home/HomePage";
import ProductsPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import AboutPage from "./landing_page/about/AboutPage";
import SignUpPage from "./landing_page/signup/SignUpPage";
import LoginPage from "./landing_page/signup/LoginPage";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
         <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductsPage />} />
           <Route path="/pricing" element={<PricingPage />} />
            <Route path="/support" element={<SupportPage />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
);
