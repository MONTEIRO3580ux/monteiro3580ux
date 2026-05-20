// geoScale.js

function updateScaleUI(mode, container) {
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
}

function calculateGeoScale() {
    const mode = document.getElementById("scaleMode").value;
    const resultDiv = document.getElementById("geoResult");
    const toCm = { 'km': 100000, 'm': 100, 'cm': 1, 'mm': 0.1 };

    document.querySelectorAll('#inputContainer input').forEach(el => el.classList.remove('input-error'));
    
    const copyBtnGeo = document.getElementById("copyBtnGeo");
    if (copyBtnGeo) copyBtnGeo.style.display = "none";

    try {
        if (mode === 'escala') {
            const mapDistInput = document.getElementById("geoMapDist");
            const realDistInput = document.getElementById("geoRealDist");

            const mapDist = parseFloat(mapDistInput.value);
            const mapUnit = document.getElementById("geoMapUnit").value;
            const realDist = parseFloat(realDistInput.value);
            const realUnit = document.getElementById("geoRealUnit").value;

            if (!mapDist || !realDist) throw new Error("Preencha todos os campos.");

            let hasError = false;
            if (mapDist <= 0) {
                mapDistInput.classList.add("input-error");
                hasError = true;
            }
            if (realDist <= 0) {
                realDistInput.classList.add("input-error");
                hasError = true;
            }

            if (hasError) throw new Error("Distâncias devem ser positivas.");

            const mapDistCm = mapDist * toCm[mapUnit];
            const realDistCm = realDist * toCm[realUnit];

            const scale = realDistCm / mapDistCm;
            const finalValText = `1:${Math.round(scale).toLocaleString('pt-BR')}`;
            resultDiv.innerText = `Escala: ${finalValText}`;
            
            if (copyBtnGeo) {
                copyBtnGeo.style.display = "inline-block";
                copyBtnGeo.dataset.copyText = finalValText;
            }

        } else if (mode === 'real') {
            const scaleInput = document.getElementById("geoScale");
            const mapDistInput = document.getElementById("geoMapDist");

            const scale = parseFloat(scaleInput.value);
            const mapDist = parseFloat(mapDistInput.value);
            const mapUnit = document.getElementById("geoMapUnit").value;
            const outUnit = document.getElementById("geoResultUnit").value;

            if (!scale || !mapDist) throw new Error("Preencha todos os campos.");

            let hasError = false;
            if (scale <= 0) {
                scaleInput.classList.add("input-error");
                hasError = true;
            }
            if (mapDist <= 0) {
                mapDistInput.classList.add("input-error");
                hasError = true;
            }
            if (hasError) throw new Error("Valores devem ser positivos.");

            const mapDistCm = mapDist * toCm[mapUnit];
            const realDistCm = scale * mapDistCm;
            const finalVal = realDistCm / toCm[outUnit];
            const finalValText = `${finalVal.toLocaleString('pt-BR')} ${outUnit}`;

            resultDiv.innerText = `Distância Real: ${finalValText}`;
            
            if (copyBtnGeo) {
                copyBtnGeo.style.display = "inline-block";
                copyBtnGeo.dataset.copyText = finalValText;
            }

        } else if (mode === 'mapa') {
            const scaleInput = document.getElementById("geoScale");
            const realDistInput = document.getElementById("geoRealDist");

            const scale = parseFloat(scaleInput.value);
            const realDist = parseFloat(realDistInput.value);
            const realUnit = document.getElementById("geoRealUnit").value;
            const outUnit = document.getElementById("geoResultUnit").value;

            if (!scale || !realDist) throw new Error("Preencha todos os campos.");

            let hasError = false;
            if (scale <= 0) {
                scaleInput.classList.add("input-error");
                hasError = true;
            }
            if (realDist <= 0) {
                realDistInput.classList.add("input-error");
                hasError = true;
            }
            if (hasError) throw new Error("Valores devem ser positivos.");

            const realDistCm = realDist * toCm[realUnit];
            const mapDistCm = realDistCm / scale;
            const finalVal = mapDistCm / toCm[outUnit];
            const finalValText = `${finalVal.toLocaleString('pt-BR')} ${outUnit}`;

            resultDiv.innerText = `Distância no Mapa: ${finalValText}`;
            
            if (copyBtnGeo) {
                copyBtnGeo.style.display = "inline-block";
                copyBtnGeo.dataset.copyText = finalValText;
            }
        }
    } catch (e) {
        resultDiv.innerText = e.message || "Erro no cálculo.";
    }
}
