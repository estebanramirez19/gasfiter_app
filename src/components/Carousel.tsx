import { Carousel as RBCarousel, Image } from 'react-bootstrap'; // Renombramos para evitar conflicto con el nombre de la función

// Importa las imágenes directamente
// Asegúrate de que estas rutas sean correctas y que las imágenes existan en estas ubicaciones.
import interiorImg from '../images/carrusel1.jpg';
import exteriorPlantsImg from '../images/carrusel2.jpg';
import interiorCarouselImg from '../images/carrusel3.jpg';

function Carousel() {
  return (
    // Utilizamos el componente Carousel de React Bootstrap
    // autoPlay y interval son para el deslizamiento automático
    // El atributo 'id' ya no es necesario para los controles internos del componente de React Bootstrap
    <RBCarousel indicators={false} controls={true} interval={5000} className="my-3">
      <RBCarousel.Item>
        <Image src={interiorImg} className="d-block w-100" alt="Plantas de Interior" />
      </RBCarousel.Item>
      <RBCarousel.Item>
        <Image src={exteriorPlantsImg} className="d-block w-100" alt="Plantas de Exterior" />
      </RBCarousel.Item>
      <RBCarousel.Item>
        <Image src={interiorCarouselImg} className="d-block w-100" alt="Diseño con Rosas" />
      </RBCarousel.Item>
    </RBCarousel>
  );
}

export default Carousel;