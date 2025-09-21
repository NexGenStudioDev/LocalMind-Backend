import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { LangchainPromptTemplate } from "../../../Template/v1/Ai.template";
import { env } from "../../../constant/env.constant";

class GeminiUtils {
  private model: ChatGoogleGenerativeAI;

  constructor() {
    this.model = new ChatGoogleGenerativeAI({
      apiKey: env.GOOGLE_API_KEY || "",
      model: "gemini-2.5-pro",
      temperature: 0.7,
      
      maxOutputTokens: 2048,
    });
  }

  // Function to generate AI response with system prompt and Langchain prompt template
  async generateResponse(
    promptTemplate: LangchainPromptTemplate, // Pass Langchain prompt template
    inputValues: Record<string, any> = {} // User input (e.g., name, question)
  ): Promise<string> {
    try {
   
      const formattedPrompt = await promptTemplate.format(inputValues);
     
   
      const response = await this.model.invoke(formattedPrompt)

      
      if (typeof response === "object" && "content" in response) {
        return (response as any).content;
      }

      return response as string;
    } catch (error) {
      console.error("GeminiService Error:", error);
      throw new Error("Failed to generate response from Gemini.");
    }
  }
}

export default GeminiUtils;
