import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../images/bs_logo.jpeg';
import Image from '../images/bg.jpeg';

const Invoice = () => {
  const location = useLocation();
  const { customerName, address } = location.state || {};

  return (
    <div className="flex justify-center py-1 bg-gray-200">
      <div
        className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden bg-no-repeat bg-center bg-cover"
        style={{
          width: '210mm',  // Fixed width
          height: '297mm',  // Fixed height
          backgroundImage: `url(${Image})`,
          margin: '0 auto',  // Center the content
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90" style={{ zIndex: -1 }}></div>

        <header className="relative z-10 mt-4 w-full text-white shadow-md flex justify-between items-center px-6 bg-black" style={{ margin: 0 }}>
          <h1 className="text-7xl font-semibold font-playfair">INVOICE</h1>
          <img src={logo} alt="Logo" className="h-28 w-32" />
        </header>

        <main className="relative z-10 p-6 mt-10">
          <div className="flex justify-between mb-6 text-gray-600">
            <div className="flex">
              <div className="mr-4">
                <h3 className="font-bold text-gray-700">Bill To:</h3>
                <p>{customerName || 'N/A'}</p>
                <p>{address || 'N/A'}</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">Payable To:</h3>
                <p>LetzGrabIT</p>
                <p>456 Another Street</p>
                <p>City, Country</p>
              </div>
            </div>

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

          <div className="font-bold mb-6 mt-24 text-7xl font-playfair flex justify-center">
            <p>THANK</p>
            <span className='px-3'></span>
            <p>YOU</p>
          </div>

          <div className="text-left mt-16">
            <div className='flex items-center'>
              <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                <path fill="#fff" d="M34 16L21 29 14 22 16.7 19.3 21 23.6 31.3 13.3z"></path>
              </svg>
              <p className="px-3">www.letzgrabit.com</p>
            </div>

            <div className='flex items-center'>
              <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M44,24c0,11.046-8.954,20-20,20S4,35.046,4,24S12.954,4,24,4S44,12.954,44,24z"></path>
                <path fill="#fff" d="M33,18c-0.552,0-1,0.448-1,1v10c0,0.552,0.448,1,1,1h3v3H12v-3h3c0.552,0,1-0.448,1-1V19c0-0.552-0.448-1-1-1h-3v-3h24v3H33z M30,19v8H18v-8H30z"></path>
              </svg>
              <p className="px-3">letsgrab@gmail.com</p>
            </div>

            <div className='flex items-center'>
              <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path>
                <path fill="#fff" d="M32,16L18,24l14,8V16z"></path>
              </svg>
              <p className="px-3">www.youtube.com</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invoice;
