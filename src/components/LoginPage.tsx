import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

// Define la interfaz para la estructura de un usuario
interface User {
  email: string;
  password: string;
  // Puedes añadir más propiedades si tu usuario registrado tiene más datos
  // name?: string; 
}

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Evita el recargado de la página

    setMessage(null); // Limpia cualquier mensaje anterior

    // 1. Validación básica de campos vacíos
    if (!email || !password) {
      setMessage({ type: 'danger', text: 'Por favor, ingresa tu correo y contraseña.' });
      return;
    }

    // 2. Obtener usuarios de localStorage
    const storedUsersString = localStorage.getItem('registeredUsers');
    let registeredUsers: User[] = [];

    if (storedUsersString) {
      try {
        registeredUsers = JSON.parse(storedUsersString);
      } catch (error) {
        console.error("Error al parsear usuarios de localStorage:", error);
        setMessage({ type: 'danger', text: 'Ocurrió un error al cargar los datos de usuario.' });
        return;
      }
    }

    // 3. Buscar usuario con las credenciales proporcionadas
    const foundUser = registeredUsers.find(
      user => user.email === email && user.password === password
    );

    // 4. Mostrar resultado
    if (foundUser) {
      setMessage({ type: 'success', text: '¡Inicio de sesión exitoso! Bienvenido.' });
      // Aquí podrías redirigir al usuario, guardar el estado de sesión (ej. con Context API o Redux), etc.
      console.log('Usuario logueado:', foundUser.email);
      // Opcional: Limpiar el formulario después de un inicio de sesión exitoso
      // setEmail('');
      // setPassword('');
    } else {
      setMessage({ type: 'danger', text: 'Credenciales incorrectas. Verifica tu correo y contraseña.' });
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card style={{ width: '28rem' }} className="shadow-lg">
        <Card.Body className="p-4">
          <h2 className="text-center mb-4">Iniciar Sesión</h2>

          {message && (
            <Alert variant={message.type} className="mb-3">
              {message.text}
            </Alert>
          )}

          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="success" type="submit" size="lg">
                Iniciar Sesión
              </Button>
            </div>
          </Form>

          <p className="text-center mt-3">
            ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LoginPage;