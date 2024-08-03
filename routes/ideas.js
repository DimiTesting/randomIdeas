const express = require('express')
const router = express.Router()

const ideas = [ 
    {
        id: 1, 
        text : "Describing the idea 1, which is the first",
        tag : 'Technology',
        username : 'X',
        date: '2024-01-01'
    },
    {
        id: 2, 
        text : "Describing the idea 2, which is the second",
        tag : 'Entertainment',
        username : 'XX',
        date: '2024-02-01'
    },
    {
        id: 3, 
        text : "Describing the idea 3, which is the third",
        tag : 'Sports',
        username : 'XXX',
        date: '2024-03-01'
    },
    {
        id: 4, 
        text : "Describing the idea 4, which is the fourth",
        tag : 'Business',
        username : 'XXXX',
        date: '2024-04-01'
    }
]

router.get('/', (req,res)=> {
    res.json({success: true, data: ideas})
})

router.get('/:id', (req,res) => {
    const id = req.params.id
    const foundIdea = ideas.find((idea) => idea.id === +id)
    if (!foundIdea) {
        res.status(404)
        res.json({success:false, error: 'Resource not found'})
    } else {
        res.json({success: true, data: foundIdea})
    }
})

module.exports = router