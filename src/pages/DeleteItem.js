import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteItem = () => {
  const [productCode, setProductCode] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setIsConfirming(true);
  };

  const handleConfirm = () => {
    // Logic to delete the item based on the productCode
    console.log(`Deleting product with code: ${productCode}`);
    // Navigate back or show a success message
    navigate('/'); // Redirect to home page after deletion
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="w-full py-4 bg-white shadow-md flex justify-center">
        <h1 className="text-2xl font-semibold">Delete Item</h1>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 mt-10">
          {!isConfirming ? (
            <div className="flex flex-col space-y-4">
              <label htmlFor="product-code" className="font-medium">
                Code of the product:
              </label>
              <input
                id="product-code"
                type="text"
                className="px-4 py-2 border rounded"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={handleSubmit}
                disabled={!productCode}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="flex flex-col space-y-4">
              <p>Are you sure you want to delete the product with code: <strong>{productCode}</strong>?</p>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleConfirm}
              >
                Confirm
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={() => setIsConfirming(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeleteItem;
