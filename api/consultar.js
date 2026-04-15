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
        const res = await fetch('/api/consultar', {   // ←←← Ruta relativa (importante)
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pregunta: mensajeTexto })
        });

        if (!res.ok) throw new Error('Error del servidor');

        const data = await res.json();

        document.getElementById(idPensando).remove();

        const textoFormateado = (data.respuesta || "No recibí respuesta.").replace(/\n/g, "<br>");
        cajaMensajes.innerHTML += `<div class="mensaje ia">${textoFormateado}</div>`;

        if (window.MathJax) MathJax.typesetPromise().catch(() => {});

    } catch (err) {
        document.getElementById(idPensando).remove();
        cajaMensajes.innerHTML += `<div class="mensaje ia" style="color:#ef4444;">❌ Error de conexión con el Tutor IA</div>`;
    }

    cajaMensajes.scrollTop = cajaMensajes.scrollHeight;
}
