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
// ==========================================
// LÓGICA PARA EL GIMNASIO DE RACIONALES
// ==========================================
let solucionActualRacional = 0;

function generarEjercicioRacional() {
    let container = document.getElementById('ejercicio-container');
    let inputResp = document.getElementById('input-respuesta');
    let feedback = document.getElementById('feedback-racionales');

    // Protección anti-errores nulos
    if (!container || !inputResp || !feedback) return; 

    // 3 tipos de ejercicios
    let tipo = Math.floor(Math.random() * 3);
    let textoEjercicio = "";
    
    if (tipo === 0) {
        // Suma de fracciones con igual denominador que da entero
        let denominador = Math.floor(Math.random() * 5) + 2;
        solucionActualRacional = Math.floor(Math.random() * 6) + 1; 
        let totalNumerador = solucionActualRacional * denominador;
        let num1 = Math.floor(Math.random() * (totalNumerador - 1)) + 1;
        let num2 = totalNumerador - num1;
        textoEjercicio = "(" + num1 + "/" + denominador + ") + (" + num2 + "/" + denominador + ")";
    } 
    else if (tipo === 1) {
        // Multiplicación de fracciones cruzadas
        let c = Math.floor(Math.random() * 4) + 2;
        solucionActualRacional = Math.floor(Math.random() * 5) + 1;
        let a = solucionActualRacional * c;
        let b = Math.floor(Math.random() * 7) + 2;
        textoEjercicio = "(" + a + "/" + b + ") × (" + b + "/" + c + ")";
    } 
    else {
        // Jerarquía con enteros
        let a = Math.floor(Math.random() * 10) + 1;
        let b = Math.floor(Math.random() * 5) + 2;
        let c = Math.floor(Math.random() * 5) + 2;
        solucionActualRacional = a + (b * c);
        textoEjercicio = a + " + " + b + " × " + c;
    }

    // Actualizar la interfaz de forma segura
    container.innerHTML = textoEjercicio;
    inputResp.value = '';
    feedback.innerHTML = '¡Aplica las propiedades!';
    feedback.style.color = '#64748b';
}

function revisarRespuestaRacional() {
    let inputElement = document.getElementById('input-respuesta');
    let feedback = document.getElementById('feedback-racionales');

    if (!inputElement || !feedback) return; // Protección

    let userAns = parseInt(inputElement.value);

    if (isNaN(userAns)) {
        feedback.innerHTML = "⚠️ Ingresa un número válido.";
        feedback.style.color = "#f59e0b";
        return;
    }

    if (userAns === solucionActualRacional) {
        feedback.innerHTML = "🎉 ¡Perfecto! El resultado es " + solucionActualRacional + ".";
        feedback.style.color = "#10b981";
    } else {
        feedback.innerHTML = "❌ Revisa la jerarquía. ¡Inténtalo de nuevo!";
        feedback.style.color = "#ef4444";
    }
}
async function preguntarTutor() {
    const pregunta = document.getElementById('pregunta-ia').value;
    const boxRespuesta = document.getElementById('respuesta-ia');
    
    if (!pregunta) return;

    boxRespuesta.style.display = 'block';
    boxRespuesta.innerHTML = "Pensando... 🤔";

    try {
        const res = await fetch('http://localhost:3000/api/consultar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pregunta: pregunta })
        });
        
        const data = await res.json();
        boxRespuesta.innerHTML = "<b>Tutor dice:</b><br>" + data.respuesta;
    } catch (err) {
        boxRespuesta.innerHTML = "❌ No pude conectar con el tutor ahora.";
    }
}
// Abrir y cerrar la ventana flotante
function toggleChat() {
    const ventana = document.getElementById('ventana-chat-ia');
    ventana.classList.toggle('hidden');
}

// Permite enviar con la tecla Enter
function manejarEnter(event) {
    if (event.key === 'Enter') enviarMensajeIA();
}

async function enviarMensajeIA() {
    const input = document.getElementById('input-chat-ia');
    const mensajeTexto = input.value.trim();
    const cajaMensajes = document.getElementById('chat-mensajes');
    
    if (!mensajeTexto) return;

    // 1. Mostrar mensaje del usuario
    cajaMensajes.innerHTML += `<div class="mensaje usuario">${mensajeTexto}</div>`;
    input.value = ''; // Limpiar input
    
    // 2. Mostrar indicador de "escribiendo..."
    const idPensando = "pensando-" + Date.now();
    cajaMensajes.innerHTML += `<div id="${idPensando}" class="mensaje ia">Escribiendo... ✍️</div>`;
    
    // Auto-scroll hacia abajo
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;

    try {
        // 3. Conectar con tu Backend (Node.js)
        const res = await fetch('/api/consultar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pregunta: mensajeTexto })
        });
        
        const data = await res.json();
        
        // 4. Reemplazar "Escribiendo..." con la respuesta real
        document.getElementById(idPensando).remove();
        
        // Convertir saltos de línea de la IA en <br> de HTML
        const textoFormateado = data.respuesta.replace(/\n/g, "<br>");
        cajaMensajes.innerHTML += `<div class="mensaje ia">${textoFormateado}</div>`;
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    } catch (err) {
        document.getElementById(idPensando).remove();
        cajaMensajes.innerHTML += `<div class="mensaje ia" style="color: red;">❌ Error de conexión con el servidor. Verifica que el backend esté corriendo.</div>`;
    }
    
    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
}