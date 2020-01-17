const Joi = require('joi');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const courses = [
    {
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    },
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);
    
    if(!req.body.name || req.body.name.length < 3) {
        res.status(400).send('Name is required and should be at least 3 characters');
        return;
    }

    const newCourse = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(newCourse);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));