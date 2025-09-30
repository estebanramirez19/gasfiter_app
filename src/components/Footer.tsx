import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Importa Link de react-router-dom si estás usando un enrutador para una navegación SPA
// import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="main-footer bg-success text-white mt-5 p-4"> {/* Añadidas clases de Bootstrap para color y padding */}
      <Container> {/* Usamos Container de React Bootstrap para centrar y dar padding */}
        <Row className="footer-content justify-content-center"> {/* justify-content-center para centrar las columnas */}
          {/* Sección Sobre Nosotros */}
          <Col md={4} className="footer-section about mb-4 mb-md-0 text-center text-md-start"> {/* Añadidas clases para responsividad */}
            <h3 className="titulos">Sobre Nosotros</h3>
            <p>Green Shop es una empresa chilena dedicada a la venta de plantas, maceteros y artículos de jardinería. Nos enfocamos en acercar la naturaleza a los hogares, ofreciendo una amplia variedad de productos de alta calidad, sostenibles y accesibles para todos.</p>
            <div className="contact mt-3">
              {/* Asegúrate de que Font Awesome esté configurado en tu proyecto si usas estas clases */}
              <p><i className="fas fa-phone me-2"></i> +56 9 1234 5678</p>
              <p><i className="fas fa-envelope me-2"></i> info@greenshop.cl</p>
            </div>
          </Col>

          {/* Sección Enlaces Rápidos */}
          <Col md={4} className="footer-section links mb-4 mb-md-0 text-center text-md-start"> {/* Añadidas clases para responsividad */}
            <h3 className="titulos">Enlaces Rápidos</h3>
            <ul className="list-unstyled"> {/* list-unstyled quita los estilos de lista por defecto */}
              <li>
                {/* Usar <Link> de react-router-dom si tienes un enrutador SPA, si no, <a> normal */}
                {/* <Link to="/" className="text-white text-decoration-none">Inicio</Link> */}
                <a href="/" className="text-white text-decoration-none">Inicio</a>
              </li>
              <li>
                {/* <Link to="/products" className="text-white text-decoration-none">Productos</Link> */}
                <a href="ficusElastica" className="text-white text-decoration-none">Productos</a>
              </li>
              <li>
                {/* <Link to="/aboutus" className="text-white text-decoration-none">Sobre Nosotros</Link> */}
                <a href="/aboutus" className="text-white text-decoration-none">Sobre Nosotros</a>
              </li>
              <li>
                {/* <Link to="/contactus" className="text-white text-decoration-none">Contacto</Link> */}
                <a href="/contactus" className="text-white text-decoration-none">Contacto</a>
              </li>
              <li>
                {/* <Link to="/privacy" className="text-white text-decoration-none">Política de Privacidad</Link> */}
                <a href="/privacity" className="text-white text-decoration-none">Política de Privacidad</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Footer Bottom */}
      <div className="footer-bottom text-center mt-4 pt-3 border-top border-secondary"> {/* Añadidas clases para estilo */}
        &copy; 2020 Green Shop Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;