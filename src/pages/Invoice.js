import React from 'react';
import logo from '../images/bs logo.jpeg';
import backgroundImage from '../images/bs bg.jpeg'; // Ensure the correct path

const Invoice = () => {
  return (
    <div className="flex justify-center py-1" style={{ background: '#f3f4f6' }}>
      <div
        className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-full overflow-hidden"
        style={{
          width: '210mm',
          height: '297mm',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90" />

        <header className="relative z-10 w-full text-white shadow-md flex justify-between items-center px-6 bg-black">
          <h1 className="text-6xl font-semibold">Invoice</h1>
          <img src={logo} alt="Logo" className="h-28 w-28" />
        </header>

        <main className="relative z-10 p-6 mt-10">
          {/* Bill To and Payable To Section */}
          <div className="flex justify-between mb-6 text-gray-600">
            <div className="flex justify-between mb-6">
              <div className="mr-4">
                <h3 className="font-bold text-gray-700">Bill To:</h3>
                <p>John Doe</p>
                <p>123 Main Street</p>
                <p>City, Country</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Payable To:</h3>
                <p>LetzGrabIT</p>
                <p>456 Another Street</p>
                <p>City, Country</p>
              </div>
            </div>

            {/* Bill No and Date */}
            <div className="text-gray-700">
              <div className="flex">
                <h3 className="font-bold">Bill No:</h3>
                <p className="px-2">INV12345</p>
              </div>
              <div className="flex">
                <h3 className="font-bold">Date:</h3>
                <p className="px-2">August 6, 2024</p>
              </div>
            </div>
          </div>

          {/* Description, Price, Qty, Amount */}
          <div className="mb-4">
            <div className="flex justify-between font-bold bg-black text-white px-2 py-2">
              <span>Description</span>
              <span>Price</span>
              <span>Qty</span>
              <span>Amount</span>
            </div>
            <div className="flex justify-between mt-2 font-bold text-gray-700">
              <span>Product A</span>
              <span>$10</span>
              <span>2</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between mt-2 font-bold text-gray-700">
              <span>Product B</span>
              <span>$15</span>
              <span>1</span>
              <span>$15</span>
            </div>
          </div>

          {/* Subtotal, Shipping, Total */}
          <div className="flex justify-end mb-6 mt-36">
            <div className="text-right bg-black text-white px-10 py-5 rounded-lg">
              <div className="font-medium pb-3">
                <span className="mr-10">SUBTOTAL</span>
                <span className="ml-10"> $35</span>
              </div>
              <div className="font-medium pb-3">
                <span className="mr-10">SHIPPING</span>
                <span className="ml-10">FREE</span>
              </div>
              <div className="font-bold">
                <span className="mr-10">TOTAL</span>
                <span className="ml-10 text-2xl"> $35</span>
              </div>
            </div>
          </div>

          {/* Thank You */}
          <div className="text-center font-bold mb-6 mt-24 text-5xl">
            Thank You!
          </div>

          {/* Website, Gmail, Instagram */}
          <div className="text-left mt-16">
            <p>
              Website:{' '}
              <a href="https://www.letzgrabit.com" className="text-blue-500">
                www.letzgrabit.com
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:contact@letzgrabit.com" className="text-blue-500">
                contact@letzgrabit.com
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a href="https://instagram.com/letzgrabit" className="text-blue-500">
                @letzgrabit
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invoice;
