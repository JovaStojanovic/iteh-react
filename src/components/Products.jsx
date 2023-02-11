import React from 'react'
import Pagination from '../Pagination';
import Product from './Product';

const Products = ({ products, detaljnije, firstProductIndex, lastProductIndex, productsPerPage, currentPage, setcuerrentPage }) => {
    
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);
    return (
        <div className='omotac'>
        <div className="all-products">
            
            {currentProducts.map((prod) => {

                return <Product product={prod} detaljnije={detaljnije} key={prod.id} strUpit={0}  />;
            })}

            
        </div>
        <div className='paginacija'>
        {
        <Pagination
                totalProducts={products.length}
                productsPerPage={productsPerPage}
                setCurrentPage={setcuerrentPage}
                currentPage={currentPage}
            />
        }
        </div>
        </div>
    );
};

export default Products