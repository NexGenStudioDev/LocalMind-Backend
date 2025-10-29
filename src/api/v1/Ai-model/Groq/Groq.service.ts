import { ChatGroq } from "@langchain/groq";
import { ChartWithGroq_type } from "./Groq.type";
import { env } from "../../../../constant/env.constant";
import AiTemplate from "../../../../Template/v1/Ai.template";

class GroqService {
  public async ChartWithGroq(data: ChartWithGroq_type): Promise<any> {
    try {
      const promptTemplate = await AiTemplate.getPromptTemplate();

      const llm = new ChatGroq({
        model: data.model || "groq/compound",
        temperature: 0,
        apiKey: env.GROQ_API_KEY ? env.GROQ_API_KEY : data.apiKey,
        maxRetries: 2,
      });

      let prompt = await promptTemplate.format({
        userName: "Alice",
        userPrompt: data.message,
      });

      let response = await llm.invoke(prompt);

      return JSON.parse(
        typeof response.content === "string"
          ? response.content
          : JSON.stringify(response.content),
      );
    } catch (error) {}
  }
}

export default new GroqService();
