import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Login = () => {
  const { login } = useContext(ShopContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      localStorage.setItem("token", data.token);
      const userData = { email: data.user.email, isAdmin: data.user.isAdmin };

      localStorage.setItem("user", JSON.stringify(userData));
      login(userData);

      console.log("Loged User:", userData);

      if (userData.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error to login:", error);
      setError(error.message);
    }
  };

  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[500px] w-full bg-primary m-auto px-12 py-10 rounded-xl shadow-lg">
        <h3 className="text-center text-2xl font-bold">Login</h3>

        <form className="flex flex-col gap-4 mt-7" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="h-14 w-full pl-5 bg-white outline-none rounded-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="h-14 w-full pl-5 bg-white outline-none rounded-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-opacity-80 w-full my-5">
            Continue
          </button>
        </form>

        <p className="text-black font-bold text-center">
          Not a Member?
          <Link
            to="/signin"
            className="text-secondary underline cursor-pointer ml-1"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
