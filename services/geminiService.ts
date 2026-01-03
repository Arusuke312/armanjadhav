import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateFinancialTip = async (): Promise<string> => {
  try {
    if (!apiKey) {
      return "Unlock the power of AI to get personalized financial advice. (API Key Missing)";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Give me a short, fun, 1-sentence financial tip for a teenager interested in saving money for a new phone. Use emojis.",
      config: {
        maxOutputTokens: 100,
      }
    });

    return response.text || "Save first, spend later! 💰";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Compound interest is your best friend when you start early! 📈";
  }
};

export const generateQuizQuestion = async (): Promise<{question: string, options: string[], answer: string}> => {
     try {
        if (!apiKey) return {
            question: "What is the rule of 72?",
            options: ["A cooking rule", "A way to estimate doubling time", "A highway speed limit"],
            answer: "A way to estimate doubling time"
        };

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: "Create a single multiple-choice question about personal finance for a teenager. Return valid JSON with fields: 'question', 'options' (array of 3 strings), and 'answer' (string matching one option).",
            config: {
                responseMimeType: "application/json"
            }
        });
        
        const text = response.text;
        if (!text) throw new Error("No response");
        return JSON.parse(text);

     } catch (error) {
         console.error(error);
         return {
            question: "What is the safest place to keep your emergency fund?",
            options: ["Under the mattress", "Savings Account", "Stock Market"],
            answer: "Savings Account"
        };
     }
}
