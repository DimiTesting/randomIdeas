const express = require('express')
const router = require('./routes/ideas')
const port = 3000

const app = express()

app.get('/', (req, res)=> {
    res.json({ message: 'Welcome to the RandomIdeas API'})
})

app.use('/api/ideas', router)

app.listen(port, () => console.log(`Listening to port ${port}`))