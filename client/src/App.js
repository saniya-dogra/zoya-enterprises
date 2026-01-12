import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Contact from "./pages/Contact";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />

        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

