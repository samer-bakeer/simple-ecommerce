
import React, { useState } from 'react';
import { products } from './data/products';
import ProductCard from './components/Products/ProductCard';
import Header from './components/layout/Header';

function App() {
  const [cart, setCart] = useState([]);


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


  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartCount={cartItemCount} />

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">المنتجات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;