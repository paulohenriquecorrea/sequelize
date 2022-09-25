const Planet = require("../models/Planet");
const Satelite = require("../models/Satelite");

/*
Planet.hasOne(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"}); 
// o 'as: "planet"' cria a chave estrangeira planetId
*/


Planet.hasMany(Satelite, {onDelete: "CASCADE", onUpdate: "CASCADE"});
Satelite.belongsTo(Planet, {foreingKey: "planetId", as: "planet"}); 
module.exports = {Planet, Satelite};