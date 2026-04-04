const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World')
    res.write('Hello ')
    res.write('World, ')
    res.write('\nThis is Irfan Pathan')
    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})