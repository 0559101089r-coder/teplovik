import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from "./CardContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Header from './page/Header';
import Footer from './page/Footer';
import HomePage from './page/homePage/HomePage';
import CatalogPage from './page/catalogPage/CatalogPage';
import ProductPage from './page/productPage/ProductPage';
import CartPage from './page/cartPage/CartPage';
import NovinkiPage from './page/novinkiPage/NovinkiPage';
import PricePage from './page/pricePage/PricePage';
import ContactPage from './page/contactPage/ContactPage';
import BrandPage from './page/brandPage/BrandPage';
import BrandDetailPage from './page/brandPage/BrandDetailPage';
import AboutPage from './page/aboutPage/AboutPage';
import SearchPage from './page/searchPage/SearchPage';
import ScrollToTop from './ui/ScrollToTop';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#F9F9F9] min-h-screen">
        <Header /> 

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/novinki" element={<NovinkiPage />} />
          <Route path="/price" element={<PricePage />} />
          <Route path="/contacts" element={<ContactPage /> } />
          <Route path="/brand" element={<BrandPage />} />
          <Route path="/brand/:id" element={<BrandDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>

        <Footer />
        <ToastContainer 
          position="top-right" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme="light" />
      </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App