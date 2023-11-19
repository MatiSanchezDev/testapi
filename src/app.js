import express, { json } from "express";
import cors from "cors";
import { consultasRouter } from "./routes/rutasConsultas.js";

const app = express();

app.use(cors());
app.use(json());
app.disable("x-powered-by");

app.use("/", consultasRouter);

export default app;
