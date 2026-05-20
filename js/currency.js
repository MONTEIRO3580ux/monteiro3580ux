// currency.js



async function carregarMoedas() {
    const API_KEY = "f0a8db2aa0f7b022147ce2c0";
    const cacheKey = "currencyRates";
    const cacheTimeKey = "currencyTimestamp";
    const now = new Date().getTime();
    
    const cachedRates = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

    if (cachedRates && cachedTime && (now - cachedTime < 86400000)) {
        popularMoedas(JSON.parse(cachedRates));
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
        const data = await response.json();
        if (data.result === "success") {
            localStorage.setItem(cacheKey, JSON.stringify(data.conversion_rates));
            localStorage.setItem(cacheTimeKey, now.toString());
            popularMoedas(data.conversion_rates);
        } else {
            throw new Error("Erro na API de moedas");
        }
    } catch (e) {
        console.error("Falha ao carregar moedas:", e);
        if (cachedRates) {
            popularMoedas(JSON.parse(cachedRates));
        } else {
            popularMoedas({ "USD": 1, "BRL": 5.0, "EUR": 0.92 });
        }
    }
}

function popularMoedas(rates) {
    unidades["moedas"] = rates;
    const nomesPopulares = {
        "USD": "Dólar Americano (USD)",
        "BRL": "Real Brasileiro (BRL)",
        "EUR": "Euro (EUR)",
        "GBP": "Libra Esterlina (GBP)",
        "JPY": "Iene Japonês (JPY)",
        "CAD": "Dólar Canadense (CAD)",
        "AUD": "Dólar Australiano (AUD)",
        "CHF": "Franco Suíço (CHF)",
        "CNY": "Yuan Chinês (CNY)",
        "ARS": "Peso Argentino (ARS)"
    };
    
    nomes["moedas"] = {};
    for (let code in rates) {
        nomes["moedas"][code] = nomesPopulares[code] || code;
    }
    
    const deMoeda = document.getElementById("deMoeda");
    const paraMoeda = document.getElementById("paraMoeda");
    
    if (deMoeda && paraMoeda) {
        deMoeda.innerHTML = "";
        paraMoeda.innerHTML = "";
        Object.keys(nomes["moedas"]).sort((a, b) => {
            const labelA = nomes["moedas"][a] || a;
            const labelB = nomes["moedas"][b] || b;
            return labelA.localeCompare(labelB);
        }).forEach(code => {
            const label = nomes["moedas"][code];
            deMoeda.appendChild(new Option(label, code));
            paraMoeda.appendChild(new Option(label, code));
        });
        
        if (Array.from(deMoeda.options).some(op => op.value === "USD")) deMoeda.value = "USD";
        if (Array.from(paraMoeda.options).some(op => op.value === "BRL")) paraMoeda.value = "BRL";
    }
}

function converterMoeda() {
    const valorInput = document.getElementById("valorMoeda");
    const valor = parseFloat(valorInput.value);
    const de = document.getElementById("deMoeda").value;
    const para = document.getElementById("paraMoeda").value;
    const errorDiv = document.getElementById("error-message-moeda");
    const resultadoDiv = document.getElementById("resultadoMoeda");
    const copyBtn = document.getElementById("copyBtnMoeda");

    errorDiv.style.display = 'none';
    resultadoDiv.innerText = '';
    if (copyBtn) copyBtn.style.display = 'none';
    valorInput.classList.remove("input-error");

    if (isNaN(valor)) {
        resultadoDiv.innerText = "Digite um valor válido.";
        return;
    }

    try {
        const rateDe = unidades["moedas"][de];
        const ratePara = unidades["moedas"][para];
        if (!rateDe || !ratePara) throw new Error("Taxa de câmbio não encontrada.");
        
        const baseUsd = valor / rateDe;
        const resultado = baseUsd * ratePara;
        
        const resultadoFormatado = formatarNumero(resultado);
        const nomeDe = nomes["moedas"][de] || de;
        const nomePara = nomes["moedas"][para] || para;

        resultadoDiv.innerText = `${valor} ${nomeDe} = ${resultadoFormatado} ${nomePara}`;
        if (copyBtn) {
            copyBtn.style.display = "inline-block";
            copyBtn.dataset.copyText = `${resultadoFormatado} ${nomePara}`;
        }

        mostrarConversoesRapidasMoeda(valor, de);
    } catch(e) {
        errorDiv.innerText = e.message;
        errorDiv.style.display = 'block';
        valorInput.classList.add("input-error");
    }
}

function swapMoedas() {
    const de = document.getElementById("deMoeda");
    const para = document.getElementById("paraMoeda");
    const temp = de.value;
    de.value = para.value;
    para.value = temp;

    const valorInput = document.getElementById("valorMoeda");
    if (valorInput.value && !isNaN(parseFloat(valorInput.value))) {
        converterMoeda();
    }
}

function filtrarOpcoesMoeda(selectId, termo) {
    const select = document.getElementById(selectId);
    const unidadesDaCat = nomes["moedas"] || {};
    const valorAtual = select.value;
    select.innerHTML = "";
    
    Object.keys(unidadesDaCat).sort((a, b) => {
        const labelA = unidadesDaCat[a] || a;
        const labelB = unidadesDaCat[b] || b;
        return labelA.localeCompare(labelB);
    }).forEach(unidade => {
        const label = unidadesDaCat[unidade] || unidade;
        if (label.toLowerCase().includes(termo.toLowerCase()) || unidade.toLowerCase().includes(termo.toLowerCase())) {
            select.appendChild(new Option(label, unidade));
        }
    });

    if (Array.from(select.options).some(op => op.value === valorAtual)) {
        select.value = valorAtual;
    } else if (select.options.length > 0) {
        select.selectedIndex = 0;
    }
    converterMoeda();
}

function mostrarConversoesRapidasMoeda(valor, de) {
    const quickDiv = document.getElementById("quickConversionsMoeda");
    if(!quickDiv) return;
    quickDiv.innerHTML = "";
    let unidadesMostrar = ["USD", "EUR", "BRL", "GBP"];
    unidadesMostrar = unidadesMostrar.filter(u => u !== de && unidades["moedas"][u]).slice(0, 4);
    if (unidadesMostrar.length === 0) return;

    let html = `<div style="font-size: 14px; margin-bottom: 8px; color: var(--secondary-text);">Outras moedas:</div><div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">`;

    unidadesMostrar.forEach(para => {
        try {
            const rateDe = unidades["moedas"][de];
            const ratePara = unidades["moedas"][para];
            const resultadoRapido = (valor / rateDe) * ratePara;
            const resForm = formatarNumero(resultadoRapido);
            html += `<div class="quick-card" title="${nomes["moedas"][para]}"><strong>${resForm}</strong> ${para}</div>`;
        } catch(e) {}
    });

    html += `</div>`;
    quickDiv.innerHTML = html;
}
