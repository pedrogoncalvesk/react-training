import { useEffect, useState } from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable({ defaultProducts, productsLength }) {
  const [searchBarValue, setSearchBarValue] = useState('');
  const [products, setProducts] = useState(defaultProducts);

  useEffect(() => {
    const filteredProducts = defaultProducts.filter(product => product.name.toLowerCase().includes(searchBarValue.toLowerCase()));
    setProducts(filteredProducts);
  }, [searchBarValue, defaultProducts]);

  const handleChangeSearchBarValue = (value) => {
    setSearchBarValue(value);
  }

  if (typeof products === 'string') {
    return <h3>Products is not an array</h3>;
  }

  if (products.length === 0) {
    return <h3>No products found</h3>;
  }

  return (
    <div style={{ margin: '0 auto', width: '250px', padding: '10px' }}>
      <SearchBar defaultValue={searchBarValue} onChange={handleChangeSearchBarValue} />
      <ProductTable products={products} />
      <p>Filtered Products length: {products.length}</p>
      <p>Total Products length: {productsLength}</p>
    </div>
  );
}
