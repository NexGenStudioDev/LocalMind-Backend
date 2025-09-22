import { OllamaEmbeddings } from "@langchain/ollama";

class Ollama_Utils {
  public async getVector(data: any): Promise<number[] | undefined> {
    try {
      const embeddings = new OllamaEmbeddings({
        model:
          "koill/sentence-transformers:paraphrase-multilingual-minilm-l12-v2",
        maxRetries: 2,
        baseUrl: "http://localhost:11434",
      });

      const vector = await embeddings.embedDocuments(data);

      return vector[0];
    } catch (error: any) {
      throw new Error(error.message || "Failed to fetch embeddings");
    }
  }
}

export default new Ollama_Utils();
