import React, { useEffect, useState } from 'react';
 
const Marketplace = () => {
  const [materials, setMaterials] = useState([
    { id: 1, type: 'Cotton Waste', quantity: '50kg', location: 'Pune', price: '₹40/kg' },
    { id: 2, type: 'Plastic PET', quantity: '200kg', location: 'Mumbai', price: '₹15/kg' }
  ]);
 
  return (
<div style={{ padding: '20px' }}>
<h1>Available Materials</h1>
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {materials.map((m) => (
<div key={m.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
<h3>{m.type}</h3>
<p><strong>Quantity:</strong> {m.quantity}</p>
<p><strong>Location:</strong> {m.location}</p>
<p style={{ color: '#28a745', fontWeight: 'bold' }}>{m.price}</p>
<button style={{ width: '100%', padding: '8px' }}>View Details / Buy</button>
</div>
        ))}
</div>
</div>
  );
};
 
export default Marketplace; 