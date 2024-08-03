// Import React and necessary components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BillingPage from './pages/BillingPage';
import AddItemPage from './pages/AddItemPage';

// Main App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/add-item" element={<AddItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
