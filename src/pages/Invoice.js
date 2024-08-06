import React from 'react';

const Invoice = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="w-full py-4 bg-white shadow-md flex justify-between items-center px-6">
        <h1 className="text-2xl font-semibold">Invoice</h1>
        <h2 className="text-xl font-bold text-red-600">LetzGrabIT</h2>
      </header>

      <main className="flex-grow flex flex-col items-center p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-10">
          <h2 className="text-xl font-bold mb-4">Invoice Details</h2>
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Customer Name:</span>
              <span>John Doe</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Address:</span>
              <span>123 Main Street, City, Country</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Date:</span>
              <span>August 6, 2024</span>
            </div>
          </div>

          <h3 className="text-lg font-bold mt-6 mb-2">Items</h3>
          <div className="border rounded-md overflow-hidden">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Product Code</th>
                  <th className="py-2 px-4 border-b">Product Name</th>
                  <th className="py-2 px-4 border-b">Quantity</th>
                  <th className="py-2 px-4 border-b">Price</th>
                  <th className="py-2 px-4 border-b">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b">001</td>
                  <td className="py-2 px-4 border-b">Product A</td>
                  <td className="py-2 px-4 border-b">2</td>
                  <td className="py-2 px-4 border-b">$10</td>
                  <td className="py-2 px-4 border-b">$20</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">002</td>
                  <td className="py-2 px-4 border-b">Product B</td>
                  <td className="py-2 px-4 border-b">1</td>
                  <td className="py-2 px-4 border-b">$15</td>
                  <td className="py-2 px-4 border-b">$15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-end mt-4">
            <div className="text-right">
              <div className="font-medium">Subtotal: $35</div>
              <div className="font-medium">Tax: $3.50</div>
              <div className="font-bold">Total: $38.50</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Invoice;
