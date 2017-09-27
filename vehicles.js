const faker = require('faker');

const colors = require('./colors');
const dealerships = require('./dealerships');
const equipments = require('./equipments');
const medias = require('./medias');
const models = require('./models');
const generations = require('./generations');
const users = require('./users');

const energy = [1,2,3,4,5];
/*
1/ Essence
2/ Gazoil
3/ Electric
4/ GPL
5/ Hybrid
*/

const transmission = [1,2];
/*
1/ Automatic
2/ Manual
*/

const drivetrain = [1,2];
/*
1/ 2WD
2/ 4WD
*/

const powerOutput = [90, 110, 130, 150, 190];

function generateData() {
    const entities = [];

    for (let id = 0; id < 100; id++) {

        const generationV = faker.random.arrayElement(generations);
        const modelV = generationV.model;
        const brandV = modelV.brand;

        let mediaV = [];
        let equipmentsV = [];

        for(let id = 0; id < faker.random.number({min:1, max:6}); id++) {
            mediaV.push(faker.random.arrayElement(medias));
        }

        for(let id = 0; id < faker.random.number({min:5, max:10}); id++) {
            equipmentsV.push(faker.random.arrayElement(equipments));
        }

        entities.push({
            "id": id + 1,
            "vin": faker.helpers.replaceSymbolWithNumber("VF1##############"),
            "price" : faker.random.number({min:5, max:150}) * 100,
            "description": faker.lorem.sentence(8),
            "powerOutput": faker.random.arrayElement(powerOutput),
            "registrationDate": faker.date.past(),
            "createdDate" : faker.date.recent(),
            "updatedDate" : faker.date.recent(),
            "drivetrain": faker.random.arrayElement(drivetrain),
            "transmission": faker.random.arrayElement(transmission),
            "energy": faker.random.arrayElement(energy),
            "mileage": faker.random.number({min:5, max:200}) * 1000,
            "consumptionUrban": parseInt(faker.commerce.price(7,12,1, '')),
            "consumptionExtraUrban": parseInt(faker.commerce.price(5,8,1, '')),
            "consumptionCombined": parseInt(faker.commerce.price(7,10,1, '')),
            "co2EmissionsCombined": faker.random.number({min:70, max:210}),
            "isWarranty": faker.random.boolean(),
            "positionLat": faker.address.latitude(),
            "positionLng": faker.address.longitude(),
            "exteriorColor": faker.random.arrayElement(colors),
            "interiorFinish": faker.commerce.productMaterial(),
            "user": faker.random.arrayElement(users),
            "brand": brandV,
            "model": modelV,
            "generation": generationV,
            "dealership": faker.random.arrayElement(dealerships),
            "equipments" : equipmentsV,
            "medias" : mediaV
        })
     }
    return entities;
}

module.exports = generateData();
