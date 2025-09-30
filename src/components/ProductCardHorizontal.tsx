import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Asegúrate de importar estos componentes


export interface ProductCardHorizontalProps {
  title: string;
  imageUrl: string;
  price: string; 
  productLink: string; 
}

// Define el componente con sus props tipadas
function ProductCardHorizontal({ title, imageUrl, price, productLink }: ProductCardHorizontalProps) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title} 
        style={{ objectFit: 'cover', height: '180px' }} 
      />


      <Card.Body className="d-flex flex-column">
        <Card.Title className="h5 mb-2">{title}</Card.Title>
        <Card.Text className="fs-5 fw-bold mb-3">${price}.-</Card.Text>
        <Button
          variant="success" // 
          href={productLink} //
          className="mt-auto w-100"
        >
          Ver Producto
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCardHorizontal;