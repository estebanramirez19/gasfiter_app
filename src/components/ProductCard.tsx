
import { Card, Button, Image } from 'react-bootstrap'; 


interface ProductCardProps {
  title: string;
  imageUrl: string;
  price: string; // 
  altText: string;

}

function ProductCard({ title, imageUrl, price, altText /*, buyLink, cartLink */ }: ProductCardProps) {
  return (
   
    <Card className="h-100 shadow-sm"> 
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={altText} 
        className="img-fluid" // img-fluid de Bootstrap hace la imagen responsive
        style={{ objectFit: 'cover', height: '200px' }} // Estilo para asegurar un tamaño consistente de la imagen
      />

      {/* Cuerpo de la tarjeta */}
      <Card.Body className="d-flex flex-column"> {/* d-flex flex-column para organizar el contenido verticalmente */}
        {/* Título del producto */}
        <Card.Title className="h5 mb-2">{title}</Card.Title> {/* h5 para un tamaño de título consistente, mb-2 para margen inferior */}

        {/* Precio */}
        <Card.Text className="fs-4 fw-bold mb-1">${price}.-</Card.Text> {/* fs-4 para tamaño de fuente grande, fw-bold para negrita, mb-1 para margen */}
        
        {/* Información adicional */}
        <Card.Text className="small text-muted mb-1">En 6 cuotas sin interés</Card.Text> {/* small y text-muted para texto secundario */}
        <Card.Text className="small text-muted mb-3">Envío Rápido</Card.Text> {/* mb-3 para más margen antes de los botones */}

        {/* Botones */}
        {/* mt-auto empuja los botones al final si el contenido de arriba es más corto */}
        <div className="d-grid gap-2 mt-auto"> {/* d-grid y gap-2 para botones apilados con espacio */}
          <Button 
            variant="success" // Color verde de Bootstrap
            // Si usas React Router: as={Link} to={buyLink || '#'}
            href="#" // Si no usas React Router
            className="w-100" // w-100 para que el botón ocupe todo el ancho disponible
          >
            Comprar Ahora
          </Button>
          <Button 
            variant="outline-success" // Borde verde, fondo transparente
            // Si usas React Router: as={Link} to={cartLink || '#'}
            href="#" // Si no usas React Router
            className="w-100" 
          >
            Añadir al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;