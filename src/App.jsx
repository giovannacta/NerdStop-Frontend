import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import ShopContextProvider, { ShopContext } from "./Context/ShopContext";
import ScrollToTop from "./components/ScrollToTop";
import Signin from "./pages/SignIn";
import Login from "./pages/Login";
import Dashboard from "./admin/Dashboard";
import AddProduct from "./admin/AddProduct";
import Orders from "./admin/Orders";
import Layout from "./admin/Layout";
import { useContext } from "react";

export default function App() {
  return (
    <ShopContextProvider>
      <main className="pt-20 md:pt-24">
        <BrowserRouter>
          <ScrollToTop />
          <MainContent />
        </BrowserRouter>
      </main>
    </ShopContextProvider>
  );
}

function AdminRoute({ children }) {
  const { user } = useContext(ShopContext);

  if (!user || !user.isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function MainContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Rotes */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Layout />
            </AdminRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}
