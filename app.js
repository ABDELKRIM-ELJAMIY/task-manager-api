const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks');

const app = express();


app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/gestionnaire_taches', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));


app.use('/api/tasks', taskRoutes);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Api Listening to Port ${PORT}`);
});
module.exports = app;
