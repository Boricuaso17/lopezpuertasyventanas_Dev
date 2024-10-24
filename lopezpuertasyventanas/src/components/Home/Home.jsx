import React from "react";
import { Header }  from '../Header/Header';
import { Footer } from "../Footer/Footer";
import styles from './Home.module.css'; // For CSS Modules
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import homePhoto1 from '../../static/images/homePhoto1.jpg'; // Importing local images
import { Link } from 'react-router-dom'; // Use React Router's Link component

 const Home = () => {

    const carouselPhotos = (X) => {
        console.log("clicked!")
    }

    return (
        <>
            <Header />
            <div className={styles.middle}>
                <div id="carouselExampleFade" className={`carousel slide carousel-fade ${styles.homeCarousel}`}>
                    <div className={`carousel-inner ${styles.homeCarouselInner}`}>
                        <div className={`carousel-item active ${styles.homeCarouselItem}`}> 
                            <img src={homePhoto1} className={styles.homeSlidesShow} alt="..." />
                        </div>
                    </div>
                    <button 
                        className="carousel-control-prev" 
                        type="button" 
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="prev" 
                        onClick={() => { carouselPhotos('prev') }}>
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button 
                        className="carousel-control-next" 
                        type="button" 
                        data-bs-target="#carouselExampleFade"
                        data-bs-slide="next" 
                        onClick={() => { carouselPhotos('next') }}>
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className={styles.middle2}>
                <h2>INSTALACIONES A TODA LA ISLA</h2>
                <ul>
                    <li><h3>Puertas de seguridad en aluminio</h3></li>
                    <li><h3>Ventanas de seguridad en aluminio</h3></li>
                    <li><h3>Puertas de Garaje</h3></li>
                    <li><h3>Puertas de Closet</h3></li>
                    <li><h3>Screens</h3></li>
                    <li><h3>Puertas para Terrazas</h3></li>
                </ul>

                <Link to="" >Ver Productos y Servicios</Link>
            </div>

            {/* Uncomment Footer when needed */}
            <Footer />
        </>
    )
};

export default Home;