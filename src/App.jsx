import { useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  const mostrarMensaje = (texto) => {
    setMensaje(texto);
  };

  return (
    <div style={estilos.app}>
      {/* ENCABEZADO */}
      <header style={estilos.header}>
        <h1 style={estilos.titulo}>Los Robles</h1>
        <p style={estilos.subtitulo}>Portal para colonos</p>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main style={estilos.contenedor}>

        {/* BIENVENIDA */}
        <section style={estilos.bienvenida}>
          <h2 style={estilos.bienvenidaTitulo}>
            Bienvenido a Los Robles
          </h2>

          <p style={estilos.bienvenidaTexto}>
            Consulta y gestiona la información de tu comunidad.
          </p>
        </section>

        {/* MÓDULOS */}
        <section style={estilos.grid}>

          {/* PARTICIPACIÓN Y VOTACIONES */}
          <article style={estilos.tarjeta}>
            <div style={estilos.icono}>🗳️</div>

            <h2 style={estilos.tarjetaTitulo}>
              Participación y votaciones
            </h2>

            <p style={estilos.tarjetaTexto}>
              Consulta encuestas y participa en las votaciones de la
              comunidad.
            </p>

            <button
              style={estilos.boton}
              onClick={() =>
                mostrarMensaje(
                  "Módulo de participación y votaciones seleccionado."
                )
              }
            >
              Ingresar
            </button>
          </article>

          {/* DATOS HISTÓRICOS */}
          <article style={estilos.tarjeta}>
            <div style={estilos.icono}>📊</div>

            <h2 style={estilos.tarjetaTitulo}>
              Datos históricos
            </h2>

            <p style={estilos.tarjetaTexto}>
              Consulta información histórica y el historial de adeudos
              de la vivienda.
            </p>

            <button
              style={estilos.boton}
              onClick={() =>
                mostrarMensaje(
                  "Módulo de datos históricos seleccionado."
                )
              }
            >
              Consultar
            </button>
          </article>

          {/* GESTIÓN FINANCIERA */}
          <article style={estilos.tarjeta}>
            <div style={estilos.icono}>💰</div>

            <h2 style={estilos.tarjetaTitulo}>
              Gestión financiera
            </h2>

            <p style={estilos.tarjetaTexto}>
              Consulta información relacionada con la administración
              financiera de la comunidad.
            </p>

            <button
              style={estilos.boton}
              onClick={() =>
                mostrarMensaje(
                  "Módulo de gestión financiera seleccionado."
                )
              }
            >
              Consultar
            </button>
          </article>

          {/* PAGOS E HISTORIAL */}
          <article style={estilos.tarjeta}>
            <div style={estilos.icono}>🏠</div>

            <h2 style={estilos.tarjetaTitulo}>
              Pagos e historial
            </h2>

            <p style={estilos.tarjetaTexto}>
              Consulta los pagos y el historial correspondiente a la
              vivienda.
            </p>

            <button
              style={estilos.boton}
              onClick={() =>
                mostrarMensaje(
                  "Módulo de pagos e historial seleccionado."
                )
              }
            >
              Consultar
            </button>
          </article>

          {/* EMERGENCIAS */}
          <article style={estilos.tarjetaEmergencia}>
            <div style={estilos.icono}>🚨</div>

            <h2 style={estilos.tarjetaTitulo}>
              Emergencias
            </h2>

            <p style={estilos.tarjetaTexto}>
              Accede al botón de pánico y a las opciones de contacto
              para situaciones de emergencia.
            </p>

            <button
              style={estilos.botonEmergencia}
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

        {/* MENSAJE DE ACCIÓN */}
        {mensaje && (
          <section style={estilos.mensaje}>
            <p>{mensaje}</p>

            <button
              style={estilos.botonCerrar}
              onClick={() => setMensaje("")}
            >
              Cerrar
            </button>
          </section>
        )}

      </main>

      {/* PIE DE PÁGINA */}
      <footer style={estilos.footer}>
        <p>Los Robles · Portal para colonos</p>
      </footer>
    </div>
  );
}

/* =========================
   ESTILOS
========================= */

const estilos = {
  app: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f5",
    color: "#263238",
    fontFamily:
      "Arial, Helvetica, sans-serif",
  },

  header: {
    background:
      "linear-gradient(135deg, #102a20, #1d4031)",
    color: "white",
    textAlign: "center",
    padding: "45px 20px",
  },

  titulo: {
    margin: "0",
    fontSize: "42px",
    fontWeight: "700",
  },

  subtitulo: {
    margin: "8px 0 0",
    fontSize: "22px",
    opacity: "0.9",
  },

  contenedor: {
    width: "90%",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "35px 0",
  },

  bienvenida: {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "35px 25px",
    textAlign: "center",
    marginBottom: "30px",
    boxShadow:
      "0 4px 15px rgba(0, 0, 0, 0.08)",
  },

  bienvenidaTitulo: {
    margin: "0 0 12px",
    fontSize: "30px",
    color: "#294b3c",
  },

  bienvenidaTexto: {
    margin: "0",
    fontSize: "18px",
    color: "#6b7470",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px",
  },

  tarjeta: {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "30px 25px",
    textAlign: "center",
    boxShadow:
      "0 4px 15px rgba(0, 0, 0, 0.08)",
    minHeight: "270px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  tarjetaEmergencia: {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "30px 25px",
    textAlign: "center",
    boxShadow:
      "0 4px 15px rgba(0, 0, 0, 0.08)",
    minHeight: "270px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    border: "2px solid #d9534f",
  },

  icono: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  tarjetaTitulo: {
    fontSize: "23px",
    color: "#294b3c",
    margin: "8px 0",
  },

  tarjetaTexto: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#6b7470",
    margin: "10px 0 20px",
  },

  boton: {
    backgroundColor: "#668fa3",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 30px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
  },

  botonEmergencia: {
    backgroundColor: "#d9534f",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "13px 25px",
    fontSize: "15px",
    cursor: "pointer",
    fontWeight: "700",
  },

  mensaje: {
    marginTop: "30px",
    backgroundColor: "#e8f1ed",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #b8cec2",
  },

  botonCerrar: {
    backgroundColor: "#294b3c",
    color: "white",
    border: "none",
    borderRadius: "7px",
    padding: "9px 20px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    padding: "25px",
    backgroundColor: "#102a20",
    color: "white",
    marginTop: "30px",
  },
};

export default App;
