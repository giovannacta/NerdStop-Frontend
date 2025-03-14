import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-secondary text-black min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link to="/admin" className="hover:underline font-semibold">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/add-product" className="hover:underline font-semibold">
            Add Product
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className="hover:underline font-semibold">
            Orders
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
