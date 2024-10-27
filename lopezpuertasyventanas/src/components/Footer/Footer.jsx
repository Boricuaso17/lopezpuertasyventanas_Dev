import React from "react";
import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <div className={styles.contact}>
                    <p className={`open-sans ${styles.telephone}`}>Rio Grande</p>
                    (787) 888-3302 &nbsp; / &nbsp; (787) 594-8194
                </div>
                <hr />
                <div><p>94HM+36X, Carretera 3, Río Grande, 00745</p></div>
                {/* <div className={styles.socialDiv}> 
                    <a href="https://www.facebook.com/IMLDISTRIBUTOR">
                    <i className={`bi bi-facebook ${styles.social}`}></i>

                    </a>
                </div> */}
            </div>

            <hr />

            <div >

            </div>
        
        </div>
    );
};
