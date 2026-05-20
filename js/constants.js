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
        "tarefa (Bahia)": 4356 
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
    "dados_si (decimal)": {
        "bit": 0.125, 
        "byte (B)": 1,
        "kilobyte (kB)": 1000,
        "megabyte (MB)": 1e6,
        "gigabyte (GB)": 1e9,
        "terabyte (TB)": 1e12,
        "petabyte (PB)": 1e15
    },
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
    "força": { 
        "dina": 1e-5,
        "kgf": 9.80665,
        "kN": 1000,
        "lbf": 4.448222,
        "N": 1
    },
    "torque": { 
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
    "iluminação (lux)": { 
        "lux (lx)": 1,
        "foot-candle (fc)": 10.7639
    },
    "massa": {
        "arroba (@)": 15, 
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
        "cal/s": 4.184, 
        "CV": 735.49875,
        "HP": 745.69987, 
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
    "radioatividade (atividade)": { 
        "becquerel (Bq)": 1,
        "curie (Ci)": 3.7e10,
        "rutherford (Rd)": 1e6
    },
    "radioatividade (dose)": { 
        "gray (Gy)": 1,
        "sievert (Sv)": 1, 
        "rad": 0.01,
        "rem": 0.01
    },
    "temperatura": { 
        "C": 1,
        "F": 1,
        "K": 1,
        "R": 1
    },
    "tempo": {
        "ano (gregoriano)": 31556952, 
        "dia": 86400,
        "h": 3600,
        "mês (médio)": 2.628e6, 
        "min": 60,
        "ms": 0.001,
        "ns": 1e-9,
        "s": 1,
        "semana": 604800,
        "µs": 1e-6
    },
    "velocidade": {
        "km/h": 0.277778,
        "Mach (nível do mar, 15°C)": 340.3, 
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
        "L": 0.001, 
        "m³": 1,
        "mL": 1e-6,
        "pt (US líquido)": 0.000473176,
        "qt (US líquido)": 0.000946353,
        "xícara (métrica)": 0.000250 
    },
    "vazão": {
        "cfm": 0.000471947,
        "gpm (US)": 0.0000630902,
        "m³/h": 0.000277778,
        "L/s": 0.001
    },
    "culinária (volume)": {
        "mL": 1,
        "L": 1000,
        "colher de chá": 5,
        "colher de sopa": 15,
        "xícara (chá)": 240,
        "copo americano": 190,
        "onça fluida (fl oz)": 29.5735
    },
    "consumo de combustível": {
        "km/L": 1,
        "L/100km": -1, 
        "MPG (US)": 0.425144,
        "MPG (UK)": 0.354006
    },
    "moedas": {}
};

// Mapeamento de nomes amigáveis para UI
const nomes = {
    "ângulo": { "grau": "Grau", "radiano": "Radiano", "minuto de arco": "Minuto de arco", "segundo de arco": "Segundo de arco", "volta": "Volta", "mil": "Mil angular" },
    "área": { "m²": "Metro quadrado", "km²": "Quilômetro quadrado", "cm²": "Centímetro quadrado", "mm²": "Milímetro quadrado", "ha": "Hectare", "acre": "Acre", "are (a)": "Are", "centiare (ca)": "Centiare", "pé²": "Pé quadrado", "jarda²": "Jarda quadrada", "polegada²": "Polegada quadrada", "milha²": "Milha quadrada", "tarefa (Bahia)": "Tarefa (Bahia)" },
    "comprimento": { "m": "Metro", "km": "Quilômetro", "cm": "Centímetro", "mm": "Milímetro", "µm": "Micrômetro", "nm": "Nanômetro", "mi": "Milha", "yd": "Jarda", "ft": "Pé", "in": "Polegada", "milha náutica": "Milha náutica", "ano-luz": "Ano-luz", "parsec (pc)": "Parsec", "UA (Unidade Astronômica)": "Unidade Astronômica" },
    "dados_si (decimal)": { "byte (B)": "Byte", "kilobyte (kB)": "Kilobyte (10³)", "megabyte (MB)": "Megabyte (10⁶)", "gigabyte (GB)": "Gigabyte (10⁹)", "terabyte (TB)": "Terabyte (10¹²)", "petabyte (PB)": "Petabyte (10¹⁵)", "bit": "Bit" },
    "dados_iec (binário)": { "byte (B)": "Byte", "kibibyte (KiB)": "Kibibyte (2¹⁰)", "mebibyte (MiB)": "Mebibyte (2²⁰)", "gibibyte (GiB)": "Gibibyte (2³⁰)", "tebibyte (TiB)": "Tebibyte (2⁴⁰)", "pebibyte (PiB)": "Pebibyte (2⁵⁰)", "bit": "Bit" },
    "energia": { "J": "Joule", "kJ": "Quilojoule", "MJ": "Megajoule", "cal": "Caloria", "kcal": "Quilocaloria", "Wh": "Watt-hora", "kWh": "Quilowatt-hora", "BTU": "BTU", "erg": "Erg", "eV": "Elétron-volt" },
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
    "vazão": { "m³/h": "Metro cúbico por hora", "L/s": "Litro por segundo", "cfm": "Pé cúbico por minuto", "gpm (US)": "Galão por minuto (US)" },
    "culinária (volume)": { "mL": "Mililitro (mL)", "L": "Litro (L)", "colher de chá": "Colher de Chá (5ml)", "colher de sopa": "Colher de Sopa (15ml)", "xícara (chá)": "Xícara de Chá (240ml)", "copo americano": "Copo Americano (190ml)", "onça fluida (fl oz)": "Onça Fluida (US)" },
    "consumo de combustível": { "km/L": "Quilômetros por Litro (km/L)", "L/100km": "Litros por 100 km", "MPG (US)": "Milhas por Galão (US)", "MPG (UK)": "Milhas por Galão (UK)" },
    "moedas": {}
};

const siBaseUnits = {
    "ângulo": "radiano (rad)",
    "área": "metro quadrado (m²)",
    "comprimento": "metro (m)",
    "dados_si (decimal)": "byte (B)",
    "dados_iec (binário)": "byte (B)",
    "energia": "joule (J)",
    "força": "newton (N)",
    "torque": "newton-metro (N·m)",
    "frequência": "hertz (Hz)",
    "iluminação (lux)": "lux (lx)",
    "massa": "quilograma (kg)",
    "potência": "watt (W)",
    "pressão": "pascal (Pa)",
    "radioatividade (atividade)": "becquerel (Bq)",
    "radioatividade (dose)": "gray (Gy) / sievert (Sv)",
    "temperatura": "kelvin (K)",
    "tempo": "segundo (s)",
    "velocidade": "metro por segundo (m/s)",
    "volume": "metro cúbico (m³)",
    "vazão": "metro cúbico por segundo (m³/s)",
    "culinária (volume)": "mililitro (mL)",
    "consumo de combustível": "quilômetros por litro (km/L)",
    "moedas": "dólar americano (USD) - Taxas ao vivo"
};

const categoryWarnings = {
    "temperatura": "Nota: Escalas de temperatura têm origens diferentes (0°C ≠ 0°F), não apenas fatores multiplicativos.",
    "velocidade": "Nota: 'Mach' depende da temperatura e pressão do meio. Valor padronizado para nível do mar a 15°C.",
    "iluminação (lux)": "Nota: Conversões simplificadas. Fluxo luminoso real depende da geometria da fonte e distância."
};
