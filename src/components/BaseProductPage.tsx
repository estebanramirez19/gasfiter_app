
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Importa la imagen del producto.
// Asegúrate de que esta ruta sea correcta y que la imagen exista en esta ubicación.
import instalacionCalefont from '../images/instalaciones/calefont.jpg';

function BasePlantPage() {
  return (
    <Container as="main" className="my-5">
      <Row className="align-items-start">
        {/* Columna de la imagen del producto */}
        <Col md={6} className="mb-4">
          <Image
            src={instalacionCalefont}
            fluid // Hace que la imagen sea responsiva (max-width: 100%; height: auto;)
            className="d-block w-100" // Clases adicionales de Bootstrap para display y ancho
            alt="instalacion de calefont" // Texto alternativo importante para accesibilidad
          />
        </Col>

        {/* Columna de la información del producto */}
        <Col md={6}>
          <h2 className="nombre">Instalacion Basica De Calefont</h2>
          <p className="text-muted">Código: INST-001</p>
          <h3 className="text-success">$30.000</h3>
          <p><strong>Disponibilidad:</strong>Por Agenda</p>
          <p><strong>Stock:</strong> </p>
          <p className="lead">
            Servicio de instalación profesional de calefont a gas, garantizando seguridad y eficiencia.
          </p>

          {/* Botones de acción */}
          <Button variant="success" size="lg" className="mt-3 me-2">
            Añadir al carrito
          </Button>
          <Button variant="success" size="lg" className="mt-3">
            Comprar Ahora
          </Button>

          {/* Lista de características */}
          <ul className="mt-4">
            <li>Instalacion de cualquier tipo de calefont</li>
            <li>Instalacion nivelada</li>
            <li>con soldaduras de plata en la instalacion de gas</li>
          </ul>
        </Col>
      </Row>

      {/* Sección de descripción detallada, historia y procedencia */}
      <section className="mt-5">
        <h4>Descripción Detallada</h4>
        <p>
          Ofrecemos un servicio completo de instalación de calefont, asegurando que cada unidad esté correctamente instalada para un rendimiento óptimo y seguro. Nos encargamos de todo el proceso, desde la evaluación inicial hasta la puesta en marcha del sistema.
        </p>

      </section>
    </Container>
  );
}

export default BasePlantPage;