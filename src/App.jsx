
import { useState } from "react";
import "./App.css";

function App() {
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
  };

  const modulos = [
    {
      icono: "🗳️",
      titulo: "Participación y votaciones",
      descripcion:
        "Consulta encuestas y participa en las votaciones de la comunidad.",
      boton: "Ingresar",
      mensaje:
        "Módulo de participación y votaciones seleccionado.",
    },
    {
      icono: "📊",
      titulo: "Datos históricos",
      descripcion:
        "Consulta información histórica y el historial de adeudos de la vivienda.",
      boton: "Consultar",
      mensaje: "Módulo de datos históricos seleccionado.",
    },
    {
      icono: "💰",
      titulo: "Gestión financiera",
      descripcion:
        "Consulta información relacionada con la administración financiera de la comunidad.",
      boton: "Consultar",
      mensaje: "Módulo de gestión financiera seleccionado.",
    },
    {
      icono: "🏠",
      titulo: "Pagos e historial",
      descripcion:
        "Consulta los pagos y el historial correspondiente a la vivienda.",
      boton: "Consultar",
      mensaje: "Módulo de pagos e historial seleccionado.",
    },
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

      {/* BARRA DE NAVEGACIÓN */}
      <nav className="navegacion" aria-label="Navegación principal">
        <div className="navegacion-enlaces">
          <a href="#inicio">Inicio</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>

        <button
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
          <span className="bienvenida-icono">🌳</span>

          <h2>Bienvenido a Los Robles</h2>

          <p>
            Consulta y gestiona la información de tu comunidad.
          </p>
        </section>

        {/* MÓDULOS */}
        <section className="grid" id="servicios">
          {modulos.map((modulo) => (
            <article className="tarjeta" key={modulo.titulo}>
              <div className="icono">{modulo.icono}</div>

              <h2>{modulo.titulo}</h2>

              <p>{modulo.descripcion}</p>

              <button
                className="boton"
                onClick={() => mostrarMensaje(modulo.mensaje)}
              >
                {modulo.boton}
              </button>
            </article>
          ))}

          {/* EMERGENCIAS */}
          <article className="tarjeta tarjeta-emergencia">
            <div className="icono">🚨</div>

            <h2>Emergencias</h2>

            <p>
              Accede al botón de pánico y a las opciones de contacto
              para situaciones de emergencia.
            </p>

            <button
              className="boton-emergencia"
              onClick={() =>
                mostrarMensaje(
                  "Botón de pánico activado. Este prototipo no realiza llamadas reales."
                )
              }
            >
              BOTÓN DE PÁNICO
            </button>
          </article>
        </section>

        {/* MENSAJES */}
        {mensaje && (
          <section className="mensaje" role="status">
            <p>{mensaje}</p>

            <button
              className="boton-cerrar"
              onClick={() => setMensaje("")}
            >
              Cerrar
            </button>
          </section>
        )}
      </main>

      {/* CONTACTO */}
      <footer className="footer" id="contacto">
        <p>Los Robles · Portal para colonos</p>
        <p>Espacio de información y comunicación comunitaria.</p>
      </footer>
    </div>
  );
}

export default App;
