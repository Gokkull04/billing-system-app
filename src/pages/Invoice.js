import React from 'react';
import logo from '../images/bs_logo.jpeg';
import Image from '../images/bg.jpeg';

const Invoice = () => {
  return (
    <div className="flex justify-center py-1 bg-gray-200">
      <div
        className="relative bg-white p-6 rounded-lg shadow-md w-full max-w-full overflow-hidden bg-no-repeat bg-center bg-cover"
        style={{
          width: '210mm',
          height: '297mm',
          backgroundImage: `url(${Image})`
        }}
      >
        <div className="absolute inset-0 bg-white opacity-90" style={{ zIndex: -1 }}></div>

        <header className="relative z-10 mt-4 w-full text-white shadow-md flex justify-between items-center px-6 bg-black">
          <h1 className="text-7xl font-semibold font-playfair">INVOICE</h1>
          <img src={logo} alt="Logo" className="h-28 w-32" />
        </header>

        <main className="relative z-10 p-6 mt-10">
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

          <div className="font-bold mb-6 mt-24  text-7xl font-playfair flex justify-center">
            <p>THANK</p>
            <span className='px-3'></span>
            <p>YOU</p>
          </div>

          <div className="text-left mt-16">
            <div className='flex items-center'>
              <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path><path fill="#4caf50" d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"></path><path fill="#ffc107" d="M24,4v20l8,4l-8.843,16c0.317,0,0.526,0,0.843,0c11.053,0,20-8.947,20-20S35.053,4,24,4z"></path><path fill="#f44336" d="M41.84,15H24v13l-3-1L7.16,13.26H7.14C10.68,7.69,16.91,4,24,4C31.8,4,38.55,8.48,41.84,15z"></path><path fill="#dd2c00" d="M7.158,13.264l8.843,14.862L21,27L7.158,13.264z"></path><path fill="#558b2f" d="M23.157,44l8.934-16.059L28,25L23.157,44z"></path><path fill="#f9a825" d="M41.865,15H24l-1.579,4.58L41.865,15z"></path><path fill="#fff" d="M33,24c0,4.969-4.031,9-9,9s-9-4.031-9-9s4.031-9,9-9S33,19.031,33,24z"></path><path fill="#2196f3" d="M31,24c0,3.867-3.133,7-7,7s-7-3.133-7-7s3.133-7,7-7S31,20.133,31,24z"></path>
              </svg>
              <a href="https://www.letzgrabit.com" className="text-blue-500">
                www.letzgrabit.com
              </a>
            </div>
            <div className='flex items-center'>
              <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33" height="33" viewBox="0 0 48 48">
              <path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"></path><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"></path><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"></path>
              </svg>
              <a href="mailto:contact@letzgrabit.com" className="text-blue-500 ml-1">
                contact@letzgrabit.com
              </a>
            </div>
            <div className='flex items-center'>
              <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="37" height="37" viewBox="0 0 48 48">
                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
              </svg>
              <a href="https://instagram.com/letzgrabit" className="text-blue-500">
                @letzgrabit
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Invoice;
