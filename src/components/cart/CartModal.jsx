
import React from 'react';

const CartModal = ({ cart, onUpdateQuantity, isOpen, onClose }) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">سلة المشتريات</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
            aria-label="إغلاق السلة"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">سلة فارغة</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                    <p className="text-blue-600 font-semibold">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center justify-center"
                      disabled={item.quantity <= 1}
                      aria-label={`تقليل كمية ${item.name}`}
                    >
                      −
                    </button>
                    <span className="w-8 text-center font-medium">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 flex items-center justify-center"
                      aria-label={`زيادة كمية ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t bg-gray-50">
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>المجموع:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
  onClick={() => {
    onCheckout();

    window.location.href = '/thank-you';
  }}
  className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
>
  إتمام الشراء
</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;