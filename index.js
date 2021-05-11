function calcularImpuesto(cantidad, porcentaje) {
	return cantidad * (porcentaje/100);
}

function calcularPagoTotal(cantidad, porcentaje) {
	return cantidad * (1 + porcentaje/100);
}

exports.calcularImpuesto;
exports.calcularPagoTotal;