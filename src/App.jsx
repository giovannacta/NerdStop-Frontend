import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import ShopContextProvider from "./Context/ShopContext";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <ShopContextProvider>
      <main className="bg-white text-tertiary">
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/games"
              element={<Category category="67bdb66445db6f2497e1262a" />}
            />
            <Route
              path="/consoles"
              element={<Category category="67bdb65245db6f2497e12628" />}
            />
            <Route
              path="/funkopop"
              element={<Category category="67b8c9aa0384374b77dd2c89" />}
            />
            <Route path="/product" element={<Product />}>
              <Route path=":productId" element={<Product />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </ShopContextProvider>
  );
}
