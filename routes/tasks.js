const express = require('express');
const Task = require('../models/task');
const router = express.Router();

router.post('/', async (req, res) => {

    try {
        const task = new Task(req.body);
        await task.save();
        res.status(200).send({ message: "data send succefully" });
    } catch (err) {
        res.status(500).send({ message: "data does not send succefully" });
    }
});

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send({ message: 'An error occurred while fetching tasks.' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ message: "Data Updated Succefully" });
    } catch (error) {
        res.status(500).send({ message: "Data Does not Updated Sucecfully" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Data Deleted Succefully" });
    } catch (error) {
        res.status(500).send({ message: "Data Does not Deleted Sucecfully" });
    }
});

module.exports = router;
