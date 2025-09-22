import express from "express";
const app: express.Application = express();
import logger from "morgan";
import { GoogleRoutes } from "../api/Ai-model/Google/Google.routes";
import { userRoutes } from "./user.routes";

logger.token("time", () => new Date().toLocaleString());
app.use(logger(":time :method :url :status"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api", GoogleRoutes, userRoutes);

export default app;
