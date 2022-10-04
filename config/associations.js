const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");


/*
Planet.hasOne(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"}); 
// o 'as: "planet"' cria a chave estrangeira planetId
*/


Planet.hasMany(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"}); 

Cap.belongsToMany(Spaceship, {
    foreignKey: "capId",
    through: "capSpaceships",
    as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
    foreignKey: "spaceshipId",
    through: "capSpaceShips",
    as: "caps",
});

module.exports = {Planet, Satelite};

