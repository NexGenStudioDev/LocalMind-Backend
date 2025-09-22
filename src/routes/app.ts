import express from "express";
const app: express.Application = express();

import { GoogleRoutes } from "../api/Ai-model/Google/Google.routes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/api', 
  GoogleRoutes
)

export default app;
