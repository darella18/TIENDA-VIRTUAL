import { useState, useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";

import "../styles/register.css";

function Register() {

  const { register } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {

    // VALIDAR NOMBRE
    if (!name.trim()) {

      alert("Ingresa tu nombre");

      return;
    }

    // VALIDAR EMAIL
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      alert("Ingresa un correo válido");

      return;
    }

    // VALIDAR PASSWORD
    if (password.length < 5) {

      alert(
        "La contraseña debe tener mínimo 5 caracteres"
      );

      return;
    }

    const success = register(
      name,
      email,
      password
    );

    if (success) {

      alert(
        "Usuario registrado correctamente"
      );
    }
  };

  return (
    <div className="register-container">

      <div className="register-card">

        <h1>Crear cuenta</h1>

        <input
          type="text"
          placeholder="Nombre"
          className="register-input"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Correo"
          className="register-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="register-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="register-main-btn"
          onClick={handleRegister}
        >
          Registrarme
        </button>

        <Link to="/">
          <button className="back-login-btn">
            Volver al login
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Register;