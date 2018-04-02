import React from 'react';
import SearchBar from '../SearchBar';
import ProductTable from './ProductTable';

const FilterableProductTable = ({products}) => {
  return(
    <div className="table-container">
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
} 

export default FilterableProductTable;