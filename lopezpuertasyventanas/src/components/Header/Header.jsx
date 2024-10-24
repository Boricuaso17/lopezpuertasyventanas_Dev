import React from "react";
import styles from "../../static/styles.module.css";
import { Link } from "react-router-dom"; // Use React Router's Link component
import logo from "../../static/images/logo.jpeg"; // Import local image

export const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link className={styles.logoLink} to="/">
          <img
            className={styles.logoLink}
            src={logo}
            alt="logo"
            draggable="false"
          />
        </Link>
      </div>

      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li>
            <Link className={styles.menuLinks} to="/">
              INICIO
            </Link>
          </li>
          <li>
            <Link className={styles.menuLinks} to="/aboutUs">
              SOBRE NOSOTROS
            </Link>
          </li>
          <li>
            <Link className={styles.menuLinks} to="/products">
              PRODUCTOS Y SERVICIOS
            </Link>
          </li>
          <li>
            <Link className={styles.menuLinks} to="/quotes">
              SOLICITUD DE COTIZACIÓN
            </Link>
          </li>
          <li>
            <Link className={styles.menuLinks} to="/gallery">
              GALERÍA
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
