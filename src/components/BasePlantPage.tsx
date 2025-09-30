import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

// Importa la imagen del producto.
// Asegúrate de que esta ruta sea correcta y que la imagen exista en esta ubicación.
import FicusElastica from '../images/in/ficus_elastica.jpg';

function BasePlantPage() {
  return (
    <Container as="main" className="my-5">
      <Row className="align-items-start">
        {/* Columna de la imagen del producto */}
        <Col md={6} className="mb-4">
          <Image
            src={FicusElastica}
            fluid // Hace que la imagen sea responsiva (max-width: 100%; height: auto;)
            className="d-block w-100" // Clases adicionales de Bootstrap para display y ancho
            alt="Ficus Elástica" // Texto alternativo importante para accesibilidad
          />
        </Col>

        {/* Columna de la información del producto */}
        <Col md={6}>
          <h2 className="nombre">Ficus Elástica</h2>
          <p className="text-muted">Código: PLT-1025</p>
          <h3 className="text-success">$14.990</h3>
          <p><strong>Disponibilidad:</strong> En stock</p>
          <p><strong>Stock:</strong> 12 unidades</p>
          <p className="lead">
            Ideal para interiores, la Ficus Elástica es una planta resistente, de fácil mantenimiento
            y de gran belleza ornamental gracias a sus hojas brillantes y gruesas.
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
            <li>Altura: 60-80 cm</li>
            <li>Tipo de luz: Indirecta brillante</li>
            <li>Riego: Moderado (1 vez por semana)</li>
            <li>Incluye macetero decorativo</li>
            <li>Garantía de planta sana (7 días)</li>
          </ul>
        </Col>
      </Row>

      {/* Sección de descripción detallada, historia y procedencia */}
      <section className="mt-5">
        <h4>Descripción Detallada</h4>
        <p>
          La Ficus Elástica, también conocida como “árbol de caucho”, es una planta originaria del sur de Asia
          y muy apreciada por su resistencia y belleza. Con hojas verdes oscuras y gruesas, esta planta no
          solo aporta elegancia a cualquier rincón del hogar u oficina, sino que también ayuda a purificar el aire.
        </p>

        <h4>Historia del Producto</h4>
        <p>
          Cultivada desde tiempos antiguos por sus propiedades decorativas, la Ficus Elástica ha sido utilizada
          en palacios, hospitales y hogares modernos. En Green Shop seleccionamos ejemplares cultivados de
          manera sostenible en viveros nacionales y la preparamos cuidadosamente para su entrega a domicilio.
        </p>

        <h4>Procedencia</h4>
        <p>
          Esta planta ha sido cultivada en el vivero de Colina, Región Metropolitana de Chile, bajo prácticas
          amigables con el medioambiente y con monitoreo fitosanitario constante para asegurar su calidad.
        </p>
      </section>
    </Container>
  );
}

export default BasePlantPage;