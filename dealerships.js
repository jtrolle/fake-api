var faker = require('faker');

var users = require('./users');

function generateData() {
    var entities = []

    for (var id = 0; id < 50; id++) {
        var firstName = faker.name.firstName()
        var lastName = faker.name.firstName()
        var phoneNumber = faker.phone.phoneNumberFormat()
        var domain = faker.internet.domainName()

        entities.push({
            "id": id + 1,
            "name": faker.company.companyName(),
            "address": faker.address.streetAddress(),
            "address2": faker.address.secondaryAddress(),
            "zipCode": faker.address.zipCode('#####'),
            "city": faker.address.city(),
            "country": faker.address.country(),
            "createdDate" : faker.date.recent(),
            "updatedDate" : faker.date.recent()
        })
     }
    return entities;
}

module.exports = generateData();