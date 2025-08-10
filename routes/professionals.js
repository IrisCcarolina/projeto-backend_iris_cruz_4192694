const express = require('express');
const router = express.Router();
const { Professional } = require('../models');
const authenticate = require('../middleware/authMiddleware');
const { validateProfessional } = require('../middleware/validators');

router.post('/', authenticate, validateProfessional, async (req, res) => {
  try {
    const professional = await Professional.create(req.body);
    res.status(201).json(professional);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', authenticate, async (req, res) => {
  const professionals = await Professional.findAll();
  res.json(professionals);
});

router.get('/:id', authenticate, async (req, res) => {
  const professional = await Professional.findByPk(req.params.id);
  if (!professional) return res.status(404).json({ message: 'Profissional não encontrado' });
  res.json(professional);
});

router.put('/:id', authenticate, validateProfessional, async (req, res) => {
  const professional = await Professional.findByPk(req.params.id);
  if (!professional) return res.status(404).json({ message: 'Profissional não encontrado' });
  await professional.update(req.body);
  res.json(professional);
});

router.delete('/:id', authenticate, async (req, res) => {
  const professional = await Professional.findByPk(req.params.id);
  if (!professional) return res.status(404).json({ message: 'Profissional não encontrado' });
  await professional.destroy();
  res.status(204).send();
});

module.exports = router;
