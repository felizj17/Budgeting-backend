const transactions = require('express').Router()
const bodyParser = require('body-parser')
const transactionsArray = require('../models/transactions')

const jsonParser = bodyParser.json()

transactions.get('/', (req, res) => {
  res.json(transactionsArray)
})

transactions.get('/:index', (req, res) => {
  const id = req.params.index
  res.status(200).json(transactionsArray[id])
})

transactions.post('/new', jsonParser, (req, res) => {
  const newTransaction = req.body
  transactionsArray.push(newTransaction)
  res.status(202).json(transactionsArray)
})

transactions.put('/:index/edit', jsonParser, (req, res) => {
  if (transactionsArray[req.params.index]) {
    transactionsArray[req.params.index] = req.body
    res.status(200).json(transactionsArray[req.params.index])
  } else {
    res.status(404).json({ error: 'Not Found' })
  }
})

transactions.delete('/index/delete', (req, res) => {
  if (transactionsArray[req.params.index]) {
    const deletedTransaction = transactionsArray.splice(req.params.index, 1)
    res.status(200).json(deletedTransaction)
  }else{
    res.status(404).json({error:'Not Found'})
  }
})
module.exports = transactions
