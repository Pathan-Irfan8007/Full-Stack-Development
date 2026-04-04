// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send(`
//         <h2>Hello World</h2>
//         <p>This Is Irfan Pathan</p>
//     `)
// })

// app.get('/post-1', (req, res) => {
//     res.write("This is post - 1")
//     res.end()
// })

// app.listen(port, () => {
//     console.log(`click => http://localhost:${port}`)
// })

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log(req.body.name)
  res.send('Hello World! - This is a post request')
})

app.put('/', (req, res) => {
  res.send('Hello World! - This is a put request')
})

app.delete('/', (req, res) => {
  res.send('Hello World! - This is a delete request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
