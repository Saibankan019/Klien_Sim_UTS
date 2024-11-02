import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-1/4 h-screen bg-gray-800 text-white p-4">
      <nav className="space-y-4">
        <Link to="/" className="block hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/" className="block hover:bg-gray-700 p-2 rounded">Inventory List</Link>
        <Link to="/add-item" className="block hover:bg-gray-700 p-2 rounded">Add Item</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
