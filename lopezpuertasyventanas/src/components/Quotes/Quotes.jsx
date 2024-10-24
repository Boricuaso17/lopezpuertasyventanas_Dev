import React from "react";
import { Header }  from '../Header/Header'
import { Footer } from "../Footer/Footer";
import styles from '../../static/styles.module.css'; // For CSS Modules

const Qoutes = () => {

    return (
        <>
        <Header />
        <div >
            <form method="post" action="./send_email.php">
                <label for="name">Nombre:</label>
                <input className={styles.quotesInput} type="text" name="name" id="name" required />

                <label for="lname">Apellidos:</label>
                <input className={styles.quotesInput} type="text" name="lname" id="lname" required />

                <label for="phone">Teléfono:</label>
                <input className={styles.quotesInput} type="tel" name="phone" id="phone" required />

                <label for="email">Email:</label>
                <input className={styles.quotesInput} type="email" name="email" id="email" required />

                <label for="message">Mensaje / Comentarios:</label>
                <textarea className={styles.quotesInput} name="message" id="message" required></textarea>

                <button type="submit">Someter</button>
            </form>
        </div>
        <Footer />
        </>
    )
}

export default Qoutes