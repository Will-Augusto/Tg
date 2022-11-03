const repository = require('./repository_customer')

module.exports = {
    create,
    findAll,
    update,
    destroy,
    findOne
   
}

async function create(name, age, email) {
    const emailExists = await repository.findByEmail(email)
     if (emailExists) {
        console.log(email)
         return {
             error: 'E-mail já existe'
         }
     }
     const customer = await repository.create(name, age, email)
     return customer
 }
 
async function findAll() {
    const customers = await repository.findAll()
    return customers
}

async function update(name, age, email, id) {
    const customerExists = await repository.findById(id)
    if (!customerExists){
        return {
            error: 'Usuario não encontrado'
        }
    }
                //Tem Parada errada aqui irmão, Willian do futuro, da uma olhada nesse return ai na moral
    const updateCustomer = await customerExists.updateOne({name: name, age: age,  email: email})
    
    return updateCustomer
}

async function destroy(id){
    const customerExists = await repository.findById(id)
    if (!customerExists){
        return {
            error: 'Usuario não encontrado'
        }
    }
    await customerExists.remove()
    return "Usuario deletado"
}

async function findOne(email) {
    const customers = await repository.findByEmail(email)
    return customers
}