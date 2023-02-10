import React from 'react'
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";


function NavBar({cartNum})  {
    return (
        
        <div className="navBar">
            <div className='deo'>
                <Link to="/" className="navBarItem"><span> &nbsp;&nbsp;<img className='logo' src="https://img.freepik.com/free-vector/round-sticker-guitar-school-vector-illustration-black-promotional-label-advertising-rock-music-lessons_74855-10863.jpg?w=740&t=st=1675965157~exp=1675965757~hmac=5e2c5e2814b3e211533ee3f9a37376a16d3e1d5cde66be767ac35ad3fde7c43d"></img>&nbsp;&nbsp; </span> </Link>
            </div>
            <div className='deo'>
                <Link to="/proizvodi" className="navBarItem">Gitare</Link>            
            </div>
            <div>
                <Link to="/upiti" className="cart-items">
                    <ImCart className="iconNav"    />
                    <div className="cart-num">&nbsp;&nbsp; {cartNum}</div>
                </Link>         
            </div>
            
           
        </div>

    )
}


export default NavBar