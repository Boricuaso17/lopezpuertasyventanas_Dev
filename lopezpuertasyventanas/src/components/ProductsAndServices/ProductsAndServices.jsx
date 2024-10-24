import React from "react";
import { Header }  from '../Header/Header'
import { Footer } from "../Footer/Footer";
import styles from '../../static/styles.module.css'; // For CSS Modules



const ProductsAndServices = () => {
    return (<>
    <Header />
        <div>
            <ul>
                <h2>Ventanas</h2>
                <li>Seguridad</li>
                <li>Lama 3 cristal o aluminio (cristal varios colores a escoger)</li>
                <li>Lama 4  cristal o aluminio (cristal varios colores a escoger)</li>
                <li>Lama 6 cristal o aluminio (cristal varios colores a escoger)</li>
                <li>Ventanas Casement</li>
                <li> Ventanas Proyected</li>
            </ul>
        </div>
        <div>
            <ul>
                <h2>Puertas</h2>
                <li>Puertas Aluminio Heavy</li>
                <li>Puertas Aluminio Full Glass</li>
                <li>Puertas Folding</li>
                <li>Puertas con Diseños a Escoger</li>
                <li>Tipos de colores a Escoger</li>
            </ul>
        </div>
        <div>
            <ul>
                <h2>Puertas de Closet</h2>
                <li>Espejo</li>
                <li>Cristal Op' White</li>
                <li>Combinaciones (Espejo y Op' White)</li>
            </ul>
        </div>
        <div>
            <ul>
                <h2>Puertas de Garaje</h2>
                <li>Puertas de Garaje en cristales</li>
                <li>Puertas de Garaje con perforados o combinación de ambos</li>
            </ul>
        </div>
        <Footer />
    </>
    )
}

export default ProductsAndServices