import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import { Toaster } from "react-hot-toast";
import Checkout from "./pages/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
     <Toaster position="top-right" />
     <ToastContainer position="top-right" autoClose={2000} />
      {/* TOP HEADER */}
      <Header />

      {/* BLUE NAVBAR */}
      <Navbar />

      {/* PAGE ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />


      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;
