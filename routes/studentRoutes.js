const express = require('express');
const router = express.Router();
const students = require('../data/students');

router.get('/', (req, res) => {
  res.status(200).json(students);
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid student ID' });
  }

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.status(200).json(student);
});

router.post('/', (req, res) => {
  const { name, age, course } = req.body;

  if (!name || age === undefined || !course) {
    return res.status(400).json({
      error: 'name, age and course are required'
    });
  }

  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ error: 'age must be a positive number' });
  }

  const newId = students.length
    ? Math.max(...students.map(s => s.id)) + 1
    : 1;

  const newStudent = {
    id: newId,
    name,
    age,
    course
  };

  students.push(newStudent);

  res.status(201).json(newStudent);
});

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid student ID' });
  }

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const { name, age, course } = req.body;

  if (!name || age === undefined || !course) {
    return res.status(400).json({
      error: 'name, age and course are required'
    });
  }

  if (typeof age !== 'number' || age <= 0) {
    return res.status(400).json({ error: 'age must be a positive number' });
  }

  student.name = name;
  student.age = age;
  student.course = course;

  res.status(200).json(student);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid student ID' });
  }

  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const deletedStudent = students.splice(index, 1)[0];

  res.status(200).json({
    message: 'Student deleted successfully',
    student: deletedStudent
  });
});

module.exports = router;
