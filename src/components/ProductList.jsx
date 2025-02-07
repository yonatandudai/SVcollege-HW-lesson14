import React from 'react';
import Product from './Product';

export default function ProductList() {
  return (
    <div>
      <Product name="Milk" price="$10" />
      <Product name="Bread" price="$20" />
      <Product name="Eggs" price="$15" />
    </div>
  );
}
