import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Gallery.module.css"; // For CSS Modules
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import { useParams } from "react-router-dom";

const Gallery = () => {
  const param = useParams();
  const type = param.type;
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const carouselPhotos = (sign, type) => {

    if (type === "puerta" && sign === "+") {
      setCurrentImageIndex(currentImageIndex + 1);

    } else if (type === "puerta" && sign === "-") {
      setCurrentImageIndex(currentImageIndex - 1);

    } else if (type === "ventana" && sign === "+") {
      setCurrentImageIndex(currentImageIndex + 1);

    } else if (type === "ventana" && sign === "-") {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };
  
  if (currentImageIndex > 7 && type === "puerta"){
    setCurrentImageIndex(1)
  }
  else if (currentImageIndex > 6 && type === "ventana"){
    setCurrentImageIndex(1)
  }

  return (
    <>
      <Header />

      <div className={styles.middle}>
        <div
          id="carouselExampleFade"
          className={`carousel slide carousel-fade ${styles.carousel}`}
        >
          <div className={`carousel-inner ${styles.carouselInner}`}>
            <div className={`carousel-item active ${styles.carouselItem}`}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${type}s/${type}${currentImageIndex}.jpg`}
                className={styles.slidesShow}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
            onClick={() => {
              carouselPhotos("-", type);
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
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
            onClick={() => {
              carouselPhotos("+", type);
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

      <Footer />
    </>
  );
};

export default Gallery;
