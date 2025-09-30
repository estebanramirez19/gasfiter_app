import React from 'react';
import { Container } from 'react-bootstrap';

function AboutUsPage() {
  return (
    <Container as="main" className="my-5">
      <section className="mb-5">
        <h2>¿Quiénes Somos?</h2>
        <p>Green Shop es una empresa chilena dedicada a la venta de plantas, maceteros y artículos de jardinería. Nos enfocamos en acercar la naturaleza a los hogares, ofreciendo una amplia variedad de productos de alta calidad, sostenibles y accesibles para todos.</p>
      </section>

      <section className="mb-5">
        <h2>Nuestra Historia</h2>
        <p>Green Shop nació en 2020 como un emprendimiento familiar en Santiago, con la idea de transformar los espacios urbanos en rincones más verdes. Comenzamos vendiendo suculentas en ferias locales y hoy contamos con una tienda en línea consolidada y una comunidad de más de 15.000 clientes en todo Chile.</p>
      </section>

      <section className="mb-5">
        <h2>Equipo</h2>
        <p>Detrás de Green Shop hay un equipo apasionado por las plantas y el medio ambiente:</p>
        <ul>
          <li><strong>Carla Rojas</strong> – Fundadora y Directora General</li>
          <li><strong>Ignacio Muñoz</strong> – Gerente de Logística</li>
          <li><strong>Antonia Herrera</strong> – Encargada de Atención al Cliente</li>
          <li><strong>Tomás Valdivia</strong> – Diseñador de Producto y Fotógrafo</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>Misión</h2>
        <p>Fomentar la conexión entre las personas y la naturaleza a través de la venta de plantas y productos sustentables que mejoren el bienestar y la calidad de vida en cada hogar.</p>
      </section>

      <section className="mb-5">
        <h2>Visión</h2>
        <p>Ser la tienda líder en jardinería urbana en Latinoamérica, destacando por nuestra innovación, compromiso ambiental y cercanía con nuestros clientes.</p>
      </section>
    </Container>
  );
}

export default AboutUsPage;