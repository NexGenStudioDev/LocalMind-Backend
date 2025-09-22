import fs from "fs/promises";
import path from "path";
import { PromptTemplate } from "@langchain/core/prompts";

export type LangchainPromptTemplate = PromptTemplate;

class AiTemplate {
  async getPromptTemplate(): Promise<LangchainPromptTemplate> {
    const templatePath = path.resolve("./src/Template/v1/text/PromptText.txt");
    const promptText = await fs.readFile(templatePath, "utf-8");
    const prompt = PromptTemplate.fromTemplate(promptText);

    return prompt;
  }
}

export default new AiTemplate();
