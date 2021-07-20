import React, { useState } from 'react'
import {NavLink } from "react-router-dom";
import './Navbar.css';
import Popup from "../FAQ/Faq2";
import { Data } from "../FAQ/Data";
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: transparent;
  z-index:100
`;

const Container = styled.div`
  position: absolute;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  width:800px ;
  top:5%
`;

const Wrap = styled.div`
background-color: whitesmoke;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: white;
  color: #000;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    font-size: 1rem;
    padding:1.5rem;
  }
`;


const Navbar = () => {

    const [buttonpopup, setButtonpopup] = useState(false);

    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }

        setClicked(index);
    };

    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3">
            <NavLink to='/' className="nav-item ">
                <p className="navbar-brand">
                    <i className="fas fa-book"></i>
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
                <a onClick={() => setButtonpopup(true)} style={{color:"gray", marginLeft:"5px"}}>FAQ</a>
                </NavLink>  
                </ul>
            </div>
        </nav> 
        <Popup trigger={buttonpopup} setTrigger={setButtonpopup}>
                    <h1 className="h1tag" style={{textAlign:"center"}}>FAQs For You</h1>
                    
                    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                        <AccordionSection>
                            <Container>
                                {Data.map((item, index) => {
                                    return (
                                        <>
                                            <Wrap onClick={() => toggle(index)} key={index}>
                                                <h1>{item.question}</h1><br></br>
                                                <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                            </Wrap>
                                            {clicked === index ? (
                                                <Dropdown>
                                                    <p>{item.answer}</p>
                                                </Dropdown>
                                            ) : null }
                                        </>
                                    );
                                })}
                            </Container>
                        </AccordionSection>
                        <br></br><br></br><br></br><br></br><br></br><br></br>
                    </IconContext.Provider> 
                           
                </Popup>
                            
    </>
    )  
}
export default Navbar