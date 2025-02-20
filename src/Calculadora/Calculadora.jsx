import PropTypes from "prop-types";

const Calculadora = ({
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
    // Función para calcular el tamaño de la fuente según la longitud del número para que no se descuadre
    const calcularTamanoFuente = (valor) => {
        const longitud = valor ? valor.toString().length : 0;
        if (longitud > 6) {
            return "10px";
        } else if (longitud > 4) {
            return "15px";
        } else {
            return "20px";
        }
    };


    const handleOperacion = () => {
        hacerOperacion(operacion);
        setA(a);
        setB(b);
        setResultado(resultado);
    };

    return (
        <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
            {/*Para ver los valores de A, operador, B y el resultado */}
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
                {/* Mostrar el valor de A que se ha metido */}
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

                {/* Mostrar el operador seleccionado */}
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

                {/* Mostrar el valor de B que se ha metido */}
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

                {resultado !== "" && resultado !== null && (
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
                            setResultado(null);
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

            {/* Botón de igual para que se haga la operación */}
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
    setResultado: PropTypes.func.isRequired,
    hacerOperacion: PropTypes.func.isRequired,
    Limpiar: PropTypes.func.isRequired,
};

export default Calculadora;
