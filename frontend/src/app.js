import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Marketplace from './pages/Marketplace';
import ListMaterial from './pages/ListMaterial';
import Wallet from './pages/Wallet';
 
function App() {
  return (
<Router>
<div className="App">
<Navbar />
<Routes>
<Route path="/" element={<Marketplace />} />
<Route path="/list" element={<ListMaterial />} />
<Route path="/wallet" element={<Wallet />} />
</Routes>
</div>
</Router>
  );
}
 
export default App;