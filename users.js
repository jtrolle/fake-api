var faker = require('faker');

function generateUsers () {
    var users = []

    for (var id = 0; id < 50; id++) {
        var firstName = faker.name.firstName()
        var lastName = faker.name.firstName()
        var phoneNumber = faker.phone.phoneNumberFormat()
        var domain = faker.internet.domainName()

        users.push({
            "id": id + 1,
            "greeting": faker.random.number({
                'min': 1,
                'max': 2
            }),
            "name": firstName,
            "lastname": lastName,
            "email" : (`${firstName}.${lastName}@${domain}`).toLowerCase(),
            "address": faker.address.streetAddress(),
            "address2": faker.address.secondaryAddress(),
            "zipCode": faker.address.zipCode('#####'),
            "city": faker.address.city(),
            "country": faker.address.country(),
            "createdDate" : faker.date.past()
        })
     }
    return users;
}

module.exports = generateUsers();