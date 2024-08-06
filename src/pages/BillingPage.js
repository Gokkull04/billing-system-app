import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BillingPage = () => {
  const [noOfItems, setNoOfItems] = useState(1);
  const [productCodes, setProductCodes] = useState(['']);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleNoOfItemsChange = (e) => {
    const value = e.target.value;
    const count = parseInt(value, 10);

    if (isNaN(count) || count < 1) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        noOfItems: 'Please enter a valid number of items (at least 1).',
      }));
      setNoOfItems(1);
      setProductCodes(['']);
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, noOfItems: '' }));
      setNoOfItems(count);
      setProductCodes(Array(count).fill(''));
    }
  };

  const handleProductCodeChange = (index, value) => {
    const updatedCodes = [...productCodes];
    updatedCodes[index] = value;
    setProductCodes(updatedCodes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation and other logic here

    // Navigate to the Invoice page
    navigate('/invoice');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full py-4 bg-white shadow">
        <h1 className="text-4xl font-bold text-center">Billing Page</h1>
      </header>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="bg-white p-6 rounded-lg shadow-md w-80 mt-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name of the Customer
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                No. of Items
              </label>
              <input
                type="number"
                min="1"
                value={noOfItems}
                onChange={handleNoOfItemsChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter number of items"
              />
              {errors.noOfItems && (
                <p className="text-red-500 text-sm mt-2">{errors.noOfItems}</p>
              )}
            </div>

            {Array.from({ length: noOfItems }).map((_, index) => (
              <div key={index} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Code of the Product {index + 1}
                </label>
                <input
                  type="text"
                  value={productCodes[index]}
                  onChange={(e) =>
                    handleProductCodeChange(index, e.target.value)
                  }
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter product code"
                />
              </div>
            ))}

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
