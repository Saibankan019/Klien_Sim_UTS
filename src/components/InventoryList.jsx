import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function InventoryList({ items }) {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Inventory List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> {/* Use grid for proper layout */}
        {items.map((item) => (
          <div key={item.id} className="border border-gray-500 rounded-lg p-4 hover:shadow-lg transition duration-200">
            <Link to={`/inventory/${item.id}`} className="text-blue-600 hover:underline font-semibold text-lg">
              {item.name}
            </Link>
            <div className="text-gray-700 mt-1">Category: <span className="font-medium">{item.category}</span></div>
            <div className="text-gray-700">Stock: <span className="font-medium">{item.stock}</span></div>
            <div className="text-gray-700">Price: <span className="font-medium">Rp{item.price.toFixed(2)}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

InventoryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default InventoryList;