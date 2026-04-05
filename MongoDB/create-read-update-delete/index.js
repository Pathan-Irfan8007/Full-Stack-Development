const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)
const dbName = 'School'
let db

const connectDB = async () => {
    try{
        await client.connect()
        console.log("Database Connected Succesfully")
        db = client.db(dbName)
    } catch(error) {
        console.log(`Error : ${error}`)
    }
}
connectDB()

app.get('/', (req, res) => {
    res.send("This is the App for create & read database")
})

app.get('/show-students', async (req, res) => {
    const collection = db.collection('students')
    const studentData = await collection.find().toArray()

    res.json(studentData)
})

app.get('/show-teachers', async (req, res) => {
    const collection = db.collection('teachers')
    const teacherData = await collection.find().toArray()

    res.json(teacherData)
})

app.listen(port, () => {
    console.log(`Click => http://localhost:${port}`)
})