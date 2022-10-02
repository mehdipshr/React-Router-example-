import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className ="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className ="container-fluid">
                

                <div className ="collapse navbar-collapse" id="navbarColor01">
                    <ul className ="navbar-nav me-auto">
                        <li className ="nav-item"> 
                            <Link className='a-tags' to='/ '>Home</Link>        
                        </li>
                        <li className ="nav-item">   
                            <Link className='a-tags' to='/signup'>Signup</Link>
                        </li>
                        <li className ="nav-item"> 
                            <Link className='a-tags' to='/contact'>Contact</Link>
                        </li>
                        <li className ="nav-item">
                            <Link className='a-tags' to='/about'>About</Link>
                        </li>                   
                    </ul>
                </div>
            </div>
        </nav>
    )
}
