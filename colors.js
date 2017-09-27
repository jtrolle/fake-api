var faker = require('faker');

module.exports = [
    {
        "id" : 1,
        "name" : "Bleu",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 2,
        "name" : "Vert",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 3,
        "name" : "Rouge",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 4,
        "name" : "Oragne",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 5,
        "name" : "Maron",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 6,
        "name" : "Blanc",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 7,
        "name" : "Noir",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 8,
        "name" : "Jaune",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 9,
        "name" : "Gris",
        "parent" : null,
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 10,
        "name" : "Vert Bouteille",
        "parent" : {
            "id" : 2,
            "name" : "Vert",
            "parent" : null,
            "createdDate": faker.date.recent(),
            "updatedDate": faker.date.recent()
        },
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 11,
        "name" : "Rouge intense",
        "parent" : {
            "id" : 3,
            "name" : "Rouge",
            "parent" : null,
            "createdDate": faker.date.recent(),
            "updatedDate": faker.date.recent()
        },
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 12,
        "name" : "Gris clair",
        "parent" : {
            "id" : 9,
            "name" : "Gris",
            "parent" : null,
            "createdDate": faker.date.recent(),
            "updatedDate": faker.date.recent()
        },
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
    {
        "id" : 13,
        "name" : "Gris foncé",
        "parent" : {
            "id" : 9,
            "name" : "Gris",
            "parent" : null,
            "createdDate": faker.date.recent(),
            "updatedDate": faker.date.recent()
        },
        "createdDate": faker.date.recent(),
        "updatedDate": faker.date.recent()
    },
];