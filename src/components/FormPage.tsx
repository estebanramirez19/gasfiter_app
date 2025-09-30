import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import type { FormData } from '../types'; // Importa la interfaz que definimos
 // Importa la interfaz que definimos

function FormPage() {
  // Estado para guardar los valores del formulario
  const [formData, setFormData] = useState<FormData>({
    username: '',
    name: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    email: '',
    password: '', // Inicializamos también el password
    acceptTerms: false,
  });

  // Manejador genérico para actualizar el estado cuando cambia un campo de texto
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Manejador específico para el checkbox
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevData => ({
      ...prevData,
      acceptTerms: e.target.checked,
    }));
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue

    // Aquí puedes añadir validaciones adicionales si lo necesitas
    if (!formData.acceptTerms) {
      alert('Debes aceptar los términos y condiciones.');
      return;
    }
    if (!formData.email || !formData.password || !formData.username) {
        alert('Por favor, completa los campos requeridos (Usuario, Email, Contraseña).');
        return;
    }

    try {
      // Guardar en Local Storage
      // Convertimos el objeto a una cadena JSON
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('Datos de usuario guardados en Local Storage!');
      console.log('Datos guardados:', formData);

      // Opcional: Limpiar el formulario después de guardar
      setFormData({
        username: '',
        name: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        email: '',
        password: '',
        acceptTerms: false,
      });

    } catch (error) {
      console.error('Error al guardar en Local Storage:', error);
      alert('Ocurrió un error al guardar los datos.');
    }
  };

  return (
    <Container className='pb-4'>
      <h2>Registrar usuario</h2>
      <Form onSubmit={handleSubmit}> {/* Asocia el manejador de envío */}
        <Form.Group className="mb-3 form-text" controlId="username"> {/* id del control ahora es 'username' */}
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese un nombre de usuario"
            value={formData.username} // Vinculamos el valor al estado
            onChange={handleChange}    // Actualizamos el estado al cambiar
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-text" controlId="name"> {/* id del control ahora es 'name' */}
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-text" controlId="lastName"> {/* id del control ahora es 'lastName' */}
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-text" controlId="country"> {/* id del control ahora es 'country' */}
          <Form.Label>País</Form.Label>
          <Form.Control
            type="text"
            placeholder="Seleccione su país"
            value={formData.country}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-text" controlId="city"> {/* id del control ahora es 'city' */}
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ciudad"
            value={formData.city}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 form-text" controlId="address"> {/* id del control ahora es 'address' */}
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su dirección"
            value={formData.address}
            onChange={handleChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email"> {/* id del control ahora es 'email' */}
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password"> {/* id del control ahora es 'password' */}
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="acceptTerms"> {/* id del control ahora es 'acceptTerms' */}
          <Form.Check
            type="checkbox"
            label="Acepto los términos y condiciones"
            checked={formData.acceptTerms} // Vinculamos el estado del checkbox
            onChange={handleCheckboxChange} // Manejador específico para el checkbox
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </Container>
  );
}

export default FormPage;