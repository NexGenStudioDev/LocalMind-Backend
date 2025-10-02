import express from "express";
const app: express.Application = express();
import logger from "morgan";
import { GoogleRoutes } from "../api/Ai-model/Google/Google.routes";
import { DataSetRoutes } from "../api/DataSet/v1/DataSet.routes";
import { userRoutes } from "./user.routes";
import cookieParser from "cookie-parser";

logger.token("time", () => new Date().toLocaleString());
app.use(logger(":time :method :url :status"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api", GoogleRoutes, userRoutes, DataSetRoutes);

export default app;
