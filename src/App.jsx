import { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState(null);

  const handleOperation = (op) => {
    if (a === "" || b === "") return;
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    let res;
    switch (op) {
      case "+":
        res = numA + numB;
        break;
      case "-":
        res = numA - numB;
        break;
      case "×":
        res = numA * numB;
        break;
      case "÷":
        res = numB !== 0 ? numA / numB : "Error: No se puede dividir por 0";
        break;
      default:
        res = null;
    }

    setOperation(op);
    setResult(res);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >

      <div
        className="card shadow-lg p-4 text-center"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "15px",
          background: "white",
        }}
      >
        <h2 className="mb-3 text-dark" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/icons/calculadora.png"
            alt="Calculadora"
            style={{ width: "40px", height: "40px", marginRight: "12px" }}
          />
          Calculadora
        </h2>



        <input
          type="number"
          className="form-control form-control-lg mb-3"
          placeholder="Ingrese A"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={{ borderRadius: "10px" }}
        />
        <input
          type="number"
          className="form-control form-control-lg mb-3"
          placeholder="Ingrese B"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={{ borderRadius: "10px" }}
        />

        <div className="d-flex justify-content-between my-3">
          {["+", "-", "×", "÷"].map((op) => (
            <button
              key={op}
              className={`btn btn-lg ${operation === op ? "btn-primary text-white shadow" : "btn-outline-primary"
                }`}
              onClick={() => handleOperation(op)}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                fontSize: "24px",
                transition: "0.3s",
              }}
            >
              {op}
            </button>
          ))}
        </div>

        <Result operation={operation} result={result} />
      </div>
    </div>
  );
};

const Result = ({ operation, result }) => (
  <div className="mt-4">
    {operation ? (
      <h4
        className="text-success fw-bold"
        style={{
          animation: "fadeIn 0.5s",
          background: "#e3f2fd",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        Resultado ({operation}): {result}
      </h4>
    ) : (
      <h5 className="text-muted">Seleccione una operación</h5>
    )}
  </div>
);

Result.propTypes = {
  operation: PropTypes.string,
  result: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default App;
