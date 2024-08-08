// Import React and necessary components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BillingPage from './pages/BillingPage';
import AddItemPage from './pages/AddItemPage';
import DeleteItem from './pages/DeleteItem';
import Invoice from './pages/Invoice';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
        <Route path='/delete-item' element={<DeleteItem />}/>
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </Router>
  );
};

export default App;
