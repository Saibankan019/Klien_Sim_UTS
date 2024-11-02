import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

function ItemDetail({ items }) {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
      <div className="max-w-md mx-auto p-10 bg-white rounded-lg shadow-md">
        <h2 className="border border-gray-500 rounded-lg text-xl text-blue-500 font-bold mb-4">Item Detail</h2>
        <div className="flex flex-col gap-2">
          <p>Name: {item.name}</p>
          <p>Category: {item.category}</p>
          <p>Stock: {item.stock}</p>
          <p>Price: {item.price}</p>
        </div>
      </div>
  );
}

ItemDetail.propTypes = {
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

export default ItemDetail;