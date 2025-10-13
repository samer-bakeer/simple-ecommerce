
import React from 'react';
import CartIcon from '../cart/CartIcon';
import { useTheme } from '../../contexts/ThemeContext'; 

const Header = ({ cartCount, onCartClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">متجرنا</h1>
        
        <div className="flex items-center space-x-4 rtl:space-x-reverse">

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
            aria-label={`تبديل إلى ${theme === 'light' ? 'الوضع الداكن' : 'الوضع الفاتح'}`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>


          <button
            onClick={onCartClick}
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
            aria-label="فتح سلة المشتريات"
          >
            <CartIcon count={cartCount} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;