import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "../styles/home.css";

function Home() {

  return (
    <div className="home">

      <section className="hero">

        <div className="hero-overlay">

          <motion.div
            className="hero-content"

            initial={{
              opacity: 0,
              y: 50
            }}

            animate={{
              opacity: 1,
              y: 0
            }}

            transition={{
              duration: 1
            }}
          >

            <h1>
              Tecnología de última generación
            </h1>

            <p>
              Encuentra laptops, smartphones y accesorios premium.
            </p>

            <Link to="/products">

              <button className="hero-btn">
                Explorar productos
              </button>

            </Link>

          </motion.div>

        </div>

      </section>

      <section className="home-info">

        <motion.div
          className="info-card"

          whileHover={{
            scale: 1.05
          }}
        >
          🚚 Envíos rápidos
        </motion.div>

        <motion.div
          className="info-card"

          whileHover={{
            scale: 1.05
          }}
        >
          🔒 Compras seguras
        </motion.div>

        <motion.div
          className="info-card"

          whileHover={{
            scale: 1.05
          }}
        >
          ⭐ Productos premium
        </motion.div>

      </section>

      <section className="featured-section">

        <h2>
          ¿Por qué elegir TechZone?
        </h2>

        <div className="featured-grid">

          <div className="featured-card">
            💻 Tecnología moderna
          </div>

          <div className="featured-card">
            ⚡ Alto rendimiento
          </div>

          <div className="featured-card">
            🎧 Accesorios premium
          </div>

        </div>

      </section>

      <section className="brands-section">

  <h2>
    Marcas destacadas
  </h2>

  <div className="brands-grid">

    <div className="brand-card">
      ASUS
    </div>

    <div className="brand-card">
      Samsung
    </div>

    <div className="brand-card">
      Sony
    </div>

    <div className="brand-card">
      Logitech
    </div>

  </div>

</section>

<section className="promo-section">

  <div className="promo-card">

    <h2>
      Hasta 40% OFF
    </h2>

    <p>
      En accesorios tecnológicos premium
    </p>

  </div>

</section>

    </div>
  );
}

export default Home;