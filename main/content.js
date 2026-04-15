// ====================== content.js ======================
// Funciones Universales

function checkRes(isCorrect, msgSuccess, msgError) {
    const f = document.getElementById('feedback');
    if (!f) return;

    f.classList.remove('hidden');
    if (isCorrect) {
        f.innerHTML = msgSuccess || '¡Correcto!';
        f.className = "success";
    } else {
        f.innerHTML = msgError || 'Incorrecto. Inténtalo de nuevo.';
        f.className = "error";
    }
}

function iniciarCronometro(segundos) {
    // timerInterval se declara en main.js (variable global)
    if (typeof timerInterval !== 'undefined') {
        clearInterval(timerInterval);
    }

    let tiempo = segundos;

    timerInterval = setInterval(() => {
        const display = document.getElementById('timer-display');
        if (!display) {
            clearInterval(timerInterval);
            return;
        }

        const min = Math.floor(tiempo / 60);
        const seg = tiempo % 60;
        display.innerText = `${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`;

        if (tiempo <= 60 && tiempo > 0) display.style.color = "#ef4444";
        if (tiempo <= 0) {
            clearInterval(timerInterval);
            display.innerText = "¡TIEMPO AGOTADO! 🛑";
            display.style.color = "#ef4444";
        }
        tiempo--;
    }, 1000);
}

// Exportar bancoDeUnidades para que main.js pueda usarlo
window.bancoDeUnidades = bancoDeUnidades;
const bancoDeUnidades = [
    {
        idUnidad: "unidad1",
        nombreUnidad: "Unidad 1: Números Racionales",
        clases: [
    //clase 1//
    {
        
        id: "clase1",
        nombre: "Clase 1: Operatoria de Racionales",
        diapositivas: [
            {
                
                titulo: "🧠 1. Activación de Conocimientos",
                contenido: `
                    <div class="card">
                        <h2>El engaño del infinito...</h2>
                        <p style="font-size: 2.2rem; text-align: center; margin: 30px 0;">Calcula mentalmente: $0,\\overline{3} + 0,\\overline{3} + 0,\\overline{3}$</p>
                        <div class="interact-box" style="justify-content: center;">
                            <button class="btn" onclick="checkRes(false, '', '❌ ¡Trampa visual! Piensa en fracciones: 1/3 + 1/3 + 1/3')">0,999...</button>
                            <button class="btn btn-primary" onclick="checkRes(true, '🎯 ¡Excelente! Da exactamente 1 entero.', '')">Da exactamente 1</button>
                        </div>
                        <div id="feedback" class="hidden"></div>
                    </div>
                `
            },
            {
                titulo: "⚠️ 2. La Regla de Oro",
                contenido: `
                    <div class="card" style="border-left-color: #ef4444;">
                        <h2 style="color: #ef4444;">¿Por qué no podemos sumar hacia abajo?</h2>
                        <p>Intentar sumar decimales infinitos alineando la coma es un error gravísimo, porque <b>nunca terminas de sumar</b>.</p>
                        <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 10px; text-align: center;">
                            <p style="font-size: 1.8rem; color: var(--accent);">Todo decimal periódico o semiperiódico <b>DEBE</b> transformarse a fracción antes de operar.</p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "👨‍🏫 3. Modelaje: Suma y Resta",
                contenido: `
                    <div class="card">
                        <h3>Paso a paso: $0,\\overline{4} + 0,1\\overline{6}$</h3>
                        <div class="step"><b>1: Convertir a fracción.</b><br> $0,\\overline{4} = \\frac{4}{9}$ | $0,1\\overline{6} = \\frac{15}{90}$</div>
                        <div class="step"><b>2: Simplificar.</b><br> $\\frac{15}{90}$ se simplifica a $\\frac{1}{6}$.</div>
                        <div class="step" style="border-left: 5px solid var(--accent);"><b>3: Operar (MCM).</b><br> $\\frac{4}{9} + \\frac{1}{6} = \\frac{8}{18} + \\frac{3}{18} = \\mathbf{\\frac{11}{18}}$</div>
                    </div>
                `
            },
            {
                titulo: "⏱️ 4. Práctica Independiente",
                contenido: `
                    <div class="card">
                        <h2>Evaluación Formativa</h2>
                        <div class="info-grid">
                            <div class="step"><b>A)</b> $2,\\overline{1} + 0,\\overline{8}$</div>
                            <div class="step"><b>B)</b> $0,8\\overline{3} - 0,\\overline{5}$</div>
                        </div>
                        <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                            <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">05:00</div>
                            <button class="btn btn-primary" onclick="iniciarCronometro(300)">⏳ Iniciar Tiempo</button>
                        </div>
                    </div>
                `
            }
        ]
    },
    //clase 2//
   {
        id: "clase2",
        nombre: "Clase 2: Propiedades de Adición y Multiplicación",
        diapositivas: [
            {
                titulo: "🤔 1. Activación: ¿El orden importa?",
                contenido: `
                    <div class="card">
                        <p style="font-size: 1.8rem; text-align: center; margin: 30px 0;">¿Es lo mismo $\\frac{1}{2} : \\frac{1}{4}$ que $\\frac{1}{4} : \\frac{1}{2}$?</p>
                        <div class="interact-box" style="justify-content: center;">
                            <button class="btn btn-primary" onclick="checkRes(false, '', '❌ La mitad dividida en un cuarto da 2. Un cuarto dividido en la mitad da 0,5. ¡El orden altera la división!')">Sí, da lo mismo</button>
                            <button class="btn" onclick="checkRes(true, '🎯 ¡Excelente deducción! La división NO es conmutativa.', '')">No, cambia el resultado</button>
                        </div>
                        <div id="feedback" class="hidden"></div>
                    </div>
                `
            },
            {
                titulo: "🔒 2. Propiedad de Clausura",
                contenido: `
                    <div class="card">
                        <h2>El club exclusivo de los Racionales</h2>
                        <p>La clausura significa que si operas dos números de un conjunto, el resultado <b>no se escapa</b> de ese conjunto. Siempre será una fracción o decimal.</p>
                        <div class="info-grid">
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">En la Adición</h3>
                                <p>Suma de racionales = Racional</p>
                                <p style="font-size: 1.6rem;">$\\frac{1}{2} + \\frac{1}{3} = \\mathbf{\\frac{5}{6}}$</p>
                            </div>
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">En la Multiplicación</h3>
                                <p>Multiplicación de racionales = Racional</p>
                                <p style="font-size: 1.6rem;">$\\frac{1}{2} \\cdot \\frac{1}{3} = \\mathbf{\\frac{1}{6}}$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "🔀 3. Propiedad Conmutativa",
                contenido: `
                    <div class="card">
                        <h2>El orden NO altera el resultado</h2>
                        <p>Puedes cambiar de lugar las fracciones y el resultado final será exactamente el mismo.</p>
                        <div class="info-grid">
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">En la Adición</h3>
                                <p>$\\frac{2}{5} + \\frac{1}{5} = \\frac{1}{5} + \\frac{2}{5}$</p>
                                <p style="font-size: 1.6rem;">$\\mathbf{\\frac{3}{5} = \\frac{3}{5}}$</p>
                            </div>
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">En la Multiplicación</h3>
                                <p>$\\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{3}{4} \\cdot \\frac{2}{5}$</p>
                                <p style="font-size: 1.6rem;">$\\mathbf{\\frac{6}{20} = \\frac{6}{20}}$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "🤝 4. Propiedad Asociativa",
                contenido: `
                    <div class="card">
                        <h2>Agrupa como más te convenga</h2>
                        <p>Cuando tienes tres o más fracciones, los paréntesis te dicen qué resolver primero. ¡Pero puedes agruparlos como quieras!</p>
                        <div class="info-grid" style="grid-template-columns: 1fr;">
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">En la Adición</h3>
                                <p>$(\\frac{1}{4} + \\frac{1}{4}) + \\frac{1}{2} = \\frac{1}{4} + (\\frac{1}{4} + \\frac{1}{2})$</p>
                                <p>$\\frac{2}{4} + \\frac{1}{2} = \\frac{1}{4} + \\frac{3}{4} \\rightarrow \\mathbf{1 = 1}$</p>
                            </div>
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">En la Multiplicación</h3>
                                <p>$(\\frac{1}{2} \\cdot \\frac{1}{3}) \\cdot \\frac{1}{4} = \\frac{1}{2} \\cdot (\\frac{1}{3} \\cdot \\frac{1}{4})$</p>
                                <p>$\\frac{1}{6} \\cdot \\frac{1}{4} = \\frac{1}{2} \\cdot \\frac{1}{12} \\rightarrow \\mathbf{\\frac{1}{24} = \\frac{1}{24}}$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "👻 5. Elemento Neutro",
                contenido: `
                    <div class="card">
                        <h2>El número fantasma (no hace nada)</h2>
                        <p>Es aquel número que, al operarlo con nuestra fracción, la deja exactamente igual.</p>
                        <div class="info-grid">
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">Neutro Aditivo: El Cero (0)</h3>
                                <p>Si sumas cero, nada cambia.</p>
                                <p style="font-size: 1.6rem;">$-\\frac{3}{7} + \\mathbf{0} = -\\frac{3}{7}$</p>
                            </div>
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">Neutro Multiplicativo: El Uno (1)</h3>
                                <p>Si multiplicas por uno, nada cambia.</p>
                                <p style="font-size: 1.6rem;">$\\frac{5}{8} \\cdot \\mathbf{1} = \\frac{5}{8}$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "💥 6. Elemento Inverso",
                contenido: `
                    <div class="card">
                        <h2>El aniquilador (te lleva al neutro)</h2>
                        <p>Es la pareja perfecta que destruye a la fracción original y la convierte en el elemento neutro.</p>
                        <div class="info-grid">
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">Inverso Aditivo (Opuesto)</h3>
                                <p>Mismo número, signo contrario. Da 0.</p>
                                <p style="font-size: 1.6rem;">$\\frac{4}{5} + (\\mathbf{-\\frac{4}{5}}) = 0$</p>
                            </div>
                            <div class="step">
                                <h3 style="color: var(--accent); margin-top:0;">Inverso Multiplicativo (Recíproco)</h3>
                                <p>Se voltea la fracción (el signo se mantiene). Da 1.</p>
                                <p style="font-size: 1.6rem;">$\\frac{2}{3} \\cdot \\mathbf{\\frac{3}{2}} = \\frac{6}{6} = 1$</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "🌟 7.Propiedad Distributiva",
                contenido: `
                    <div class="card" style="border-left-color: #10b981;">
                        <h2 style="color: #10b981;">Multiplicación sobre la Adición/Sustracción</h2>
                        <p>El número que multiplica por fuera se "reparte" multiplicando a <b>cada uno</b> de los términos de adentro.</p>
                        
                        <div class="step" style="text-align: center; font-size: 1.8rem; background: rgba(16, 185, 129, 0.1);">
                            $\\mathbf{\\frac{1}{2} \\cdot (\\frac{3}{5} + \\frac{1}{4}) = (\\frac{1}{2} \\cdot \\frac{3}{5}) + (\\frac{1}{2} \\cdot \\frac{1}{4})}$
                        </div>
                        <div class="step" style="text-align: center;">
                            <b>Resolviendo:</b><br>
                            $\\frac{3}{10} + \\frac{1}{8} = \\frac{12}{40} + \\frac{5}{40} = \\mathbf{\\frac{17}{40}}$
                        </div>
                    </div>
                `
            },
            {
                titulo: "👨‍🏫 8. Práctica Guiada (Pizarra)",
                contenido: `
                    <div class="card">
                        <h2>Identifiquemos al culpable</h2>
                        <p>¿Qué propiedad se está usando en cada caso?</p>
                        <div class="step">
                            <b>1)</b> $\\frac{4}{5} \\cdot \\frac{5}{4} = 1$<br>
                            <i style="color: #94a3b8;">Respuesta: Inverso Multiplicativo.</i>
                        </div>
                        <div class="step">
                            <b>2)</b> $-\\frac{2}{3} + \\frac{7}{8} = \\frac{7}{8} + (-\\frac{2}{3})$<br>
                            <i style="color: #94a3b8;">Respuesta: Conmutativa de la Adición.</i>
                        </div>
                        <div class="step" style="border-left: 5px solid var(--accent);">
                            <b>3) Resolvamos usando distributiva:</b> $2 \\cdot (\\frac{1}{4} - \\frac{1}{2})$<br>
                            $(2 \\cdot \\frac{1}{4}) - (2 \\cdot \\frac{1}{2}) = \\frac{2}{4} - \\frac{2}{2} = \\frac{1}{2} - 1 = -\\frac{1}{2}$
                        </div>
                    </div>
                `
            },
            {
                titulo: "⏱️ 9. Práctica Independiente",
                contenido: `
                    <div class="card">
                        <h2>Evaluación Formativa (Cuaderno)</h2>
                        <div class="info-grid">
                            <div class="step"><b>A) Identifica:</b><br> $\\frac{1}{9} + 0 = \\frac{1}{9}$</div>
                            <div class="step"><b>B) Aplica Inverso:</b><br> ¿Cuál es el inverso multiplicativo de $-\\frac{3}{7}$?</div>
                            <div class="step" style="grid-column: 1 / -1;"><b>C) Aplica Distributiva:</b><br> $\\frac{1}{3} \\cdot (\\frac{3}{4} + \\frac{6}{5})$</div>
                        </div>

                        <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                            <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">08:00</div>
                            <button class="btn btn-primary" onclick="iniciarCronometro(480)" style="margin-top: 15px;">⏳ Iniciar Tiempo (8 min)</button>
                            <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                        </div>

                        <div id="resp-indep" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                            <h3 style="color: #10b981; margin-top: 0;">Respuestas:</h3>
                            <p style="font-size: 1.2rem;">
                                <b>A)</b> Neutro Aditivo.<br>
                                <b>B)</b> $-\\frac{7}{3}$ (Se voltea, el signo se mantiene).<br>
                                <b>C)</b> $(\\frac{1}{3} \\cdot \\frac{3}{4}) + (\\frac{1}{3} \\cdot \\frac{6}{5}) = \\frac{1}{4} + \\frac{2}{5} = \\mathbf{\\frac{13}{20}}$
                            </p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "🕵️‍♂️ 10. Cierre: El error de Sofía",
                contenido: `
                    <div class="card" style="border-left-color: #f59e0b;">
                        <h2>Ticket de Salida</h2>
                        <p>En la prueba, Sofía tenía que resolver la siguiente resta:</p>
                        <p style="font-size: 2rem; text-align: center;">$\\frac{1}{4} - \\frac{3}{4}$</p>
                        <p>Sofía dijo: <i>"Como existe la propiedad conmutativa, prefiero restar al revés porque es más fácil: $\\frac{3}{4} - \\frac{1}{4} = \\frac{2}{4}$."</i></p>
                        
                        <div class="step" style="background: rgba(245, 158, 11, 0.1);">
                            <b>Pregunta de Metacognición:</b> ¿Cometió un error Sofía? ¿La sustracción tiene propiedad conmutativa? Discute con tu compañero de banco.
                        </div>
                    </div>
                `
            }
        ]
    },
   //clase 3//
    {
        id: "clase3",
        nombre: "Clase 3: Operaciones Combinadas",
        diapositivas: [
            {
                titulo: "📱 1. Activación: El Reto Viral",
                contenido: `
                    <div class="card">
                        <h2>El problema que divide a Internet</h2>
                        <p>Seguro has visto este tipo de ejercicios en redes sociales donde la gente se pelea en los comentarios por el resultado:</p>
                        <p style="font-size: 3rem; text-align: center; margin: 30px 0; font-family: monospace; color: var(--accent);">
                            $8 : 2 \\cdot (2 + 2)$
                        </p>
                        <div class="interact-box" style="justify-content: center;">
                            <button class="btn" onclick="checkRes(false, '', '❌ ¡Caíste en la trampa! Muchos suman, luego multiplican 2x4=8, y dividen 8:8=1. Pero ese NO es el orden correcto.')">Da 1</button>
                            <button class="btn btn-primary" onclick="checkRes(true, '🎯 ¡Exacto! Primero el paréntesis (4). Luego, multiplicaciones y divisiones se hacen de izquierda a derecha: 8:2=4, y 4x4=16.', '')">Da 16</button>
                        </div>
                        <div id="feedback" class="hidden"></div>
                    </div>
                `
            },
            {
                titulo: "🚦 2. La Jerarquía",
                contenido: `
                    <div class="card" style="border-left-color: #3b82f6;">
                        <h2 style="color: #3b82f6;">El orden estricto de las matemáticas</h2>
                        <p>Para no equivocarnos, debemos respetar el siguiente orden. En Chile muchos lo recuerdan con la sigla <b>PAPOMUDAS</b>:</p>
                        
                        <div class="info-grid" style="grid-template-columns: 1fr;">
                            <div class="step"><b>1º (PA) Paréntesis:</b> Desde el más interior hasta el más exterior.</div>
                            <div class="step"><b>2º (PO) Potencias:</b> Resolvemos los exponentes.</div>
                            <div class="step"><b>3º (MUD) Multiplicaciones y Divisiones:</b> Si hay varias juntas, <b>¡siempre de izquierda a derecha!</b></div>
                            <div class="step"><b>4º (AS) Adiciones y Sustracciones:</b> Al igual que el paso anterior, de izquierda a derecha.</div>
                        </div>
                    </div>
                `
            },
            {
                titulo: "👨‍🏫 3. Modelaje Nivel 1",
                contenido: `
                    <div class="card">
                        <h3>Paso a paso: $(\\frac{1}{2} + \\frac{1}{4}) \\cdot (\\frac{2}{3})^2$</h3>
                        <div class="step">
                            <b>Paso 1: Paréntesis.</b><br>
                            $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\mathbf{\\frac{3}{4}}$<br>
                            <i>Nuestro ejercicio queda:</i> $\\frac{3}{4} \\cdot (\\frac{2}{3})^2$
                        </div>
                        <div class="step">
                            <b>Paso 2: Potencias.</b><br>
                            $(\\frac{2}{3})^2 = \\frac{2^2}{3^2} = \\mathbf{\\frac{4}{9}}$<br>
                            <i>Nuestro ejercicio queda:</i> $\\frac{3}{4} \\cdot \\frac{4}{9}$
                        </div>
                        <div class="step" style="border-left: 5px solid var(--accent);">
                            <b>Paso 3: Multiplicación (¡y simplificamos cruzado!).</b><br>
                            $\\frac{3}{4} \\cdot \\frac{4}{9} = \\frac{12}{36} \\rightarrow \\mathbf{\\frac{1}{3}}$
                        </div>
                    </div>
                `
            },
            {
                titulo: "👨‍🏫 4. Modelaje Nivel 2 (Paréntesis anidados)",
                contenido: `
                    <div class="card">
                        <h3>Corchetes y paréntesis: $[\\frac{3}{2} - (\\frac{1}{4} \\cdot 2)] : \\frac{1}{2}$</h3>
                        <p><i>Recuerda: ¡Desde adentro hacia afuera!</i></p>
                        
                        <div class="step">
                            <b>1º Paréntesis interior:</b><br>
                            $\\frac{1}{4} \\cdot \\frac{2}{1} = \\frac{2}{4} = \\mathbf{\\frac{1}{2}}$<br>
                            <i>Queda:</i> $[\\frac{3}{2} - \\frac{1}{2}] : \\frac{1}{2}$
                        </div>
                        <div class="step">
                            <b>2º Corchete (Paréntesis exterior):</b><br>
                            $\\frac{3}{2} - \\frac{1}{2} = \\frac{2}{2} = \\mathbf{1}$<br>
                            <i>Queda:</i> $1 : \\frac{1}{2}$
                        </div>
                        <div class="step" style="border-left: 5px solid var(--accent);">
                            <b>3º División final:</b><br>
                            $1 : \\frac{1}{2} \\rightarrow 1 \\cdot \\frac{2}{1} = \\mathbf{2}$
                        </div>
                    </div>
                `
            },
            ,
            {
                titulo: "🔥 5. Modelaje Nivel 3: ",
                contenido: `
                    <div class="card" style="border-left-color: #ef4444;">
                        <h2 style="color: #ef4444;">Recordar a los periodicos</h2>
                        <p>Recuerda nuestra regla de la Clase 1: <b>Todo decimal periódico o semiperiódico debe transformarse a fracción ANTES de aplicar el PAPOMUDAS.</b></p>
                        
                        <h3>Paso a paso: $0,\\overline{6} \\cdot (\\frac{1}{2} + 0,1\\overline{6})$</h3>
                        
                        <div class="step">
                            <b>Paso 1: Transformar y simplificar.</b><br>
                            $0,\\overline{6} = \\frac{6}{9} = \\mathbf{\\frac{2}{3}}$ &nbsp;&nbsp;|&nbsp;&nbsp; $0,1\\overline{6} = \\frac{15}{90} = \\mathbf{\\frac{1}{6}}$<br>
                            <i>El ejercicio ahora se ve así:</i> $\\frac{2}{3} \\cdot (\\frac{1}{2} + \\frac{1}{6})$
                        </div>
                        <div class="step">
                            <b>Paso 2: Paréntesis (Suma con distinto denominador).</b><br>
                            $\\frac{1}{2} + \\frac{1}{6} \\rightarrow \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6}$ <i>(Simplificando por 2)</i> $= \\mathbf{\\frac{2}{3}}$<br>
                            <i>Nuestro ejercicio queda:</i> $\\frac{2}{3} \\cdot \\frac{2}{3}$
                        </div>
                        <div class="step" style="border-left: 5px solid var(--accent);">
                            <b>Paso 3: Multiplicación final.</b><br>
                            $\\frac{2}{3} \\cdot \\frac{2}{3} = \\mathbf{\\frac{4}{9}}$
                        </div>
                    </div>
                `
            },
            {
                titulo: "🤝 6. Práctica Guiada (Pizarra)",
                contenido: `
                    <div class="card">

                        <p>Construyamos el resultado juntos respetando la jerarquía:</p>
                        
                        <div class="step" style="text-align: center; font-size: 1.8rem;">
                            <b>1)</b> $1 - (\\frac{1}{3} + \\frac{1}{6}) \\cdot 2$
                        </div>
                        
                        <div class="step" style="text-align: center; font-size: 1.8rem;">
                            <b>2)</b> $(\\frac{3}{5} : \\frac{1}{5}) + (-\\frac{1}{2})^2$
                        </div>

                        <button class="btn" style="margin-top: 15px;" onclick="document.getElementById('resp-guiadas').classList.toggle('hidden')">Ver Desarrollo Final</button>
                        <div id="resp-guiadas" class="hidden" style="margin-top: 15px; color: var(--accent); font-weight: bold;">
                            1) Paréntesis: 1/2 $\\rightarrow$ Multiplicación: (1/2)*2 = 1 $\\rightarrow$ Resta: 1 - 1 = 0.<br><br>
                            2) Paréntesis 1: 3 $\\rightarrow$ Potencia: 1/4 $\\rightarrow$ Suma: 3 + 1/4 = 13/4.
                        </div>
                    </div>
                `
            },
            {
                titulo: "⏱️ 7. Práctica Independiente",
                contenido: `
                    <div class="card">
                        <h2>Desafío en tu cuaderno</h2>
                        <p>Aplica el orden de operaciones.</p>
                        
                        <div class="info-grid">
                            <div class="step"><b>A)</b> $(\\frac{5}{2} - \\frac{1}{2}) \\cdot (\\frac{1}{3})^2$</div>
                            <div class="step"><b>B)</b> $\\frac{1}{2} : \\frac{1}{4} \\cdot \\frac{3}{5}$</div>
                            <div class="step" style="grid-column: 1 / -1;"><b>C) Reto:</b> $[2 + (\\frac{1}{2} \\cdot \\frac{4}{3})] : \\frac{4}{3}$</div>
                        </div>

                        <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                            <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">10:00</div>
                            <button class="btn btn-primary" onclick="iniciarCronometro(600)" style="margin-top: 15px;">⏳ Iniciar Tiempo (10 min)</button>
                            <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                        </div>

                        <div id="resp-indep" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                            <h3 style="color: #10b981; margin-top: 0;">Resultados (Simplificados):</h3>
                            <p style="font-size: 1.5rem;"><b>A)</b> 2/9 &nbsp;|&nbsp; <b>B)</b> 6/5 &nbsp;|&nbsp; <b>C)</b> 2</p>
                        </div>
                    </div>
                `
            },
            {
                titulo: "🕵️‍♂️ 8. Cierre: Encuentra el error",
                contenido: `
                    <div class="card" style="border-left-color: #f59e0b;">
                        <h2>Ticket de Salida: El examen de Pedro</h2>
                        <p>Pedro resolvió el siguiente ejercicio así:</p>
                        
                        <div class="step" style="font-size: 1.5rem; text-align: center;">
                            $\\frac{1}{2} + \\frac{1}{2} \\cdot 4$<br><br>
                            <i>"Fácil. Primero sumo $\\frac{1}{2} + \\frac{1}{2} = 1$. Luego multiplico $1 \\cdot 4 = 4$. ¡La respuesta es 4!"</i>
                        </div>
                        
                        <div class="step" style="background: rgba(245, 158, 11, 0.1);">
                            <b>Pregunta para el curso:</b> ¿Qué regla del PAPOMUDAS olvidó Pedro? ¿Cuál es el resultado correcto que debía obtener?
                        </div>
                    </div>
                `
            }
        ]
    },
    {
    id: "u1_clase4",
    nombre: "Clase 4: 🎮 Gimnasio de Racionales y Jerarquía",
    diapositivas: [
        {
            titulo: "Generador de Operaciones",
            contenido: `
                <h2>Ponte a prueba</h2>
                <p>Resuelve las siguientes operaciones mixtas en tu cuaderno respetando la jerarquía (paréntesis, multiplicaciones/divisiones, y al final sumas/restas). <br><b>Pista:</b> Todos los ejercicios de hoy están diseñados para que el resultado final sea un <b>número entero</b>.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6; text-align: center; padding: 30px;">
                    <div id="ejercicio-container" style="font-size: 1.8em; margin-bottom: 20px; background: #f8fafc; padding: 25px; border-radius: 10px; display: inline-block; text-align: center; font-family: 'Courier New', Courier, monospace; font-weight: bold; color: #1e293b; letter-spacing: 2px;">
                        Presiona "Generar Reto" para empezar
                    </div>
                    
                    <div style="margin-top: 20px; font-size: 1.2em;">
                        <label style="font-weight: bold; color: #1e293b;">Resultado = </label>
                        <input type="number" id="input-respuesta" style="width: 100px; padding: 10px; border: 2px solid #cbd5e1; border-radius: 8px; text-align: center; font-size: 1.1em;">
                    </div>
                    
                    <div style="margin-top: 30px;">
                        <button class="btn btn-primary" onclick="revisarRespuestaRacional()" style="font-size: 1.1em; padding: 10px 20px;">✓ Comprobar</button>
                        <button class="btn" style="border: 2px solid #64748b; background: white; color: #475569; font-size: 1.1em; padding: 10px 20px; margin-left: 10px;" onclick="generarEjercicioRacional()">Generar Reto 🔄</button>
                    </div>
                    
                    <div id="feedback-racionales" style="margin-top: 20px; font-weight: bold; font-size: 1.3em; min-height: 35px;"></div>
                </div>
            `
        }
    ]
},
 ] 
},

{
    idUnidad: "unidad2",
        nombreUnidad: "Unidad 2: Potencias, de base entera y racional",
        clases: [
                {
                    id: "u2_clase1",
                nombre: "Clase 1: Potencias de base y exponente entero",
                diapositivas: [
                    {
                        titulo: "1. Definición Formal y Exponente Natural",
                        contenido: `
                            <h2>Concepto Fundamental</h2>
                            <p>Las potencias de base y exponente entero constituyen una forma rigurosa de expresar multiplicaciones iteradas de un mismo número entero. En esta estructura, la <strong>base</strong> corresponde al factor que se multiplica, mientras que el <strong>exponente</strong> determina la cantidad de veces que dicha base opera como factor por sí misma.</p>
                            
                            <div class="card" style="margin-top: 20px;">
                                <h3 style="color: #3b82f6;">Exponente Positivo (Natural)</h3>
                                <p>Si el exponente es positivo, la base se multiplica por sí misma dicha cantidad de veces. Formalmente se define como:</p>
                                
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$a^n = a \\cdot a \\cdot a \\cdot \\dots \\cdot a$$
                                </div>
                                
                                <p style="text-align: center; color: #64748b;"><i>(n veces como factor)</i></p>
                                <p><strong>Restricciones:</strong> $n \\in \\mathbb{N}$ y $a \\in \\mathbb{Z}$, con $a \\neq 0$.</p>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Propiedades: Exponente Cero y Negativo",
                        contenido: `
                            <h2>Extensiones de la Definición</h2>
                            
                            <div class="card" style="margin-bottom: 20px;">
                                <h3 style="color: #3b82f6;">Exponente Cero</h3>
                                <p>Por convención y demostración matemática, toda potencia cuya base es distinta de cero y su exponente es cero, da como resultado la unidad.</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 10px 0;">
                                    $$a^0 = 1$$
                                </div>
                                <p><strong>Restricciones:</strong> $a \\in \\mathbb{Z}$, con $a \\neq 0$.</p>
                            </div>

                            <div class="card">
                                <h3 style="color: #ef4444;">Exponente Negativo</h3>
                                <p>Si el exponente es un número entero negativo, la expresión es equivalente a una fracción cuyo numerador es $1$ y su denominador es la base elevada al exponente positivo correspondiente (su inverso multiplicativo).</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 10px 0;">
                                    $$a^{-n} = \\frac{1}{a^n} = \\frac{1}{a} \\cdot \\frac{1}{a} \\cdot \\dots \\cdot \\frac{1}{a}$$
                                </div>
                                <p style="text-align: center; color: #64748b;"><i>(n veces como factor)</i></p>
                                <p><strong>Restricciones:</strong> $n \\in \\mathbb{N}$ y $a \\in \\mathbb{Z}$, con $a \\neq 0$.</p>
                            </div>
                        `
                    },
                    {
                        titulo: "3. Análisis de Casos Prácticos",
                        contenido: `
                            <h2>Aplicación de los Teoremas</h2>
                            <p>Observe el comportamiento de la base y los signos al aplicar las definiciones anteriores:</p>
                            
                            <div class="step">
                                <strong>Caso A: Exponente Natural con base negativa</strong><br>
                                $(-3)^4 = (-3) \\cdot (-3) \\cdot (-3) \\cdot (-3) = 81$<br>
                                <em style="color: #ef4444;">Nota metodológica: El uso de paréntesis es estrictamente necesario para indicar que el signo negativo pertenece a la base.</em>
                            </div>
                            
                            <div class="step">
                                <strong>Caso B: Exponente Cero y la ausencia de paréntesis</strong><br>
                                $(-145)^0 = 1$<br>
                                $-145^0 = -1$ <br>
                                <em>(En el segundo escenario, la base es $145$, no $-145$. El operador negativo es independiente a la potencia).</em>
                            </div>
                            
                            <div class="step" style="border-left: 5px solid var(--accent);">
                                <strong>Caso C: Transformación de Exponente Negativo</strong><br>
                                $2^{-3} = \\frac{1}{2^3} = \\frac{1}{2 \\cdot 2 \\cdot 2} = \\frac{1}{8}$
                            </div>
                        `
                    }
                    ,
                    {
                        titulo: "4. Regla de los signos para potencias",
                        contenido: `
                            <h2>Análisis del Signo Resultante</h2>
                            <p>El signo del valor resultante al calcular una potencia de base y exponente entero está determinado por propiedades algebraicas específicas. Dicho signo depende conjuntamente de la naturaleza de la base y de la paridad del exponente.</p>
                            
                            <div class="card" style="margin-top: 20px;">
                                <h3 style="color: #10b981;">Base Positiva</h3>
                                <p>Si la base de la potencia es un número entero positivo ($a > 0$), el valor de la potencia será invariablemente positivo, con independencia del valor o signo que posea el exponente.</p>
                                <div style="text-align: center; margin: 10px 0; font-style: italic;">
                                    Si $a > 0 \\implies a^n > 0$, $\\forall n \\in \\mathbb{Z}$
                                </div>
                            </div>

                            <div class="card" style="border-left-color: #f59e0b;">
                                <h3 style="color: #f59e0b;">Base Negativa</h3>
                                <p>Si la base de la potencia es un número entero negativo ($a < 0$), el signo del resultado final estará condicionado estrictamente por la paridad del exponente $n$:</p>
                                
                                <ul style="line-height: 1.8; margin-top: 10px;">
                                    <li><strong>Exponente Par:</strong> El resultado será <strong>positivo</strong>. La multiplicación iterada de una cantidad par de factores negativos resulta en un producto positivo, de acuerdo con las propiedades del cuerpo de los números enteros.<br>
                                    <em>Ejemplo de comprobación:</em> $(-2)^4 = (-2) \\cdot (-2) \\cdot (-2) \\cdot (-2) = 16$</li>
                                    
                                    <li style="margin-top: 10px;"><strong>Exponente Impar:</strong> El resultado será <strong>negativo</strong>. Al multiplicar una cantidad impar de factores negativos, el producto conservará el signo negativo.<br>
                                    <em>Ejemplo de comprobación:</em> $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8$</li>
                                </ul>
                            </div>
                        `
                    }
                    ,
                    {
                        titulo: "5. Práctica Guiada: Análisis Conjunto",
                        contenido: `
                            <h2>Resolución Analítica en Pizarra</h2>
                            <p>Procedamos a evaluar las siguientes expresiones matemáticas aplicando rigurosamente los axiomas y teoremas previamente definidos. Se solicita la participación del grupo curso para su desarrollo.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr 1fr;">
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>1)</b> $(-5)^3$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>2)</b> $3^{-2}$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>3)</b> $-4^2 \\quad \\text{vs} \\quad (-4)^2$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>4)</b> $(-7)^0 + 8^0$
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-guiadas-u2c1').classList.toggle('hidden')">Desplegar Desarrollo Formal</button>
                            </div>
                            
                            <div id="resp-guiadas-u2c1" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 5px solid #3b82f6; border-radius: 8px;">
                                <h3 style="color: #3b82f6; margin-top: 0;">Desarrollo Matemático:</h3>
                                <ul style="line-height: 1.8; font-size: 1.1rem;">
                                    <li><b>1)</b> Base negativa, exponente impar $\\implies$ Resultado negativo. $(-5) \\cdot (-5) \\cdot (-5) = \\mathbf{-125}$.</li>
                                    <li><b>2)</b> Exponente negativo $\\implies$ Inverso multiplicativo. $\\frac{1}{3^2} = \\mathbf{\\frac{1}{9}}$.</li>
                                    <li><b>3)</b> El primero carece de paréntesis (el signo no se eleva): $-16$. El segundo posee paréntesis (base negativa, exponente par): $16$.</li>
                                    <li><b>4)</b> Toda base no nula elevada a cero es la unidad. Por lo tanto: $1 + 1 = \\mathbf{2}$.</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "6. Práctica Independiente: Evaluación Formativa",
                        contenido: `
                            <h2>Ejercitación Individual</h2>
                            <p>Resuelva las siguientes expresiones en su cuaderno de apuntes, explicitando el procedimiento matemático utilizado en cada caso. Dispone de 8 minutos para concluir la actividad.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>A)</b> Evaluar: $(-2)^5$</div>
                                <div class="step"><b>B)</b> Expresar como fracción: $4^{-3}$</div>
                                <div class="step"><b>C)</b> Evaluar: $-10^2$</div>
                                <div class="step"><b>D)</b> Calcular: $(-6)^0 - 2^{-1}$</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                                <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">08:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(480)" style="margin-top: 15px;">⏳ Iniciar Tiempo (8 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u2c1').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                            </div>

                            <div id="resp-indep-u2c1" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <p style="font-size: 1.4rem;">
                                    <b>A)</b> $-32$ &nbsp;|&nbsp; <b>B)</b> $\\frac{1}{64}$ &nbsp;|&nbsp; <b>C)</b> $-100$ &nbsp;|&nbsp; <b>D)</b> $1 - \\frac{1}{2} = \\mathbf{\\frac{1}{2}}$
                                </p>
                            </div>
                        `
                    },
                    {
                        titulo: "7. Cierre: Análisis de Error (Ticket de Salida)",
                        contenido: `
                            <div class="card" style="border-left-color: #f59e0b;">
                                <h2 style="color: #f59e0b;">Refutación de Argumentos Matemáticos</h2>
                                <p>Durante una evaluación académica, un estudiante de otra institución presentó la siguiente afirmación al resolver un ejercicio:</p>
                                
                                <div class="step" style="font-size: 1.5rem; text-align: center; font-style: italic;">
                                    "El resultado de $2^{-3}$ es $-8$, puesto que el exponente negativo tiene la función de transformar el resultado final en un número negativo."
                                </div>
                                
                                <div class="step" style="background: rgba(245, 158, 11, 0.1); margin-top: 20px;">
                                    <b>Cuestionamiento de Metacognición:</b><br>
                                    Redacte en su cuaderno una refutación formal a la aseveración del estudiante, empleando la definición matemática correcta de las potencias con exponente negativo. ¿Cuál es el error conceptual subyacente?
                                </div>
                            </div>
                        `
                    }
                ]
            },
           {
                id: "u2_clase2",
                nombre: "Clase 2: Potencias de base racional y exponente entero",
                diapositivas: [
                    {
                        titulo: "1. Potencias con base fraccionaria",
                        contenido: `
                            <h2>Concepto Fundamental</h2>
                            <p>Hasta ahora hemos trabajado con bases enteras. Cuando la base de una potencia es un número racional (una fracción) y su exponente es un número entero positivo, <strong>el exponente se aplica tanto al numerador como al denominador</strong> de la fracción.</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                                <h3 style="color: #3b82f6;">Exponente Entero Positivo</h3>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$(\\frac{a}{b})^n = \\frac{a^n}{b^n}$$
                                </div>
                                <p><strong>Condiciones:</strong> $a, b \\in \\mathbb{Z}$, con $b \\neq 0$ y $n \\in \\mathbb{N}$.</p>
                                
                                <div class="step" style="background: rgba(59, 130, 246, 0.05); margin-top: 15px;">
                                    <b>Ejemplo:</b> $(\\frac{2}{3})^3 = \\frac{2^3}{3^3} = \\frac{2 \\cdot 2 \\cdot 2}{3 \\cdot 3 \\cdot 3} = \\mathbf{\\frac{8}{27}}$
                                </div>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Exponentes Cero y Negativos",
                        contenido: `
                            <h2>Propiedades Especiales en Fracciones</h2>
                            <p>Las reglas del exponente cero y del exponente negativo operan bajo la misma lógica que en los números enteros, pero aplicadas a la estructura de una fracción.</p>
                            
                            <div class="card" style="margin-bottom: 20px; border-left-color: #10b981;">
                                <h3 style="color: #10b981;">Exponente Cero</h3>
                                <p>Toda fracción distinta de cero elevada a un exponente cero da como resultado $1$.</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 10px 0;">
                                    $$(\\frac{a}{b})^0 = 1$$
                                </div>
                            </div>

                            <div class="card" style="border-left-color: #ef4444;">
                                <h3 style="color: #ef4444;">Exponente Negativo</h3>
                                <p>Si el exponente es negativo, <strong>se invierte la fracción base (el numerador pasa a ser denominador y viceversa) y el exponente cambia a positivo</strong>. Luego, se resuelve normalmente.</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 10px 0;">
                                    $$(\\frac{a}{b})^{-n} = (\\frac{b}{a})^n = \\frac{b^n}{a^n}$$
                                </div>
                                
                                <div class="step" style="background: rgba(239, 68, 68, 0.05); margin-top: 15px;">
                                    <b>Ejemplo:</b> $(\\frac{4}{5})^{-2} = (\\frac{5}{4})^2 = \\frac{5^2}{4^2} = \\mathbf{\\frac{25}{16}}$
                                </div>
                            </div>
                        `
                    },
                    {
                        titulo: "3. Práctica Guiada: Análisis Conjunto",
                        contenido: `
                            <h2>Resolución en Pizarra</h2>
                            <p>Desarrollemos las siguientes expresiones aplicando las propiedades de potencias de base racional. Ponga especial atención en los signos negativos de las bases y de los exponentes.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr 1fr;">
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>1)</b> $(\\frac{1}{4})^3$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>2)</b> $(-\\frac{2}{5})^2$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>3)</b> $(\\frac{3}{7})^{-2}$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>4)</b> $(-\\frac{1}{6})^{-3}$
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-guiadas-u2c3').classList.toggle('hidden')">Ver Desarrollo</button>
                            </div>
                            
                            <div id="resp-guiadas-u2c3" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 5px solid #3b82f6; border-radius: 8px;">
                                <h3 style="color: #3b82f6; margin-top: 0;">Soluciones paso a paso:</h3>
                                <ul style="line-height: 1.8; font-size: 1.1rem;">
                                    <li><b>1)</b> Se aplica a ambos términos: $\\frac{1^3}{4^3} = \\mathbf{\\frac{1}{64}}$.</li>
                                    <li><b>2)</b> Base negativa, exponente par $\\implies$ resultado positivo. $(-\\frac{2}{5}) \\cdot (-\\frac{2}{5}) = \\mathbf{\\frac{4}{25}}$.</li>
                                    <li><b>3)</b> Exponente negativo $\\implies$ Se invierte la base. $(\\frac{7}{3})^2 = \\frac{7^2}{3^2} = \\mathbf{\\frac{49}{9}}$.</li>
                                    <li><b>4)</b> Se invierte la base y el exponente queda positivo. $(-\\frac{6}{1})^3 = (-6)^3 = \\mathbf{-216}$.</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "4. Práctica Independiente",
                        contenido: `
                            <h2>Ejercitación Individual</h2>
                            <p>Desarrolle los siguientes ejercicios en su cuaderno, anotando el paso a paso. Dispone de 10 minutos para completar esta actividad.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>A)</b> $(\\frac{2}{7})^2$</div>
                                <div class="step"><b>B)</b> $(-\\frac{3}{4})^3$</div>
                                <div class="step"><b>C)</b> $(\\frac{5}{2})^{-3}$</div>
                                <div class="step"><b>D)</b> $(-\\frac{1}{8})^{-2}$</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                                <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">10:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(600)" style="margin-top: 15px;">⏳ Iniciar Tiempo (10 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u2c3').classList.toggle('hidden')">👁️ Mostrar Respuestas</button>
                            </div>

                            <div id="resp-indep-u2c3" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <p style="font-size: 1.4rem;">
                                    <b>A)</b> $\\frac{4}{49}$ &nbsp;|&nbsp; <b>B)</b> $-\\frac{27}{64}$ &nbsp;|&nbsp; <b>C)</b> $(\\frac{2}{5})^3 = \\mathbf{\\frac{8}{125}}$ &nbsp;|&nbsp; <b>D)</b> $(-8)^2 = \\mathbf{64}$
                                </p>
                            </div>
                        `
                    },
                    {
                        titulo: "5. Cierre: Análisis de Error",
                        contenido: `
                            <div class="card" style="border-left-color: #f59e0b;">
                                <h2 style="color: #f59e0b;">Identificación de Errores Comunes</h2>
                                <p>Observe con atención el siguiente desarrollo realizado por un estudiante al intentar resolver una potencia de exponente negativo:</p>
                                
                                <div class="step" style="font-size: 1.5rem; text-align: center; font-style: italic; background: #fff; color: #000; padding: 15px; border-radius: 8px;">
                                    $(\\frac{2}{5})^{-2} = (-\\frac{5}{2})^2 = \\frac{25}{4}$
                                </div>
                                
                                <div class="step" style="background: rgba(245, 158, 11, 0.1); margin-top: 20px;">
                                    <b>Pregunta de Análisis:</b><br>
                                    Aunque el resultado numérico es correcto, hay un error conceptual grave en el primer paso del desarrollo. Escriba en su cuaderno cuál fue el error que cometió el estudiante con los signos y explique por qué ocurrió.
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "u2_clase3",
                nombre: "Clase 3: Multiplicación y División de Potencias",
                diapositivas: [
                    {
                        titulo: "1. Multiplicación y División de Igual Base",
                        contenido: `
                            <h2>Propiedades con la misma base</h2>
                            <p>Cuando trabajamos con potencias que tienen la misma base, podemos simplificar los cálculos utilizando dos propiedades fundamentales. Esto nos evita tener que desarrollar multiplicaciones muy extensas.</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                                <h3 style="color: #3b82f6;">Multiplicación de potencias de igual base</h3>
                                <p>Para multiplicar potencias que tienen la misma base, <strong>se conserva la base y se suman los exponentes</strong>.</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$a^m \\cdot a^n = a^{m+n}$$
                                </div>
                                
                                <div class="step" style="background: rgba(59, 130, 246, 0.05);">
                                    <b>Ejemplo:</b> $2^3 \\cdot 2^4 = 2^{3+4} = \\mathbf{2^7}$
                                </div>
                            </div>

                            <div class="card" style="margin-top: 20px; border-left-color: #ef4444;">
                                <h3 style="color: #ef4444;">División de potencias de igual base</h3>
                                <p>Para dividir potencias que tienen la misma base, <strong>se conserva la base y se restan los exponentes</strong> (el exponente del dividendo menos el exponente del divisor).</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$a^m : a^n = \\frac{a^m}{a^n} = a^{m-n}$$
                                </div>
                                
                                <div class="step" style="background: rgba(239, 68, 68, 0.05);">
                                    <b>Ejemplo:</b> $5^8 : 5^6 = 5^{8-6} = \\mathbf{5^2} = \\mathbf{25}$
                                </div>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Multiplicación y División de Igual Exponente",
                        contenido: `
                            <h2>Propiedades con el mismo exponente</h2>
                            <p>En otras ocasiones, las bases serán diferentes, pero los exponentes serán idénticos. En estos casos, operamos con las bases y mantenemos el exponente intacto.</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #10b981;">
                                <h3 style="color: #10b981;">Multiplicación de potencias de igual exponente</h3>
                                <p>Para multiplicar potencias que tienen distinto número base pero el mismo exponente, <strong>se multiplican las bases y se conserva el exponente</strong>.</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$a^n \\cdot b^n = (a \\cdot b)^n$$
                                </div>
                                
                                <div class="step" style="background: rgba(16, 185, 129, 0.05);">
                                    <b>Ejemplo:</b> $3^2 \\cdot 4^2 = (3 \\cdot 4)^2 = \\mathbf{12^2} = \\mathbf{144}$
                                </div>
                            </div>

                            <div class="card" style="margin-top: 20px; border-left-color: #f59e0b;">
                                <h3 style="color: #f59e0b;">División de potencias de igual exponente</h3>
                                <p>Para dividir potencias que tienen distinta base pero el mismo exponente, <strong>se dividen las bases y se conserva el exponente</strong>.</p>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$a^n : b^n = (a : b)^n$$
                                </div>
                                
                                <div class="step" style="background: rgba(245, 158, 11, 0.05);">
                                    <b>Ejemplo:</b> $20^3 : 5^3 = (20 : 5)^3 = \\mathbf{4^3} = \\mathbf{64}$
                                </div>
                            </div>
                        `
                    },
                    ,
                    {
                        titulo: "3. Práctica Guiada: Aplicación de Propiedades",
                        contenido: `
                            <h2>Resolución Analítica en Pizarra</h2>
                            <p>El objetivo de estos ejercicios es reducir cada expresión matemática a una única potencia, identificando y aplicando la propiedad correspondiente según si las bases o los exponentes coinciden.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr 1fr;">
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>1)</b> $7^3 \\cdot 7^5$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>2)</b> $15^4 : 3^4$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>3)</b> $\\frac{4^6}{4^2}$
                                </div>
                                <div class="step" style="font-size: 1.5rem; text-align: center;">
                                    <b>4)</b> $2^3 \\cdot 5^3 \\cdot 10^2$
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-guiadas-u2c2').classList.toggle('hidden')">Desplegar Desarrollo Formal</button>
                            </div>
                            
                            <div id="resp-guiadas-u2c2" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 5px solid #3b82f6; border-radius: 8px;">
                                <h3 style="color: #3b82f6; margin-top: 0;">Desarrollo Matemático:</h3>
                                <ul style="line-height: 1.8; font-size: 1.1rem;">
                                    <li><b>1)</b> Igual base. Se conserva la base y se suman los exponentes: $7^{3+5} = \\mathbf{7^8}$.</li>
                                    <li><b>2)</b> Igual exponente. Se dividen las bases y se conserva el exponente: $(15 : 3)^4 = \\mathbf{5^4}$.</li>
                                    <li><b>3)</b> Igual base (división en formato fracción). Se restan los exponentes: $4^{6-2} = \\mathbf{4^4}$.</li>
                                    <li><b>4)</b> Operación combinada. Primero, multiplicación de igual exponente: $(2 \\cdot 5)^3 = 10^3$. Luego, multiplicación de igual base: $10^3 \\cdot 10^2 = \\mathbf{10^5}$.</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "4. Práctica Independiente: Consolidación",
                        contenido: `
                            <h2>Ejercitación Individual</h2>
                            <p>Reduzca las siguientes expresiones a una sola potencia. Recuerde explicitar el desarrollo en su cuaderno para facilitar la posterior corrección. Dispone de 8 minutos para concluir la actividad.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>A)</b> $8^2 \\cdot 8^6$</div>
                                <div class="step"><b>B)</b> $24^5 : 6^5$</div>
                                <div class="step"><b>C)</b> $3^4 \\cdot 4^4$</div>
                                <div class="step"><b>D)</b> $\\frac{12^7}{12^5}$</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                                <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">08:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(480)" style="margin-top: 15px;">⏳ Iniciar Tiempo (8 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u2c2').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                            </div>

                            <div id="resp-indep-u2c2" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <p style="font-size: 1.4rem;">
                                    <b>A)</b> $8^8$ &nbsp;|&nbsp; <b>B)</b> $4^5$ &nbsp;|&nbsp; <b>C)</b> $12^4$ &nbsp;|&nbsp; <b>D)</b> $12^2$
                                </p>
                            </div>
                        `
                    },
                    {
                        titulo: "5. Resolución de Problemas: Aplicación en Contexto",
                        contenido: `
                            <div class="card" style="border-left-color: #f59e0b;">
                                <h2 style="color: #f59e0b;">Modelamiento Matemático</h2>
                                <p>Lea detenidamente la siguiente situación problemática y utilice las propiedades de las potencias para estructurar su resolución.</p>
                                
                                <div class="step" style="background: rgba(245, 158, 11, 0.1); margin-top: 20px;">
                                    <b>Situación de Crecimiento Poblacional:</b><br>
                                    Un cultivo de laboratorio se inicia con una población de $3^4$ bacterias. Bajo condiciones controladas, se observa que la población se triplica cada hora. 
                                    <br><br>
                                    Utilizando las propiedades de multiplicación de potencias de igual base, determine la población total de bacterias expresada como una sola potencia una vez transcurridas $2$ horas desde el inicio del cultivo.
                                </div>

                                <div style="text-align: center; margin-top: 20px;">
                                    <button class="btn" onclick="document.getElementById('resp-problema-u2c2').classList.toggle('hidden')">Verificar Modelamiento</button>
                                </div>
                                
                                <div id="resp-problema-u2c2" class="hidden" style="margin-top: 20px; padding: 15px; background: #fff; color: #000; border-radius: 8px;">
                                    <b>Desarrollo analítico:</b><br>
                                    Población inicial: $3^4$<br>
                                    Factor de crecimiento por hora: $3$<br>
                                    Al transcurrir 2 horas, la población inicial se multiplica por $3$ dos veces consecutivas, lo que equivale a multiplicar por $3^2$.<br><br>
                                    <b>Ecuación:</b> $3^4 \\cdot 3^2 = 3^{4+2} = \\mathbf{3^6}$<br>
                                    <i>Respuesta: Tras dos horas, la población total será de $3^6$ bacterias.</i>
                                </div>
                            </div>
                        `
                    }
        ]
    },
           ,
            {
                id: "u2_clase4",
                nombre: "Clase 4: Modelamiento de Crecimiento Exponencial",
                diapositivas: [
                    {
                        titulo: "1. Definición Formal del Crecimiento Exponencial",
                        contenido: `
                            <h2>Estructura del Modelo Matemático</h2>
                            <p>El crecimiento exponencial es un fenómeno donde una magnitud aumenta a un ritmo que es proporcional a su valor actual. Matemáticamente, se modela utilizando potencias donde la variable independiente (generalmente el tiempo) se ubica en el exponente.</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                                <h3 style="color: #3b82f6;">Ecuación General</h3>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$N(t) = N_0 \\cdot a^t$$
                                </div>
                                <ul style="line-height: 1.8;">
                                    <li><strong>$N(t)$:</strong> Cantidad final tras un tiempo $t$.</li>
                                    <li><strong>$N_0$:</strong> Cantidad inicial (población base cuando $t = 0$).</li>
                                    <li><strong>$a$:</strong> Factor de crecimiento (base de la potencia). Para que exista crecimiento, se exige que $a > 1$.</li>
                                    <li><strong>$t$:</strong> Tiempo transcurrido (exponente).</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Modelamiento: Análisis de un Fenómeno",
                        contenido: `
                            <h2>Construcción del Modelo Exponencial</h2>
                            <p>Observe cómo se traduce una situación real a una expresión algebraica utilizando potencias.</p>
                            
                            <div class="card" style="border-left-color: #10b981;">
                                <h3 style="color: #10b981;">Situación: Reproducción Celular</h3>
                                <p>Un biólogo aísla una muestra de $50$ células. Bajo condiciones óptimas, se observa que la cantidad de células <strong>se duplica</strong> cada hora.</p>
                                
                                <div class="step" style="background: rgba(16, 185, 129, 0.05); margin-top: 15px;">
                                    <b>Identificación de variables:</b><br>
                                    - Población inicial ($N_0$): $50$<br>
                                    - Factor de crecimiento ($a$): $2$ (por la duplicación)<br>
                                    - Función que modela el crecimiento tras $t$ horas: 
                                    $$N(t) = 50 \\cdot 2^t$$
                                </div>
                                <p style="margin-top: 10px;"><em>Demostración para $t=3$ horas:</em> $N(3) = 50 \\cdot 2^3 = 50 \\cdot 8 = \\mathbf{400}$ células.</p>
                            </div>
                        `
                    },
                    {
                        titulo: "3. Práctica Guiada: Resolución Conjunta",
                        contenido: `
                            <h2>Aplicación en Pizarra</h2>
                            <p>Se solicita analizar el siguiente contexto y formular la ecuación correspondiente antes de proceder al cálculo.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr;">
                                <div class="step">
                                    <strong>Problema:</strong> Una inversión financiera inicial de $\\$10.000$ triplica su valor cada década debido a intereses compuestos excepcionales. <br><br>
                                    <b>A)</b> Formule la expresión que modela el capital tras $t$ décadas.<br>
                                    <b>B)</b> Determine el capital acumulado tras $4$ décadas.
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-guiadas-u2c4').classList.toggle('hidden')">Desplegar Resolución</button>
                            </div>
                            
                            <div id="resp-guiadas-u2c4" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 5px solid #3b82f6; border-radius: 8px;">
                                <h3 style="color: #3b82f6; margin-top: 0;">Desarrollo Analítico:</h3>
                                <p><b>A) Formulación del modelo:</b><br>
                                Valor inicial $N_0 = 10.000$. Factor de crecimiento $a = 3$ (triplica).<br>
                                Ecuación: $C(t) = 10.000 \\cdot 3^t$</p>
                                
                                <p><b>B) Evaluación para $t=4$:</b><br>
                                $C(4) = 10.000 \\cdot 3^4$<br>
                                $C(4) = 10.000 \\cdot 81 = \\mathbf{810.000}$</p>
                            </div>
                        `
                    },
                    {
                        titulo: "4. Práctica Independiente",
                        contenido: `
                            <h2>Ejercitación Individual</h2>
                            <p>Lea los siguientes enunciados, formule el modelo exponencial respectivo en su cuaderno y determine el valor solicitado. Tiempo asignado: 12 minutos.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>Caso 1:</b> Un video viral comienza con $100$ visualizaciones. Cada día que pasa, el número de visualizaciones se cuadruplica (se multiplica por $4$). ¿Cuántas visualizaciones tendrá el día $3$?</div>
                                <div class="step"><b>Caso 2:</b> Una plaga de insectos comienza con $5$ especímenes. Si su población se quintuplica ($\\times 5$) cada semana, exprese en forma de potencia la población tras $4$ semanas.</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                                <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">12:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(720)" style="margin-top: 15px;">⏳ Iniciar Tiempo (12 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u2c4').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                            </div>

                            <div id="resp-indep-u2c4" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <ul style="font-size: 1.1rem; line-height: 1.6;">
                                    <li><b>Caso 1:</b> Modelo: $V(t) = 100 \\cdot 4^t \\implies V(3) = 100 \\cdot 4^3 = 100 \\cdot 64 = \\mathbf{6.400}$ visualizaciones.</li>
                                    <li><b>Caso 2:</b> Modelo: $P(t) = 5 \\cdot 5^t \\implies P(4) = 5 \\cdot 5^4 = \\mathbf{5^5}$ insectos (o $3.125$).</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "5. Cierre: Proyección Matemática",
                        contenido: `
                            <div class="card" style="border-left-color: #f59e0b;">
                                <h2 style="color: #f59e0b;">Análisis de Límites (Ticket de Salida)</h2>
                                <p>Considere el modelo de crecimiento exponencial básico: $N(t) = 2 \\cdot 3^t$.</p>
                                
                                <div class="step" style="background: rgba(245, 158, 11, 0.1); margin-top: 20px;">
                                    <b>Pregunta de Razonamiento Lógico:</b><br>
                                    Si observamos la gráfica de este modelo a medida que el tiempo $t$ avanza hacia el infinito, ¿qué ocurre con el valor de la población $N(t)$? Escriba una conclusión formal en su cuaderno sobre la velocidad de crecimiento de las potencias frente a otras operaciones algebraicas (como la multiplicación simple).
                                </div>
                            </div>
                        `
                    }
                ]
            },
            {
                id: "u2_clase5",
                nombre: "Clase 5: Modelamiento de Decrecimiento Exponencial",
                diapositivas: [
                    {
                        titulo: "1. Definición Formal del Decrecimiento",
                        contenido: `
                            <h2>Estructura del Modelo Matemático</h2>
                            <p>Contrario al crecimiento, el decrecimiento exponencial modela magnitudes que disminuyen progresivamente, perdiendo siempre una misma proporción de su valor en cada intervalo temporal.</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #ef4444;">
                                <h3 style="color: #ef4444;">Diferencia en el Factor de Cambio</h3>
                                <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                                    $$N(t) = N_0 \\cdot a^t$$
                                </div>
                                <p>La estructura algebraica es idéntica a la del crecimiento exponencial. Sin embargo, para que el modelo represente una <strong>disminución</strong>, el factor $a$ (la base de la potencia) debe ser una fracción o decimal ubicado estrictamente entre cero y uno.</p>
                                <div style="text-align: center; font-style: italic; font-weight: bold; margin: 15px 0;">
                                    Condición de decrecimiento: $0 < a < 1$
                                </div>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Modelamiento: Vida Media y Depreciación",
                        contenido: `
                            <h2>Construcción del Modelo de Reducción</h2>
                            <p>El decrecimiento exponencial tiene aplicaciones directas en economía y física.</p>
                            
                            <div class="card" style="border-left-color: #10b981;">
                                <h3 style="color: #10b981;">Situación: Desintegración de un Fármaco</h3>
                                <p>Se administra una dosis de $400$ mg de un medicamento a un paciente. El metabolismo del cuerpo elimina <strong>la mitad</strong> de la sustancia presente en la sangre cada hora.</p>
                                
                                <div class="step" style="background: rgba(16, 185, 129, 0.05); margin-top: 15px;">
                                    <b>Identificación de variables:</b><br>
                                    - Cantidad inicial ($N_0$): $400$<br>
                                    - Factor de decrecimiento ($a$): $\\frac{1}{2}$ (por la reducción a la mitad)<br>
                                    - Función que modela la sustancia tras $t$ horas: 
                                    $$M(t) = 400 \\cdot (\\frac{1}{2})^t$$
                                </div>
                                <p style="margin-top: 10px;"><em>Cantidad tras $3$ horas:</em> $M(3) = 400 \\cdot (\\frac{1}{2})^3 = 400 \\cdot \\frac{1}{8} = \\mathbf{50}$ mg.</p>
                            </div>
                        `
                    },
                    {
                        titulo: "3. Práctica Guiada: Resolución Conjunta",
                        contenido: `
                            <h2>Aplicación en Pizarra</h2>
                            <p>Formulemos la ecuación matemática para la siguiente situación económica y calculemos su depreciación.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr;">
                                <div class="step">
                                    <strong>Problema:</strong> Un equipo tecnológico es adquirido por $\\$1.000.000$. Debido a su rápida obsolescencia, su valor se reduce a <strong>la décima parte</strong> (se multiplica por $\\frac{1}{10}$) de su valor anterior por cada año que transcurre.<br><br>
                                    <b>A)</b> Modele la ecuación de depreciación anual.<br>
                                    <b>B)</b> Calcule el valor del equipo transcurridos $2$ años.
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-guiadas-u2c5').classList.toggle('hidden')">Desplegar Resolución</button>
                            </div>
                            
                            <div id="resp-guiadas-u2c5" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(239, 68, 68, 0.1); border-left: 5px solid #ef4444; border-radius: 8px;">
                                <h3 style="color: #ef4444; margin-top: 0;">Desarrollo Analítico:</h3>
                                <p><b>A) Formulación del modelo:</b><br>
                                Valor inicial $N_0 = 1.000.000$. Factor de reducción $a = \\frac{1}{10}$.<br>
                                Ecuación: $V(t) = 1.000.000 \\cdot (\\frac{1}{10})^t$</p>
                                
                                <p><b>B) Evaluación para $t=2$:</b><br>
                                $V(2) = 1.000.000 \\cdot (\\frac{1}{10})^2$<br>
                                $V(2) = 1.000.000 \\cdot \\frac{1}{100} = \\mathbf{\\$10.000}$</p>
                            </div>
                        `
                    },
                    {
                        titulo: "4. Práctica Independiente",
                        contenido: `
                            <h2>Ejercitación Individual</h2>
                            <p>Construya el modelo exponencial y resuelva los siguientes problemas. Dispone de 10 minutos para su resolución.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>Caso 1:</b> El material radiactivo inicial en un reactor es de $81$ gramos. Si su masa decae a <strong>un tercio</strong> (se multiplica por $\\frac{1}{3}$) cada día, determine la cantidad de gramos restantes en el día $4$.</div>
                                <div class="step"><b>Caso 2:</b> Un torneo de tenis comienza con $64$ participantes. En cada ronda, se elimina a <strong>la mitad</strong> de los jugadores. Escriba el modelo de la cantidad de jugadores activos tras la ronda $r$ y verifique cuántos quedan tras $5$ rondas.</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                                <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">10:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(600)" style="margin-top: 15px;">⏳ Iniciar Tiempo (10 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u2c5').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                            </div>

                            <div id="resp-indep-u2c5" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <ul style="font-size: 1.1rem; line-height: 1.6;">
                                    <li><b>Caso 1:</b> $M(4) = 81 \\cdot (\\frac{1}{3})^4 = 81 \\cdot \\frac{1}{81} = \\mathbf{1}$ gramo.</li>
                                    <li><b>Caso 2:</b> $J(r) = 64 \\cdot (\\frac{1}{2})^r \\implies J(5) = 64 \\cdot \\frac{1}{32} = \\mathbf{2}$ jugadores (la final).</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "5. Cierre: Conexión Curricular",
                        contenido: `
                            <div class="card" style="border-left-color: #f59e0b;">
                                <h2 style="color: #f59e0b;">Síntesis de Propiedades (Ticket de Salida)</h2>
                                <p>Hemos definido el decrecimiento empleando fracciones como base, por ejemplo: $y = 100 \\cdot (\\frac{1}{2})^t$.</p>
                                
                                <div class="step" style="background: rgba(245, 158, 11, 0.1); margin-top: 20px;">
                                    <b>Pregunta de Integración Algebraica:</b><br>
                                    Recordando la regla de las potencias con exponente negativo vista en la Clase 1, reescriba el modelo $y = 100 \\cdot (\\frac{1}{2})^t$ de manera que su base no sea una fracción, sino un número entero. 
                                    <br><br>
                                    <em>Pista: ¿Cómo transformamos el $\\frac{1}{2}$ en un $2$?</em>
                                </div>
                            </div>
                        `
                    }
                ]
            }
,
            {
                id: "u2_clase6",
                nombre: "Clase 6: Taller Integral de Modelos Exponenciales",
                diapositivas: [
                    {
                        titulo: "1. Síntesis Teórica",
                        contenido: `
                            <h2>Repaso de Modelos de Comportamiento Exponencial</h2>
                            <p>Antes de iniciar la ejercitación, formalicemos las estructuras algebraicas que gobernarán la resolución de los problemas de hoy.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr 1fr;">
                                <div class="step" style="border-top: 5px solid #3b82f6;">
                                    <h3 style="color: #3b82f6; text-align: center;">Crecimiento Exponencial</h3>
                                    <p style="text-align: center;">El factor base es mayor a uno.</p>
                                    <div style="text-align: center; font-size: 1.2em;">$N(t) = N_0 \\cdot a^t$</div>
                                    <p style="text-align: center;"><b>Condición:</b> $a > 1$</p>
                                </div>
                                <div class="step" style="border-top: 5px solid #ef4444;">
                                    <h3 style="color: #ef4444; text-align: center;">Decrecimiento Exponencial</h3>
                                    <p style="text-align: center;">El factor base es una fracción propia.</p>
                                    <div style="text-align: center; font-size: 1.2em;">$N(t) = N_0 \\cdot a^t$</div>
                                    <p style="text-align: center;"><b>Condición:</b> $0 < a < 1$</p>
                                </div>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Nivel I: Ejecución Mecánica",
                        contenido: `
                            <h2>Evaluación Directa de Funciones</h2>
                            <p>Desarrolle en su cuaderno. Sustituya la variable temporal $t$ en los siguientes modelos y determine el valor final de la expresión.</p>
                            
                            <div class="card">
                                <div class="info-grid">
                                    <div class="step"><b>1)</b> Evaluar $C(t) = 200 \\cdot 3^t$ para $t=4$</div>
                                    <div class="step"><b>2)</b> Evaluar $D(t) = 1.600 \\cdot (\\frac{1}{2})^t$ para $t=5$</div>
                                    <div class="step"><b>3)</b> Evaluar $P(t) = 5 \\cdot 4^t$ para $t=3$</div>
                                    <div class="step"><b>4)</b> Evaluar $M(t) = 243 \\cdot (\\frac{1}{3})^t$ para $t=4$</div>
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-n1-u2c6').classList.toggle('hidden')">Verificar Nivel I</button>
                            </div>
                            <div id="resp-n1-u2c6" class="hidden" style="margin-top: 20px; padding: 15px; background: #0f172a; border-left: 5px solid #3b82f6; border-radius: 8px;">
                                <ul style="line-height: 1.8; font-size: 1.1rem; color: #fff;">
                                    <li><b>1)</b> $200 \\cdot 81 = \\mathbf{16.200}$</li>
                                    <li><b>2)</b> $1.600 \\cdot \\frac{1}{32} = \\mathbf{50}$</li>
                                    <li><b>3)</b> $5 \\cdot 64 = \\mathbf{320}$</li>
                                    <li><b>4)</b> $243 \\cdot \\frac{1}{81} = \\mathbf{3}$</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "3. Nivel II: Formulación de Modelos",
                        contenido: `
                            <h2>Traducción del Lenguaje Natural al Algebraico</h2>
                            <p>Lea cuidadosamente cada situación. Determine la población inicial ($N_0$), el factor de cambio ($a$) y establezca la ecuación exponencial correspondiente. No es necesario realizar cálculos de evaluación.</p>
                            
                            <div class="card" style="border-left-color: #f59e0b;">
                                <div class="step" style="margin-bottom: 15px;">
                                    <b>Situación A:</b> Una reserva ecológica introduce $120$ especies de una planta. Su propagación es tan rápida que la cantidad total se triplica (se multiplica por $3$) cada mes $t$.
                                </div>
                                <div class="step">
                                    <b>Situación B:</b> Un estanque contiene $4.000$ litros de agua. Debido a una filtración, el estanque retiene solo la cuarta parte (se multiplica por $\\frac{1}{4}$) de su volumen cada día $t$.
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-n2-u2c6').classList.toggle('hidden')">Verificar Nivel II</button>
                            </div>
                            <div id="resp-n2-u2c6" class="hidden" style="margin-top: 20px; padding: 15px; background: #0f172a; border-left: 5px solid #f59e0b; border-radius: 8px;">
                                <ul style="line-height: 1.8; font-size: 1.1rem; color: #fff;">
                                    <li><b>Modelo A:</b> $P(t) = 120 \\cdot 3^t$</li>
                                    <li><b>Modelo B:</b> $V(t) = 4.000 \\cdot (\\frac{1}{4})^t$</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "4. Nivel III: Resolución de Problemas",
                        contenido: `
                            <h2>Aplicación en Contextos Reales</h2>
                            <p>Desarrolle los siguientes problemas de manera íntegra: formule el modelo matemático, evalúelo y responda a la pregunta planteada. Dispone de 15 minutos de trabajo riguroso.</p>
                            
                            <div class="card" style="border-left-color: #10b981;">
                                <div class="step" style="margin-bottom: 15px;">
                                    <b>Problema 1 (Epidemiología):</b> Un brote viral en un software de red inicia afectando a $8$ terminales computacionales. Si el código malicioso cuadruplica ($\\times 4$) la cantidad de computadores infectados cada hora:
                                    <br>a) Determine el modelo exponencial.
                                    <br>b) Calcule cuántos terminales estarán infectados transcurridas $4$ horas.
                                </div>
                                <div class="step">
                                    <b>Problema 2 (Física):</b> Un bloque de material radiactivo posee una masa inicial de $1.024$ miligramos. Su inestabilidad provoca que su masa se reduzca a la mitad ($\\times \\frac{1}{2}$) cada ciclo de enfriamiento.
                                    <br>a) Determine el modelo exponencial de decaimiento.
                                    <br>b) Calcule la masa residual tras $5$ ciclos de enfriamiento.
                                </div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: #0f172a; padding: 20px; border-radius: 15px;">
                                <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">15:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(900)" style="margin-top: 15px;">⏳ Iniciar Tiempo (15 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-n3-u2c6').classList.toggle('hidden')">👁️ Mostrar Solucionario</button>
                            </div>

                            <div id="resp-n3-u2c6" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Solucionario Oficial:</h3>
                                <ul style="line-height: 1.8; font-size: 1.1rem;">
                                    <li><b>Problema 1:</b><br> a) $I(t) = 8 \\cdot 4^t$<br> b) $I(4) = 8 \\cdot 4^4 = 8 \\cdot 256 = \\mathbf{2.048}$ terminales infectados.</li>
                                    <li style="margin-top: 10px;"><b>Problema 2:</b><br> a) $M(c) = 1.024 \\cdot (\\frac{1}{2})^c$<br> b) $M(5) = 1.024 \\cdot \\frac{1}{32} = \\mathbf{32}$ miligramos.</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "5. Cierre: Evaluación de Hipótesis",
                        contenido: `
                            <div class="card" style="border-left-color: #8b5cf6;">
                                <h2 style="color: #8b5cf6;">Ticket de Salida</h2>
                                <p>Un analista financiero formula la siguiente hipótesis frente a una junta directiva:</p>
                                
                                <div class="step" style="background: rgba(139, 92, 246, 0.1); text-align: center; font-style: italic; font-size: 1.2rem; margin: 15px 0;">
                                    "Si tenemos un capital de $\\$10.000$ que se duplica cada año, y otro de $\\$40.000$ que aumenta solo en $\\$10.000$ fijos cada año, el segundo capital siempre será mayor porque empezó con una cantidad superior."
                                </div>
                                
                                <p><b>Instrucción:</b><br>Demuestre matemáticamente en su cuaderno si el analista tiene razón o está equivocado, proyectando ambos escenarios hasta el año $4$. Formule una conclusión formal sobre el impacto a largo plazo del crecimiento exponencial frente al crecimiento lineal (sumas constantes).</p>
                            </div>
                        `
                    }
                ]
            }
        ]
    },
    {         
        idUnidad: "unidad3",
        nombreUnidad: "Unidad 3: Productos Notables y Factorización",
        clases: [ 
        {
                id: "u3_clase0",
                nombre: "Clase 0: Lenguaje Algebraico y Operaciones Básicas",
                diapositivas: [
                    {
                        titulo: "1. ¿Qué es una Expresión Algebraica?",
                        contenido: `
                            <h2>El Alfabeto de las Matemáticas</h2>
                            <p>El álgebra nos permite generalizar cantidades usando letras. Una expresión algebraica está formada por uno o más <strong>términos</strong> separados por signos de suma ($+$) o resta ($-$).</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                                <h3 style="color: #3b82f6;">Clasificación según su cantidad de términos</h3>
                                
                                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 15px;">
                                    <div style="background: rgba(59, 130, 246, 0.1); padding: 15px; border-radius: 8px; border: 1px solid #bfdbfe;">
                                        <b style="color: #1e3a8a; font-size: 1.1rem;">1. Monomio (1 término)</b><br>
                                        No hay sumas ni restas que lo separen. <br>
                                        <i>Ejemplo:</i> $5x^2$ 
                                    </div>
                                    <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 8px; border: 1px solid #bbf7d0;">
                                        <b style="color: #064e3b; font-size: 1.1rem;">2. Binomio (2 términos)</b><br>
                                        Dos monomios unidos por un $+$ o un $-$.<br>
                                        <i>Ejemplo:</i> $3a + 7b$
                                    </div>
                                    <div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 8px; border: 1px solid #fde68a;">
                                        <b style="color: #b45309; font-size: 1.1rem;">3. Trinomio (3 términos)</b><br>
                                        Tres monomios unidos por sumas o restas.<br>
                                        <i>Ejemplo:</i> $x^2 - 5x + 6$
                                    </div>
                                    <div style="background: rgba(139, 92, 246, 0.1); padding: 15px; border-radius: 8px; border: 1px solid #ddd6fe;">
                                        <b style="color: #4c1d95; font-size: 1.1rem;">4. Polinomio (4 o más términos)</b><br>
                                        "Poli" significa muchos. Agrupa a todos los que tienen varios términos.<br>
                                        <i>Ejemplo:</i> $2y^3 + 4y^2 - y + 9$
                                    </div>
                                </div>
                            </div>
                        `
                    },
                    {
                        titulo: "2. Anatomía y Términos Semejantes",
                        contenido: `
                            <h2>Diseccionando un Término y Buscando Gemelos</h2>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #10b981;">
                                <h3 style="color: #10b981;">Las Partes de un Término Algebraico</h3>
                                
                                <div style="display: flex; justify-content: center; align-items: center; margin: 30px 0; font-family: monospace;">
                                    <div style="text-align: center; margin-right: 10px;">
                                        <div style="color: #ef4444; font-size: 0.9rem; font-weight: bold; margin-bottom: 5px;">Signo</div>
                                        <div style="font-size: 3rem; font-weight: bold; color: #ef4444;">-</div>
                                    </div>
                                    <div style="text-align: center; margin-right: 10px;">
                                        <div style="color: #3b82f6; font-size: 0.9rem; font-weight: bold; margin-bottom: 5px;">Coeficiente Numérico</div>
                                        <div style="font-size: 3rem; font-weight: bold; color: #3b82f6;">4</div>
                                    </div>
                                    <div style="text-align: center; position: relative;">
                                        <div style="color: #10b981; font-size: 0.9rem; font-weight: bold; margin-bottom: 5px;">Factor Literal</div>
                                        <div style="font-size: 3rem; font-weight: bold; color: #10b981;">x</div>
                                        <div style="position: absolute; top: 25px; right: -25px; color: #8b5cf6; font-size: 0.9rem; font-weight: bold;">Exponente</div>
                                        <div style="position: absolute; top: 40px; right: -20px; font-size: 1.5rem; font-weight: bold; color: #8b5cf6;">3</div>
                                    </div>
                                </div>
                                
                                <h3 style="color: #10b981; margin-top: 30px;">Términos Semejantes</h3>
                                <p>Dos o más términos son semejantes <strong>solo si tienen exactamente el mismo Factor Literal y el mismo Exponente</strong>. El coeficiente numérico (el número grande) puede ser diferente.</p>
                                
                                <ul style="line-height: 1.8;">
                                    <li>✅ $5x^2$ y $-3x^2$ <b>SÍ</b> son semejantes (comparten $x^2$).</li>
                                    <li>❌ $4a$ y $4b$ <b>NO</b> son semejantes (letras distintas).</li>
                                    <li>❌ $2m^2$ y $2m^3$ <b>NO</b> son semejantes (mismos números y letras, pero exponentes distintos).</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "3. Práctica Guiada: Suma y Resta",
                        contenido: `
                            <h2>La Regla de Oro: Solo Semejantes</h2>
                            <p>En la suma y resta de álgebra: <strong>Solo podemos operar términos que sean semejantes</strong>. Si no son semejantes, se dejan exactamente como están.</p>
                            
                            <div class="info-grid" style="grid-template-columns: 1fr 1fr;">
                                <div class="step" style="font-size: 1.2rem; text-align: center;"><b>1)</b> $3x + 5x$</div>
                                <div class="step" style="font-size: 1.2rem; text-align: center;"><b>2)</b> $7a - 2a + 4b$</div>
                                <div class="step" style="font-size: 1.2rem; text-align: center;"><b>3)</b> $5m^2 + 3m - 2m^2$</div>
                                <div class="step" style="font-size: 1.2rem; text-align: center;"><b>4)</b> $4xy - xy + 2x$</div>
                            </div>

                            <div style="text-align: center; margin-top: 20px;">
                                <button class="btn" onclick="document.getElementById('resp-guiadas-u3c1-sr').classList.toggle('hidden')">Desplegar Reducción Formal</button>
                            </div>
                            
                            <div id="resp-guiadas-u3c1-sr" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 5px solid #3b82f6; border-radius: 8px;">
                                <h3 style="color: #3b82f6; margin-top: 0;">Desarrollo Matemático:</h3>
                                <ul style="line-height: 2; font-size: 1.1rem;">
                                    <li><b>1)</b> Como ambos tienen $x$, sumamos los números: $(3 + 5)x = \\mathbf{8x}$</li>
                                    <li><b>2)</b> Agrupamos solo las 'a': $(7 - 2)a + 4b = \\mathbf{5a + 4b}$ <i>(El $4b$ no se mezcla)</i></li>
                                    <li><b>3)</b> Agrupamos solo los $m^2$: $(5 - 2)m^2 + 3m = \\mathbf{3m^2 + 3m}$</li>
                                    <li><b>4)</b> Recuerda el '1' invisible: $(4 - 1)xy + 2x = \\mathbf{3xy + 2x}$</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "4. Práctica Independiente (Suma y Resta)",
                        contenido: `
                            <h2>Ejercitación Individual</h2>
                            <p>Reduzca las siguientes expresiones algebraicas identificando primero cuáles términos son semejantes. Dispone de 8 minutos.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>A)</b> $8p + 3p - 5p$</div>
                                <div class="step"><b>B)</b> $6x + 2y - 4x + 5y$</div>
                                <div class="step"><b>C)</b> $3w^3 + 7w - w^3 + 2$</div>
                                <div class="step"><b>D)</b> $10ab - 4ab + 3a - a$</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.5); padding: 20px; border-radius: 15px;">
                                <div id="timer-display1" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">08:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(480, 'timer-display1')" style="margin-top: 15px;">⏳ Iniciar Tiempo (8 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u3c1-sr').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                            </div>

                            <div id="resp-indep-u3c1-sr" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <ul style="line-height: 2; font-size: 1.1rem;">
                                    <li><b>A)</b> $\\mathbf{6p}$</li>
                                    <li><b>B)</b> $\\mathbf{2x + 7y}$</li>
                                    <li><b>C)</b> $\\mathbf{2w^3 + 7w + 2}$</li>
                                    <li><b>D)</b> $\\mathbf{6ab + 2a}$</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "5. Multiplicación y División de Monomios",
                        contenido: `
                            <h2>Aquí se rompe la regla de oro</h2>
                            <p>¡Atención! Para multiplicar o dividir <strong>NO es necesario que los términos sean semejantes</strong>. Podemos multiplicar cualquier término con cualquier otro siguiendo dos pasos simples:</p>
                            
                            <div class="card" style="margin-top: 20px; border-left-color: #f59e0b;">
                                <ol style="line-height: 2;">
                                    <li><b>Los Números:</b> Se multiplican o dividen de forma normal.</li>
                                    <li><b>Las Letras (Potencias):</b> Si las letras son iguales, aplicamos las propiedades de las potencias. Al multiplicar, <b>sumamos</b> los exponentes. Al dividir, <b>restamos</b> los exponentes.</li>
                                </ol>
                                
                                <div class="info-grid" style="grid-template-columns: 1fr 1fr; margin-top: 20px;">
                                    <div class="step" style="background: rgba(59, 130, 246, 0.05);">
                                        <b style="color: #3b82f6;">Ejemplo Multiplicación:</b><br>
                                        $2x^3 \\cdot 4x^2$<br>
                                        Números: $2 \\cdot 4 = 8$<br>
                                        Letras: $x^{(3+2)} = x^5$<br>
                                        <b>Resultado: $8x^5$</b>
                                    </div>
                                    <div class="step" style="background: rgba(16, 185, 129, 0.05);">
                                        <b style="color: #10b981;">Ejemplo División:</b><br>
                                        $15m^6 : 3m^2$<br>
                                        Números: $15 : 3 = 5$<br>
                                        Letras: $m^{(6-2)} = m^4$<br>
                                        <b>Resultado: $5m^4$</b>
                                    </div>
                                </div>
                                <p style="text-align: center; margin-top: 15px; font-size: 0.9rem; color: #64748b;">*Recuerda: Una letra sola como $x$ tiene un exponente invisible de 1 ($x^1$).</p>
                            </div>
                        `
                    },
                    {
                        titulo: "6. Práctica: Multiplicación y División",
                        contenido: `
                            <h2>Cambiando el Chip Mental</h2>
                            <p>Resuelva las siguientes operaciones en su cuaderno. ¡Cuidado con no confundir las reglas de la suma con las de la multiplicación! Dispone de 8 minutos.</p>
                            
                            <div class="info-grid">
                                <div class="step"><b>A)</b> $3x \\cdot 5x$</div>
                                <div class="step"><b>B)</b> $4y^2 \\cdot (-2y^3)$</div>
                                <div class="step"><b>C)</b> $20a^5 : 4a^2$</div>
                                <div class="step"><b>D)</b> $-12p^4 : (-3p)$</div>
                            </div>

                            <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.5); padding: 20px; border-radius: 15px;">
                                <div id="timer-display2" style="font-size: 4rem; font-weight: bold; color: var(--accent); font-family: monospace;">08:00</div>
                                <button class="btn btn-primary" onclick="iniciarCronometro(480, 'timer-display2')" style="margin-top: 15px;">⏳ Iniciar Tiempo (8 min)</button>
                                <button class="btn" style="margin-top: 15px; border-color: #10b981; color: #10b981;" onclick="document.getElementById('resp-indep-u3c1-md').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                            </div>

                            <div id="resp-indep-u3c1-md" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #10b981; border-radius: 8px;">
                                <h3 style="color: #10b981; margin-top: 0;">Resultados Oficiales:</h3>
                                <ul style="line-height: 2; font-size: 1.1rem;">
                                    <li><b>A)</b> $(3 \\cdot 5)x^{(1+1)} = \\mathbf{15x^2}$</li>
                                    <li><b>B)</b> $(4 \\cdot -2)y^{(2+3)} = \\mathbf{-8y^5}$</li>
                                    <li><b>C)</b> $(20 : 4)a^{(5-2)} = \\mathbf{5a^3}$</li>
                                    <li><b>D)</b> $(-12 : -3)p^{(4-1)} = \\mathbf{4p^3}$ <i>(Menos dividido en menos es más)</i></li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        titulo: "7. Cierre: El Error de las Frutas",
                        contenido: `
                            <div class="card" style="border-left-color: #ef4444;">
                                <h2 style="color: #ef4444;">El Síndrome de la Licuadora (Ticket de Salida)</h2>
                                <p>El error más clásico y fatal al iniciar el estudio del álgebra es confundir una suma con una multiplicación.</p>
                                
                                <div class="step" style="text-align: center; font-size: 1.5rem; color: #ef4444; font-weight: bold; margin: 15px 0;">
                                    $2x + 3x = 5x^2 \\quad \\text{(¡FALSO!)}$<br>
                                    $2x + 3y = 5xy \\quad \\text{(¡FALSO!)}$
                                </div>
                                
                                <div class="step" style="background: rgba(239, 68, 68, 0.05); margin-top: 20px;">
                                    <b>Instrucción de Metacognición:</b><br>
                                    Asigne a la letra $x$ el significado de "Manzanas" y a la letra $y$ el significado de "Naranjas". <br><br>
                                    Redacte en su cuaderno una breve explicación detallando por qué es imposible que sumar $2$ manzanas y $3$ naranjas dé como resultado $5$ "manzanas-naranjas" ($5xy$). Utilice este mismo argumento para explicar por qué si sumamos 2 manzanas y 3 manzanas ($2x + 3x$), obtenemos 5 manzanas ($5x$) y no "manzanas al cuadrado" ($5x^2$).
                                </div>
                            </div>
                        `
                    }
                ]
            },

          {
    id: "u3_clase1_nueva",
    nombre: "Clase 1: Fundamentos y Suma por su Diferencia",
    diapositivas: [
        {
            titulo: "1. El Motor de Todo: Propiedad Distributiva",
            contenido: `
                <h2>Multiplicar Polinomios Paso a Paso</h2>
                <p>Antes de aprender cualquier "truco" o "fórmula rápida" (Producto Notable), debemos recordar cómo se multiplican las expresiones algebraicas usando la <strong>propiedad distributiva</strong>. Esta es la base de todo lo que veremos en esta unidad.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Todos contra Todos</h3>
                    <p>Si multiplicamos dos binomios cualesquiera, cada término del primer paréntesis debe multiplicar a cada término del segundo:</p>
                    
                    <div class="step" style="font-size: 1.2em; margin: 15px 0; background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        $$(2x + 3)(x - 4)$$
                        <ul style="font-size: 0.9em; margin-top: 10px; line-height: 1.6;">
                            <li>$2x \\cdot x = 2x^2$</li>
                            <li>$2x \\cdot (-4) = -8x$</li>
                            <li>$3 \\cdot x = +3x$</li>
                            <li>$3 \\cdot (-4) = -12$</li>
                        </ul>
                        <div style="text-align: center; margin-top: 10px; font-weight: bold;">
                            Desarrollo: $2x^2 - 8x + 3x - 12$<br>
                            Resultado Final: $2x^2 - 5x - 12$
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "2. El Caso Especial: Suma por su Diferencia",
            contenido: `
                <h2>¿Qué pasa cuando los binomios son casi idénticos?</h2>
                <p>Existe un caso muy especial donde los dos paréntesis tienen exactamente los mismos términos, pero uno se está sumando y el otro restando. Veamos qué ocurre al aplicar la distributividad.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #10b981;">
                    <h3 style="color: #047857;">Anulación del Centro</h3>
                    <div class="step" style="font-size: 1.2em; margin: 15px 0; background: rgba(16, 185, 129, 0.05); padding: 15px;">
                        $$(a + b)(a - b)$$
                        <p style="font-size: 0.9em; text-align: center;">$= a^2 - ab + ba - b^2$</p>
                        <p style="font-size: 0.85em; text-align: center; color: #047857;"><i>Como $-ab$ y $+ba$ son iguales pero de signos contrarios, ¡se anulan (dan cero)!</i></p>
                        <div style="text-align: center; font-weight: bold; margin-top: 15px; font-size: 1.3em;">
                            Fórmula: $$(a + b)(a - b) = a^2 - b^2$$
                        </div>
                    </div>
                    <p><strong>Regla Rápida:</strong> El cuadrado del primer término, MENOS el cuadrado del segundo término.</p>
                </div>
            `
        },
        {
            titulo: "3. El Camino Inverso: Diferencia de Cuadrados",
            contenido: `
                <h2>Factorización (De vuelta a los paréntesis)</h2>
                <p>En álgebra, si sabemos ir, debemos saber volver. Si te encuentras con un polinomio que tiene solo <strong>dos términos, ambos tienen raíz cuadrada exacta y se están restando</strong>, puedes devolverlos inmediatamente a sus paréntesis originales.</p>
                
                <div class="info-grid">
                    <div class="card" style="border-left-color: #8b5cf6; padding: 20px;">
                        <h3 style="color: #6d28d9; margin-top:0;">Ejemplo 1: Identificar raíces</h3>
                        <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                            $$x^2 - 25$$
                        </div>
                        <ul style="font-size: 0.95em;">
                            <li>La raíz de $x^2$ es <strong>$x$</strong></li>
                            <li>La raíz de $25$ es <strong>$5$</strong></li>
                        </ul>
                        <div style="text-align: center; margin-top: 10px; font-weight: bold; background: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 5px;">
                            Factorizado: $(x + 5)(x - 5)$
                        </div>
                    </div>
                    
                    <div class="card" style="border-left-color: #8b5cf6; padding: 20px;">
                        <h3 style="color: #6d28d9; margin-top:0;">Ejemplo 2: Con coeficientes</h3>
                        <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                            $$9y^2 - 64$$
                        </div>
                        <ul style="font-size: 0.95em;">
                            <li>La raíz de $9y^2$ es <strong>$3y$</strong></li>
                            <li>La raíz de $64$ es <strong>$8$</strong></li>
                        </ul>
                        <div style="text-align: center; margin-top: 10px; font-weight: bold; background: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 5px;">
                            Factorizado: $(3y + 8)(3y - 8)$
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "4. Práctica de Consolidación",
            contenido: `
                <h2>Expansión y Factorización</h2>
                <p>Demuestra tu dominio de esta propiedad. Recuerda: en la Parte I estás multiplicando (creando la diferencia), y en la Parte II estás buscando las raíces para armar los binomios originales. Tienes 10 minutos.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b>I. Expanda usando la regla rápida:</b><br><br>
                        A) $(m + 6)(m - 6)$<br>
                        B) $(4p - 3)(4p + 3)$<br>
                        C) $(x^2 + 10)(x^2 - 10)$
                    </div>
                    <div class="step">
                        <b>II. Factorice (Diferencia de Cuadrados):</b><br><br>
                        D) $k^2 - 49$<br>
                        E) $25w^2 - 1$<br>
                        F) $100 - n^2$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">10:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(600)" style="margin-top: 15px;">⏳ Iniciar Tiempo (10 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u3_new_c1').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u3_new_c1" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> $m^2 - 36$</li>
                        <li><b>B)</b> $16p^2 - 9$</li>
                        <li><b>C)</b> $x^4 - 100$ <i>(Nota: el exponente de $x^2$ al cuadrado es $x^4$)</i></li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>D)</b> $(k + 7)(k - 7)$</li>
                        <li><b>E)</b> $(5w + 1)(5w - 1)$ <i>(La raíz de 1 es 1)</i></li>
                        <li><b>F)</b> $(10 + n)(10 - n)$ <i>(Respeta el orden original)</i></li>
                    </ul>
                </div>
            `
        }
    ]
},
{
    id: "u3_clase2_nueva",
    nombre: "Clase 2: El Cuadrado de un Binomio",
    diapositivas: [
        {
            titulo: "1. El Origen: Multiplicar por sí mismo",
            contenido: `
                <h2>Rompiendo el mito de $a^2 + b^2$</h2>
                <p>El error más común en toda el álgebra es pensar que el exponente se reparte en una suma. Es vital entender que elevar al cuadrado significa <strong>multiplicar la base entera por sí misma</strong>. Apliquemos la distributividad que aprendimos en la clase anterior.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Desarrollo Paso a Paso</h3>
                    <div class="step" style="font-size: 1.2em; margin: 15px 0; background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        $$(a + b)^2 = (a + b)(a + b)$$
                        <ul style="font-size: 0.9em; margin-top: 10px; line-height: 1.6;">
                            <li>$a \\cdot a = a^2$</li>
                            <li>$a \\cdot b = ab$</li>
                            <li>$b \\cdot a = ba$ (que es lo mismo que $ab$)</li>
                            <li>$b \\cdot b = b^2$</li>
                        </ul>
                        <div style="text-align: center; margin-top: 15px;">
                            <i>Sumamos los términos semejantes del centro ($ab + ab = 2ab$):</i>
                            <div style="font-weight: bold; font-size: 1.2em; margin-top: 10px;">
                                $$(a + b)^2 = a^2 + 2ab + b^2$$
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "2. La Evidencia Geométrica",
            contenido: `
                <h2>¿Por qué aparece el "Doble Producto"?</h2>
                <p>Ese misterioso término central $+ 2ab$ tiene una explicación visual perfecta. Si imaginamos un cuadrado cuyo lado mide $(a + b)$, podemos calcular su área total sumando las áreas de las piezas que lo componen.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #10b981;">
                    <div style="text-align: center; margin: 20px 0;">
                        <svg viewBox="0 0 220 220" style="width: 100%; max-width: 250px; border-radius: 8px;">
                            <rect x="30" y="30" width="100" height="100" fill="rgba(59, 130, 246, 0.2)" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="80" y="85" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">a²</text>
                            
                            <rect x="130" y="30" width="60" height="100" fill="rgba(16, 185, 129, 0.2)" stroke="#047857" stroke-width="2"/>
                            <text x="160" y="85" font-size="18" text-anchor="middle" font-weight="bold" fill="#047857">ab</text>
                            
                            <rect x="30" y="130" width="100" height="60" fill="rgba(16, 185, 129, 0.2)" stroke="#047857" stroke-width="2"/>
                            <text x="80" y="165" font-size="18" text-anchor="middle" font-weight="bold" fill="#047857">ab</text>
                            
                            <rect x="130" y="130" width="60" height="60" fill="rgba(234, 179, 8, 0.2)" stroke="#b45309" stroke-width="2"/>
                            <text x="160" y="165" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">b²</text>
                        </svg>
                    </div>
                    
                    <p style="text-align: center; font-size: 1.1em;">El área total requiere <strong>cuatro piezas</strong>: un cuadrado grande ($a^2$), un cuadrado pequeño ($b^2$) y, crucialmente, <strong>dos rectángulos idénticos</strong> de área $ab$. ¡Ese es el famoso $2ab$!</p>
                </div>
            `
        },
        {
            titulo: "3. La Regla Rápida y los Signos",
            contenido: `
                <h2>La Estructura del Trinomio Cuadrado Perfecto</h2>
                <p>El resultado de expandir un binomio al cuadrado se llama <strong>Trinomio Cuadrado Perfecto (TCP)</strong>. Para no tener que hacer la distributiva cada vez, memorizamos esta regla de oro:</p>
                
                <div class="info-grid">
                    <div class="card" style="border-left-color: #8b5cf6; padding: 20px;">
                        <h3 style="color: #6d28d9; margin-top:0;">Caso de la Suma</h3>
                        <div style="text-align: center; font-size: 1.1em; margin: 15px 0;">
                            $$(x + y)^2 = x^2 + 2xy + y^2$$
                        </div>
                        <p style="font-size: 0.9em;">
                            1. El cuadrado del primer término.<br>
                            2. <strong>MÁS</strong> el doble del primero por el segundo.<br>
                            3. MÁS el cuadrado del segundo término.
                        </p>
                    </div>
                    
                    <div class="card" style="border-left-color: #8b5cf6; padding: 20px;">
                        <h3 style="color: #6d28d9; margin-top:0;">Caso de la Resta</h3>
                        <div style="text-align: center; font-size: 1.1em; margin: 15px 0;">
                            $$(x - y)^2 = x^2 - 2xy + y^2$$
                        </div>
                        <p style="font-size: 0.9em;">
                            1. El cuadrado del primer término.<br>
                            2. <strong>MENOS</strong> el doble del primero por el segundo.<br>
                            3. MÁS el cuadrado del segundo término (siempre positivo, porque menos por menos es más).
                        </p>
                    </div>
                </div>
            `
        },
        {
            titulo: "4. Práctica de Expansión",
            contenido: `
                <h2>Aplicación de la Fórmula</h2>
                <p>Desarrolla los siguientes binomios al cuadrado utilizando la regla rápida. Ten mucho cuidado con los coeficientes numéricos: ¡recuerda que tanto el número como la letra se elevan al cuadrado! Tienes 12 minutos.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b>I. Binomios Simples:</b><br><br>
                        A) $(x + 5)^2$<br>
                        B) $(y - 7)^2$<br>
                        C) $(m + 9)^2$
                    </div>
                    <div class="step">
                        <b>II. Con Coeficientes Numéricos:</b><br><br>
                        D) $(2x + 3)^2$<br>
                        E) $(5p - 2)^2$<br>
                        F) $(3w - 4)^2$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">12:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(720)" style="margin-top: 15px;">⏳ Iniciar Tiempo (12 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u3_new_c2').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u3_new_c2" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> $x^2 + 10x + 25$</li>
                        <li><b>B)</b> $y^2 - 14y + 49$ <i>(Atención al signo menos en el centro)</i></li>
                        <li><b>C)</b> $m^2 + 18m + 81$</li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>D)</b> $(2x)^2 + 2(2x)(3) + (3)^2 \\rightarrow \\mathbf{4x^2 + 12x + 9}$</li>
                        <li><b>E)</b> $(5p)^2 - 2(5p)(2) + (2)^2 \\rightarrow \\mathbf{25p^2 - 20p + 4}$</li>
                        <li><b>F)</b> $(3w)^2 - 2(3w)(4) + (4)^2 \\rightarrow \\mathbf{9w^2 - 24w + 16}$</li>
                    </ul>
                </div>
            `
        }
    ]
},
{
    id: "u3_clase3_nueva",
    nombre: "Clase 3: Ingeniería Inversa del TCP y Completación",
    diapositivas: [
        {
            titulo: "1. El Arte de Desarmar: Factorización",
            contenido: `
                <h2>¿Cómo reconocer un Trinomio Cuadrado Perfecto?</h2>
                <p>En la clase anterior aprendimos a construir un TCP multiplicando. Ahora haremos lo contrario: dado un polinomio de tres términos, debemos descubrir si proviene de un binomio al cuadrado. A esto le llamamos <strong>factorizar</strong>.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Los 3 pasos del reconocimiento</h3>
                    <p>Para que un trinomio como $x^2 + 10x + 25$ sea considerado "Perfecto", debe cumplir tres reglas estrictas:</p>
                    
                    <div class="step" style="font-size: 1.1em; margin: 15px 0; background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        <ol style="line-height: 1.8;">
                            <li>El primer término debe tener raíz cuadrada exacta: <b>La raíz de $x^2$ es $x$</b>.</li>
                            <li>El tercer término debe ser positivo y tener raíz exacta: <b>La raíz de $25$ es $5$</b>.</li>
                            <li>El término del medio debe ser exactamente el <strong>doble</strong> del producto de esas dos raíces: <b>$2 \\cdot (x) \\cdot (5) = 10x$</b>.</li>
                        </ol>
                        <div style="text-align: center; margin-top: 15px; font-weight: bold; font-size: 1.2em;">
                            Como cumple todo, lo factorizamos: $$(x + 5)^2$$
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "2. La Prueba de Fuego: Falsos Perfectos",
            contenido: `
                <h2>No todo trinomio es un TCP</h2>
                <p>Es muy fácil dejarse engañar visualmente. A veces, los extremos tienen raíces exactas, pero el centro no coincide. Veamos la importancia de comprobar siempre el término central.</p>
                
                <div class="info-grid">
                    <div class="card" style="border-left-color: #10b981; padding: 20px; background: rgba(16, 185, 129, 0.05);">
                        <h3 style="color: #047857; margin-top:0;">Ejemplo Verdadero</h3>
                        <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                            $$4y^2 - 12y + 9$$
                        </div>
                        <ul style="font-size: 0.95em;">
                            <li>Raíz de $4y^2$ $\\rightarrow 2y$</li>
                            <li>Raíz de $9$ $\\rightarrow 3$</li>
                            <li>Prueba: $2 \\cdot (2y) \\cdot (3) = 12y$</li>
                        </ul>
                        <div style="text-align: center; font-weight: bold; color: #047857;">¡Sí es TCP! $\\rightarrow (2y - 3)^2$</div>
                    </div>
                    
                    <div class="card" style="border-left-color: #ef4444; padding: 20px; background: rgba(239, 68, 68, 0.05);">
                        <h3 style="color: #ef4444; margin-top:0;">El Impostor (Falso TCP)</h3>
                        <div style="text-align: center; font-size: 1.2em; margin: 15px 0;">
                            $$m^2 + 8m + 16$$ 
                            <i>Wait, este sí es... veamos otro:</i><br>
                            $$m^2 + 10m + 16$$
                        </div>
                        <ul style="font-size: 0.95em;">
                            <li>Raíz de $m^2$ $\\rightarrow m$</li>
                            <li>Raíz de $16$ $\\rightarrow 4$</li>
                            <li>Prueba: $2 \\cdot (m) \\cdot (4) = \\mathbf{8m}$</li>
                        </ul>
                        <div style="text-align: center; font-weight: bold; color: #ef4444;">$8m$ no es $10m$. ¡NO es TCP!</div>
                    </div>
                </div>
            `
        },
        {
            titulo: "3. Completación de Cuadrados",
            contenido: `
                <h2>Encontrando la pieza faltante</h2>
                <p>¿Qué pasa si tenemos los dos primeros términos y queremos <strong>forzar</strong> que se convierta en un Trinomio Cuadrado Perfecto? A este proceso le llamamos "completar el cuadrado" y es una herramienta vital para la geometría analítica y ecuaciones futuras.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #8b5cf6;">
                    <h3 style="color: #6d28d9;">El Algoritmo de la Mitad al Cuadrado</h3>
                    <p>Imagina que tienes: $x^2 + 14x + \\mathbf{?}$</p>
                    
                    <div class="step" style="background: rgba(139, 92, 246, 0.05); padding: 15px; border-radius: 8px;">
                        <p>Sabemos que el término central ($14x$) representa el "doble del primero por el segundo". Para descubrir el número faltante, solo debes seguir dos pasos numéricos con el coeficiente central (el 14):</p>
                        <ol style="font-size: 1.1em; line-height: 1.8; margin-top: 10px;">
                            <li><strong>Divídelo a la mitad:</strong> $14 \\div 2 = 7$</li>
                            <li><strong>Elévalo al cuadrado:</strong> $7^2 = \\mathbf{49}$</li>
                        </ol>
                        <div style="text-align: center; font-size: 1.2em; margin-top: 15px; font-weight: bold;">
                            Trinomio completado: $$x^2 + 14x + 49$$
                            Su factorización: $$(x + 7)^2$$
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "4. Práctica Independiente: Reconocer y Completar",
            contenido: `
                <h2>Demuestra tu Análisis</h2>
                <p>Esta práctica evalúa tu capacidad para aplicar la prueba del ácido y reparar trinomios incompletos. Tienes 15 minutos para resolver.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b>I. Verifique si es TCP. Si lo es, factorice. Si NO lo es, escriba "NO":</b><br><br>
                        A) $x^2 + 18x + 81$<br>
                        B) $y^2 - 6y + 12$<br>
                        C) $9p^2 - 24p + 16$
                    </div>
                    <div class="step">
                        <b>II. Complete el término numérico faltante para formar un TCP:</b><br><br>
                        D) $m^2 + 20m + \\mathbf{?}$<br>
                        E) $k^2 - 8k + \\mathbf{?}$<br>
                        F) $w^2 + 2w + \\mathbf{?}$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">15:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(900)" style="margin-top: 15px;">⏳ Iniciar Tiempo (15 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u3_new_c3').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u3_new_c3" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> SÍ. Raíces: $x, 9$. Prueba: $2(x)(9)=18x$. Factorizado: <b>$(x + 9)^2$</b></li>
                        <li><b>B)</b> NO. Raíz de 12 no es exacta, y $2(y)(?\\!) \\neq 6y$.</li>
                        <li><b>C)</b> SÍ. Raíces: $3p, 4$. Prueba: $2(3p)(4)=24p$. Factorizado: <b>$(3p - 4)^2$</b></li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>D)</b> Mitad de 20 es 10; $10^2 = \\mathbf{100}$.</li>
                        <li><b>E)</b> Mitad de -8 es -4; $(-4)^2 = \\mathbf{16}$. <i>(Siempre es positivo)</i></li>
                        <li><b>F)</b> Mitad de 2 es 1; $1^2 = \\mathbf{1}$.</li>
                    </ul>
                </div>
            `
        }
    ]
},
{
    id: "u3_clase4_nueva",
    nombre: "Clase 4: Binomios con Término Común",
    diapositivas: [
        {
            titulo: "1. El Tercer Producto Notable",
            contenido: `
                <h2>¿Qué pasa cuando solo comparten una letra?</h2>
                <p>Ya vimos qué pasa si son idénticos (Cuadrado de Binomio) o si cambian solo en el signo (Suma por Diferencia). El tercer caso ocurre cuando multiplicamos dos binomios que tienen <strong>un solo término en común</strong> (generalmente la incógnita $x$) y los otros dos son números distintos.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Desarrollo por Distributividad</h3>
                    <div class="step" style="font-size: 1.2em; margin: 15px 0; background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        $$(x + a)(x + b)$$
                        <p style="font-size: 0.9em; text-align: center; margin: 10px 0;">$= x^2 + xb + ax + ab$</p>
                        <div style="text-align: center; margin-top: 10px;">
                            <i>Agrupamos los términos centrales que comparten la $x$:</i><br>
                            <div style="font-weight: bold; margin-top: 10px; font-size: 1.1em;">
                                Fórmula: $$(x + a)(x + b) = x^2 + (a + b)x + (ab)$$
                            </div>
                        </div>
                    </div>
                    <p><strong>La Regla en Palabras:</strong> El cuadrado del término común, MÁS la <b>suma algebraica</b> de los distintos multiplicada por $x$, MÁS la <b>multiplicación</b> de los distintos.</p>
                </div>
            `
        },
        {
            titulo: "2. Visualización Geométrica",
            contenido: `
                <h2>Componiendo un Rectángulo</h2>
                <p>A diferencia del Cuadrado de Binomio, aquí las medidas de los lados no son iguales. Estamos calculando el área de un <strong>rectángulo</strong> de base $(x+b)$ y altura $(x+a)$.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #10b981;">
                    <div style="text-align: center; margin: 20px 0;">
                        <svg viewBox="0 0 250 250" style="width: 100%; max-width: 280px; border-radius: 8px;">
                            <rect x="30" y="30" width="120" height="120" fill="rgba(59, 130, 246, 0.2)" stroke="#1d4ed8" stroke-width="2"/>
                            <text x="90" y="95" font-size="20" text-anchor="middle" font-weight="bold" fill="#1d4ed8">x²</text>
                            
                            <rect x="150" y="30" width="70" height="120" fill="rgba(16, 185, 129, 0.2)" stroke="#047857" stroke-width="2"/>
                            <text x="185" y="95" font-size="18" text-anchor="middle" font-weight="bold" fill="#047857">bx</text>
                            
                            <rect x="30" y="150" width="120" height="60" fill="rgba(16, 185, 129, 0.2)" stroke="#047857" stroke-width="2"/>
                            <text x="90" y="185" font-size="18" text-anchor="middle" font-weight="bold" fill="#047857">ax</text>
                            
                            <rect x="150" y="150" width="70" height="60" fill="rgba(234, 179, 8, 0.2)" stroke="#b45309" stroke-width="2"/>
                            <text x="185" y="185" font-size="18" text-anchor="middle" font-weight="bold" fill="#b45309">ab</text>
                        </svg>
                    </div>
                    
                    <p style="text-align: center;">El área se divide en 4 zonas: un cuadrado ($x^2$), dos rectángulos diferentes pero que tienen lado $x$ (por eso sus áreas se suman: $ax + bx$), y un rectángulo constante formado por los números ($ab$).</p>
                </div>
            `
        },
        {
            titulo: "3. La Batalla de los Signos",
            contenido: `
                <h2>Aplicando la Regla Rápida sin fallar</h2>
                <p>El verdadero reto de este producto notable no es la memoria, sino respetar estrictamente las reglas de signos al sumar y multiplicar en el centro y en el extremo.</p>
                
                <div class="info-grid" style="grid-template-columns: 1fr 1fr;">
                    <div class="step" style="font-size: 1.1rem; background: rgba(59, 130, 246, 0.05);">
                        <b>Caso 1: Ambos Positivos</b><br>
                        $(x + 5)(x + 3)$<br>
                        <ul style="margin-top: 5px; padding-left: 20px; font-size: 0.9em;">
                            <li>Suma: $5 + 3 = \\mathbf{+8}$</li>
                            <li>Mult: $5 \\cdot 3 = \\mathbf{+15}$</li>
                        </ul>
                        <b>$= x^2 + 8x + 15$</b>
                    </div>
                    <div class="step" style="font-size: 1.1rem; background: rgba(239, 68, 68, 0.05);">
                        <b>Caso 2: Positivo Mayor</b><br>
                        $(y + 7)(y - 2)$<br>
                        <ul style="margin-top: 5px; padding-left: 20px; font-size: 0.9em;">
                            <li>Suma: $7 - 2 = \\mathbf{+5}$</li>
                            <li>Mult: $7 \\cdot (-2) = \\mathbf{-14}$</li>
                        </ul>
                        <b>$= y^2 + 5y - 14$</b>
                    </div>
                    <div class="step" style="font-size: 1.1rem; background: rgba(245, 158, 11, 0.05);">
                        <b>Caso 3: Negativo Mayor</b><br>
                        $(m - 8)(m + 3)$<br>
                        <ul style="margin-top: 5px; padding-left: 20px; font-size: 0.9em;">
                            <li>Suma: $-8 + 3 = \\mathbf{-5}$</li>
                            <li>Mult: $(-8) \\cdot 3 = \\mathbf{-24}$</li>
                        </ul>
                        <b>$= m^2 - 5m - 24$</b>
                    </div>
                    <div class="step" style="font-size: 1.1rem; background: rgba(139, 92, 246, 0.05);">
                        <b>Caso 4: Ambos Negativos</b><br>
                        $(p - 4)(p - 6)$<br>
                        <ul style="margin-top: 5px; padding-left: 20px; font-size: 0.9em;">
                            <li>Suma: $-4 - 6 = \\mathbf{-10}$</li>
                            <li>Mult: $(-4) \\cdot (-6) = \\mathbf{+24}$</li>
                        </ul>
                        <b>$= p^2 - 10p + 24$</b>
                    </div>
                </div>
            `
        },
        {
            titulo: "4. Práctica de Expansión",
            contenido: `
                <h2>Entrenamiento de Precisión</h2>
                <p>Desarrolla los siguientes productos. Concéntrate en hacer mentalmente la suma y la multiplicación de los números. Si los signos son iguales se suman, si son distintos se restan conservando el signo del mayor. ¡Cuidado con el último término! Tienes 10 minutos.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b>I. Expansión Básica:</b><br><br>
                        A) $(x + 9)(x + 2)$<br>
                        B) $(y - 5)(y - 3)$<br>
                        C) $(w + 8)(w - 4)$
                    </div>
                    <div class="step">
                        <b>II. Nivel Intermedio (cuidado con los signos):</b><br><br>
                        D) $(k - 10)(k + 2)$<br>
                        E) $(m - 1)(m - 12)$<br>
                        F) $(p + 7)(p - 11)$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">10:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(600)" style="margin-top: 15px;">⏳ Iniciar Tiempo (10 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u3_new_c4').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u3_new_c4" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> $x^2 + 11x + 18$ <i>(9+2=11; 9*2=18)</i></li>
                        <li><b>B)</b> $y^2 - 8y + 15$ <i>(-5-3=-8; -5*-3=+15)</i></li>
                        <li><b>C)</b> $w^2 + 4w - 32$ <i>(+8-4=+4; 8*-4=-32)</i></li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>D)</b> $k^2 - 8k - 20$ <i>(-10+2=-8; -10*2=-20)</i></li>
                        <li><b>E)</b> $m^2 - 13m + 12$ <i>(-1-12=-13; -1*-12=+12)</i></li>
                        <li><b>F)</b> $p^2 - 4p - 77$ <i>(+7-11=-4; 7*-11=-77)</i></li>
                    </ul>
                </div>
            `
        }
    ]
},
{
    id: "u3_clase5_nueva",
    nombre: "Clase 5: Factorización de Trinomios (x² + bx + c)",
    diapositivas: [
        {
            titulo: "1. El Acertijo Numérico",
            contenido: `
                <h2>Buscando los Factores Perdidos</h2>
                <p>En la clase anterior, partimos de dos binomios para llegar a un trinomio. Hoy haremos exactamente lo contrario: nos darán el resultado final (el trinomio) y debemos descubrir qué binomios se multiplicaron originalmente. Este es uno de los "acertijos" más clásicos del álgebra.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #8b5cf6;">
                    <h3 style="color: #6d28d9;">La Regla de Oro de la Factorización</h3>
                    <p>Si tenemos un trinomio de la forma <strong>$x^2 + bx + c$</strong>, debemos encontrar dos números misteriosos que cumplan dos condiciones al mismo tiempo:</p>
                    
                    <div class="step" style="font-size: 1.2em; margin: 15px 0; background: rgba(139, 92, 246, 0.05); padding: 15px; border-radius: 8px;">
                        <ul style="line-height: 1.8;">
                            <li>Condición 1: Multiplicados deben dar el último término (<strong>$c$</strong>).</li>
                            <li>Condición 2: Sumados (o restados) deben dar el término central (<strong>$b$</strong>).</li>
                        </ul>
                        <div style="text-align: center; margin-top: 15px; font-weight: bold; font-size: 1.1em; color: #6d28d9;">
                            Si esos números son $m$ y $n$, la factorización es: $$(x + m)(x + n)$$
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "2. Estrategia de Búsqueda Efectiva",
            contenido: `
                <h2>¿Por dónde empezar: Suma o Multiplicación?</h2>
                <p>El error de muchos estudiantes es intentar adivinar los números pensando primero en la suma. ¡Hay infinitas parejas de números que suman 7! (Ej: $10-3$, $100-93$, $4+3$). En cambio, <strong>las parejas enteras que multiplican un número son muy pocas</strong>. La estrategia correcta es mirar siempre primero el último término.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Ejemplo Analizado: $x^2 + 7x + 10$</h3>
                    
                    <div class="step" style="background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        <p><b>Paso 1: Enfócate en la multiplicación ($+10$).</b><br>
                        ¿Qué parejas de números multiplicados dan $10$? Solo hay dos opciones enteras positivas:<br>
                        $(1 \\cdot 10)$ y $(2 \\cdot 5)$</p>
                        
                        <p style="margin-top: 10px;"><b>Paso 2: Comprueba la suma ($+7$).</b><br>
                        De las parejas anteriores, ¿cuál suma $7$?<br>
                        $1 + 10 = 11$ <i>(Descartada)</i><br>
                        $2 + 5 = \\mathbf{7}$ <i>(¡Esta es!)</i></p>
                        
                        <div style="text-align: center; margin-top: 15px; font-weight: bold; font-size: 1.2em;">
                            Trinomio factorizado: $$(x + 2)(x + 5)$$
                        </div>
                    </div>
                </div>
            `
        },
        {
            titulo: "3. La Brújula de los Signos",
            contenido: `
                <h2>Descifrando las Pistas del Trinomio</h2>
                <p>El signo del último término ($c$) es tu mejor pista para saber qué signos llevarán los binomios.</p>
                
                <div class="info-grid">
                    <div class="card" style="border-left-color: #10b981; padding: 20px; background: rgba(16, 185, 129, 0.05);">
                        <h3 style="color: #047857; margin-top:0;">Si el último es POSITIVO (+)</h3>
                        <p>Significa que los dos números tienen el <strong>MISMO SIGNO</strong> (más por más da +, menos por menos da +).</p>
                        <hr style="border-top: 1px dashed #10b981; margin: 10px 0;">
                        <b>Ejemplo:</b> $y^2 - 8y + 15$<br>
                        <i>(Multiplican +15, suman -8)</i><br>
                        Como suman negativo, ambos deben ser negativos: $-3$ y $-5$.<br>
                        <b>$(y - 3)(y - 5)$</b>
                    </div>
                    
                    <div class="card" style="border-left-color: #ef4444; padding: 20px; background: rgba(239, 68, 68, 0.05);">
                        <h3 style="color: #ef4444; margin-top:0;">Si el último es NEGATIVO (-)</h3>
                        <p>Significa que los números tienen <strong>SIGNOS DISTINTOS</strong> (más por menos da -). El mayor lleva el signo del medio.</p>
                        <hr style="border-top: 1px dashed #ef4444; margin: 10px 0;">
                        <b>Ejemplo:</b> $w^2 + 2w - 24$<br>
                        <i>(Multiplican -24, restan +2)</i><br>
                        Factores de 24: $6$ y $4$. Como el centro es $+$, el mayor es $+$.<br>
                        <b>$(w + 6)(w - 4)$</b>
                    </div>
                </div>
            `
        },
        {
            titulo: "4. Práctica Independiente: Factorización Rápida",
            contenido: `
                <h2>Resuelve el Acertijo</h2>
                <p>Aplica tu razonamiento deductivo para factorizar los siguientes trinomios. Recuerda el orden: 1° analiza los factores de la multiplicación, 2° verifica la suma/resta con los signos correctos. Tienes 15 minutos.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b>I. Mismo Signo (Último término positivo):</b><br><br>
                        A) $x^2 + 9x + 20$<br>
                        B) $k^2 - 11k + 30$<br>
                        C) $p^2 + 10p + 21$
                    </div>
                    <div class="step">
                        <b>II. Signos Diferentes (Último término negativo):</b><br><br>
                        D) $y^2 + 4y - 12$<br>
                        E) $m^2 - 3m - 40$<br>
                        F) $w^2 + w - 56$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">15:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(900)" style="margin-top: 15px;">⏳ Iniciar Tiempo (15 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u3_new_c5').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u3_new_c5" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> $(x + 5)(x + 4)$ <i>(Multiplican 20, suman 9)</i></li>
                        <li><b>B)</b> $(k - 6)(k - 5)$ <i>(Multiplican 30, suman -11)</i></li>
                        <li><b>C)</b> $(p + 7)(p + 3)$ <i>(Multiplican 21, suman 10)</i></li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>D)</b> $(y + 6)(y - 2)$ <i>(Multiplican -12, ganan los positivos por 4)</i></li>
                        <li><b>E)</b> $(m - 8)(m + 5)$ <i>(Multiplican -40, ganan los negativos por 3)</i></li>
                        <li><b>F)</b> $(w + 8)(w - 7)$ <i>(La $w$ tiene un $1$ invisible. Factores de 56 con diferencia de 1 son 8 y 7. Gana positivo.)</i></li>
                    </ul>
                </div>
            `
        }
    ]
},
{
    id: "u3_clase6_nueva",
    nombre: "Clase 6: Cubo de un Binomio y Síntesis Final",
    diapositivas: [
        {
            titulo: "1. Saltando a la 3D: El Cubo de un Binomio",
            contenido: `
                <h2>De Áreas a Volúmenes</h2>
                <p>Hasta ahora hemos trabajado con binomios al cuadrado, que geométricamente representan el <strong>área</strong> de figuras planas. Pero, ¿qué pasa si elevamos un binomio a la tercera potencia? Pasamos a la 3D: estamos calculando el <strong>volumen de un cubo</strong> de arista $(a+b)$.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">La Fórmula Extendida</h3>
                    <div class="step" style="font-size: 1.2em; margin: 15px 0; background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        $$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
                        <div style="font-size: 0.8em; margin-top: 15px; text-align: left;">
                            <b>¿Qué significa cada pieza geométricamente?</b>
                            <ul style="line-height: 1.6; margin-top: 5px;">
                                <li><b>$a^3$</b>: Un cubo grande.</li>
                                <li><b>$3a^2b$</b>: Tres prismas rectangulares (paredes).</li>
                                <li><b>$3ab^2$</b>: Tres prismas rectangulares más delgados.</li>
                                <li><b>$b^3$</b>: Un cubo pequeñito en la esquina.</li>
                            </ul>
                        </div>
                    </div>
                    <p style="font-size: 0.9em; text-align: center;"><em>Si fuera resta $(a - b)^3$, los signos se alternan: $a^3 - 3a^2b + 3ab^2 - b^3$</em></p>
                </div>
            `
        },
        {
            titulo: "2. El Secreto de los Coeficientes: Triángulo de Pascal",
            contenido: `
                <h2>Un atajo para cualquier potencia</h2>
                <p>¿Notaste de dónde salieron los números de nuestras fórmulas? En el cuadrado era <b>1, 2, 1</b> ($a^2 + 2ab + b^2$). En el cubo es <b>1, 3, 3, 1</b>. Estos números provienen de un patrón matemático milenario llamado el <strong>Triángulo de Pascal</strong>.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #8b5cf6; text-align: center;">
                    <div style="font-family: monospace; font-size: 1.3em; line-height: 1.8; background: rgba(139, 92, 246, 0.05); padding: 20px; border-radius: 8px;">
                        <div style="color: #6b7280;">(Potencia 0) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1</div>
                        <div style="color: #6b7280;">(Potencia 1) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 &nbsp; 1</div>
                        <div style="color: #6d28d9; font-weight: bold;">(Potencia 2) &nbsp;&nbsp;&nbsp; 1 &nbsp; 2 &nbsp; 1 &nbsp;&nbsp;&nbsp; <span style="font-size: 0.7em;">← Cuadrado de Binomio</span></div>
                        <div style="color: #6d28d9; font-weight: bold;">(Potencia 3) &nbsp; 1 &nbsp; 3 &nbsp; 3 &nbsp; 1 &nbsp; <span style="font-size: 0.7em;">← Cubo de Binomio</span></div>
                        <div style="color: #6b7280;">(Potencia 4) 1 &nbsp; 4 &nbsp; 6 &nbsp; 4 &nbsp; 1</div>
                    </div>
                    <p style="margin-top: 15px; font-size: 0.95em;">Cada número se obtiene <strong>sumando los dos números que tiene justo encima</strong>. Así no necesitas memorizar coeficientes, ¡puedes construirlos tú mismo!</p>
                </div>
            `
        },
        {
            titulo: "3. El Mapa de Decisión (El Ojo Algebraico)",
            contenido: `
                <h2>¿Cómo saber qué regla aplicar?</h2>
                <p>En un examen, los polinomios no vienen etiquetados. Para saber cómo factorizar (volver a los paréntesis), debes contar los términos y buscar pistas clave.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #10b981;">
                    <table style="width: 100%; border-collapse: collapse; margin-top: 5px; text-align: left; font-size: 0.95em;">
                        <tr style="background: rgba(16, 185, 129, 0.1); border-bottom: 2px solid #10b981;">
                            <th style="padding: 10px;">Forma</th>
                            <th style="padding: 10px;">Qué buscar</th>
                            <th style="padding: 10px;">Tu Respuesta</th>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 10px;"><b>2 Términos</b><br>Ej: $x^2 - 49$</td>
                            <td style="padding: 10px;">¿Es una RESTA? ¿Tienen raíces exactas?</td>
                            <td style="padding: 10px;"><b>Suma por Diferencia</b><br>$(x + 7)(x - 7)$</td>
                        </tr>
                        <tr style="border-bottom: 1px solid #e2e8f0;">
                            <td style="padding: 10px;"><b>3 Términos</b><br>Ej: $x^2 + 10x + 25$</td>
                            <td style="padding: 10px;">¿Los extremos tienen raíz? ¿El centro es el <i>doble producto</i>?</td>
                            <td style="padding: 10px;"><b>Trinomio Cuadrado Perf.</b><br>$(x + 5)^2$</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px;"><b>3 Términos</b><br>Ej: $x^2 + 7x + 12$</td>
                            <td style="padding: 10px;">El último no tiene raíz exacta. Busca factores que multipliquen 12 y sumen 7.</td>
                            <td style="padding: 10px;"><b>Término Común</b><br>$(x + 4)(x + 3)$</td>
                        </tr>
                    </table>
                </div>
            `
        },
        {
            titulo: "4. Desafío Final: Mezcla Total",
            contenido: `
                <h2>Evaluación de Unidad</h2>
                <p>Es hora de demostrar todo lo aprendido. En esta sección final, los ejercicios están mezclados. Debes analizar cada uno, decidir qué producto o técnica de factorización usar, y resolver. Tienes 20 minutos.</p>
                
                <div class="info-grid">
                    <div class="step" style="background: rgba(59, 130, 246, 0.05);">
                        <b style="color: #1d4ed8;">I. Expande (Multiplica):</b><br><br>
                        A) $(m - 8)(m + 8)$<br>
                        B) $(3y + 2)^2$<br>
                        C) $(x - 5)(x + 9)$<br>
                        D) $(p + 2)^3$
                    </div>
                    <div class="step" style="background: rgba(16, 185, 129, 0.05);">
                        <b style="color: #047857;">II. Factoriza (De vuelta al paréntesis):</b><br><br>
                        E) $w^2 - 81$<br>
                        F) $k^2 - 14k + 49$<br>
                        G) $y^2 + 5y - 24$<br>
                        H) $m^2 + 13m + 42$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">20:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(1200)" style="margin-top: 15px;">⏳ Iniciar Tiempo (20 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u3_new_c6').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u3_new_c6" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> $m^2 - 64$ <i>(Suma por Diferencia)</i></li>
                        <li><b>B)</b> $9y^2 + 12y + 4$ <i>(Cuadrado de Binomio)</i></li>
                        <li><b>C)</b> $x^2 + 4x - 45$ <i>(Término Común)</i></li>
                        <li><b>D)</b> $p^3 + 6p^2 + 12p + 8$ <i>(Cubo de Binomio)</i></li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>E)</b> $(w + 9)(w - 9)$ <i>(Diferencia de Cuadrados)</i></li>
                        <li><b>F)</b> $(k - 7)^2$ <i>(Trinomio Cuadrado Perfecto)</i></li>
                        <li><b>G)</b> $(y + 8)(y - 3)$ <i>(Término Común: Multiplican -24, suman +5)</i></li>
                        <li><b>H)</b> $(m + 7)(m + 6)$ <i>(Término Común: Multiplican 42, suman 13)</i></li>
                    </ul>
                </div>
            `
        }
    ]
},


        ]
    },
    {
    idUnidad: "unidad4",
    nombreUnidad: "Unidad 4: Sistemas de Ecuaciones Lineales (2x2)",
    clases: [
        {
    id: "u4_clase1",
    nombre: "Clase 1: El Misterio de las Dos Variables y la Línea Recta",
    diapositivas: [
        {
            titulo: "1. ¿Qué pasa cuando tenemos dos incógnitas?",
            contenido: `
                <h2>Un universo de posibilidades infinitas</h2>
                <p>Hasta hoy, resolver una ecuación significaba encontrar <b>el</b> número exacto que cumplía una condición (ej. $2x = 10$, donde $x$ solo puede ser $5$). Pero, ¿qué sucede si tenemos una ecuación con dos letras, como $x + y = 10$?</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #3b82f6;">
                    <h3 style="color: #3b82f6;">Pares Ordenados $(x, y)$</h3>
                    <p>En la ecuación $x + y = 10$, no buscamos un solo número, sino <strong>parejas de números</strong> que sumen 10. Veamos algunas soluciones posibles:</p>
                    
                    <div class="step" style="font-size: 1.1em; margin: 15px 0; background: rgba(59, 130, 246, 0.05); padding: 15px; border-radius: 8px;">
                        <ul style="line-height: 1.8;">
                            <li>Si $x = 2$, entonces $y = 8$ $\\rightarrow$ Par ordenado: $(2, 8)$</li>
                            <li>Si $x = 5$, entonces $y = 5$ $\\rightarrow$ Par ordenado: $(5, 5)$</li>
                            <li>Si $x = -2$, entonces $y = 12$ $\\rightarrow$ Par ordenado: $(-2, 12)$</li>
                            <li>Si $x = 1.5$, entonces $y = 8.5$ $\\rightarrow$ Par ordenado: $(1.5, 8.5)$</li>
                        </ul>
                    </div>
                    <p><strong>Conclusión Clave:</strong> Una sola ecuación de la forma $ax + by = c$ tiene <b>infinitas soluciones</b> (infinitos pares ordenados).</p>
                </div>
            `
        },
        {
            titulo: "2. Revelando la Función Oculta",
            contenido: `
                <h2>Transformando $ax + by = c$</h2>
                <p>Para entender mejor cómo se comportan esos infinitos puntos, podemos "despejar la $y$". Al dejar la $y$ sola, transformamos la ecuación en una vieja conocida: la <strong>función afín</strong>.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #8b5cf6;">
                    <h3 style="color: #6d28d9;">El Despeje Paso a Paso</h3>
                    <p>Tomemos la forma general: $$ax + by = c$$</p>
                    
                    <div class="step" style="background: rgba(139, 92, 246, 0.05); padding: 15px; border-radius: 8px; line-height: 2;">
                        <b>1. Movemos la $x$ al otro lado (restando):</b><br>
                        $$by = -ax + c$$<br><br>
                        <b>2. Dividimos todo por $b$:</b><br>
                        $$y = -\\frac{a}{b}x + \\frac{c}{b}$$
                    </div>
                    <p style="margin-top: 15px;">¡Listo! Ahora tiene la forma $y = mx + n$. Al graficar todos sus infinitos pares ordenados en el plano cartesiano, formarán una <strong>línea recta</strong> perfecta.</p>
                </div>
            `
        },
        {
            titulo: "3. Práctica Guiada: De Ecuación a Recta",
            contenido: `
                <h2>Hagámoslo Juntos</h2>
                <p>Vamos a transformar la ecuación $2x + y = 4$, encontraremos tres soluciones y visualizaremos cómo se prepararía para ser graficada.</p>
                
                <div class="info-grid">
                    <div class="card" style="border-left-color: #10b981; padding: 20px; background: rgba(16, 185, 129, 0.05);">
                        <h3 style="color: #047857; margin-top:0;">Paso 1: Despejar $y$</h3>
                        $$2x + y = 4$$
                        <i>Restamos $2x$ a ambos lados:</i><br>
                        $$y = -2x + 4$$
                    </div>
                    
                    <div class="card" style="border-left-color: #10b981; padding: 20px; background: rgba(16, 185, 129, 0.05);">
                        <h3 style="color: #047857; margin-top:0;">Paso 2: Tabla de Valores</h3>
                        <p>Elegimos valores para $x$ y calculamos $y$:</p>
                        <ul style="line-height: 1.8;">
                            <li>Si $x=0 \\rightarrow y = -2(0)+4 = \\mathbf{4}$ $\\rightarrow (0,4)$</li>
                            <li>Si $x=1 \\rightarrow y = -2(1)+4 = \\mathbf{2}$ $\\rightarrow (1,2)$</li>
                            <li>Si $x=2 \\rightarrow y = -2(2)+4 = \\mathbf{0}$ $\\rightarrow (2,0)$</li>
                        </ul>
                    </div>
                </div>
                <p style="text-align: center; margin-top: 15px; color: #047857; font-weight: bold; background: rgba(16, 185, 129, 0.1); padding: 10px; border-radius: 8px;">Si ubicas (0,4), (1,2) y (2,0) en un plano cartesiano y los unes, obtienes la recta que representa a la ecuación.</p>
            `
        },
        {
            titulo: "4. Práctica Independiente",
            contenido: `
                <h2>Tu Turno en el Plano</h2>
                <p>Ahora es tu momento de aplicar la transformación. Tienes 10 minutos para resolver los siguientes ejercicios en tu cuaderno.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b>Para cada ecuación, debes:</b>
                        <ol style="margin-top: 10px; line-height: 1.6;">
                            <li>Despejar la variable $y$ (transformar a función afín).</li>
                            <li>Encontrar 2 pares ordenados $(x, y)$ que sean solución.</li>
                        </ol>
                    </div>
                    <div class="step" style="background: #f8fafc; font-size: 1.1em; line-height: 2;">
                        <b>A)</b> $x + y = 5$<br>
                        <b>B)</b> $3x - y = 6$<br>
                        <b>C)</b> $4x + 2y = 8$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">10:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(600)" style="margin-top: 15px;">⏳ Iniciar Tiempo (10 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u4_c1').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u4_c1" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Oficiales:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>A)</b> Despeje: $y = -x + 5$. Posibles puntos: $(0,5), (1,4), (2,3)...$</li>
                        <li><b>B)</b> Despeje: $-y = -3x + 6 \\rightarrow y = 3x - 6$. Posibles puntos: $(0,-6), (2,0), (1,-3)...$</li>
                        <li><b>C)</b> Despeje: $2y = -4x + 8 \\rightarrow y = -2x + 4$. Posibles puntos: $(0,4), (1,2), (2,0)...$</li>
                    </ul>
                </div>
            `
        },
        {
            titulo: "5. Ticket de Salida",
            contenido: `
                <h2>Demuestra tu aprendizaje</h2>
                <p>Responde estas preguntas breves antes de terminar la clase para comprobar que has dominado los conceptos de hoy.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #eab308; background: rgba(234, 179, 8, 0.05);">
                    <h3 style="color: #ca8a04;">Pregunta de Síntesis</h3>
                    <p style="font-size: 1.1em; margin-bottom: 20px;">Observa la siguiente ecuación lineal: $$5x + y = 20$$</p>
                    
                    <ol style="font-size: 1.1em; line-height: 1.8;">
                        <li>¿Cuántos pares ordenados $(x,y)$ cumplen con esta ecuación? (Justifica en una línea).</li>
                        <li>Despeja la letra $y$. ¿Cómo queda escrita como función afín?</li>
                        <li>Si $x = 3$, ¿cuánto vale $y$?</li>
                    </ol>
                    
                    <div style="text-align: center; margin-top: 25px;">
                        <button class="btn" style="border: 2px solid #ca8a04; color: #ca8a04; background: white;" onclick="document.getElementById('ticket-resp-u4-c1').classList.toggle('hidden')">Ver Respuesta Esperada</button>
                    </div>
                </div>

                <div id="ticket-resp-u4-c1" class="hidden" style="margin-top: 15px; padding: 15px; border-radius: 8px; border-left: 5px solid #ca8a04; background: white;">
                    <p style="line-height: 1.8;"><b>1.</b> Tiene <b>infinitas</b> soluciones, porque para cada valor que le demos a la $x$, existirá un valor correspondiente para la $y$.<br>
                    <b>2.</b> $y = -5x + 20$<br>
                    <b>3.</b> Si $x=3$, entonces $y = -5(3) + 20 = -15 + 20 = \\mathbf{5}$. El par ordenado es $(3,5)$.</p>
                </div>
            `
        }
    ]
},
{
    id: "u4_clase2",
    nombre: "Clase 2: El Cruce de Caminos (Método Gráfico y Balanzas)",
    diapositivas: [
        {
            titulo: "1. Un problema, dos condiciones",
            contenido: `
                <h2>El modelo de la balanza</h2>
                <p>Imagina que estás en un mercado y observas dos balanzas en perfecto equilibrio. Estas balanzas representan un <strong>sistema de ecuaciones</strong>: tienes dos situaciones diferentes que involucran los mismos objetos misteriosos.</p>
                
                <div class="info-grid" style="margin-top: 20px;">
                    <div class="card" style="border-left-color: #3b82f6; padding: 20px;">
                        <h3 style="color: #1d4ed8; margin-top:0;">Balanza 1 (Condición 1)</h3>
                        <p style="text-align: center; font-size: 1.1em; background: rgba(59, 130, 246, 0.05); padding: 10px; border-radius: 8px;">
                            2 🍎 + 1 🍌 = 700 gramos<br>
                            <b>$2x + y = 700$</b>
                        </p>
                    </div>
                    
                    <div class="card" style="border-left-color: #ef4444; padding: 20px;">
                        <h3 style="color: #b91c1c; margin-top:0;">Balanza 2 (Condición 2)</h3>
                        <p style="text-align: center; font-size: 1.1em; background: rgba(239, 68, 68, 0.05); padding: 10px; border-radius: 8px;">
                            1 🍎 = 1 🍌 + 100 gramos<br>
                            <b>$x = y + 100$</b>
                        </p>
                    </div>
                </div>
                
                <p style="margin-top: 15px;">Resolver el sistema significa encontrar <strong>el peso exacto de la manzana ($x$) y del plátano ($y$)</strong> que mantenga <em>ambas</em> balanzas en equilibrio al mismo tiempo.</p>
            `
        },
        {
            titulo: "2. El Método Gráfico: Dibujando las pistas",
            contenido: `
                <h2>De las balanzas al Plano Cartesiano</h2>
                <p>Ayer aprendimos que una ecuación con dos incógnitas ($ax + by = c$) dibuja una línea recta con infinitas soluciones. ¿Qué pasa si graficamos <strong>las dos ecuaciones de un sistema en el mismo plano</strong>?</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #8b5cf6;">
                    <h3 style="color: #6d28d9;">La Intersección es la Clave</h3>
                    <div class="step" style="background: rgba(139, 92, 246, 0.05); padding: 15px; border-radius: 8px; line-height: 1.8;">
                        <ul>
                            <li><b>La Recta Azul</b> tiene todos los puntos que cumplen la Ecuación 1.</li>
                            <li><b>La Recta Roja</b> tiene todos los puntos que cumplen la Ecuación 2.</li>
                        </ul>
                        <p style="text-align: center; font-size: 1.2em; font-weight: bold; color: #4c1d95; margin-top: 10px; border-top: 1px dashed #c4b5fd; padding-top: 10px;">
                            El único punto del universo que pertenece a ambas rectas es donde se cruzan.<br>¡Ese punto $(x, y)$ es la solución del sistema!
                        </p>
                    </div>
                </div>
            `
        },
        {
            titulo: "3. Laboratorio Interactivo: Simulador Gráfico",
            contenido: `
                <h2>Visualizando la Intersección</h2>
                <p>Usa la calculadora gráfica a continuación. Haz clic en la primera línea de la izquierda y escribe <b>x + y = 4</b>. Luego haz clic en la segunda línea y escribe <b>x - y = 2</b>. ¿En qué punto exacto se cruzan las dos rectas? Pista: ¡Haz clic en el cruce para ver las coordenadas!</p>
                
                <div style="margin-top: 20px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border-radius: 8px; overflow: hidden;">
                    <iframe src="https://www.desmos.com/calculator?embed" width="100%" height="450" style="border: 1px solid #ccc;" frameborder=0></iframe>
                </div>
                
                <div style="margin-top: 15px; padding: 15px; text-align: center; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px;">
                    <b>¡Analiza el resultado!</b> Si lo hiciste bien, ambas rectas se cruzan en el punto <b>$(3, 1)$</b>.<br>
                    Comprobación matemática: ¿$3+1=4$? Sí. ¿$3-1=2$? Sí. ¡El simulador no miente!
                </div>
            `
        },
        {
            titulo: "4. Práctica Independiente",
            contenido: `
                <h2>Dibuja y encuentra el cruce</h2>
                <p>Tienes 15 minutos. Para cada sistema, despeja la $y$ en ambas ecuaciones, haz una tabla de valores rápida (2 puntos por recta) y grafícalas en tu cuaderno para hallar la solución. Puedes usar el simulador después para revisar si tu gráfico a mano quedó correcto.</p>
                
                <div class="info-grid">
                    <div class="step">
                        <b style="color: #047857;">Sistema A:</b><br><br>
                        $$y = 2x$$ <i>(¡Ya está despejada!)</i><br>
                        $$x + y = 6$$
                    </div>
                    <div class="step">
                        <b style="color: #1d4ed8;">Sistema B:</b><br><br>
                        $$y = x + 1$$<br>
                        $$y = -x + 5$$
                    </div>
                </div>

                <div style="text-align: center; margin-top: 30px; background: rgba(15, 23, 42, 0.05); padding: 20px; border-radius: 15px;">
                    <div id="timer-display" style="font-size: 4rem; font-weight: bold; color: var(--primary); font-family: monospace;">15:00</div>
                    <button class="btn btn-primary" onclick="iniciarCronometro(900)" style="margin-top: 15px;">⏳ Iniciar Tiempo (15 min)</button>
                    <button class="btn" style="margin-top: 15px; border: 2px solid #047857; color: #047857; background: transparent;" onclick="document.getElementById('resp-indep-u4_c2').classList.toggle('hidden')">👁️ Mostrar Soluciones</button>
                </div>

                <div id="resp-indep-u4_c2" class="hidden" style="margin-top: 20px; padding: 15px; background: rgba(16, 185, 129, 0.1); border-left: 5px solid #047857; border-radius: 8px;">
                    <h3 style="color: #047857; margin-top: 0;">Resultados Esperados:</h3>
                    <ul style="line-height: 2; font-size: 1.1rem;">
                        <li><b>Sistema A:</b><br>
                        Eq 2 despejada: $y = -x + 6$.<br>
                        La intersección en el gráfico debe darse en el punto <b>$(2, 4)$</b>.</li>
                        <hr style="border: 1px solid #047857; opacity: 0.2; margin: 10px 0;">
                        <li><b>Sistema B:</b><br>
                        Ambas ya están despejadas.<br>
                        La intersección en el gráfico debe darse en el punto <b>$(2, 3)$</b>.</li>
                    </ul>
                </div>
            `
        },
        {
            titulo: "5. Ticket de Salida",
            contenido: `
                <h2>¿Puedes leer el plano?</h2>
                <p>Imagina que un compañero intentó resolver un sistema de ecuaciones gráficamente. Graficó la primera recta y la segunda recta en el mismo plano cartesiano.</p>
                
                <div class="card" style="margin-top: 20px; border-left-color: #eab308; background: rgba(234, 179, 8, 0.05);">
                    <h3 style="color: #ca8a04;">Análisis de Gráfico</h3>
                    <p style="font-size: 1.1em; margin-bottom: 20px;">Observas que las dos rectas dibujadas por tu compañero se cruzan exactamente en las coordenadas donde $x = -1$ y $y = 5$.</p>
                    
                    <ol style="font-size: 1.1em; line-height: 1.8;">
                        <li>¿Cuál es la solución matemática de este sistema de ecuaciones? Escríbela como par ordenado.</li>
                        <li>Si reemplazamos $x = -1$ e $y = 5$ en la primera ecuación de su problema original, ¿qué debería pasar? ¿Por qué?</li>
                    </ol>
                    
                    <div style="text-align: center; margin-top: 25px;">
                        <button class="btn" style="border: 2px solid #ca8a04; color: #ca8a04; background: white;" onclick="document.getElementById('ticket-resp-u4-c2').classList.toggle('hidden')">Ver Respuesta Esperada</button>
                    </div>
                </div>

                <div id="ticket-resp-u4-c2" class="hidden" style="margin-top: 15px; padding: 15px; border-radius: 8px; border-left: 5px solid #ca8a04; background: white;">
                    <p style="line-height: 1.8;"><b>1.</b> La solución es el par ordenado <b>$(-1, 5)$</b>.<br>
                    <b>2.</b> Debería cumplirse la igualdad matemática (dar verdadero). Esto ocurre porque ese punto $(-1, 5)$ pertenece a esa recta, lo que significa que es una de sus infinitas soluciones. También debe cumplirse al reemplazar en la segunda ecuación.</p>
                </div>
            `
        }
    ]
},
    ]
}
]
