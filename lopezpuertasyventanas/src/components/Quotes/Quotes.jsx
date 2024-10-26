import React from "react";
import { Header }  from '../Header/Header'
import { Footer } from "../Footer/Footer";
import styles from '../Quotes/Quotes.module.css'; // For CSS Modules

const Qoutes = () => {

    return (
        <>
        <Header />
<h2>Lopez Puertas y Ventanas</h2>
<hr />
        <p >Rio Grande</p>
        <p >Teléfono</p>
        <p >Dirección</p>

        <hr />
        <div className={styles.middle} >
            
            <form method="post" action="./send_email.php" className={styles.form}>
                <label for="name">Nombre:</label>
                <input className={styles.quotesInput} type="text" name="name" id="name" required />

                <label for="lname">Apellidos:</label>
                <input className={styles.quotesInput} type="text" name="lname" id="lname" required />

                <label for="phone">Teléfono:</label>
                <input className={styles.quotesInput} type="tel" name="phone" id="phone" required />

                <label for="email">Email:</label>
                <input className={styles.quotesInput} type="email" name="email" id="email" required />

                <label for="message">Mensaje / Comentarios:</label>
                <textarea className={styles.quotesTextarea} name="message" id="message"></textarea>

                <button type="submit" >Someter</button>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default Qoutes