// api/consultar.js
import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { pregunta } = req.body;

        if (!pregunta || typeof pregunta !== 'string' || pregunta.trim() === '') {
            return res.status(400).json({ error: 'La pregunta no puede estar vacía' });
        }

        if (!process.env.GEMINI_API_KEY) {
            console.error("GEMINI_API_KEY no está configurada");
            return res.status(500).json({ error: "Error de configuración del servidor" });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        // Versión Pro - Más inteligente
        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-pro",          // ← Aquí está el cambio a Pro
            systemInstruction: `Eres un tutor de matemáticas amigable y experto para estudiantes de secundaria en Chile. 
            Explica siempre paso a paso con claridad. Usa lenguaje motivador y sencillo. 
            Nunca des solo la respuesta final sin razonamiento. Si es un ejercicio, guíalo para que piense.`
        });

        const result = await model.generateContent(pregunta);
        const response = await result.response;
        const textoRespuesta = response.text();

        res.status(200).json({ respuesta: textoRespuesta });

    } catch (error) {
        console.error("Error en /api/consultar:", error.message);
        
        res.status(500).json({ 
            error: "El tutor está muy ocupado en este momento. Por favor, intenta de nuevo en unos segundos." 
        });
    }
}
