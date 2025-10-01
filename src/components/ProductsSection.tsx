

// Importa los componentes de React Bootstrap que vamos a usar
import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductCard from './ProductCard'; // Asegúrate de que esta ruta sea correcta

// Importa todas las imágenes necesarias aquí para cada categoría
// Asegúrate de que las rutas relativas sean correctas para tu proyecto
// Plantas de Exterior
import cañeriaCobre from '../images/cañerias/cañeria_cobre.jpg';
import cañeriaPPR from '../images/cañerias/cañeria_ppr.jpg';
import cañeriaPvcH from '../images/cañerias/cañeria_pvch.png';
import tuberiaPvcSan from '../images/cañerias/tuberia_pvc_sanitario.png';


// --- Definición de las Props con TypeScript ---
interface ProductsSectionProps {
  title: string;
  category: string;
  id: string; // Para el ancla de la sección
}

// Datos de productos mockeados (simulando una base de datos o API)
// Añadimos un 'id' único a cada producto, que es crucial para la 'key' de React
const allProducts = [
  {
    id: 'cañeriaCobre', // Añadido un ID único
    title: 'Metro de cañería de cobre',
    imageUrl: cañeriaCobre,
    price: '5.000',
    altText: 'cobro metro de cañería',
    category: 'instalaciones'
  },
  {
    id: 'cañeriaPPR', // Añadido un ID único
    title: 'Metro de cañería de PPR',
    imageUrl: cañeriaPPR,
    price: '3.000',
    altText: 'cobro metro de cañería',
    category: 'instalaciones'
  },
  {
    id: 'cañeriaPvcH', // Añadido un ID único
    title: 'Metro de cañería de PVCH',
    imageUrl: cañeriaPvcH,
    price: '1.000',
    altText: 'cobro metro de cañería',
    category: 'instalaciones'
  },
  {
    id: 'tuberiaPvcSan', // Añadido un ID único
    title: 'Metro de cañería de pvc sanitario',
    imageUrl: tuberiaPvcSan,
    price: '6.000',
    altText: 'cobro metro de cañería',
    category: 'instalaciones'
  },

];


function ProductsSection({ title, category, id }: ProductsSectionProps) {
  // Filtra los productos según la categoría recibida
  const filteredProducts = allProducts.filter(product => product.category === category);

  return (
    // Usa Container para el ancho del contenido y un margen general
    <Container as="section" id={id} className="my-5">
      {/* Utiliza Card para la "main-card category-card" */}
      <Card className="shadow-sm"> {/* Agrega una sombra ligera */}
        {/* El "card-header" se transforma en Card.Header */}
        <Card.Header className="bg-success text-white py-3"> {/* Fondo verde y texto blanco */}
          <h2 className="mb-0 text-center">{title}</h2> {/* mb-0 para quitar margen inferior del h2 */}
        </Card.Header>

        {/* El "card-body product-grid" se transforma en Card.Body con un Row y Cols */}
        <Card.Body>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4 justify-content-center"> {/* g-4 para espacio entre columnas */}
            {filteredProducts.map((product) => (
              // Cada ProductCard estará dentro de una columna (Col)
              // Las props xs, sm, md, lg, xl controlan cuántas tarjetas por fila
              // en diferentes tamaños de pantalla (1, 2, 3, 4, 5 por fila respectivamente).
              // 'd-flex' y 'align-items-stretch' para asegurar que las tarjetas ocupen toda la altura disponible en la columna.
              <Col key={product.id} className="d-flex align-items-stretch">
                <ProductCard
                  title={product.title}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  altText={product.altText}
                />
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ProductsSection;