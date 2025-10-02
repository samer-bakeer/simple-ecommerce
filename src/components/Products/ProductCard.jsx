
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 truncate">{product.name}</h3>
        <p className="text-xl font-semibold text-blue-600 mt-2">${product.price}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label={`أضف ${product.name} إلى السلة`}
        >
          أضف إلى السلة
        </button>
      </div>
    </div>
  );
};

export default ProductCard;