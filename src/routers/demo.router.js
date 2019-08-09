const express = require('express')
const router = new express.Router()
const Demo = require('../models/Demo.model')

// Create user / Signup
router.get('/demo', async (req, res) => {

    try {
        await new Demo({ random: Math.random() }).save()
        const randoms = await Demo.find({})
        return res.status(201).send(randoms.map(random => random.random))
    } catch (error) {
        res.status(400).send({error: 'Oh no! An error!', error: error.message})
    }
})

module.exports = router