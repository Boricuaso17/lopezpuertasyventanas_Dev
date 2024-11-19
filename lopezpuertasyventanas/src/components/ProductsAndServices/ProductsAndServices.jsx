import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./ProductsAndServices.module.css"; // For CSS Modules

const ProductsAndServices = () => {
  return (
    <>
      <Header />
      
      <h2 className={styles.header}>Productos y Servicios</h2>

      <div className={styles.middle}>

        <div className={styles.items}>
          <ul className={styles.description}>
            <h3 className={styles.title}>Ventanas</h3>
            <li>Seguridad</li>
            <li>
              Lama 3 cristal o aluminio (cristal varios colores a escoger)
            </li>
            <li>
              Lama 4 cristal o aluminio (cristal varios colores a escoger)
            </li>
            <li>
              Lama 6 cristal o aluminio (cristal varios colores a escoger)
            </li>
            <li>Ventanas Casement</li>
            <li>Ventanas Proyected</li>
          </ul>
        </div >

        <div className={styles.items}>
          <ul className={styles.description}>
            <h3 className={styles.title}>Puertas</h3>
            <li>Puertas Aluminio Heavy</li>
            <li>Puertas Aluminio Full Glass</li>
            <li>Puertas Folding</li>
            <li>Puertas Pivot</li>
            <li>Puertas con Diseños a Escoger</li>
            <li>Tipos de colores a Escoger</li>
          </ul>
        </div>

        <div className={styles.items}>
          <ul className={styles.description}>
            <h3 className={styles.title}>Puertas de Closet</h3>
            <li>Espejo</li>
            <li>Cristal Op' White</li>
            <li>Combinaciones (Espejo y Op' White)</li>
          </ul>
        </div>

        <div className={styles.items}>
          <ul className={styles.description}>
            <h3 className={styles.title}>Puertas de Garaje</h3>
            <li>Puertas de Garaje en cristales</li>
            <li>Puertas de Garaje con perforados o combinación de ambos</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsAndServices;
