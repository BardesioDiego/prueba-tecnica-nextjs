"use client";

import { useState } from "react";
import "../styles.css";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (!nombre || !email || !mensaje) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Por favor, ingresa un email válido.");
      return;
    }

    // Simula el envío del formulario
    setTimeout(() => {
      setSuccess(true);
      setError("");
      setNombre("");
      setEmail("");
      setMensaje("");
    }, 1000);
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      {success && <p className="success">¡Mensaje enviado con éxito!</p>}
      <form onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
        
        <div className="input-group">
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="nombre">Nombre:</label>
        </div>
        
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email:</label>
        </div>
        
        <div className="input-group">
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
          <label htmlFor="mensaje">Mensaje:</label>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;

