import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add a button to add the product to the shopping cart */}
    </div>
  );
};

export default ProductItem;
