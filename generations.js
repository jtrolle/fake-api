const faker = require('faker');
const _ = require('lodash');

const models = require('./models');

const clio = _.find(models, { "name" : 'Clio' });
const espace = _.find(models, { "name" : 'Espace' });
const megane = _.find(models, { "name" : 'Megane' });
const scenic = _.find(models, { "name" : 'Scenic' });

const golf = _.find(models, { "name" : 'Golf' });
const polo = _.find(models, { "name" : 'Polo' });

module.exports = [
    {
        "id" : 1,
        "name" : "Clio II",
        "model" : clio,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 2,
        "name" : "Clio III",
        "model" : clio,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 3,
        "name" : "Clio IV",
        "model" : clio,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 4,
        "name" : "Espace III",
        "model" : espace,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 5,
        "name" : "Espace IV",
        "model" : espace,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 6,
        "name" : "Megane III",
        "model" : megane,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 7,
        "name" : "Megane IV",
        "model" : megane,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 8,
        "name" : "Megane IV",
        "model" : megane,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 9,
        "name" : "Scenic II",
        "model" : scenic,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 10,
        "name" : "Scenic III",
        "model" : scenic,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 11,
        "name" : "Scenic IV",
        "model" : scenic,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 12,
        "name" : "Golf 5",
        "model" : golf,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 13,
        "name" : "Golf 6",
        "model" : golf,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 14,
        "name" : "Golf 7",
        "model" : golf,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 15,
        "name" : "Polo 3",
        "model" : polo,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 16,
        "name" : "Polo 4",
        "model" : polo,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
];