const mongoose = require('mongoose')
async function createConnectDB() {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect('mongodb://127.0.0.1/TestFeature')
        console.log('connect database success!')
    } catch (error) {
        console.log('connect database fail! error:', error)
    }
}
module.exports = { createConnectDB }
