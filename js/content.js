// Funciones Universales (Sirven para todas las clases y unidades)
function checkRes(isCorrect, msgSuccess, msgError) {
    const f = document.getElementById('feedback');
    f.classList.remove('hidden');
    if(isCorrect) {
        f.innerHTML = msgSuccess;
        f.className = "success";
    } else {
        f.innerHTML = msgError;
        f.className = "error";
    }
}

let timerInterval;
function iniciarCronometro(segundos) {
    clearInterval(timerInterval); 
    let tiempo = segundos;
    timerInterval = setInterval(() => {
        const display = document.getElementById('timer-display');
        if (!display) { clearInterval(timerInterval); return; }
        let min = Math.floor(tiempo / 60);
        let seg = tiempo % 60;
        display.innerText = `${min < 10 ? '0' : ''}${min}:${seg < 10 ? '0' : ''}${seg}`;
        if (tiempo <= 60 && tiempo > 0) display.style.color = "#ef4444"; 
        if (tiempo <= 0) { clearInterval(timerInterval); display.innerText = "¡TIEMPO AGOTADO! 🛑"; }
        tiempo--;
    }, 1000);
}

// ---------------------------------------------------
// EL BANCO DE CLASES (Aquí guardaremos todo tu material)
// ---------------------------------------------------
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
    }
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
]





