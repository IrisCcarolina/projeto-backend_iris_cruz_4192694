const express = require('express');
const router = express.Router();
const { Appointment, Patient, Professional } = require('../models');
const authenticate = require('../middleware/authMiddleware');
const { validateAppointment } = require('../middleware/validators');

router.post('/', authenticate, validateAppointment, async (req, res) => {
  try {
    const { patientId, professionalId, data_hora, tipo, observacoes } = req.body;

    const patient = await Patient.findByPk(patientId);
    const professional = await Professional.findByPk(professionalId);
    if (!patient || !professional) return res.status(400).json({ message: 'Paciente ou Profissional inválido' });

    const appointment = await Appointment.create({ patientId, professionalId, data_hora, tipo, observacoes });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', authenticate, async (req, res) => {
  const appointments = await Appointment.findAll({
    include: [Patient, Professional],
  });
  res.json(appointments);
});

router.get('/:id', authenticate, async (req, res) => {
  const appointment = await Appointment.findByPk(req.params.id, {
    include: [Patient, Professional],
  });
  if (!appointment) return res.status(404).json({ message: 'Consulta não encontrada' });
  res.json(appointment);
});

router.put('/:id', authenticate, validateAppointment, async (req, res) => {
  const appointment = await Appointment.findByPk(req.params.id);
  if (!appointment) return res.status(404).json({ message: 'Consulta não encontrada' });

  await appointment.update(req.body);
  res.json(appointment);
});

router.delete('/:id', authenticate, async (req, res) => {
  const appointment = await Appointment.findByPk(req.params.id);
  if (!appointment) return res.status(404).json({ message: 'Consulta não encontrada' });

  await appointment.destroy();
  res.status(204).send();
});

module.exports = router;
