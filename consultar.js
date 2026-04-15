const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
    // Solo permitimos peticiones POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { pregunta } = req.body;

        if (!pregunta) {
            return res.status(400).json({ error: "No se recibió ninguna pregunta." });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const modeloTutor = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: `Eres un tutor de matemáticas amigable y experto para estudiantes de secundaria en Chile. 
            Tu objetivo es ayudarles a entender Números Racionales, jerarquía de operaciones, propiedades matemáticas y Sistemas de Ecuaciones Lineales.
            REGLA 1: NUNCA des la respuesta final de inmediato. Guía al estudiante paso a paso para que piense.
            REGLA 2: Usa un lenguaje claro, sencillo y motivador.
            REGLA 3: Si te piden un ejercicio de práctica, genéralo y dile al estudiante que te dé su respuesta para revisarla.
            REGLA 4: Utiliza un formato limpio usando saltos de línea.`
        });

        const result = await modeloTutor.generateContent(pregunta);
        const response = await result.response;
        
        res.status(200).json({ respuesta: response.text() });

    } catch (error) {
        console.error("Error al conectar con Gemini:", error);
        res.status(500).json({ error: "Hubo un error al procesar tu consulta con la IA." });
    }
}