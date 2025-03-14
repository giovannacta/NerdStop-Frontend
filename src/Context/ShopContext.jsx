import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const getStoredCart = (email) => {
    const storedCart = localStorage.getItem(`cart_${email}`);
    return storedCart ? JSON.parse(storedCart) : {};
  };

  const [cartItems, setCartItems] = useState(() => {
    return user ? getStoredCart(user.email) : {};
  });

  // Get products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/products");
        if (!response.ok) throw new Error("Error to find products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error to find products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Save cart items to local storage
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      return updatedCart;
    });
  };

  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
      };
      return updatedCart;
    });
  };

  
  const getTotalCartAmount = () => {
    return Object.keys(cartItems)
      .reduce((total, itemId) => {
        const product = products.find((p) => p._id === itemId);
        return product ? total + product.price * cartItems[itemId] : total;
      }, 0)
      .toFixed(2);
  };

  
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
  };

  
  const login = (userData) => {
    const updatedUser = {
      ...userData,
      isAdmin: userData.email === "admin@email.com",
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    
    setCartItems(getStoredCart(userData.email));
  };

  
  const logout = () => {
    setUser(null);
    setCartItems({});
    localStorage.removeItem("user");
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    user,
    login,
    logout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
