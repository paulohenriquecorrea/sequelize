const express = require("express");
const routes = express.Router();
const PlanetController = require("../Controllers/PlanetController");
const SateliteController = require("../Controllers/SateliteController");

// Rotas de Planets
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete)

// Rotas de Satelites
routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

module.exports = routes;

