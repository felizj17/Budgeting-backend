const app = require('./app.js')
require('dotenv').config()
const port = process.env.PORT

app.listen(port, ()=>{
    console.log('app running on port ', port)
})