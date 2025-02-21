import PropTypes from "prop-types";

// Este componente es el que uso para mostrar los valores de A, operador, B y el resultado
const Resultado = ({ a, b, operacion, resultado, calcularTamanoFuente }) => {
  return (
    <div
      className="form-control mb-4 fw-bold d-flex align-items-center justify-content-center"
      style={{
        height: "100px",
        fontSize: "30px",
        borderRadius: "15px",
        background: "#e3f2fd",
        display: "flex",
        gap: "10px",
        padding: "15px",
      }}
    >
      {/* Mostrar el valor de A */}
      <span
        style={{
          border: "3px solid #ccc",
          padding: "15px",
          minWidth: "60px",
          height: "60px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "15px",
          whiteSpace: "nowrap",
          fontSize: calcularTamanoFuente(a),
        }}
      >
        {a || " "}
      </span>

      {/* Mostrar el operador */}
      <span
        style={{
          border: "3px solid #ccc",
          padding: "15px",
          minWidth: "60px",
          height: "60px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "15px",
          fontSize: calcularTamanoFuente(operacion),
        }}
      >
        {operacion || " "}
      </span>

      {/* Mostrar el valor de B */}
      <span
        style={{
          border: "3px solid #ccc",
          padding: "15px",
          minWidth: "60px",
          height: "60px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: "15px",
          whiteSpace: "nowrap",
          fontSize: calcularTamanoFuente(b),
        }}
      >
        {b || " "}
      </span>

      {/* Mostrar el resultado */}
      {resultado !== null && (
        <>
          <span>=</span>
          <span
            style={{
              border: "3px solid #ccc",
              padding: "15px",
              minWidth: "60px",
              height: "60px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              borderRadius: "15px",
              whiteSpace: "nowrap",
              fontSize: calcularTamanoFuente(resultado),
            }}
          >
            {resultado}
          </span>
        </>
      )}
    </div>
  );
};

Resultado.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  operacion: PropTypes.string,
  resultado: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  calcularTamanoFuente: PropTypes.func.isRequired, 
};

export default Resultado;
