const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async function handler(req, res) {
    // Solo permitimos método POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { pregunta } = req.body;

        // VERIFICAMOS LA CLAVE DE API
        if (!process.env.GEMINI_API_KEY) {
            console.error("Error: GEMINI_API_KEY no está configurada en Vercel.");
            return res.status(500).json({ error: "Falta la clave de API" });
        }

        // Conexión con Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

        const prompt = `Eres un tutor de matemáticas amigable, paciente y experto del colegio Nocedal. 
        Responde a la siguiente duda del estudiante de forma clara, didáctica y no muy larga. 
        Pregunta del alumno: ${pregunta}`;

        const result = await model.generateContent(prompt);
        const respuestaIA = result.response.text();

        return res.status(200).json({ respuesta: respuestaIA });

    } catch (error) {
        console.error("Error interno del servidor:", error);
        return res.status(500).json({ error: "Error al comunicarse con la IA" });
    }
};
