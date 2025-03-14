import { Navigate, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const AdminRoute = () => {
  const { user } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  console.log("AdminRoute - User:", user);

  return user && user.isAdmin ? <Outlet /> : <Navigate to="/" />;
};

export default AdminRoute;
