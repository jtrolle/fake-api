var faker = require('faker');

function generateData() {
    var entities = []

    for (var id = 0; id < 50; id++) {
        var firstName = faker.name.firstName()
        var lastName = faker.name.firstName()
        var phoneNumber = faker.phone.phoneNumberFormat()
        var domain = faker.internet.domainName()

        entities.push({
            "id": id + 1,
            "url": faker.image.imageUrl(800,600,"cats"),
            "createdDate" : faker.date.recent(),
            "updatedDate" : faker.date.recent()
        })
     }
    return entities;
}

module.exports = generateData();