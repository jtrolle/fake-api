const brands = require('./brands');
const colors = require('./colors');
const dealerships = require('./dealerships');
const equipments = require('./equipments');
const generations = require('./generations');
const medias = require('./medias');
const models = require('./models');
const users = require('./users');
const vehicles = require('./vehicles');

function genreateData() {
    return {
        "brands": brands,
        "colors" : colors,
        "dealerships" : dealerships,
        "equipments": equipments,
        "generations" : generations,
        "medias" : medias,
        "models" : models,
        "users": users,
        "vehicles": vehicles
    }
}

module.exports = genreateData