const repository = require('./repository_group')

module.exports = {
    create,
    findAll,
    update,
    destroy,
    findOne
   
}

async function create(name, description, emaddressail) {
    const emailExists = await repository.findByName(name)
     if (emailExists) {
        
         return {
             error: 'Grupo já existe'
         }
     }
     const customer = await repository.create(name, description, emaddressail)
     return customer
 }
 
async function findAll() {
    const customers = await repository.findAll()
    return customers
}

async function update(name, description, emaddressail, id) {
    const customerExists = await repository.findById(id)
    if (!customerExists){
        return {
            error: 'Grupo não encontrado'
        }
    }
                //Tem Parada errada aqui irmão, Willian do futuro, da uma olhada nesse return ai na moral
    const updateCustomer = await customerExists.updateOne({name: name, description: description,  emaddressail: emaddressail})
    
    return updateCustomer
}

async function destroy(id){
    const customerExists = await repository.findById(id)
    if (!customerExists){
        return {
            error: 'Grupo não encontrado'
        }
    }
    await customerExists.remove()
    return "Usuario deletado"
}

async function findOne(name) {
    const customers = await repository.findByName(name)
    return customers
}


