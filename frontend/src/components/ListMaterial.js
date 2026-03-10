import React, { useState } from 'react';
 
const ListMaterial = () => {
  const [formData, setFormData] = useState({
    type: '', quantity: '', location: '', price: ''
  });
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Material Listed:", formData);
    alert("Material listed on the Waste-to-Value Network!");
  };
 
  return (
<div className="list-container">
<h2>List Your Recyclable Material</h2>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Material Type (e.g. Cotton)" 
          onChange={(e) => setFormData({...formData, type: e.target.value})} />
<input type="number" placeholder="Quantity (kg)" 
          onChange={(e) => setFormData({...formData, quantity: e.target.value})} />
<input type="text" placeholder="Location" 
          onChange={(e) => setFormData({...formData, location: e.target.value})} />
<button type="submit">Publish Listing</button>
</form>
</div>
  );
};
 
export default ListMaterial;