// converter.js
let forceSciNotation = false;

function setForceSciNotation(val) {
    forceSciNotation = val;
}

function formatarNumero(num) {
    if (forceSciNotation) {
        return num.toExponential(4);
    }
    if (Math.abs(num) >= 1e6 || (Math.abs(num) < 1e-4 && num !== 0)) {
        return num.toExponential(4);
    }
    return Number(num.toFixed(6)).toLocaleString("pt-BR");
}

function converterTemperatura(valor, de, para) {
    let kelvin;
    switch (de) {
        case "C": kelvin = valor + 273.15; break;
        case "F": kelvin = (valor + 459.67) * 5 / 9; break;
        case "R": kelvin = valor * 5 / 9; break;
        case "K": kelvin = valor; break;
        default: kelvin = valor;
    }

    if (kelvin < 0) {
        throw new Error("Temperatura abaixo do zero absoluto impossível.");
    }

    switch (para) {
        case "C": return kelvin - 273.15;
        case "F": return kelvin * 9 / 5 - 459.67;
        case "R": return kelvin * 9 / 5;
        case "K": return kelvin;
        default: return kelvin;
    }
}

function converterCombustivel(valor, de, para) {
    let kmPorLitro;
    if (de === "km/L") kmPorLitro = valor;
    else if (de === "L/100km") kmPorLitro = 100 / valor;
    else if (de === "MPG (US)") kmPorLitro = valor * 0.425143707;
    else if (de === "MPG (UK)") kmPorLitro = valor * 0.35400619;

    if (para === "km/L") return kmPorLitro;
    else if (para === "L/100km") return 100 / kmPorLitro;
    else if (para === "MPG (US)") return kmPorLitro * 2.35214583;
    else if (para === "MPG (UK)") return kmPorLitro * 2.82480936;
}
