import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from "../../static/images/logo.jpeg"; // Import local image
import styles from "./Header.module.css"; // Import your custom styles

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <LinkContainer to="/" >
          <Navbar.Brand className={styles.logoLink}>
            <img
              src={logo}
              alt="logo"
              draggable="false"
              className={`${styles.logoLink} d-inline-block align-top`}
            />
          </Navbar.Brand>
        </LinkContainer>
      </div>

      <div className={styles.menu}>
        <Navbar expand="lg"> {/* Add expand="lg" for responsiveness */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`me-auto ${styles.menuItems}`}>
              <LinkContainer to="/">
                <Nav.Link className={styles.menuLinks}>INICIO</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/aboutUs">
                <Nav.Link className={styles.menuLinks}>SOBRE NOSOTROS</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/products">
                <Nav.Link className={styles.menuLinks}>PRODUCTOS Y SERVICIOS</Nav.Link>
              </LinkContainer>

              <NavDropdown
                title={<span className={styles.menuLinks}>GALERÍA</span>}
                id="basic-nav-dropdown"
                className={`${styles.dropdownArrow} dropdownArrow`}
              >
                <LinkContainer to="/gallery/puerta">
                  <NavDropdown.Item className={styles.dropdownItem}>Puertas</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/gallery/ventana">
                  <NavDropdown.Item className={styles.dropdownItem}>Ventanas</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/quotes">
                <Nav.Link className={styles.menuLinks}>SOLICITUD DE COTIZACIÓN</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
