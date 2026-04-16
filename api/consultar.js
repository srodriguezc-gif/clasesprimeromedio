// api/consultar.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { pregunta } = req.body;

        if (!pregunta || typeof pregunta !== 'string') {
            return res.status(400).json({ error: 'Pregunta inválida' });
        }

        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY no está configurada");
            return res.status(500).json({ error: "Clave de API no configurada en el servidor" });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            systemInstruction: `Eres un tutor de matemáticas amigable y experto para estudiantes de secundaria en Chile. 
            Guía paso a paso, usa lenguaje claro y motivador. Nunca des la respuesta final sin explicar.`
        });

        const result = await model.generateContent(pregunta);
        const response = await result.response;
        const text = response.text();

        res.status(200).json({ respuesta: text });

    } catch (error) {
        console.error("Error en /api/consultar:", error.message);
        res.status(500).json({ 
            error: "Error interno del servidor al procesar la consulta con IA." 
        });
    }
}
