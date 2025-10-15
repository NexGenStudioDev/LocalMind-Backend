import express from "express";
const app: express.Application = express();
import logger from "morgan";
import cookieParser from "cookie-parser";
import { GoogleRoutes } from "../api/Ai-model/Google/Google.routes";
import { DataSetRoutes } from "../api/DataSet/v1/DataSet.routes";
import { userRoutes } from "../api/user/v1/user.routes";
import { OllamaRouter } from "../api/Ai-model/Ollama/v1/Ollama.routes";
import { GroqRouter } from "../api/Ai-model/Groq/v1/Groq.routes";

logger.token("time", () => new Date().toLocaleString());
app.use(logger(":time :method :url :status"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", GoogleRoutes, userRoutes, DataSetRoutes, OllamaRouter , GroqRouter);

export default app;
