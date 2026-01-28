
import { GoogleGenAI } from "@google/genai";

export async function enhanceBio(currentBio: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional resume and portfolio writer. 
      Rewrite the following short bio to make it sound more professional, 
      compelling, and technical, while keeping it under 300 characters. 
      The person is Jhon Mark A. Suico, a BSCS 3-A student.
      Original bio: "${currentBio}"`,
    });
    return response.text || currentBio;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return currentBio;
  }
}
