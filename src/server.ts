import { env } from "./constant/env.constant";
import express from "express";
import mongooseConection from "./config/mongoose.connection";
import app from "./routes/app";

mongooseConection();

const PORT = Number(env.PORT) || 3000;
const APP_ENV = env.APP_ENV || "development";
const HOST = APP_ENV === "development" ? "localhost" : "0.0.0.0";

app.get("/", (_req, res) => {
  res.send("Hello from LocalMind backend!");
});

app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running in ${APP_ENV} mode at http://${HOST}:${PORT}`);

  if (APP_ENV === "development") {
    console.log("🔒 Local-only access enabled (via localhost)");
  } else {
    console.log("🌍 Production mode — server is exposed externally");
  }
});
