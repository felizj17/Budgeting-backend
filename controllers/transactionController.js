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
  const newTransaction = {
    id: req.body.id,
    item_name: req.body.item_name,
    amount: parseFloat(req.body.amount).toFixed(2),
    date: new Date(req.body.date),
    from: req.body.from,
    category: req.body.category,
  }
  transactionsArray.push(newTransaction)
  res.status(202).json(transactionsArray)
})

transactions.put('/:id/edit', jsonParser, (req, res) => {
  const id = req.params.id 
  const curTransaction = transactionsArray.filter(transaction=>transaction.id.toString()===id)[0]
  if (curTransaction) {
    transactionsArray[transactionsArray.indexOf(curTransaction)] = req.body
    res.status(200).json(transactionsArray[transactionsArray.indexOf(curTransaction)])
  } else {
    res.status(404).json({ error: 'Not Found' })
  }
})

transactions.delete('/:id/delete', (req, res) => {
  const id = req.params.id
  const curTransaction = transactionsArray.filter(transaction=>transaction.id.toString()===id)[0]
  if (curTransaction) {
    const deletedTransaction = transactionsArray.splice(transactionsArray.indexOf(curTransaction), 1)
    res.status(200).json(deletedTransaction)
  } else {
    res.status(404).json({ error: 'Not Found' })
  }
})
module.exports = transactions
