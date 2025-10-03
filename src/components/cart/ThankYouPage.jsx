
import React from 'react';
import { useNavigate } from 'react-router-dom';


const ThankYouPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="text-center bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">شكرًا لطلبك!</h1>
        <p className="text-gray-600 mb-6">
          تم استلام طلبك بنجاح. سنتواصل معك قريبًا.
        </p>
        <div className="animate-pulse text-emerald-600 font-medium">
          العودة إلى المتجر...
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;