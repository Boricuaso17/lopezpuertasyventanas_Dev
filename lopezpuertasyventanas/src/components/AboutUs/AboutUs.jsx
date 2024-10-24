import React from "react";
import { Header }  from '../Header/Header'
import { Footer } from "../Footer/Footer";
import styles from '../../static/styles.module.css'; // For CSS Modules


const AboutUs = () => {

    return (
        <>
        <Header />
    <div >
        <h2> Quienes Somos</h2>
            <p>
                
                Lopez Puertas y Ventanas es una compañía puertorriqueña comprometida con nuestros clientes,
                ofreciendo productos de calidad y un servicio de excelencia.
                Contamos con el mejor equipo de trabajo para brindarle un servicio de primera, utilizando materiales 
                de alta resistencia en nuestras puertas y ventanas.
                ¡Llevamos más de 28 años establecidos, satisfaciendo a nuestros clientes y creando los mejores productos del mercado!
                Nuestros productos de puertas y ventanas no solo mejoran la estética de su hogar, sino que también brindan la eficiencia
                y seguridad que necesita.
                Lo que imagines para tu hogar, nosotros lo hacemos realidad. Déjanos ayudarte a renovar tu casa y dar vida a tus ideas.
                
                ¡Ven y visítanos en nuestro showroom en Río Grande, al lado de la tienda Lanco!</p>
        {/* <!-- <img src="./images/homePhoto1.jpg" className="cover" /> --> */}
    </div>
    <Footer />
    </>
    )
}

export default AboutUs