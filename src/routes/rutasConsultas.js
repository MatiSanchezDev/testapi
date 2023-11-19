import { Router } from "express";
import { readJSON } from "../utilities/readJson.js";

export const consultasRouter = Router();

const consultas = readJSON("../operaciones.json");

consultasRouter.get("/consulta", (req, res) => {
  try {
    res.status(200).json(consultas);
  } catch (error) {
    res.status(404).json({ error: "Algo no salio como se esperaba" });
  }
});

consultasRouter.get("/consulta/detalle/:id", (req, res) => {
  try {
    const { id } = req.params;
    const findConsulta = consultas.find((consulta) => consulta.id === id);
    if (findConsulta) {
      res.status(200).json(findConsulta);
    } else {
      res.status(404).json({ message: "No se encontró la consulta" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Error" });
  }
});
