import React from 'react'
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className='footer-div'>
        <div className='info'>Guitar Shop 2023.</div>
        <div className='info'><Link to="/kontakt" className="navBarItem">Kontakt</Link> </div>
        
        </div>
    )
}

export default Footer