// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { products as allProducts } from './data/products';
import ProductCard from './components/Products/ProductCard';
import Header from './components/layout/Header';
import CartModal from './components/cart/CartModal';
import ThankYouPage from './components/cart/ThankYouPage';

function AppContent({ cart, setCart }) {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); 

 
  const filteredAndSortedProducts = React.useMemo(() => {
    let result = allProducts;


    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(term)
      );
    }

  
    if (sortOrder !== 'none') {
      result = [...result].sort((a, b) =>
        sortOrder === 'asc' ? a.price - b.price : b.price - a.price
      );
    }

    return result;
  }, [searchTerm, sortOrder]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    navigate('/thank-you');
  };

  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Header
        cartCount={cartItemCount}
        onCartClick={() => setIsCartOpen(true)}
      />


      <div className="container mx-auto px-4 py-4 bg-white shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-gray-700">فرز حسب السعر:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
            >
              <option value="none">لا شيء</option>
              <option value="asc">من الأرخص</option>
              <option value="desc">من الأغلى</option>
            </select>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-6">
        {filteredAndSortedProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-10">لا توجد منتجات مطابقة</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        )}
      </main>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
    </>
  );
}

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<AppContent cart={cart} setCart={setCart} />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;