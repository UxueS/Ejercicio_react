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
                className="form-control form-control-lg mb-3 fw-bold d-flex align-items-center justify-content-center"
                style={{
                    height: "60px",
                    fontSize: "22px",
                    borderRadius: "10px",
                    background: "#e3f2fd",
                    display: "flex",
                    gap: "5px",
                    padding: "10px",
                }}
            >
                <span style={{ 
                    border: "2px solid #ccc", 
                    padding: "10px", 
                    minWidth: "40px",  // Se adapta al contenido
                    height: "40px", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    borderRadius: "10px",
                    whiteSpace: "nowrap" // Evita el quiebre de texto
                }}>
                    {a || " "}
                </span>
                <span style={{ 
                    border: "2px solid #ccc", 
                    padding: "10px", 
                    minWidth: "40px", 
                    height: "40px", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    borderRadius: "10px"
                }}>
                    {operacion || " "}
                </span>
                <span style={{ 
                    border: "2px solid #ccc", 
                    padding: "10px", 
                    minWidth: "40px", 
                    height: "40px", 
                    display: "inline-flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    borderRadius: "10px",
                    whiteSpace: "nowrap"
                }}>
                    {b || " "}
                </span>
                {resultado !== "" && resultado !== null && (
                    <>
                        <span>=</span>
                        <span style={{ 
                            border: "2px solid #ccc", 
                            padding: "10px", 
                            minWidth: "40px", 
                            height: "40px", 
                            display: "inline-flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            textAlign: "center", 
                            borderRadius: "10px",
                            whiteSpace: "nowrap"
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
