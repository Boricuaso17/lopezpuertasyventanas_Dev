import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "../Quotes/Quotes.module.css"; // For CSS Modules

const Qoutes = () => {
  return (
    <>
      <Header />
      <div className={styles.middle}>
        <div className={styles.info}>
          <h2 className={styles.title}>Lopez Puertas y Ventanas</h2>

          <hr />

          <h6 className={styles.city}>Rio Grande</h6>
          <p className={styles.line}><h6>Teléfono:</h6>&nbsp; (787) 888-3302 &nbsp; / &nbsp; (787) 594-8194</p>
          <p className={styles.line}><h6>Dirección:</h6>&nbsp; 94HM+36X, Carretera 3, Río Grande, 00745</p>

          <hr />

          <form method="post" action="/send_email.php" className={styles.form}>
            <label for="name">Nombre:</label>
            <input
              className={styles.quotesInput}
              type="text"
              name="name"
              id="name"
              required
            />

            <label for="lname">Apellidos:</label>
            <input
              className={styles.quotesInput}
              type="text"
              name="lname"
              id="lname"
              required
            />

            <label for="phone">Teléfono:</label>
            <input
              className={styles.quotesInput}
              type="tel"
              name="phone"
              id="phone"
              required
            />

            <label for="email">Email:</label>
            <input
              className={styles.quotesInput}
              type="email"
              name="email"
              id="email"
              required
            />

            <label for="message">Mensaje / Comentarios:</label>
            <textarea
              className={styles.quotesTextarea}
              name="message"
              id="message"
            ></textarea>

            <button className={styles.btn} type="submit">Someter</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Qoutes;
