import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styles from "./Footer.module.css";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../../static/images/logo.jpeg"; // Import local image

export const Footer = () => {
  const whatsappNum = "17878883302";

  return (
    <div className={styles.footer}>
      {/* Column 1 */}
      <div className={`${styles.column} ${styles.right}`}>
        <LinkContainer to="/">
          <Navbar.Brand className={styles.navBrand}>
            <img
              src={logo}
              alt="logo"
              draggable="false"
              className={`${styles.logoLink} d-inline-block align-top`}
            />
          </Navbar.Brand>
        </LinkContainer>
      </div>

      {/* Column 2 */}
      <div className={`${styles.column} ${styles.left}`}>
        <div>
          <p>Lunes a Viernes: 8:00 am - 5:00 pm</p>
          <p>Sábado: 8:00 am - 3:00 pm</p>
          <p>(787) 888-3302 &nbsp; / &nbsp; (787) 594-8194</p>

          {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNum}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <i className="bi bi-whatsapp"></i> &nbsp; Contactanos en WhatsApp
            </a>
        </div>

        <hr style={{ background: "white", width: "50%" }} />

        <div>
          <p className={`open-sans ${styles.telephone}`}>Rio Grande</p>
          <p>94HM+36X, Carretera 3, Río Grande, 00745</p>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={styles.brand}>
                <div className={styles.contact}>
                    <p className={`open-sans ${styles.telephone}`}>Rio Grande</p>
                    (787) 888-3302 &nbsp; / &nbsp; (787) 594-8194
                </div>
                
                <hr />

                <div><p>94HM+36X, Carretera 3, Río Grande, 00745</p></div>
            </div> */
}

{
  /* <div className={styles.socialDiv}> 
                    <a href="https://www.facebook.com/IMLDISTRIBUTOR">
                    <i className={`bi bi-facebook ${styles.social}`}></i>

                    </a>
                </div> */
}
