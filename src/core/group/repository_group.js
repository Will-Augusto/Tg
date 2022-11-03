const repository = require('../../models/modelGroup')

module.exports = {
    findByName,
    create,
    findAll,
    findById,
    
    
}

async function findByName(name) {
    const customer = await repository.findOne({ "name": name })
    return customer
}

async function create(name, description, emaddressail) {
    const customer = await repository.create({ name, description, emaddressail})
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



