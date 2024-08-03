import React, { useState } from 'react';

const AddItemPage = () => {
  const [productCode, setProductCode] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Product Code:', productCode);
    console.log('Price:', price);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full py-4 bg-white shadow">
        <h1 className="text-4xl font-bold text-center">Add Item</h1>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Code for the Product
              </label>
              <input
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter product code"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Price of the Product
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter price"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;
