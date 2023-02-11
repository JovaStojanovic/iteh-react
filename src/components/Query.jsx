
import React from 'react';
import Pagination from '../Pagination';
import Product from './Product';

function Upit({ product,products,detaljnije, posaljiUpit, firstProductIndex, lastProductIndex, currentPage, setcuerrentPage, productsPerPage}) {
    
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);
    return (
        <div className='div'>
            <div className='gridDiv'>
                
                <div className='product-info'>
                    <h2 className='product-name'>{product.naziv}</h2>

                    <p className='dpcena'>Cena: <b>{product.cena} dolara</b></p>
                    <p className='dp'> {product.opis}</p>
                    <div className='kolicina'>
                        <label className='dpl' >Kolicina: 

                        <input type="number" min="1" name="name" id="kol" style={{ width: 100 + "px", marginLeft: 10 + "px" }} />
                        </label> <br></br>
                  
                   
                  
                        <button className='btnUpit' onClick={() => posaljiUpit(product.id, document.getElementById("kol").value)} >Dodaj u korpu</button>
                    </div>
                    
                </div>
                <div className='product-img'>
                    <img src={product.slika}></img>
                </div>
            </div>
    
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
        
    )
}

export default Upit
