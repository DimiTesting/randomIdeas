const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/db')
connectDB()
const express = require('express')
const router = require('./routes/ideas')
const port = process.env.PORT

const app = express()

//middleware to parse body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=> {
    res.json({ message: 'Welcome to the RandomIdeas API'})
})

app.use('/api/ideas', router)

app.listen(port, () => console.log(`Listening to port ${port}`))