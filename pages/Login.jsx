import { useState, useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { Link } from "react-router-dom";

import "../styles/login.css";

function Login() {

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (!email || !password) {

      alert(
        "Completa todos los campos"
      );

      return;
    }

    const success = login(
      email,
      password
    );

    if (!success) {

      alert(
        "Correo o contraseña incorrectos"
      );
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <h1>💻 TechZone</h1>

        <p>
          Bienvenido nuevamente
        </p>

        <input
          type="email"
          placeholder="Correo electrónico"
          className="login-input"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Iniciar sesión
        </button>

        <Link to="/register">
          <button className="register-btn">
            Crear cuenta
          </button>
        </Link>

      </div>

    </div>
  );
}

export default Login;