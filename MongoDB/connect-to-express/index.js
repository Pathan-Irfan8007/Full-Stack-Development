const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require('mongodb')


const url = 'mongodb://localhost:27017'            //Connection
const client = new MongoClient(url)
const dbName = 'myDataBase'                        //Database Name
let db           // global and not local

app.get('/', (req, res) => {
    res.send("This is Main Page")
})

const connectDB = async () => {
    try{
        await client.connect()
        console.log("Database Connected")
        db = client.db(dbName)
    } catch (error) {
        console.log(error)
    }
}
connectDB()

app.get('/show-database', async (req, res) => {
    const collection = db.collection('student')
    const studentData = await collection.find().toArray()
    res.json(studentData) 
})

app.listen(port, () => {
    console.log(`Click => http://localhost:${port}`)
})