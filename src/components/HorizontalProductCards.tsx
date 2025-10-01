
import { Container, Row, Col } from 'react-bootstrap'; // Importa los componentes de React Bootstrap
import ProductCardHorizontal from './ProductCardHorizontal'; // Asegúrate de que esta ruta sea correcta

// Importa todas las imágenes necesarias aquí
// Asegúrate de que las rutas relativas sean correctas para tu proyecto
import calefont from '../images/instalaciones/calefont.jpg';
import wc from '../images/instalaciones/wc.jpg';
import tina from '../images/instalaciones/tina.jpg';
import termoElectrico from '../images/instalaciones/termo_electrico.jpg';




function HorizontalProductCards() {
  // Datos de los productos para la sección horizontal
  const products = [
    { id: 'calefont', title: 'Instalacion de calefont', imageUrl: calefont, price: '30.000', productLink: '#' },
    { id: 'wc', title: 'Instalacion de WC', imageUrl: wc, price: '30.000', productLink: '#' },
    { id: 'tina', title: 'Instalacion de tina', imageUrl: tina, price: '35.000', productLink: '#' },
    { id: 'termoElectrico', title: 'Instalacion de Termo Electrico', imageUrl: termoElectrico, price: '40.000', productLink: '#' },
  ];

  return (
    // Utilizamos Container para centrar el contenido y Row/Col para el diseño de cuadrícula.
    // La clase 'overflow-auto' y 'flex-nowrap' en la Row son clave para el scroll horizontal.
    <Container fluid className="my-5"> {/* 'fluid' para que ocupe todo el ancho, 'my-5' para margen vertical */}
      <h2 className="mb-4 text-center">Nuestros Productos Destacados</h2> {/* Título opcional para la sección */}
      <Row className="flex-nowrap overflow-auto py-3"> {/* 'flex-nowrap' evita que las columnas se envuelvan, 'overflow-auto' habilita el scroll */}
        {products.map((product) => (
          <Col key={product.id} xs={10} sm={6} md={4} lg={3} xl={2} className="mb-3 d-flex">
            {/* xs, sm, md, lg, xl definen el ancho de cada tarjeta en diferentes tamaños de pantalla.
                'd-flex' para que las tarjetas ocupen el 100% de la altura de la columna. */}
            <ProductCardHorizontal
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.price}
              productLink={product.productLink}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HorizontalProductCards;