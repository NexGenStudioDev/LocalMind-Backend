import dotenv from "dotenv";
dotenv.config();

import express from "express";
import AiTemplate from "./Template/v1/Ai.template";
import GeminiUtils from "./api/Ai-model/Google/Google.utils";

const app = express();

const PORT = Number(process.env.PORT) || 3000;
const APP_ENV = process.env.APP_ENV || "development";
const HOST = APP_ENV === "development" ? "localhost" : "0.0.0.0";

app.get("/", (_req, res) => {
  res.send("Hello from LocalMind backend!");
});

(async () => {
  try {
    const promptTemplate = await AiTemplate.getPromptTemplate();

    const geminiUtils = new GeminiUtils({
      modelName: "gemini-2.5-pro",
      maxOutputTokens: 2048,
      temperature: 0.7,
    });

    const response = await geminiUtils.generateResponse(promptTemplate, {
      userName: "Abhishek Gupta",
      userPrompt: "Capital of India",
    });

    console.log(response);
  } catch (error) {
    console.error("Error during AI response generation:", error);
  }
})();

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running in ${APP_ENV} mode at http://${HOST}:${PORT}`);

  if (APP_ENV === "development") {
    console.log("🔒 Local-only access enabled (via localhost)");
  } else {
    console.log("🌍 Production mode — server is exposed externally");
  }
});
