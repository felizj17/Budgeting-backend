const app = require('express')()
const cors = require('cors')
const transactionController = require('./controllers/transactionController')

app.use('/transactions', transactionController)
app.get('/', (_,res)=>{
    res.send('Budgeting app')
})
module.exports = app