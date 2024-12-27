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
