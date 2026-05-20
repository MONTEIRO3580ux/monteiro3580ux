// ui.js




let darkMode = localStorage.getItem('darkMode') === 'true';

function atualizarUnidades() {
    const categoria = document.getElementById("categoria").value;
    const de = document.getElementById("de");
    const para = document.getElementById("para");
    const siInfoStr = siBaseUnits[categoria] ? `Unidade Base SI: <strong>${siBaseUnits[categoria]}</strong>` : "";
    const warningStr = categoryWarnings[categoria] || "";

    document.getElementById("siBaseInfo").innerHTML = siInfoStr;
    const warningDiv = document.getElementById("warningMessage");

    if (warningStr) {
        warningDiv.innerText = warningStr;
        warningDiv.style.display = "block";
    } else {
        warningDiv.style.display = "none";
    }

    if(document.getElementById("buscaDe")) document.getElementById("buscaDe").value = "";
    if(document.getElementById("buscaPara")) document.getElementById("buscaPara").value = "";

    de.innerHTML = "";
    para.innerHTML = "";

    const keys = Object.keys(nomes[categoria] || {});
    keys.sort((a, b) => {
        const labelA = nomes[categoria][a] || a;
        const labelB = nomes[categoria][b] || b;
        return labelA.localeCompare(labelB);
    });

    if (keys.length === 0) return;

    keys.forEach(unidade => {
        const label = nomes[categoria][unidade] || unidade;
        de.appendChild(new Option(label, unidade));
        para.appendChild(new Option(label, unidade));
    });

    if (keys.length >= 2) {
        de.selectedIndex = 0;
        para.selectedIndex = 1;
    }

    if (categoria === "temperatura") { de.value = "C"; para.value = "F"; }
    else if (categoria.startsWith("dados")) { de.value = "megabyte (MB)" || de.options[0].value; para.value = "gigabyte (GB)" || para.options[1].value; }

    clearErrorStyles();
}

function filtrarOpcoes(selectId, termo) {
    const select = document.getElementById(selectId);
    const categoria = document.getElementById("categoria").value;
    const unidadesDaCat = nomes[categoria] || {};
    
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
    
    converter(); 
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
    valorInput.classList.remove("input-error");

    if (isNaN(valor)) {
        resultadoDiv.innerText = "Digite um valor válido.";
        return;
    }

    try {
        let resultado;

        if (categoria === "temperatura") {
            resultado = converterTemperatura(valor, de, para);
        } else if (categoria === "consumo de combustível") {
            resultado = converterCombustivel(valor, de, para);
        } else {
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

        const copyBtn = document.getElementById("copyBtn");
        if (copyBtn) {
            copyBtn.style.display = "inline-block";
            copyBtn.dataset.copyText = `${resultadoFormatado} ${nomePara}`; 
        }

        mostrarConversoesRapidas(categoria, valor, de);

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
        valorInput.classList.add("input-error");
    }
}

function clearInputs() {
    const valorInput = document.getElementById("valor");
    valorInput.value = "";
    document.getElementById("resultado").innerText = "";
    const copyBtn = document.getElementById("copyBtn");
    if(copyBtn) copyBtn.style.display = "none";
    document.getElementById("quickConversions").innerHTML = "";
    document.getElementById("error-message").style.display = "none";
    clearErrorStyles();
    valorInput.focus();
}

function clearErrorStyles() {
    document.getElementById("valor").classList.remove("input-error");
    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
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

function copyToClipboard(btnId) {
    const copyBtn = document.getElementById(btnId);
    if (!copyBtn) return;
    const textToCopy = copyBtn.dataset.copyText;
    
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.innerText = "✅";
            copyBtn.classList.add("copied");
            setTimeout(() => {
                copyBtn.innerText = "📋";
                copyBtn.classList.remove("copied");
            }, 1500);
        }).catch(err => console.error('Falha ao copiar:', err));
    }
}

function mostrarConversoesRapidas(categoria, valor, de) {
    const quickDiv = document.getElementById("quickConversions");
    if(!quickDiv) return;
    quickDiv.innerHTML = "";
    
    const comuns = {
        "comprimento": ["cm", "m", "km"],
        "área": ["m²", "ha", "km²"],
        "massa": ["g", "kg", "lb"],
        "volume": ["mL", "L", "gal (US líquido)"],
        "temperatura": ["C", "F", "K"],
        "culinária (volume)": ["mL", "xícara (chá)", "colher de sopa"],
        "consumo de combustível": ["km/L", "L/100km", "MPG (US)"]
    };

    let unidadesMostrar = comuns[categoria];
    if (!unidadesMostrar) {
        unidadesMostrar = Object.keys(nomes[categoria] || {}).slice(0, 3);
    }
    
    unidadesMostrar = unidadesMostrar.filter(u => u !== de && unidades[categoria] && unidades[categoria][u] !== undefined).slice(0, 4);

    if (unidadesMostrar.length === 0) return;

    let html = `<div style="font-size: 14px; margin-bottom: 8px; color: var(--secondary-text);">Outras medidas:</div><div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">`;

    unidadesMostrar.forEach(para => {
        let resultadoRapido;
        try {
            if (categoria === "temperatura") {
                resultadoRapido = converterTemperatura(valor, de, para);
            } else if (categoria === "consumo de combustível") {
                resultadoRapido = converterCombustivel(valor, de, para);
            } else {
                const fatorDe = unidades[categoria][de];
                const fatorPara = unidades[categoria][para];
                resultadoRapido = (valor * fatorDe) / fatorPara;
            }
            const resForm = formatarNumero(resultadoRapido);
            const nomePara = nomes[categoria][para] || para;
            html += `<div class="quick-card" title="${nomePara}"><strong>${resForm}</strong> ${para}</div>`;
        } catch(e) {}
    });

    html += `</div>`;
    quickDiv.innerHTML = html;
}

function updateHistoryDisplay() {
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = '';
    const history = getHistory();

    history.forEach((item) => {
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

function restoreHistory(item) {
    const catSelect = document.getElementById("categoria");
    catSelect.value = item.categoria;
    if (catSelect.value !== item.categoria) return;

    atualizarUnidades();
    document.getElementById("valor").value = item.valorOriginal;
    document.getElementById("de").value = item.unidadeOriginal;
    document.getElementById("para").value = item.unidadeConvertida;

    converter();
}

function clearHistory() {
    clearHistoryData();
    updateHistoryDisplay();
}

function toggleDarkMode() {
    darkMode = !darkMode;
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
    document.getElementById("themeToggle").textContent = darkMode ? "🌞" : "🌑";
}

function toggleSciNotation() {
    const checkbox = document.getElementById("sciNotationCheck");
    setForceSciNotation(checkbox.checked);
    const resultadoDiv = document.getElementById("resultado");
    if (resultadoDiv.innerText !== "") {
        converter();
    }
}

function toggleSources() {
    const el = document.getElementById("sourcesContainer");
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

function openVersionModal(e) {
    if(e) e.preventDefault();
    document.getElementById("versionModal").style.display = "block";
}

function closeVersionModal() {
    document.getElementById("versionModal").style.display = "none";
}
