import React from 'react'
import Product from './Product';


function SviUpiti({ upiti, otkaziUpit, totalPrice, potvrdiPorudzbinu }) {
    return (
        <>  
        <div className="all-products main">
            
            {upiti.map((upit) => {
                return <Product product={upit} strUpit={1} otkaziUpit={otkaziUpit}/>;
            })}

           
        </div>

  

       {upiti.length === 0 ? (
                    <>
                       <div style={{marginBottom: 33+"%"}} className="emptyCart">Korpa je prazna
                       
                       </div>
                       
                    </>
                ) : (
                    <>
                    <div className='ukupno'>Ukupna cena: {totalPrice}</div>
                    <button className='potvrdiPorudzbinu' onClick={potvrdiPorudzbinu}>Potvrdi narudzbinu</button> </>
                )}
                <div id="uspešno" style={{ visibility: "hidden" }}>
                Uspesno ste narucili.
        </div>
</>

    )
}

export default SviUpiti
