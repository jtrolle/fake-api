const faker = require('faker');
const _ = require('lodash');

const brands = require('./brands');
const renault = _.find(brands, { "name" : 'Renault' });
const vw = _.find(brands, { "name" : 'Volkswagen' });


const models = [
    {
        "id": 1,
        "name": "Clio",
        "brand": renault,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 2,
        "name": "Espace",
        "brand": renault,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 3,
        "name": "Kangoo",
        "brand": renault,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 4,
        "name": "Laguna",
        "brand": renault,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 5,
        "name": "Megane",
        "brand": renault,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 6,
        "name": "Scenic",
        "brand": renault,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 7,
        "name": "Amarok",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 8,
        "name": "Coccinelle",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 9,
        "name": "Combi",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 10,
        "name": "Golf",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 11,
        "name": "Lupo",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 12,
        "name": "Passat",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 13,
        "name": "Polo",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
    {
        "id": 14,
        "name": "Touran",
        "brand": vw,
        "createdDate" : faker.date.recent(),
        "updatedDate" : faker.date.recent()
    },
];

module.exports = models;
