let claseSeleccionada = null; 
let indexActual = 0;

// 1. Cargar el Menú Principal (Agrupado por Unidades)
function renderHome() {
    const grid = document.getElementById('class-grid');
    let htmlContent = '';

    // Recorremos cada "carpeta" o unidad
    bancoDeUnidades.forEach((unidad, uIndex) => {
        // Generamos un encabezado visual para la Unidad
        htmlContent += `
            <div style="grid-column: 1 / -1; margin-top: 20px;">
                <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; font-size: 1.8rem;">
                    ${unidad.nombreUnidad}
                </h2>
            </div>
        `;

        // Si la unidad tiene clases, generamos sus tarjetas
        if (unidad.clases && unidad.clases.length > 0) {
            unidad.clases.forEach((clase, cIndex) => {
                // Ahora enviamos las dos "coordenadas": índice de unidad e índice de clase
                htmlContent += `
                    <div class="class-card" onclick="iniciarClase(${uIndex}, ${cIndex})">
                        <h2>${clase.nombre}</h2>
                        <p style="color: #94a3b8;">${clase.diapositivas ? clase.diapositivas.length : 0} diapositivas preparadas</p>
                    </div>
                `;
            });
        } else {
            // Mensaje temporal si la unidad aún está vacía
            htmlContent += `
                <div style="grid-column: 1 / -1; color: #94a3b8; font-style: italic;">
                    Contenido en desarrollo para esta unidad...
                </div>
            `;
        }
    });

    grid.innerHTML = htmlContent;
}

// 2. Entrar a una Clase (Actualizado para recibir las dos coordenadas)
function iniciarClase(uIndex, cIndex) {
    // Buscamos la clase exacta dentro de la unidad seleccionada
    claseSeleccionada = bancoDeUnidades[uIndex].clases[cIndex];
    indexActual = 0;
    
    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('app-screen').classList.remove('hidden');
    
    mostrarContenido();
}

// 3. Volver al Menú
function volverAlInicio() {
    if(typeof timerInterval !== 'undefined') clearInterval(timerInterval); 
    document.getElementById('app-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');
}

// 4. Lógica interna de la clase (Se mantiene intacta)
function renderSidebar() {
    const list = document.getElementById('module-list');
    if (!list || !claseSeleccionada) return;
    list.innerHTML = claseSeleccionada.diapositivas.map((slide, i) => `
        <li class="${i === indexActual ? 'active' : ''}" onclick="irAClase(${i})">
            ${slide.titulo}
        </li>
    `).join('');
}

function mostrarContenido() {
    const slide = claseSeleccionada.diapositivas[indexActual];
    const titleEl = document.getElementById('class-title');
    const bodyEl = document.getElementById('dynamic-body');
    const bar = document.getElementById('bar');

    if (titleEl && bodyEl) {
        titleEl.innerText = slide.titulo;
        bodyEl.innerHTML = slide.contenido;
        
        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise([bodyEl]).catch(err => console.log('Error MathJax: ' + err.message));
        }
    }

    if (bar) {
        const porcentaje = ((indexActual + 1) / claseSeleccionada.diapositivas.length) * 100;
        bar.style.width = `${porcentaje}%`;
    }

    renderSidebar();
}

function nextStep() {
    if (indexActual < claseSeleccionada.diapositivas.length - 1) {
        indexActual++;
        mostrarContenido();
    }
}

function prevStep() {
    if (indexActual > 0) {
        indexActual--;
        mostrarContenido();
    }
}

function irAClase(i) {
    indexActual = i;
    mostrarContenido();
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.toggle('collapsed');
}

// Iniciar cargando el menú principal
window.onload = renderHome;