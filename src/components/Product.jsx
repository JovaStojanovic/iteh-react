import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Product({ product, detaljnije, otkaziUpit, strUpit }) {

    return (
        <div className="card"  >
            <div className='slika'>
                <img
                className="card-img-top"
                src={product.slika}
                alt="Neka slika"
            /></div>
            
            <div className="card-body">
                <h5 className="card-title">{product.naziv}</h5>

                {strUpit === 0 ? (
                    <>
                        <p className="card-text">{product.proizvod}</p>
                    </>
                ) : (
                    <p className="card-text">Kolicina: {product.kolicina}</p>

                )}

                {strUpit === 0 ? (
                    <>
                       {<button className='posaljiUpit' onClick={() => detaljnije(product)}><Link to={"/proizvodi/" + product.id} className="link">Detalji</Link></button>}
                    

                    </>
                ) : (
                    <button className='posaljiUpit' onClick={() => otkaziUpit(product.id, product.kolicina)}>Otkazi</button>

                )}

            </div>
        </div>
    )

}

export default Product
