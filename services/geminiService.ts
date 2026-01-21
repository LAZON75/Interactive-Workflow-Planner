
import { GoogleGenAI, Type } from "@google/genai";
import { AIWorkflowResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateDevPlan(projectIdea: string): Promise<AIWorkflowResponse> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze this project idea: "${projectIdea}". Create a high-productivity development plan using AI tools. Return a JSON object with a summary and a list of 4-5 key steps, each with a title, a short description, and a specific "AI Prompt" example the user can use with an LLM to build that part of the project.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          projectName: { type: Type.STRING },
          summary: { type: Type.STRING },
          steps: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                promptExample: { type: Type.STRING },
              },
              required: ["title", "description", "promptExample"],
            },
          },
        },
        required: ["projectName", "summary", "steps"],
      },
    },
  });

  try {
    const data = JSON.parse(response.text || "{}");
    return data as AIWorkflowResponse;
  } catch (error) {
    console.error("Failed to parse AI response", error);
    throw new Error("Invalid response from AI");
  }
}
