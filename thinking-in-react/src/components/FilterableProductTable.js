import { useState } from "react";
import SearchBar from 'components/SearchBar';
import ProductTable from 'components/ProductTable';

export default function FilterableProductTable({ products, productsLength }) {
  const [searchBarValue, setSearchBarValue] = useState('Produto xpto');

  if (typeof products === 'string') {
    return <h3>Products is not an array</h3>;
  }

  if (products.length === 0) {
    setSearchBarValue('No products found');
    return <h3>No products found</h3>;
  }

  return (
    <div style={{ margin: '0 auto', width: '250px', padding: '10px' }}>
      <SearchBar defaultValue={searchBarValue} />
      <ProductTable products={products} />
      <p>Products length: {productsLength}</p>
    </div>
  );
}
