// ====================== main.js ======================
// Variables globales - Declaradas SOLO UNA VEZ
let claseSeleccionada = null;
let indexActual = 0;
let timerInterval = null;        // Inicializado como null
let solucionActualRacional = 0;

// =============================================
// 1. MENÚ PRINCIPAL
// =============================================
function renderHome() {
    const grid = document.getElementById('class-grid');
    if (!grid) return;

    let htmlContent = '';

    bancoDeUnidades.forEach((unidad, uIndex) => {
        // Encabezado de Unidad (Ocupa todo el ancho y usa la etiqueta naranja)
        htmlContent += `
            <div class="unidad-header" style="grid-column: 1 / -1; margin-top: 40px; border-bottom: 2px solid var(--border-color); padding-bottom: 10px;">
                <span class="etiqueta-unidad">Sección de Estudio</span>
                <h2 style="color: var(--text-main); margin-top: 10px; font-weight: bold;">${unidad.nombreUnidad}</h2>
            </div>
        `;

        // Tarjetas de clases
        if (unidad.clases && unidad.clases.length > 0) {
            unidad.clases.forEach((clase, cIndex) => {
                const cantidad = clase.diapositivas ? clase.diapositivas.length : 0;
                
                // Usamos la etiqueta azul (etiqueta-tema) para las clases
                htmlContent += `
                    <div class="class-card" onclick="iniciarClase(${uIndex}, ${cIndex})">
                        <span class="etiqueta-tema">Tema Principal</span>
                        <h2 style="margin-top: 15px;">${clase.nombre}</h2>
                        <p class="slide-count" style="color: #64748b; font-weight: bold; margin-top: 15px;">📚 ${cantidad} diapositivas</p>
                    </div>
                `;
            });
        } else {
            htmlContent += `
                <div class="unidad-vacia" style="grid-column: 1 / -1; text-align: center; color: #64748b; padding: 20px; font-style: italic;">
                    ⏳ Contenido en desarrollo para esta unidad...
                </div>
            `;
        }
    });

    grid.innerHTML = htmlContent;
}

// =============================================
// 2. INICIAR CLASE
// =============================================
function iniciarClase(uIndex, cIndex) {
    if (!bancoDeUnidades[uIndex]?.clases[cIndex]) {
        console.error("Clase no encontrada");
        return;
    }

    claseSeleccionada = bancoDeUnidades[uIndex].clases[cIndex];
    indexActual = 0;

    document.getElementById('home-screen').classList.add('hidden');
    document.getElementById('app-screen').classList.remove('hidden');

    mostrarContenido();
}

// =============================================
// 3. VOLVER AL INICIO
// =============================================
function volverAlInicio() {
    if (timerInterval) clearInterval(timerInterval);
    
    document.getElementById('app-screen').classList.add('hidden');
    document.getElementById('home-screen').classList.remove('hidden');

    claseSeleccionada = null;
    indexActual = 0;
}

// =============================================
// 4. CONTENIDO Y SIDEBAR
// =============================================
function renderSidebar() {
    const list = document.getElementById('module-list');
    if (!list || !claseSeleccionada?.diapositivas) return;

    list.innerHTML = claseSeleccionada.diapositivas.map((slide, i) => `
        <li class="${i === indexActual ? 'active' : ''}" onclick="irAClase(${i})">
            ${slide.titulo}
        </li>
    `).join('');
}

function mostrarContenido() {
    if (!claseSeleccionada?.diapositivas) return;

    const slide = claseSeleccionada.diapositivas[indexActual];
    
    document.getElementById('class-title').textContent = slide.titulo;
    const bodyEl = document.getElementById('dynamic-body');
    bodyEl.innerHTML = slide.contenido || '<p>Contenido no disponible.</p>';

    // MathJax
    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([bodyEl]).catch(err => console.warn('MathJax:', err));
    }

    // Barra de progreso
    const bar = document.getElementById('bar');
    if (bar) {
        const porcentaje = ((indexActual + 1) / claseSeleccionada.diapositivas.length) * 100;
        bar.style.width = `${porcentaje}%`;
    }

    renderSidebar();
}

function nextStep() {
    if (!claseSeleccionada) return;
    if (indexActual < claseSeleccionada.diapositivas.length - 1) {
        indexActual++;
        mostrarContenido();
    }
}

function prevStep() {
    if (!claseSeleccionada) return;
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
    const sidebar = document.getElementById('sidebar') || document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.toggle('collapsed');
}

// =============================================
// 5. INICIALIZACIÓN
// =============================================
window.onload = renderHome;

// =============================================
// 6. GIMNASIO DE RACIONALES
// =============================================
function generarEjercicioRacional() {
    const container = document.getElementById('ejercicio-container');
    const inputResp = document.getElementById('input-respuesta');
    const feedback = document.getElementById('feedback-racionales');

    if (!container || !inputResp || !feedback) return;

    let tipo = Math.floor(Math.random() * 3);
    let textoEjercicio = "";

    if (tipo === 0) {
        let den = Math.floor(Math.random() * 5) + 2;
        solucionActualRacional = Math.floor(Math.random() * 6) + 1;
        let total = solucionActualRacional * den;
        let num1 = Math.floor(Math.random() * (total - 1)) + 1;
        textoEjercicio = `(${num1}/${den}) + (${total - num1}/${den})`;
    } else if (tipo === 1) {
        let c = Math.floor(Math.random() * 4) + 2;
        solucionActualRacional = Math.floor(Math.random() * 5) + 1;
        let a = solucionActualRacional * c;
        let b = Math.floor(Math.random() * 7) + 2;
        textoEjercicio = `(${a}/${b}) × (${b}/${c})`;
    } else {
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 5) + 2;
        let c = Math.floor(Math.random() * 5) + 2;
        solucionActualRacional = a + (b * c);
        textoEjercicio = `${a} + ${b} × ${c}`;
    }

    container.innerHTML = textoEjercicio;
    inputResp.value = '';
    feedback.innerHTML = '¡Aplica las propiedades!';
    feedback.style.color = '#64748b';
}

function revisarRespuestaRacional() {
    const inputElement = document.getElementById('input-respuesta');
    const feedback = document.getElementById('feedback-racionales');
    if (!inputElement || !feedback) return;

    const userAns = parseInt(inputElement.value);
    if (isNaN(userAns)) {
        feedback.innerHTML = "⚠️ Ingresa un número válido.";
        feedback.style.color = "#f59e0b";
        return;
    }

    if (userAns === solucionActualRacional) {
        feedback.innerHTML = `🎉 ¡Perfecto! El resultado es ${solucionActualRacional}.`;
        feedback.style.color = "#10b981";
    } else {
        feedback.innerHTML = "❌ Revisa la jerarquía. ¡Inténtalo de nuevo!";
        feedback.style.color = "#ef4444";
    }
}

// =============================================
// 7. CHAT IA
// =============================================
function toggleChat() {
    const ventana = document.getElementById('ventana-chat-ia');
    if (ventana) ventana.classList.toggle('hidden');
}

function manejarEnter(event) {
    if (event.key === 'Enter') enviarMensajeIA();
}

async function enviarMensajeIA() {
    const input = document.getElementById('input-chat-ia');
    const cajaMensajes = document.getElementById('chat-mensajes');
    
    const mensajeTexto = input.value.trim();
    if (!mensajeTexto) return;

    cajaMensajes.innerHTML += `<div class="mensaje usuario">${mensajeTexto}</div>`;
    input.value = '';

    const idPensando = "pensando-" + Date.now();
    cajaMensajes.innerHTML += `<div id="${idPensando}" class="mensaje ia">Escribiendo... ✍️</div>`;
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;

    try {
        const res = await fetch('/api/consultar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pregunta: mensajeTexto })
        });

        if (!res.ok) throw new Error('Error del servidor');

        const data = await res.json();
        document.getElementById(idPensando).remove();

        const textoFormateado = (data.respuesta || "No recibí respuesta.").replace(/\n/g, "<br>");
        cajaMensajes.innerHTML += `<div class="mensaje ia">${textoFormateado}</div>`;

        if (window.MathJax) {
            MathJax.typesetPromise().catch(() => {});
        }
    } catch (err) {
        console.error(err);
        document.getElementById(idPensando).remove();
        cajaMensajes.innerHTML += `<div class="mensaje ia" style="color:#ef4444;">❌ Error de conexión con el Tutor IA</div>`;
    }

    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
}
