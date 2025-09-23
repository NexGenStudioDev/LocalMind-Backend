import AiTemplate from "../../../Template/v1/Ai.template";
import GeminiUtils from "./Google.utils";

class GoogleService {
  async ChatWithGoogleAI(prompt: string): Promise<any> {
    try {
      const promptTemplate = await AiTemplate.getPromptTemplate();

      const geminiUtils = new GeminiUtils({
        modelName: "gemini-1.5-flash",
        maxOutputTokens: 1000,
        temperature: 0.7,
      });

      const response = await geminiUtils.generateResponse(promptTemplate, {
        userName: "Alice",
        userPrompt: prompt,
      });

      return JSON.parse(response);
    } catch (error) {
      console.error("Error in ChatWithGoogleAI:", error);
      throw error;
    }
  }
}

export default new GoogleService();
