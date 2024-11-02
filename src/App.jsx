import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import InventoryList from './components/InventoryList';
import ItemDetail from './components/ItemDetail';
import AddItem from './components/AddItem';

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'GIGABYTE', category: 'Monitor', stock: 20, price: 2300000 },
    { id: 2, name: 'Asus Zephyrus', category: 'laptop', stock: 15, price: 32000000 },
  ]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Header username="Muhammad Fadhlan Hakim" />
          <Routes>
            <Route path="/" element={<InventoryList items={items} />} />
            <Route path="/inventory/:id" element={<ItemDetail items={items} />} />
            <Route path="/add-item" element={<AddItem onAdd={addItem} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
