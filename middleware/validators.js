const { body, validationResult } = require('express-validator');

const validateUser = [
  body('name').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email inválido'),
  body('password').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const validatePatient = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('cpf').notEmpty().withMessage('CPF é obrigatório'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const validateProfessional = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

const validateAppointment = [
  body('patientId').isInt().withMessage('patientId deve ser um inteiro'),
  body('professionalId').isInt().withMessage('professionalId deve ser um inteiro'),
  body('data_hora').notEmpty().withMessage('data_hora é obrigatória'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = {
  validateUser,
  validatePatient,
  validateProfessional,
  validateAppointment,
};
