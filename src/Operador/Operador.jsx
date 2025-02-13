import PropTypes from "prop-types";
import { FaExclamationTriangle } from "react-icons/fa"; // Importamos el ícono de alerta

const Operador = ({
    a,
    b,
    setA,
    setB,
    operacion,

    resultado,
    hacerOperacion,
    Limpiar,
}) => {
    return (
        <div>
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
                        className={`btn btn-lg ${operacion === op ? "btn-primary text-white shadow" : "btn-outline-primary"}`}
                        onClick={() => hacerOperacion(op)}
                        style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "30%",
                            fontSize: "30px",
                            transition: "0.3s",
                        }}
                    >
                        {op}
                    </button>
                ))}
            </div>

            {/* Casilla para mostrar el resultado */}
            <Resultado operacion={operacion} resultado={resultado} />

            {/* Botón Borrar */}
            <button
                className="btn btn-danger btn-lg mt-3"
                onClick={Limpiar}
                style={{
                    width: "100%",
                    height: "50px",
                    borderRadius: "10px",
                    fontSize: "18px",
                }}
            >
                Borrar todo
            </button>
        </div>
    );
};

const Resultado = ({ operacion, resultado }) => (
    <div className="mt-4">
        {operacion ? (
            <h4
                className="text-dark fw-bold"
                style={{
                    animation: "fadeIn 0.5s",
                    background: "#e3f2fd",
                    padding: "10px",
                    borderRadius: "10px",
                }}
            >
                Resultado ({operacion}): <span className="text-dark">{resultado}</span>
            </h4>
        ) : (
            <div
                className="d-flex justify-content-center align-items-center text-muted border rounded p-3"
                style={{
                    backgroundColor: "#FFF3CD",
                    borderColor: "#FFEEBA",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
            >
                <FaExclamationTriangle
                    style={{
                        color: "#856404",
                        fontSize: "24px",
                        marginRight: "8px",
                    }}
                />
                <p className="mb-0 fs-6">No hay operador y/o números seleccionados aún</p>
            </div>
        )}
    </div>
);

Operador.propTypes = {
    a: PropTypes.string.isRequired,
    b: PropTypes.string.isRequired,
    setA: PropTypes.func.isRequired,
    setB: PropTypes.func.isRequired,
    operacion: PropTypes.string,
    setOperacion: PropTypes.func.isRequired,
    resultado: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hacerOperacion: PropTypes.func.isRequired,
    Limpiar: PropTypes.func.isRequired,
};

Resultado.propTypes = {
    operacion: PropTypes.string,
    resultado: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Operador;
