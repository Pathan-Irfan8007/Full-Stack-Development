const express = require('express')
const app = express()
const port = 2000

app.get('/', (req, res) => {
    res.send(`
        <h2>This is Home Page</h2>
        `)
})

app.get('/about', (req,res) => {
    // res.send(`
    //     <h3>This is About Page</h3>
    //     `)
    res.write("This is About Page")
    res.end()
})

app.get("/Contact", (req, res) => {
    res.write("This is Contact Page")
    res.end()
})

app.listen(port, () => {
    console.log(`Click => http://localhost:${port}`)
})
