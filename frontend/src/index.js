import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
// import HomePage from './landingPage/home/HomePage';
// import AboutPage from './landingPage/about/AboutPage';
// import PricingPage from './landingPage/pricing/PricingPage';
// import ProductsPage from './landingPage/products/ProductsPage';
// import SupportPage from './landingPage/support/SupportPage';
// import Signup from './landingPage/signUp/SignUp';
// import Footer from './landingPage/Footer';
// import Navbar from './landingPage/Navbar';
// import NotFound from './landingPage/NotFound';
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { CookiesProvider } from "react-cookie";
import axios from "axios";
import { ThemeProvider } from "./context/ThemeContext";

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CookiesProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </CookiesProvider>
  </BrowserRouter>,
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CookiesProvider } from "react-cookie";
// import "./index.css";
// import "react-toastify/dist/ReactToastify.css";

// import HomePage from "./landing_page/home/HomePage";
// import Footer from "./landing_page/Footer";
// import Navbar from "./landing_page/Navbar";
// import { Login, Signup as AuthSignup, Home } from './pages';
// import ProductPage from "./landing_page/products/ProductPage";
// import AboutPage from "./landing_page/about/AboutPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import NotFound from "./landing_page/NotFound";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <CookiesProvider>
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<AuthSignup />} />
//         <Route path="/home" element={<HomePage />} />
//         <Route path="/product" element={<ProductPage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/pricing" element={<PricingPage />} />
//         <Route path="/support" element={<SupportPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   </CookiesProvider>
// );
