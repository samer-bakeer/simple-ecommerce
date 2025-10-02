
import React from 'react';
import CartIcon from '../cart/CartIcon';


const Header = ({ cartCount }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">متجرنا</h1>
        <button
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
          aria-label="فتح سلة المشتريات"
        >
          <CartIcon count={cartCount} />
        </button>
      </div>
    </header>
  );
};

export default Header;