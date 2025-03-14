import { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "67bdb66445db6f2497e1262a",
    price: "",
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProduct((prev) => ({ ...prev, image: file }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("category_id", product.category);
    formData.append("price", product.price);
    if (product.image) {
      formData.append("image", product.image);
    }

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error adding product");
      }

      const data = await response.json();
      console.log("✅ Product successfully added:", data);
    } catch (error) {
      console.error("❌ Error adding product:", error.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Product name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="67bdb66445db6f2497e1262a">Games</option>
            <option value="67bdb65245db6f2497e12628">Consoles</option>
            <option value="67b8c9aa0384374b77dd2c89">Funko Pop!</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-secondary text-white font-semibold rounded hover:bg-black transition-all"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
