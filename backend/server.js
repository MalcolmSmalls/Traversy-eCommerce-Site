import express from 'express'
import dotenv from 'dotenv'
import data from './data/products.js'

const app = express()

dotenv.config()

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

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Now running in ${process.env.NODE_ENV} mode on port ${PORT}`))