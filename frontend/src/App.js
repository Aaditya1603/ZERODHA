import { Route, Routes, useLocation } from "react-router-dom";
import { Login, Signup as AuthSignup, Home } from "./pages";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import Footer from "./landing_page/Footer";
import Navbar from "./Navbar";
import NotFound from "./landing_page/NotFound";
// import ProtectedRoute from './pages/ProtectedRoute';
// import DashboardHome from './pages/dashboard/DashboardHome';
import "./App.css";

function App() {
  const location = useLocation();

  const hideLayoutRoutes = ["/login", "/signup", "/dashboard"];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="App">
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default App;
