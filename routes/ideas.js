const express = require('express')
const router = express.Router()
const Idea = require('../Models/Idea.js')

//get all ideas
router.get('/', async (req,res)=> {
    try {
        const ideas = await Idea.find({})
        res.json({success: true, data: ideas})
    } catch (error) {
        res.status(500).json({success: true, error: 'Resourse not found'})
    }
})

//create an idea
router.post('/', async (req,res) => {
    const idea = new Idea ({
        text: req.body.text, 
        tag: req.body.tag,
        username: req.body.username, 
    })

    try {
        const savedIdea = await idea.save()
        res.json({success:true, data: savedIdea})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: true, error: 'Something went wrong'})
    }
})

//get a specific idea 
router.get('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const foundIdea = await Idea.findById(id)
        res.json({success: true, data: foundIdea})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: true, error: 'Something went wrong'})
    }
})

//update a specific idea 
router.put('/:id', async(req,res) => {
    try {
        const id = req.params.id
        const updatedIdea = await Idea.findByIdAndUpdate(id, {
            $set: {
                text : req.body.text,
                tag : req.body.tag,
            }},
            {
                new: true
            }
        )
        res.json({success: true, data: updatedIdea})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: true, error: 'Something went wrong'})
    }

})

//delete a specific idea 
router.delete('/:id', async(req,res) => {
    try {
        const id = req.params.id
        await Idea.findByIdAndDelete(id)
        res.json({success: true, data: {}})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: true, error: 'Something went wrong'})
    }
})


module.exports = router