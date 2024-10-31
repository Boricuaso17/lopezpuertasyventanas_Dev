import { useState, useEffect } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [prevImageIndex, setPrevImageIndex] = useState(null);

  const carouselPhotos = (direction) => {
    setPrevImageIndex(currentImageIndex);

    if (direction === "+") {
      setCurrentImageIndex((currentImageIndex % 6) + 1);
    } else if (direction === "-") {
      setCurrentImageIndex(((currentImageIndex - 2 + 6) % 6) + 1);
    }
  };

  useEffect(() => {
    if (prevImageIndex !== null) {
      const timer = setTimeout(() => {
        setPrevImageIndex(null);
      }, 1000); // Match this duration with your CSS transition duration

      return () => clearTimeout(timer);
    }
  }, [currentImageIndex]);

  return (
    <>
      <Header />
      <div className={styles.middle}>
        <div
          id="carouselExampleFade"
          className={`carousel slide carousel-fade ${styles.homeCarousel}`}
        >
          <div className={`carousel-inner ${styles.homeCarouselInner}`}>
            <div className={`carousel-item active ${styles.homeCarouselItem}`}>
              {prevImageIndex && (
                <img
                  src={`${process.env.PUBLIC_URL}/images/homePage/homePhoto${prevImageIndex}.jpg`}
                  className={`${styles.homeSlidesShow} ${styles.fadeOut}`}
                  alt="Previous Slide"
                />
              )}
              <img
                src={`${process.env.PUBLIC_URL}/images/homePage/homePhoto${currentImageIndex}.jpg`}
                className={`${styles.homeSlidesShow} ${styles.fadeIn}`}
                alt="Current Slide"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            onClick={() => {
              carouselPhotos("-");
            }}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={() => {
              carouselPhotos("+");
            }}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className={styles.middle3}>
        <div className={styles.items}>
          <div className={styles.casa}></div>
          <span>Ventanas</span>
        </div>
        <div className={styles.items}>
          <div className={styles.casa}></div>
          <span>Puertas</span>
        </div>
        <div className={styles.items}>
          <div className={styles.casa}></div>
          <span>Puertas de Closet</span>
        </div>
        <div className={styles.items}>
          <div className={styles.casa}></div>
          <span>Puertas de Garaje</span>
        </div>
      </div>

      {/* Rest of your component remains the same */}
      <div className={styles.middle2}>
        <div className={styles.services}>
          <h2 className={styles.servicesTitle}>INSTALACIONES A TODA LA ISLA:</h2>
          <ul>
            <li>
              <h5>Puertas de seguridad en aluminio</h5>
            </li>
            <li>
              <h5>Ventanas de seguridad en aluminio</h5>
            </li>
            <li>
              <h5>Puertas de Garaje</h5>
            </li>
            <li>
              <h5>Puertas de Closet</h5>
            </li>
            <li>
              <h5>Screens</h5>
            </li>
            <li>
              <h5>Puertas para Terrazas</h5>
            </li>
          </ul>

          <Link to="products" className={styles.productsLink}>
            Ver Productos y Servicios
          </Link>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps?q=18.377722,-65.865833&z=15&output=embed"
            style={{ border: 0 }} // Corrected inline style
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
