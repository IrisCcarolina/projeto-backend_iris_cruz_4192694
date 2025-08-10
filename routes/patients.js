const express = require('express');
const router = express.Router();
const { Patient } = require('../models');
const authenticate = require('../middleware/authMiddleware');
const { validatePatient } = require('../middleware/validators');

router.post('/', authenticate, validatePatient, async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', authenticate, async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
});

router.get('/:id', authenticate, async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Paciente não encontrado' });
  res.json(patient);
});

router.put('/:id', authenticate, validatePatient, async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Paciente não encontrado' });
  await patient.update(req.body);
  res.json(patient);
});

router.delete('/:id', authenticate, async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  if (!patient) return res.status(404).json({ message: 'Paciente não encontrado' });
  await patient.destroy();
  res.status(204).send();
});

module.exports = router;
