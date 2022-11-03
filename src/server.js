const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(8888, () => console.log('Starting server in the door 8888 🚀'))

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('Conectado ao Atlas'))
.catch((error) => console.log(error))