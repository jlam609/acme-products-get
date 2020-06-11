const express = require('express')
const path = require('path')

const app = express()
app.listen(3000, () => console.log('listening'))
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})
app.get('/api/products', (req,res) => {
    res.sendFile(path.join(__dirname, '/products.json'))
})
app.get('/api/companies', (req,res) => {
    res.sendFile(path.join(__dirname, '/companies.json'))
})