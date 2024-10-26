import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./AboutUs.module.css"; // For CSS Modules
import photo from "../../static/images/aboutUs.jpg";

const AboutUs = () => {
  return (
    <>
      <Header />
      <div className={styles.middle}>
        <div className={styles.middleInfo}>
          <h2 className={styles.middleHeader}> Quienes Somos</h2>
          <p className={styles.middleParagraph}>
            Lopez Puertas y Ventanas es una compañía puertorriqueña comprometida
            con nuestros clientes, ofreciendo productos de calidad y un servicio
            de excelencia. Contamos con el mejor equipo de trabajo para
            brindarle un servicio de primera, utilizando materiales de alta
            resistencia en nuestras puertas y ventanas. <div className={styles.phrase}>¡Llevamos más de 28 años
            establecidos, satisfaciendo a nuestros clientes y creando los
            mejores productos del mercado!</div> Nuestros productos de puertas y
            ventanas no solo mejoran la estética de su hogar, sino que también
            brindan la eficiencia y seguridad que necesita. Lo que imagines para
            tu hogar, nosotros lo hacemos realidad. Déjanos ayudarte a renovar
            tu casa y dar vida a tus ideas. ¡Ven y visítanos en nuestro showroom
            en Río Grande, al lado de la tienda Lanco!
          </p>
        </div>
        <img src={photo} className={styles.aboutUsPhoto} />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
