// main.js





document.addEventListener('DOMContentLoaded', function () {
    const categoriaSelect = document.getElementById("categoria");
    Object.keys(nomes).sort((a, b) => a.localeCompare(b)).forEach(categoria => {
        if(categoria !== "moedas") {
            const label = categoria.charAt(0).toUpperCase() + categoria.slice(1);
            const option = new Option(label, categoria);
            categoriaSelect.appendChild(option);
        }
    });

    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    document.getElementById("themeToggle").textContent = darkMode ? "🌞" : "🌑";

    // Fechar modal ao clicar fora dele
    window.onclick = function(event) {
        const modal = document.getElementById("versionModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Configurar scroll spy para navegação ativa
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll(".main-nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 15) {
            current = "documentacao";
        }

        navLinks.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href") === `#${current}`) {
                a.classList.add("active");
            }
        });
    });

    atualizarUnidades();
    updateHistoryDisplay();
    updateScaleUI('escala', document.getElementById("inputContainer"));
    carregarMoedas();
});

// --- Service Worker para PWA ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registrado com sucesso:', registration.scope);
      })
      .catch(error => {
        console.log('Falha ao registrar o ServiceWorker:', error);
      });
  });
}
