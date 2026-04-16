const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const { pregunta } = req.body;

        // Chismoso 1: Revisamos si Vercel realmente está leyendo la clave
        if (!process.env.GEMINI_API_KEY) {
            return res.status(500).json({ 
                error: "DEBUG 1: Vercel NO está leyendo la variable GEMINI_API_KEY. Falta hacer el Redeploy o el nombre está mal escrito." 
            });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

        const prompt = `Eres un tutor de matemáticas amigable, paciente y experto del colegio Nocedal. 
        Responde a la siguiente duda del estudiante de forma clara, didáctica y no muy larga. 
        Pregunta del alumno: ${pregunta}`;

        const result = await model.generateContent(prompt);
        const respuestaIA = result.response.text();

        return res.status(200).json({ respuesta: respuestaIA });

    } catch (error) {
        // Chismoso 2: Si Google rechaza la conexión, nos dirá el motivo exacto
        console.error("Error real:", error);
        return res.status(500).json({ 
            error: "DEBUG 2: Error de Google Gemini -> " + (error.message || "Error desconocido")
        });
    }
};
