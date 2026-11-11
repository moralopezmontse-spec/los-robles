
import { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
  };

  const modulos = [
    {
      icono: "🗳️",
      titulo: "Participación y votaciones",
      descripcion:
        "Consulta encuestas y participa en las decisiones de tu comunidad.",
      boton: "Ingresar",
      mensaje: "Módulo de participación y votaciones seleccionado.",
    },
    {
      icono: "📊",
      titulo: "Datos históricos",
      descripcion:
        "Consulta información histórica y el historial de adeudos de tu vivienda.",
      boton: "Consultar",
      mensaje: "Módulo de datos históricos seleccionado.",
    },
    {
      icono: "💰",
      titulo: "Gestión financiera",
      descripcion:
        "Conoce los movimientos y la administración financiera de la comunidad.",
      boton: "Consultar",
      mensaje: "Módulo de gestión financiera seleccionado.",
    },
    {
      icono: "🏠",
      titulo: "Pagos e historial",
      descripcion:
        "Revisa los pagos realizados y el historial correspondiente a tu vivienda.",
      boton: "Consultar",
      mensaje: "Módulo de pagos e historial seleccionado.",
    },
  ];

  const enlaces = [
    { id: "inicio", texto: "Inicio" },
    { id: "comunidad", texto: "Comunidad" },
    { id: "servicios", texto: "Servicios" },
    { id: "contacto", texto: "Contacto" },
  ];

  return (
    <div className="app">

      {/* ENCABEZADO */}
      <header className="header" id="inicio">
        <div className="marca">
          <span className="marca-icono">🌳</span>
          <h1>Los Robles</h1>
        </div>
        <p>PORTAL PARA COLONOS</p>
      </header>

      {/* NAVEGACIÓN */}
      <nav className="navegacion" aria-label="Navegación principal">
        <div className="navegacion-enlaces">
          {enlaces.map((enlace) => (
            <a
              key={enlace.id}
              href={`#${enlace.id}`}
              className={seccionActiva === enlace.id ? "activo" : ""}
              aria-current={
                seccionActiva === enlace.id ? "location" : undefined
              }
              onClick={() => setSeccionActiva(enlace.id)}
            >
              {enlace.texto}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="boton-sesion"
          onClick={() =>
            mostrarMensaje(
              "El acceso de usuarios estará disponible próximamente."
            )
          }
        >
          Iniciar sesión
        </button>
      </nav>

      <main className="contenedor">

        {/* BIENVENIDA */}
        <section className="bienvenida" id="comunidad">
          <div className="bienvenida-icono">🌳</div>
          <span className="bienvenida-etiqueta">
            NUESTRA COMUNIDAD
          </span>
          <h2>Bienvenido a Los Robles</h2>
          <p>
            Un espacio para informarte, participar y gestionar
            los servicios de tu comunidad.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className="seccion-servicios" id="servicios">
          <div className="encabezado-seccion">
            <span>GESTIÓN COMUNITARIA</span>
            <h2>Explora nuestros servicios</h2>
            <p>
              Accede a las herramientas y servicios disponibles
              para los residentes.
            </p>
          </div>

          <div className="grid">
            {modulos.map((modulo) => (
              <article className="tarjeta" key={modulo.titulo}>
                <div className="icono">{modulo.icono}</div>

                <h3>{modulo.titulo}</h3>

                <p>{modulo.descripcion}</p>

                <button
                  type="button"
                  className="boton"
                  onClick={() => mostrarMensaje(modulo.mensaje)}
                >
                  {modulo.boton}
                </button>
              </article>
            ))}

            {/* EMERGENCIAS */}
            <article className="tarjeta tarjeta-emergencia">
              <div className="icono icono-emergencia">🚨</div>

              <h3>Emergencias</h3>

              <p>
                Consulta las opciones de contacto para situaciones
                que requieren atención inmediata.
              </p>

              <button
                type="button"
                className="boton-emergencia"
                onClick={() =>
                  mostrarMensaje(
                    "Botón de pánico activado. Este prototipo no realiza llamadas reales ni envía alertas."
                  )
                }
              >
                BOTÓN DE PÁNICO
              </button>
            </article>
          </div>
        </section>

        {/* NOTIFICACIONES */}
        {mensaje && (
          <section className="mensaje" role="status">
            <div className="mensaje-contenido">
              <span className="mensaje-icono">✓</span>
              <p>{mensaje}</p>
            </div>

            <button
              type="button"
              className="boton-cerrar"
              onClick={() => setMensaje("")}
              aria-label="Cerrar notificación"
            >
              Cerrar
            </button>
          </section>
        )}
      </main>

      {/* PIE DE PÁGINA */}
      <footer className="footer" id="contacto">
        <div className="footer-marca">
          🌳 Los Robles
        </div>
        <p>Portal para colonos</p>
        <p>
          Espacio de información y comunicación comunitaria.
        </p>
        <span className="footer-final">
          © 2026 Los Robles · Todos los derechos reservados.
        </span>
      </footer>

    </div>
  );
}

export default App;
