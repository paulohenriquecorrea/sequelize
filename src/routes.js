const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controllers/PlanetController");
const SateliteController = require("../Controllers/SateliteController");
const CapController = require("../Controllers/CapController");
const SpaceshipController = require("../Controllers/SpaceshipController");

// const SpaceshipController = require("")

// Rotas de Planets
routes.get("/planets", PlanetController.index);
routes.post("/planets", PlanetController.store);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get ("/caps/:capId/spaceships", SpaceshipController.index);


module.exports = routes;

