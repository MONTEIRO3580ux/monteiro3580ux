// --- Constantes e Unidades ---

// Unidades corrigidas e separadas
const unidades = {
    "ângulo": {
        "grau": 1,
        "mil": 0.05625,
        "minuto de arco": 1 / 60,
        "radiano": 57.2957795,
        "segundo de arco": 1 / 3600,
        "volta": 360
    },
    "área": {
        "acre": 4046.856422,
        "are (a)": 100,
        "centiare (ca)": 1,
        "cm²": 0.0001,
        "ha": 10000,
        "jarda²": 0.836127,
        "km²": 1e6,
        "m²": 1,
        "milha²": 2589988.11,
        "mm²": 1e-6,
        "pé²": 0.092903,
        "polegada²": 0.00064516,
        "tarefa (Bahia)": 4356 // Tarefa baiana padrão ~4356m² (varía, mas adotado o padrão)
    },
    "comprimento": {
        "ano-luz": 9.4607e15,
        "cm": 0.01,
        "ft": 0.3048,
        "in": 0.0254,
        "km": 1000,
        "m": 1,
        "mi": 1609.344,
        "milha náutica": 1852,
        "mm": 0.001,
        "nm": 1e-9,
        "parsec (pc)": 3.0857e16,
        "UA (Unidade Astronômica)": 1.495978707e11,
        "µm": 1e-6,
        "yd": 0.9144
    },
    // SEPARADO: Dados (Armazenamento - Base 10)
    "dados_si (decimal)": {
        "bit": 0.125, // Base é Byte
        "byte (B)": 1,
        "kilobyte (kB)": 1000,
        "megabyte (MB)": 1e6,
        "gigabyte (GB)": 1e9,
        "terabyte (TB)": 1e12,
        "petabyte (PB)": 1e15
    },
    // SEPARADO: Dados (Armazenamento - Base 2 - IEC)
    "dados_iec (binário)": {
        "bit": 0.125,
        "byte (B)": 1,
        "kibibyte (KiB)": 1024,
        "mebibyte (MiB)": 1048576,
        "gibibyte (GiB)": 1073741824,
        "tebibyte (TiB)": 1.0995e12,
        "pebibyte (PiB)": 1.1259e15
    },
    "energia": {
        "BTU": 1055.056,
        "cal": 4.184,
        "eV": 1.60218e-19,
        "erg": 1e-7,
        "J": 1,
        "kcal": 4184,
        "kJ": 1000,
        "MJ": 1e6,
        "Wh": 3600,
        "kWh": 3.6e6
    },
    "força": { // REMOVIDO: libra-pé (torque)
        "dina": 1e-5,
        "kgf": 9.80665,
        "kN": 1000,
        "lbf": 4.448222,
        "N": 1
    },
    "torque": { // NOVA CATEGORIA
        "N·m": 1,
        "kgf·m": 9.80665,
        "lbf·ft (libra-pé)": 1.355818
    },
    "frequência": {
        "GHz": 1e9,
        "Hz": 1,
        "kHz": 1000,
        "MHz": 1e6,
        "rpm": 1 / 60,
        "THz": 1e12
    },
    "iluminação (lux)": { // RESTRITO A ILUMINÂNCIA
        "lux (lx)": 1,
        "foot-candle (fc)": 10.7639
    },
    "massa": {
        "arroba (@)": 15, // Padrão BR 15kg
        "g": 0.001,
        "grain (gr)": 6.47989e-5,
        "kg": 1,
        "lb": 0.45359237,
        "mg": 1e-6,
        "oz": 0.0283495,
        "t": 1000,
        "tonelada curta (US)": 907.18474,
        "tonelada longa (UK)": 1016.0469
    },
    "potência": {
        "BTU/h": 0.293071,
        "cal/s": 4.184, // Termoquímica
        "CV": 735.49875,
        "HP": 745.69987, // Métrico 735.5, Imperial 745.7. Adotando Eletrico/Imperial comum
        "kW": 1000,
        "MW": 1e6,
        "W": 1
    },
    "pressão": {
        "atm": 101325,
        "bar": 100000,
        "inHg": 3386.389,
        "kPa": 1000,
        "MPa": 1e6,
        "mmHg": 133.3224,
        "Pa": 1,
        "psi": 6894.757,
        "Torr": 133.3224
    },
    "radioatividade (atividade)": { // SEPARADO
        "becquerel (Bq)": 1,
        "curie (Ci)": 3.7e10,
        "rutherford (Rd)": 1e6
    },
    "radioatividade (dose)": { // SEPARADO
        "gray (Gy)": 1,
        "sievert (Sv)": 1, // Nota: Gy é dose absorvida, Sv é equivalente. Matematicamente 1Gy = 1Sv (J/kg), mas fisicamente distintos. Mantendo para fins de cálculo básico J/kg.
        "rad": 0.01,
        "rem": 0.01
    },
    "temperatura": { // Fatores 1 pois a conversão é especial
        "C": 1,
        "F": 1,
        "K": 1,
        "R": 1
    },
    "tempo": {
        "ano (gregoriano)": 31556952, // 365.2425 dias
        "dia": 86400,
        "h": 3600,
        "mês (médio)": 2.628e6, // 1/12 ano
        "min": 60,
        "ms": 0.001,
        "ns": 1e-9,
        "s": 1,
        "semana": 604800,
        "µs": 1e-6
    },
    "velocidade": {
        "km/h": 0.277778,
        "Mach (nível do mar, 15°C)": 340.3, // Contextualizado
        "m/s": 1,
        "mi/h": 0.44704,
        "nó": 0.514444,
        "pé/s": 0.3048,
        "velocidade da luz (vácuo)": 299792458
    },
    "volume": {
        "barril (petróleo)": 158.9873,
        "colher de chá (métrica)": 0.000005,
        "colher de sopa (métrica)": 0.000015,
        "fl oz (US)": 0.0000295735,
        "gal (US líquido)": 0.00378541,
        "L": 0.001, // Base SI é m³
        "m³": 1,
        "mL": 1e-6,
        "pt (US líquido)": 0.000473176,
        "qt (US líquido)": 0.000946353,
        "xícara (métrica)": 0.000250 // 250ml
    },
    "vazão": {
        "cfm": 0.000471947,
        "gpm (US)": 0.0000630902,
        "m³/h": 0.000277778,
        "L/s": 0.001
    }
};

// Mapeamento de nomes amigáveis para UI
const nomes = {
    "ângulo": { "grau": "Grau", "radiano": "Radiano", "minuto de arco": "Minuto de arco", "segundo de arco": "Segundo de arco", "volta": "Volta", "mil": "Mil angular" },
    "área": { "m²": "Metro quadrado", "km²": "Quilômetro quadrado", "cm²": "Centímetro quadrado", "mm²": "Milímetro quadrado", "ha": "Hectare", "acre": "Acre", "are (a)": "Are", "centiare (ca)": "Centiare", "pé²": "Pé quadrado", "jarda²": "Jarda quadrada", "polegada²": "Polegada quadrada", "milha²": "Milha quadrada", "tarefa (Bahia)": "Tarefa (Bahia)" },
    "comprimento": { "m": "Metro", "km": "Quilômetro", "cm": "Centímetro", "mm": "Milímetro", "µm": "Micrômetro", "nm": "Nanômetro", "mi": "Milha", "yd": "Jarda", "ft": "Pé", "in": "Polegada", "milha náutica": "Milha náutica", "ano-luz": "Ano-luz", "parsec (pc)": "Parsec", "UA (Unidade Astronômica)": "Unidade Astronômica" },
    "dados_si (decimal)": { "byte (B)": "Byte", "kilobyte (kB)": "Kilobyte (10³)", "megabyte (MB)": "Megabyte (10⁶)", "gigabyte (GB)": "Gigabyte (10⁹)", "terabyte (TB)": "Terabyte (10¹²)", "petabyte (PB)": "Petabyte (10¹⁵)", "bit": "Bit" },
    "dados_iec (binário)": { "byte (B)": "Byte", "kibibyte (KiB)": "Kibibyte (2¹⁰)", "mebibyte (MiB)": "Mebibyte (2²⁰)", "gibibyte (GiB)": "Gibibyte (2³⁰)", "tebibyte (TiB)": "Tebibyte (2⁴⁰)", "pebibyte (PiB)": "Pebibyte (2⁵⁰)", "bit": "Bit" },
    "energia": { "J": "Joule", "kJ": "Quilojoule", "MJ": "Megajoule", "cal": "Caloria", "kcal": "Quilocaloria", "Wh": "Watt-hora", "kWh": "Quilowatt-hora", "BTU": "BTU", "er": "Erg", "eV": "Elétron-volt" },
    "força": { "N": "Newton", "kN": "Quilonewton", "kgf": "Quilograma-força", "lbf": "Libra-força", "dina": "Dina" },
    "torque": { "N·m": "Newton-metro", "kgf·m": "Quilograma-força metro", "lbf·ft (libra-pé)": "Libra-força pé" },
    "frequência": { "Hz": "Hertz", "kHz": "Quilohertz", "MHz": "Megahertz", "GHz": "Gigahertz", "THz": "Terahertz", "rpm": "Rotações por minuto" },
    "iluminação (lux)": { "lux (lx)": "Lux (lumen/m²)", "foot-candle (fc)": "Foot-candle (lumen/ft²)" },
    "massa": { "kg": "Quilograma", "g": "Grama", "mg": "Miligrama", "t": "Tonelada métrica", "lb": "Libra", "oz": "Onça", "tonelada curta (US)": "Tonelada curta (US)", "tonelada longa (UK)": "Tonelada longa (UK)", "arroba (@)": "Arroba (15kg)", "grain (gr)": "Grain" },
    "potência": { "W": "Watt", "kW": "Quilowatt", "MW": "Megawatt", "HP": "Horsepower (Eletrico)", "CV": "Cavalo-vapor", "BTU/h": "BTU por hora", "cal/s": "Caloria por segundo" },
    "pressão": { "Pa": "Pascal", "kPa": "Quilopascal", "MPa": "Megapascal", "bar": "Bar", "atm": "Atmosfera padrão", "psi": "PSI (lbf/in²)", "mmHg": "Milímetro de mercúrio", "inHg": "Polegada de mercúrio", "Torr": "Torr" },
    "radioatividade (atividade)": { "becquerel (Bq)": "Becquerel", "curie (Ci)": "Curie", "rutherford (Rd)": "Rutherford" },
    "radioatividade (dose)": { "gray (Gy)": "Gray (J/kg)", "sievert (Sv)": "Sievert (Equivalente)", "rad": "Rad", "rem": "Rem" },
    "temperatura": { "C": "Celsius", "F": "Fahrenheit", "K": "Kelvin", "R": "Rankine" },
    "tempo": { "s": "Segundo", "ms": "Milissegundo", "µs": "Microssegundo", "ns": "Nanossegundo", "min": "Minuto", "h": "Hora", "dia": "Dia", "semana": "Semana", "mês (médio)": "Mês (30.44 dias)", "ano (gregoriano)": "Ano (365.24 dias)" },
    "velocidade": { "m/s": "Metro por segundo", "km/h": "Quilômetro por hora", "mi/h": "Milha por hora", "nó": "Nó", "pé/s": "Pé por segundo", "Mach (nível do mar, 15°C)": "Mach (340.3 m/s)", "velocidade da luz (vácuo)": "Velocidade da luz (299.792 km/s)" },
    "volume": { "m³": "Metro cúbico", "L": "Litro", "mL": "Mililitro", "gal (US líquido)": "Galão (US)", "pt (US líquido)": "Pinta (US)", "qt (US líquido)": "Quarto (US)", "fl oz (US)": "Onça fluida (US)", "xícara (métrica)": "Xícara (250ml)", "colher de sopa (métrica)": "Colher de sopa (15ml)", "colher de chá (métrica)": "Colher de chá (5ml)", "barril (petróleo)": "Barril de petróleo" },
    "vazão": { "m³/h": "Metro cúbico por hora", "L/s": "Litro por segundo", "cfm": "Pé cúbico por minuto", "gpm (US)": "Galão por minuto (US)" }
};

let history = JSON.parse(localStorage.getItem('conversionHistory')) || [];
let darkMode = localStorage.getItem('darkMode') === 'true';
let forceSciNotation = false;

// --- Funções Principais ---

function atualizarUnidades() {
    const categoria = document.getElementById("categoria").value;
    const de = document.getElementById("de");
    const para = document.getElementById("para");

    de.innerHTML = "";
    para.innerHTML = "";

    // Ordenar chaves para apresentação limpa
    const keys = Object.keys(nomes[categoria] || {});
    keys.sort();

    if (keys.length === 0) {
        // Fallback
        return;
    }

    keys.forEach(unidade => {
        // Obter nome legível ou usar a chave
        const label = nomes[categoria][unidade] || unit;
        const op1 = new Option(label, unidade);
        const op2 = new Option(label, unidade);
        de.appendChild(op1);
        para.appendChild(op2);
    });

    // Definir seleções padrão úteis
    if (keys.length >= 2) {
        de.selectedIndex = 0;
        para.selectedIndex = 1;
    }

    // Defaults específicos
    if (categoria === "temperatura") { de.value = "C"; para.value = "F"; }
    else if (categoria.startsWith("dados")) { de.value = "megabyte (MB)" || de.options[0].value; para.value = "gigabyte (GB)" || para.options[1].value; }
}

function formatarNumero(num) {
    if (forceSciNotation) {
        return num.toExponential(4);
    }
    // Formata números muito grandes ou muito pequenos em notação científica
    if (Math.abs(num) >= 1e6 || (Math.abs(num) < 1e-4 && num !== 0)) {
        return num.toExponential(4);
    }
    return Number(num.toFixed(6)).toLocaleString("pt-BR");
}

function converterTemperatura(valor, de, para) {
    // Conversões para Kelvin (unidade base)
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

    // Conversão de Kelvin para unidade desejada
    switch (para) {
        case "C": return kelvin - 273.15;
        case "F": return kelvin * 9 / 5 - 459.67;
        case "R": return kelvin * 9 / 5;
        case "K": return kelvin;
        default: return kelvin;
    }
}

function converter() {
    const categoria = document.getElementById("categoria").value;
    const valorInput = document.getElementById("valor");
    const valor = parseFloat(valorInput.value);
    const de = document.getElementById("de").value;
    const para = document.getElementById("para").value;
    const errorDiv = document.getElementById("error-message");
    const resultadoDiv = document.getElementById("resultado");

    errorDiv.style.display = 'none';
    resultadoDiv.innerText = '';

    if (isNaN(valor)) {
        resultadoDiv.innerText = "Digite um valor válido.";
        return;
    }

    try {
        let resultado;

        if (categoria === "temperatura") {
            resultado = converterTemperatura(valor, de, para);
        } else {
            // Valu * Factor_De / Factor_Para (Considerando que fatores são para unidade BASE SI)
            // Ex: km (1000) -> m (1).  10 * 1000 / 1 = 10000.
            // Ex: m (1) -> km (1000). 10000 * 1 / 1000 = 10.
            const fatorDe = unidades[categoria][de];
            const fatorPara = unidades[categoria][para];
            if (!fatorDe || !fatorPara) throw new Error("Fator de conversão não encontrado.");

            const base = valor * fatorDe;
            resultado = base / fatorPara;
        }

        const resultadoFormatado = formatarNumero(resultado);
        const nomeDe = nomes[categoria][de] || de;
        const nomePara = nomes[categoria][para] || para;

        const resultadoTexto = `${valor} ${nomeDe} = ${resultadoFormatado} ${nomePara}`;

        resultadoDiv.innerText = resultadoTexto;

        // Adicionar ao histórico
        addToHistory({
            categoria,
            valorOriginal: valor,
            unidadeOriginal: de,
            valorConvertido: resultado,
            unidadeConvertida: para,
            timestamp: new Date().toISOString()
        });

        saveHistory();
        updateHistoryDisplay();

    } catch (e) {
        errorDiv.innerText = e.message;
        errorDiv.style.display = 'block';
    }
}

function swapUnits() {
    const de = document.getElementById("de");
    const para = document.getElementById("para");
    const temp = de.value;
    de.value = para.value;
    para.value = temp;

    const valorInput = document.getElementById("valor");
    if (valorInput.value && !isNaN(parseFloat(valorInput.value))) {
        converter();
    }
}

function addToHistory(conversion) {
    history.unshift(conversion);
    if (history.length > 10) {
        history.pop();
    }
}

function saveHistory() {
    localStorage.setItem('conversionHistory', JSON.stringify(history));
}

function restoreHistory(item) {
    // Tenta restaurar o estado da conversão
    // 1. Categoria
    const catSelect = document.getElementById("categoria");
    catSelect.value = item.categoria;

    // Se a categoria não existir mais (mudanças de versão), ignora
    if (catSelect.value !== item.categoria) return;

    // 2. Atualizar Unidades
    atualizarUnidades();

    // 3. Preencher Valores
    document.getElementById("valor").value = item.valorOriginal;
    document.getElementById("de").value = item.unidadeOriginal;
    document.getElementById("para").value = item.unidadeConvertida;

    // 4. Executar
    converter();
}

function updateHistoryDisplay() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = '';

    history.forEach((item) => {
        // Verifica se temos nomes para exibir (compatibilidade com histórico antigo)
        const catNomes = nomes[item.categoria] || {};
        const nomeDe = catNomes[item.unidadeOriginal] || item.unidadeOriginal;
        const nomePara = catNomes[item.unidadeConvertida] || item.unidadeConvertida;

        const formattedValue = formatarNumero(item.valorConvertido);

        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        historyItem.title = "Clique para restaurar esta conversão";
        historyItem.onclick = () => restoreHistory(item);

        historyItem.innerHTML = `
        ${item.valorOriginal} ${nomeDe} 
        → ${formattedValue} ${nomePara}
        <small>(${new Date(item.timestamp).toLocaleString()})</small>
      `;
        historyList.appendChild(historyItem);
    });
}

function clearHistory() {
    history = [];
    saveHistory();
    updateHistoryDisplay();
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);

    const themeToggle = document.getElementById("themeToggle");
    themeToggle.textContent = darkMode ? "🌞" : "🌑";
}

function toggleSciNotation() {
    const checkbox = document.getElementById("sciNotationCheck");
    forceSciNotation = checkbox.checked;
    // Refaz conversão se houver resultado visível
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv.innerText !== "") {
        converter();
    }
}

function toggleSources() {
    const el = document.getElementById("sourcesContainer");
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// --- Lógica Geográfica ---

function updateScaleUI() {
    const mode = document.getElementById("scaleMode").value;
    const container = document.getElementById("inputContainer");

    let html = '';

    if (mode === 'escala') {
        html = `
        <label>Distância no Mapa (d):</label>
        <div style="display: flex; gap: 10px;">
          <input type="number" id="geoMapDist" placeholder="Ex: 5" style="margin-bottom:0;">
          <select id="geoMapUnit" style="width: 100px; margin-bottom:0;">
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
        </div>
        
        <label style="margin-top: 15px;">Distância Real (D):</label>
        <div style="display: flex; gap: 10px;">
          <input type="number" id="geoRealDist" placeholder="Ex: 10" style="margin-bottom:0;">
          <select id="geoRealUnit" style="width: 100px; margin-bottom:0;">
            <option value="km" selected>km</option>
            <option value="m">m</option>
          </select>
        </div>
      `;
    } else if (mode === 'real') {
        html = `
         <label>Escala (1:E):</label>
         <input type="number" id="geoScale" placeholder="Ex: 50000 (digite apenas o denominador)" style="margin-bottom:10px;">
         
         <label>Distância no Mapa (d):</label>
         <div style="display: flex; gap: 10px;">
          <input type="number" id="geoMapDist" placeholder="Ex: 5" style="margin-bottom:0;">
           <select id="geoMapUnit" style="width: 100px; margin-bottom:0;">
            <option value="cm">cm</option>
            <option value="mm">mm</option>
          </select>
         </div>
         
         <label style="margin-top: 15px;">Unidade de Saída:</label>
         <select id="geoResultUnit" style="margin-bottom:0;">
            <option value="km">Quilômetros (km)</option>
            <option value="m">Metros (m)</option>
         </select>
      `;
    } else if (mode === 'mapa') {
        html = `
         <label>Escala (1:E):</label>
         <input type="number" id="geoScale" placeholder="Ex: 50000 (digite apenas o denominador)" style="margin-bottom:10px;">
         
         <label>Distância Real (D):</label>
         <div style="display: flex; gap: 10px;">
          <input type="number" id="geoRealDist" placeholder="Ex: 2.5" style="margin-bottom:0;">
           <select id="geoRealUnit" style="width: 100px; margin-bottom:0;">
            <option value="km" selected>km</option>
            <option value="m">m</option>
          </select>
         </div>
         
         <label style="margin-top: 15px;">Unidade de Saída:</label>
         <select id="geoResultUnit" style="margin-bottom:0;">
            <option value="cm">Centímetros (cm)</option>
            <option value="mm">Milímetros (mm)</option>
         </select>
      `;
    }

    container.innerHTML = html;
    document.getElementById("geoResult").innerText = '';
}

function calculateGeoScale() {
    const mode = document.getElementById("scaleMode").value;
    const resultDiv = document.getElementById("geoResult");

    const toCm = { 'km': 100000, 'm': 100, 'cm': 1, 'mm': 0.1 };

    try {
        if (mode === 'escala') {
            const mapDist = parseFloat(document.getElementById("geoMapDist").value);
            const mapUnit = document.getElementById("geoMapUnit").value;
            const realDist = parseFloat(document.getElementById("geoRealDist").value);
            const realUnit = document.getElementById("geoRealUnit").value;

            if (!mapDist || !realDist) throw new Error("Preencha todos os campos.");
            if (mapDist <= 0 || realDist <= 0) throw new Error("Distâncias devem ser positivas.");

            const mapDistCm = mapDist * toCm[mapUnit];
            const realDistCm = realDist * toCm[realUnit];

            const scale = realDistCm / mapDistCm;
            resultDiv.innerText = `Escala: 1:${Math.round(scale).toLocaleString('pt-BR')}`;

        } else if (mode === 'real') {
            const scale = parseFloat(document.getElementById("geoScale").value);
            const mapDist = parseFloat(document.getElementById("geoMapDist").value);
            const mapUnit = document.getElementById("geoMapUnit").value;
            const outUnit = document.getElementById("geoResultUnit").value;

            if (!scale || !mapDist) throw new Error("Preencha todos os campos.");
            if (scale <= 0) throw new Error("Escala deve ser positiva.");
            if (mapDist <= 0) throw new Error("Distância no mapa deve ser positiva.");

            const mapDistCm = mapDist * toCm[mapUnit];
            const realDistCm = scale * mapDistCm;
            const finalVal = realDistCm / toCm[outUnit];

            resultDiv.innerText = `Distância Real: ${finalVal.toLocaleString('pt-BR')} ${outUnit}`;

        } else if (mode === 'mapa') {
            const scale = parseFloat(document.getElementById("geoScale").value);
            const realDist = parseFloat(document.getElementById("geoRealDist").value);
            const realUnit = document.getElementById("geoRealUnit").value;
            const outUnit = document.getElementById("geoResultUnit").value;

            if (!scale || !realDist) throw new Error("Preencha todos os campos.");
            if (scale <= 0) throw new Error("Escala deve ser positiva.");
            if (realDist <= 0) throw new Error("Distância real deve ser positiva.");

            const realDistCm = realDist * toCm[realUnit];
            const mapDistCm = realDistCm / scale;
            const finalVal = mapDistCm / toCm[outUnit];

            resultDiv.innerText = `Distância no Mapa: ${finalVal.toLocaleString('pt-BR')} ${outUnit}`;
        }
    } catch (e) {
        resultDiv.innerText = e.message || "Erro no cálculo.";
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    const categoriaSelect = document.getElementById("categoria");
    Object.keys(nomes).sort().forEach(categoria => {
        // Capitalizar primeira letra
        const label = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        const option = new Option(label, categoria);
        categoriaSelect.appendChild(option);
    });

    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    document.getElementById("themeToggle").textContent = darkMode ? "🌞" : "🌑";

    document.getElementById("themeToggle").addEventListener('click', toggleDarkMode);
    document.getElementById("clearHistory").addEventListener('click', clearHistory);
    document.getElementById("sciNotationCheck").addEventListener('change', toggleSciNotation);

    atualizarUnidades();
    updateHistoryDisplay();
    updateScaleUI();
});
