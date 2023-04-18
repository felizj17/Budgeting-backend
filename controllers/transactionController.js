const transactions = require('express').Router()
const bodyParser = require('body-parser')
const transactionsArray = require('../models/transactions')

transactions.get('/', (req, res) => {
  res.json(transactionsArray)
})

transactions.get('/:id', (req,res)=>{
    const id = req.params
    res.status(200).json(transactionsArray[id])
})
transactions.post('/new',(req,res)=>{
    const newTransaction = req.body
    transactionsArray.push(newTransaction)
    res.status(202).json(transactionsArray) 
})

module.exports = transactions