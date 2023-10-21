import React from 'react';

const RawMaterialForm = ({ data, onChange, onRemove }) => {
  return (
    <div>
      <input type="text" name="name" placeholder="Raw Material Name" value={data.name} onChange={onChange} />
      <input type="number" name="quantity" placeholder="Quantity" value={data.quantity} onChange={onChange} />
      <input type="number" name="price" placeholder="Price" value={data.price} onChange={onChange} />
      <input type="text" name="details" placeholder="Details" value={data.details} onChange={onChange} />
      <input type="number" name="quantity_used" placeholder="Quantity Used" value={data.quantity_used} onChange={onChange} />
      <button type="button" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default RawMaterialForm;
