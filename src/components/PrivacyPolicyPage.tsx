import React from 'react';
import { Container } from 'react-bootstrap';

function PrivacyPolicyPage() {
  return (
    <Container as="main" className="my-5">
      <h1 className="mb-4 text-center">Política de Privacidad de Green Shop</h1>
      <p className="lead text-center">Última actualización: 24 de julio de 2025</p>

      <section className="mb-5">
        <h2>1. Introducción</h2>
        <p>En **Green Shop**, valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta Política de Privacidad describe cómo recopilamos, usamos y compartimos tu información cuando visitas o realizas una compra en nuestro sitio web www.greenshop.cl.</p>
      </section>

      <section className="mb-5">
        <h2>2. Información que Recopilamos</h2>
        <p>Recopilamos varios tipos de información para proporcionarte nuestros servicios y mejorar tu experiencia:</p>
        <ul>
          <li><strong>Información de Pedido:</strong> Cuando realizas una compra, recopilamos tu nombre, dirección de facturación y envío, dirección de correo electrónico, número de teléfono y detalles de los productos adquiridos.</li>
          <li><strong>Información de Contacto:</strong> Si te comunicas con nosotros (por ejemplo, a través de nuestro formulario de contacto o correo electrónico), podemos recopilar tu nombre y dirección de correo electrónico, así como el contenido de tu mensaje.</li>
          <li><strong>Datos de Navegación:</strong> Recopilamos automáticamente cierta información sobre tu dispositivo, incluyendo información sobre tu navegador web, dirección IP, zona horaria y algunas de las cookies instaladas en tu dispositivo. Además, a medida que navegas por el sitio, recopilamos información sobre las páginas web o productos individuales que visualizas, qué sitios web o términos de búsqueda te remitieron al sitio, e información sobre cómo interactúas con el sitio.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>3. ¿Cómo Utilizamos tu Información?</h2>
        <p>Utilizamos la información que recopilamos para:</p>
        <ul>
          <li>Procesar y gestionar tus pedidos, incluyendo pagos y envíos.</li>
          <li>Comunicarnos contigo sobre tu pedido, productos y ofertas especiales.</li>
          <li>Mejorar y personalizar tu experiencia de compra en nuestro sitio.</li>
          <li>Responder a tus consultas y brindar soporte al cliente.</li>
          <li>Prevenir fraudes y garantizar la seguridad de nuestras transacciones.</li>
          <li>Realizar análisis de datos para entender mejor a nuestros clientes y mejorar nuestros productos y servicios.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>4. Compartir tu Información</h2>
        <p>No vendemos ni alquilamos tu información personal a terceros. Solo compartimos tu información con:</p>
        <ul>
          <li><strong>Proveedores de Servicios:</strong> Empresas de transporte para la entrega de tus pedidos, procesadores de pago para transacciones seguras y plataformas de marketing para comunicaciones relevantes. Estas empresas solo tienen acceso a la información necesaria para realizar sus funciones y están obligadas a proteger tu información.</li>
          <li><strong>Cumplimiento Legal:</strong> Podemos divulgar tu información si así lo exige la ley o en respuesta a solicitudes legales válidas (por ejemplo, una orden judicial).</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2>5. Tus Derechos</h2>
        <p>Tienes derecho a acceder a la información personal que tenemos sobre ti y a solicitar que tu información personal sea corregida, actualizada o eliminada. Si deseas ejercer este derecho, por favor, contáctanos a través de la información de contacto a continuación.</p>
      </section>

      <section className="mb-5">
        <h2>6. Cookies</h2>
        <p>Utilizamos cookies y tecnologías similares para recopilar información sobre tu navegación y mejorar tu experiencia. Puedes configurar tu navegador para que rechace todas o algunas cookies, o para que te avise cuando se envíen cookies. Sin embargo, si deshabilitas las cookies, algunas partes de nuestro sitio pueden no funcionar correctamente.</p>
      </section>

      <section className="mb-5">
        <h2>7. Cambios en Esta Política de Privacidad</h2>
        <p>Podemos actualizar esta política de privacidad ocasionalmente para reflejar, por ejemplo, cambios en nuestras prácticas o por otras razones operativas, legales o reglamentarias. Publicaremos cualquier cambio en esta página y actualizaremos la fecha de "Última actualización".</p>
      </section>

      <section>
        <h2>8. Contáctanos</h2>
        <p>Para obtener más información sobre nuestras prácticas de privacidad, si tienes preguntas o si deseas presentar una queja, por favor contáctanos por correo electrónico a <a href="mailto:privacidad@greenshop.cl">privacidad@greenshop.cl</a> o por correo postal a:</p>
        <address>
          Green Shop <br />
          Av. Concha y Toro 2730 <br />
          Puente Alto, Región Metropolitana <br />
          Chile
        </address>
      </section>
    </Container>
  );
}

export default PrivacyPolicyPage;