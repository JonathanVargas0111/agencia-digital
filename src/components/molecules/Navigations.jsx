// components/molecules/Navigation.js
import React, { useState } from 'react';
import Link from '../atoms/Link';
import Logo from '../atoms/Logo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top fondo-nav" id="menu-navigation">
      <div className="container my-1">
        <Link to="/">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#intro">
                Empresa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#llamado-accion">
                Banner
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#galeria">
                Galeria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonio">
                Testimonio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
