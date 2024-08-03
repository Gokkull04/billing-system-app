import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full py-4 bg-white shadow">
        <h1 className="text-4xl font-bold">
          <span className="text-red-600">L</span>etz
          <span className="text-red-600">G</span>rab
          <span className="text-red-600">I</span>t
        </h1>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 mt-10">
          <div className="flex flex-col space-y-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => navigate('/billing')}
            >
              Billing
            </button>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => navigate('/add-item')}
            >
              Add Item
            </button>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
