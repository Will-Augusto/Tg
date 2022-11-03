const service = require('./service_customer')

module.exports = {
    create,
    findAll,
    update,
    destroy,
    findByEmail
}


async function create(req, res) {

    const { name = '', age = '', email = '' } = req.body

    if (name == '' || age == '' || email == '' ) {
        res.status(400).json({ error: 'Dados incompletos' })
        return
    }

    const response = await service.create(name, age, email)
    if (response.error) {
        res.status(400).json({ error: response.error })
        return
    }
    
    res.status(201).json(response)
}

async function findAll(req, res) {
    const response = await service.findAll()
    res.status(200).json(response)
}

async function update(req, res) {
    const { id } =  req.params
    const { name = '', age = '', email = ''} = req.body
    
    if (name == '' || age == '' || email == ''){
        res.status(400).json({ error: 'Por favor, preencha todos os dados' })
        return
    }
    const response = await service.update(name, age, email, id)
    res.status(201).json(response)
} 

async function destroy(req, res){
    const { id } =  req.params
    const response = await service.destroy(id)
    res.status(201).json(response)
}

async function findByEmail(req, res){
    const { id } =  req.params
    var email = id.replace( ":" , ""); 

    const response = await service.findOne(email)
    res.status(201).json(response)
}

