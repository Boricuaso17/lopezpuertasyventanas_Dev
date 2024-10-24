import React from "react";
import styles from '../../static/styles.module.css'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contact}>
                <div>
                    <p className={`open-sans ${styles.telephone}`}></p>
                    <i className="bi bi-telephone-fill"></i>&nbsp; (787) 888-3302 &nbsp; (787) 594-8194
                </div>
                <div className={styles.socialDiv}> 
                    <a href="https://www.facebook.com/IMLDISTRIBUTOR">
                    <i className={`bi bi-facebook ${styles.social}`}></i>

                    </a>
                </div>
            </div>

            {/* Fixed the style prop as an object */}
            <iframe 
            className={styles.map}
                src="https://www.google.com/maps?q=18.377966,-65.865464&z=15&output=embed"
                style={{ border: 0 }}  // Corrected inline style
                allowFullScreen="" 
                loading="lazy">
            </iframe>
        </div>
    );
};
