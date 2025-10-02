
import React from 'react';


const CartIcon = ({ count }) => {
  return (
    <div className="relative">
      <span className="text-2xl">🛒</span>
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  );
};

export default CartIcon;