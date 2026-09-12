import express from "express";
import urlRoutes from "./routes/url.routes.js";
import urlController from "./controllers/url.controller.js";
const app = express();
app.use(express.json());

app.use("/api/url", urlRoutes);
app.get("/:shortCode", urlController.redirect);

export default app;