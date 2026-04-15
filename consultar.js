const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async function handler(req, res) {
    // 1. Vercel solo debe aceptar peticiones POST desde tu chat
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { pregunta } = req.body;

        // 2. Verificamos que le hayas puesto la contraseña a Vercel
        if (!process.env.GEMINI_API_KEY) {
            console.error("Falta la variable GEMINI_API_KEY en Vercel");
            return res.status(500).json({ error: "Falta la clave de API" });
        }

        // 3. Conectamos con Google Gemini
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // Usamos el modelo flash que es el más rápido para chats
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

        // 4. Le damos una personalidad de Profesor al Tutor
        const prompt = `Eres un tutor de matemáticas amigable, paciente y experto del colegio Nocedal. 
        Responde a la siguiente duda del estudiante de forma clara, didáctica y no muy larga. 
        Pregunta del alumno: ${pregunta}`;

        // 5. Pedimos la respuesta y la enviamos de vuelta a tu página
        const result = await model.generateContent(prompt);
        const respuestaIA = result.response.text();

        return res.status(200).json({ respuesta: respuestaIA });

    } catch (error) {
        // Si algo falla, Vercel nos avisará aquí en sus registros
        console.error("Error interno en el servidor de Vercel:", error);
        return res.status(500).json({ error: "Error al comunicarse con la IA" });
    }
};
