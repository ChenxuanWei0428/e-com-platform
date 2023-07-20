import React from 'react';
import ProductItem from '../components/Item';
import data from "../data/data.json";

const Products = () => {
  const products = data.items;

  return (
    <div className="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
