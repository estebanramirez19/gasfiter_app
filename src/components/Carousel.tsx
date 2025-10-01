import { Carousel as RBCarousel, Image } from 'react-bootstrap'; // Renombramos para evitar conflicto con el nombre de la función

// Importa las imágenes directamente
// Asegúrate de que estas rutas sean correctas y que las imágenes existan en estas ubicaciones.
import panoramica_1 from '../images/panoramicas/panoramica_1.jpg';
import panoramica_2 from '../images/panoramicas/panoramica_2.jpg';
import panoramica_3 from '../images/panoramicas/panoramica_3.jpg';

function Carousel() {
  return (
    // Utilizamos el componente Carousel de React Bootstrap
    // autoPlay y interval son para el deslizamiento automático
    // El atributo 'id' ya no es necesario para los controles internos del componente de React Bootstrap
    <RBCarousel indicators={false} controls={true} interval={5000} className="my-3">
      <RBCarousel.Item>
        <Image src={panoramica_1} className="d-block w-100" alt="imagen baño terminado" />
      </RBCarousel.Item>
      <RBCarousel.Item>
        <Image src={panoramica_2} className="d-block w-100" alt="reparacion de un sifon" />
      </RBCarousel.Item>
      <RBCarousel.Item>
        <Image src={panoramica_3} className="d-block w-100" alt="instalacion calefont" />
      </RBCarousel.Item>
    </RBCarousel>
  );
}

export default Carousel;