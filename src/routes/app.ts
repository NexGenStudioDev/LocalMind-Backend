import express from "express";
const app: express.Application = express();

import { GoogleRoutes } from "../api/Ai-model/Google/Google.routes";
import { DataSetRoutes } from "../api/DataSet/DataSet.routes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", GoogleRoutes, DataSetRoutes);

export default app;
