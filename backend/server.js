const express = require('express')
const data = require('./data/products')

const app = express()


app.get('/', (req, res) => {
    res.send('API is working')
})

app.get('/api/products', (req, res) => {
    res.json(data)
})


app.get('/api/products/:id', (req, res) => {
    const item = data.find(item => item._id === req.params.id)
    res.json(item)
})

app.listen(5000, console.log("Now listening on port 5000"))