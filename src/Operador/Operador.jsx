import PropTypes from "prop-types";

const Operador = ({
    a,
    b,
    setA,
    setB,
    operacion,
    setOperacion,
    resultado,
    setResultado,
    hacerOperacion,
    Limpiar,
}) => {
    return (
        <div>
            {/* Pantalla de la calculadora */}
            <div
                className="form-control form-control-lg mb-3 text-end fw-bold"
                style={{
                    height: "60px",
                    fontSize: "24px",
                    borderRadius: "10px",
                    background: "#e3f2fd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                    padding: "10px",
                }}
            >
                {a} {operacion} {b} {resultado !== "" && resultado !== null && `= ${resultado}`}
            </div>

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
                        onClick={() => {
                            setOperacion(op);
                            setResultado(null); 
                        }}
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

            {/* Botón igual para calcular */}
            <button
                className="btn btn-success btn-lg w-100 mb-2"
                onClick={() => hacerOperacion(operacion)}
                style={{
                    height: "50px",
                    borderRadius: "10px",
                    fontSize: "18px",
                }}
            >
                =
            </button>

            {/* Botón Borrar */}
            <button
                className="btn btn-danger btn-lg w-100"
                onClick={Limpiar}
                style={{
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

Operador.propTypes = {
    a: PropTypes.string.isRequired,
    b: PropTypes.string.isRequired,
    setA: PropTypes.func.isRequired,
    setB: PropTypes.func.isRequired,
    operacion: PropTypes.string,
    setOperacion: PropTypes.func.isRequired,
    resultado: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setResultado: PropTypes.func.isRequired,
    hacerOperacion: PropTypes.func.isRequired,
    Limpiar: PropTypes.func.isRequired,
};

export default Operador;
