import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function ContactPage() {
  // Manejador de envío del formulario (opcional, para React)
  // Añadimos el tipo 'React.FormEvent<HTMLFormElement>' al evento para TypeScript
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario HTML

    // Aquí puedes añadir la lógica para enviar los datos del formulario,
    // por ejemplo, a una API.
    // Para acceder a los valores de los campos, necesitarías usar `useState`
    // para controlar cada input, como hicimos en FormPage.tsx.
    console.log('Formulario de contacto enviado!');
    alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');

    // Opcional: Para resetear el formulario si estuviera controlado por estado.
    // Si no usas estado para los inputs, esta línea no hace nada.
    // event.currentTarget.reset();
  };

  return (
    <Container as="main" className="my-5">
      <Row>
        {/* Formulario de contacto */}
        <Col md={6}>
          <h2>Contáctanos</h2>
          <Form onSubmit={handleSubmit}> {/* Asocia el manejador de envío */}
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control type="text" placeholder="Tu nombre completo" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control type="email" placeholder="correo@ejemplo.com" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAsunto">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text" placeholder="Motivo del contacto" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMensaje">
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje aquí..." required />
            </Form.Group>

            <Button variant="success" type="submit">
              Enviar mensaje
            </Button>
          </Form>
        </Col>

        {/* Mapa de ubicación */}
        <Col md={6}>
          <h2>Ubicación</h2>
          <p>Av. Concha y Toro 2730, 8150215 Puente Alto, Región Metropolitana</p>
          <iframe
            // URL corregida para incrustar un mapa de Google Maps.
            // Genera la URL exacta desde Google Maps Embed API si necesitas personalización.
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.691764619918!2d-70.57397752494879!3d-33.51139459341495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d04a62e0b5f1%3A0x6b4f7a26f34e6d4c!2sAv.%20Concha%20y%20Toro%202730%2C%20Puente%20Alto%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses-419!2scl!4v1721868478499!5m2!1ses-419!2scl"
            width="100%"
            height="400"
            style={{ border: 0 }} // Estilos en React se escriben como objetos JS
            allowFullScreen={true} // Cambiado a booleano, aunque string "true" también funciona
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Green Shop en Puente Alto" // Título para accesibilidad
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;