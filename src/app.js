function evaluar() {
    const edad = parseFloat(document.getElementById("edad").value);
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const monto = parseFloat(document.getElementById("monto").value);
    const empleo = parseFloat(document.getElementById("empleo").value);
    const historial = parseInt(document.getElementById("historial").value);

    if (!edad || !ingresos || !monto || historial === undefined) {
        document.getElementById("resultado").textContent = "Ingrese todos los datos correctamente";
        return;
    }

    let probabilidad;

    if (ingresos > 2500 && historial === 1 && monto < ingresos * 4 && empleo >= 2) {
        probabilidad = 0.8;
    } else {
        probabilidad = 0.3;
    }

    if (probabilidad >= 0.5) {
        document.getElementById("resultado").textContent = "✅ Crédito Aprobado";
    } else {
        document.getElementById("resultado").textContent = "❌ Crédito Rechazado";
    }
}