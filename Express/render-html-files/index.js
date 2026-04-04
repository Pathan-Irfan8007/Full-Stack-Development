const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello, This is First Complete App")
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "public/about.html"))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "public/contact.html"))
})

app.listen(port, () => {
    console.log(`Click => http://localhost:${port}`)
})