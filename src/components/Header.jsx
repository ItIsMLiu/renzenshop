import React from 'react';
import { NavLink } from 'react-router-dom';

import "../style/Header.css"
/* import "../style/Global.css" */

import logo from "../assets/renzen-logo.png";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return <>
    <nav className="navbar sticky-top navbar-expand-lg customNav">
      <div className="container-fluid navContain">
        <NavLink 
          to="/renzenshop"
          end
          className='navbar-brand' 
        >
          <img src={logo} alt="renzen-Logo" className="logo-button" />
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)} 
          > 
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills justify-content-end">
            <li className="nav-item">
              <NavLink 
                to="/renzenshop"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/renzenshop/services"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/renzenshop/products"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/renzenshop/contact"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/renzenshop/about"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Header;
