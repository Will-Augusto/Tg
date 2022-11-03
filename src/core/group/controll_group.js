const service = require('./service_group')

module.exports = {
    create,
    findAll,
    update,
    destroy,
    findName
}


async function create(req, res) {

    const { name = '', description = '', emaddressail = ''} = req.body

    if (name == '' || description == '' || emaddressail == '' ) {
        res.status(400).json({ error: 'Dados incompletos' })
        return
    }

    const response = await service.create(name, description, emaddressail)
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
    const { name = '', description = '', emaddressail = ''} = req.body
    
    if (name == '' || description == '' || emaddressail == ''){
        res.status(400).json({ error: 'Por favor, preencha todos os dados' })
        return
    }
    const response = await service.update(name, description, emaddressail, id)
    res.status(201).json(response)
} 

async function destroy(req, res){
    const { id } =  req.params
    console.log(id)
    const response = await service.destroy(id)
    res.status(201).json(response)
}

async function findName(req, res){
    const { id } =  req.params
    var name = id.replace( ":" , ""); 

    const response = await service.findOne(name)
    res.status(201).json(response)
}

