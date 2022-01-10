import React, { useState, useRef, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { Data } from '../FAQ/Data';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Accordion, Card } from 'react-bootstrap';
import logo from '../../Images/Logo/logo.webp';
import { Context } from '../../App';
const Navbar = () => {
  const { state, dispatch } = useContext(Context);
  const [clicked, setClicked] = useState(false);
  const user = localStorage.getItem('user');
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const menuBtnRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    if (!menuOpen) {
      menuBtnRef.current.classList.add('open');
      setMenuOpen(true);
    } else {
      menuBtnRef.current.classList.remove('open');
      setMenuOpen(false);
    }
  };

  const handlelogout = () => {
    dispatch({
      type: 'Logout',
    });
    localStorage.setItem('user', null);
    console.log(user);
  };
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light pt-3'>
        <p className='navbar-brand'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <div onClick={handleToggle} ref={menuBtnRef} className="menu-btn ">
              <div className="menu-btn__burger"></div>
            </div>
          </button>
          <img src={logo} alt='logo' height='10%' width='10%' />
          &ensp; Tech N Science
        </p>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul style={{ fontSize: '20px' }} className='navbar-nav ml-auto mr-5'>
            <NavLink to='/' className='nav-item'>
              <span className='nav-link'>Home</span>
            </NavLink>
            <NavLink to='/about' className='nav-item'>
              <span className='nav-link'>About</span>
            </NavLink>
            {!state.user && (user === 'null' || !user) ? (
              <React.Fragment>
                <NavLink to='/Signup' className='nav-item'>
                  <span className='nav-link'>SignUp</span>
                </NavLink>
                <NavLink to='/Login' className='nav-item'>
                  <span className='nav-link'>Login</span>
                </NavLink>
              </React.Fragment>
            ) : (
              <NavLink to='/Login' className='nav-item'>
                <span className='nav-link' onClick={handlelogout}>
                  Logout
                </span>
              </NavLink>
            )}
            <NavLink to='/contact' className='nav-item' id='contactUs'>
              <span className='nav-link'>Contact</span>
            </NavLink>
          </ul>
        </div>
      </nav>

      {/* Faq Modal */}

      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1
                className='modal-title'
                style={{ margin: '0em auto', paddingLeft: '4em' }}
                id='exampleModalLabel'
              >
                FAQs For You
              </h1>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
                <Accordion>
                  {Data.map((item, index) => {
                    return (
                      <React.Fragment key={item.key}>
                        <Card key={item.key}>
                          <Accordion.Toggle
                            style={{ border: 'none' }}
                            eventKey={item.key}
                          >
                            <Card.Header>
                              <div
                                onClick={() => toggle(index)}
                                key={index}
                                style={{
                                  border: 'none',
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                <h3 style={{ display: 'inline' }}>
                                  {item.question}
                                </h3>
                                <span>
                                  {clicked === index ? <FiMinus /> : <FiPlus />}
                                </span>
                              </div>
                            </Card.Header>
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={item.key}>
                            <Card.Body>
                              <p style={{ fontSize: '19px' }}>{item.answer}</p>
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </React.Fragment>
                    );
                  })}
                </Accordion>
              </IconContext.Provider>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Navbar;
