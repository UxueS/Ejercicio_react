import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Operador from "./Operador/Operador"; // Cambié el nombre a Operador.jsx

const App = () => {
  // Lógica del componente App (igual que antes)
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operacion, setOperacion] = useState(null);
  const [resultado, setResultado] = useState(null);

  const hacerOperacion = (op) => {
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

    setOperacion(op);
    setResultado(res);
  };

  const Limpiar = () => {
    setA("");
    setB("");
    setOperacion(null);
    setResultado(null);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "#e3f2fd",
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
        <h2 className="mb-3 text-dark d-flex justify-content-center align-items-center">
          <img
            src="/icons/calculadora.png"
            alt="Calculadora"
            style={{ width: "40px", height: "40px", marginRight: "12px" }}
          />
          Calculadora
        </h2>

        <Operador
          a={a}
          b={b}
          setA={setA}
          setB={setB}
          operacion={operacion}
          setOperacion={setOperacion}
          resultado={resultado}
          hacerOperacion={hacerOperacion}
          Limpiar={Limpiar}
        />
      </div>
    </div>
  );
};

export default App;
