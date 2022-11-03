const express = require('express')
const groupController = require('./core/group/controll_group')
const customerController = require('./core/customer/controll_customer')


const routes = express.Router()

routes.post('/customer', customerController.create)
routes.get('/customer',  customerController.findAll)
routes.put('/customer:id', customerController.update)
routes.delete('/customer:id', customerController.destroy)
routes.get('/customer:id', customerController.findByEmail)


routes.post('/group', groupController.create)
routes.get('/group',  groupController.findAll)
routes.put('/group:id', groupController.update)
routes.delete('/group:id', groupController.destroy)
routes.get('/group:id', groupController.findName)





module.exports = routes