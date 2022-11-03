const repository = require('../../models/modelCustomer')

module.exports = {
    findByEmail,
    create,
    findAll,
    findById,
}

async function findByEmail(email) {
    const customer = await repository.findOne({ "email": email })
    return customer
}

async function create(name, age, email) {
    const customer = await repository.create({ name, age, email })
    return customer
}

async function findAll() {
    const customers = await repository.find({})
    return customers
}

async function findById(id){
    const customer = await repository.findOne({ where: { id } })
    return customer
}



