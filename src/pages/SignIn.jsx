import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users",
        formData
      );
      setMessage("User created successfully!");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        street: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        country: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-center text-gray-700">
          Sign Up
        </h3>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {Object.keys(formData).map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          ))}

          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded-lg font-semibold shadow-md transition duration-300 hover:bg-opacity-80"
          >
            Continue
          </button>
        </form>
        {message && (
          <p className="mt-2 text-green-500 text-center">{message}</p>
        )}
        {error && <p className="mt-2 text-red-500 text-center">{error}</p>}
        <p className="mt-4 text-center text-gray-600">
          Already a member?{" "}
          <Link to="/login" className="text-secondary underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signin;
