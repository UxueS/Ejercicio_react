import PropTypes from "prop-types";
import Resultado from "./Resultado";

//Componente que uso para la logica de la interfaz de la calculadora
const Calculadora = ({
  a,
  b,
  setA,
  setB,
  operacion,
  setOperacion,
  resultado,
  hacerOperacion,
  Limpiar,
}) => {
  // Función para calcular el tamaño de la fuente según la longitud del número para que no se descuadre cuando haya numeros largos
  const calcularTamanoFuente = (valor) => {
    const longitud = valor ? valor.toString().length : 0;
    if (longitud > 8) {
      return "7px";
    } else if (longitud > 6) {
      return "10px";
    } else if (longitud > 4) {
      return "15px";
    } else {
      return "20px";
    }
  };

  const handleOperacion = () => {
    hacerOperacion(operacion);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      {/* Para ver los valores de A, operador, B y el resultado */}
      <Resultado
        a={a}
        b={b}
        operacion={operacion}
        resultado={resultado}
        calcularTamanoFuente={calcularTamanoFuente}
      />

      {/*  A */}
      <input
        type="number"
        className="form-control form-control-lg mb-3"
        placeholder="Ingrese A"
        value={a}
        onChange={(e) => setA(e.target.value)}
        style={{ borderRadius: "15px", fontSize: "24px", height: "60px" }}
      />

      {/* B */}
      <input
        type="number"
        className="form-control form-control-lg mb-3"
        placeholder="Ingrese B"
        value={b}
        onChange={(e) => setB(e.target.value)}
        style={{ borderRadius: "15px", fontSize: "24px", height: "60px" }}
      />

      {/* Botones de operaciones */}
      <div className="d-flex justify-content-between my-4" style={{ gap: "20px" }}>
        {["+", "-", "×", "÷"].map((oper) => (
          <button
            key={oper}
            className={`btn btn-lg ${operacion === oper ? "btn-primary text-white shadow" : "btn-outline-primary"}`}
            onClick={() => {
              setOperacion(oper);
            }}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "30%",
              fontSize: "35px",
              transition: "0.3s",
            }}
          >
            {oper}
          </button>
        ))}
      </div>

      {/* Botón de igual para hacer la operación */}
      <button
        className="btn btn-success btn-lg w-100 mb-3"
        onClick={handleOperacion}
        style={{
          height: "70px",
          borderRadius: "15px",
          fontSize: "24px",
        }}
      >
        =
      </button>

      {/* Botón para borrar todo */}
      <button
        className="btn btn-danger btn-lg w-100"
        onClick={Limpiar}
        style={{
          height: "70px",
          borderRadius: "15px",
          fontSize: "24px",
        }}
      >
        Borrar todo
      </button>
    </div>
  );
};

Calculadora.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  setA: PropTypes.func.isRequired,
  setB: PropTypes.func.isRequired,
  operacion: PropTypes.string,
  setOperacion: PropTypes.func.isRequired,
  resultado: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hacerOperacion: PropTypes.func.isRequired,
  Limpiar: PropTypes.func.isRequired,
  calcularTamanoFuente: PropTypes.func.isRequired, 
};

export default Calculadora;
