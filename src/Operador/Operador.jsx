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
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}> 
            {/* Pantalla de la calculadora */}
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
                <span style={{ 
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
                    fontSize: "30px" 
                }}>
                    {a || " "}
                </span>
                <span style={{ 
                    border: "3px solid #ccc", 
                    padding: "15px", 
                    minWidth: "60px", 
                    height: "60px", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    borderRadius: "15px",
                    fontSize: "30px"
                }}>
                    {operacion || " "}
                </span>
                <span style={{ 
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
                    fontSize: "30px"
                }}>
                    {b || " "}
                </span>
                {resultado !== "" && resultado !== null && (
                    <>
                        <span>=</span>
                        <span style={{ 
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
                            fontSize: "30px"
                        }}>
                            {resultado}
                        </span>
                    </>
                )}
            </div>

            <input
                type="number"
                className="form-control form-control-lg mb-3"
                placeholder="Ingrese A"
                value={a}
                onChange={(e) => setA(e.target.value)}
                style={{ borderRadius: "15px", fontSize: "24px", height: "60px" }} 
            />
            <input
                type="number"
                className="form-control form-control-lg mb-3"
                placeholder="Ingrese B"
                value={b}
                onChange={(e) => setB(e.target.value)}
                style={{ borderRadius: "15px", fontSize: "24px", height: "60px" }} 
            />

            <div className="d-flex justify-content-between my-4" style={{ gap: "20px" }}>
                {["+", "-", "×", "÷"].map((op) => (
                    <button
                        key={op}
                        className={`btn btn-lg ${operacion === op ? "btn-primary text-white shadow" : "btn-outline-primary"}`}
                        onClick={() => {
                            setOperacion(op);
                            setResultado(null);
                        }}
                        style={{
                            width: "90px", 
                            height: "90px",
                            borderRadius: "30%",
                            fontSize: "40px", 
                            transition: "0.3s",
                        }}
                    >
                        {op}
                    </button>
                ))}
            </div>

            {/* Botón igual para calcular */}
            <button
                className="btn btn-success btn-lg w-100 mb-3"
                onClick={() => hacerOperacion(operacion)}
                style={{
                    height: "70px", 
                    borderRadius: "15px",
                    fontSize: "24px",
                }}
            >
                =
            </button>

            {/* Botón Borrar */}
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
