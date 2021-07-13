import React from 'react'
import {NavLink , Switch , Route, Redirect, BrowserRouter} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3">
            <NavLink to='/' className="nav-item ">
                <p className="navbar-brand">
                    <i className="fas fa-book"></i>
                    {/* <i className="fas fa-book"></i> */}
                    {/* <i className="fas fa-book"></i>  */}
                    Fun With Physics
                </p>
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul style={{fontSize: "20px"}}className="navbar-nav ml-auto mr-5">
                <NavLink to='/' className="nav-item ">
                    <a className="nav-link" >Home</a>
                </NavLink>
                <NavLink to='/about' className="nav-item">
                    <a className="nav-link" >About</a>
                </NavLink>
                <NavLink to='/contact' className="nav-item">
                    <a className="nav-link" >Contact</a>
                </NavLink>
                <NavLink to='/faq' className="nav-item">
                    <a className="nav-link" >FAQ</a>
                </NavLink>  
                     
                </ul>
            </div>
        </nav> 
    </>
    )  
}
export default Navbar