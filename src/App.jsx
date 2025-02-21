import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculadora from "./componentes/Calculadora";

const App = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operacion, setOperacion] = useState(null);
  const [resultado, setResultado] = useState(null);

  const hacerOperacion = (oper) => {
    if (a === "" || b === "") return;
    const numeroA = parseFloat(a);
    const numB = parseFloat(b);

    let res;

    if (oper === "+") {
      res = numeroA + numB;
    } else if (oper === "-") {
      res = numeroA - numB;
    } else if (oper === "×") {
      res = numeroA * numB;
    } else if (oper === "÷") {
      res = numB !== 0 ? numeroA / numB : "Error";
    } else {
      res = null;
    }

    setOperacion(oper);
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
        backgroundImage: "url(/icons/fondo.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div
        className="card shadow-lg p-4 text-center"
        style={{
          maxWidth: "500px",
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

        <Calculadora
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
