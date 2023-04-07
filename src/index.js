const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const Router = require('./routes')

const DB = require('./connectionDB/createConnection')
const app = express()
const PORT = 3000
//using morgan
app.use(morgan('combined'))
//connect MongoDB
DB.createConnection()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())
// Router
Router.routes(app)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
