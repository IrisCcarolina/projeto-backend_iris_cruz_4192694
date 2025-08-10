const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const User = require('./User')(sequelize, DataTypes);
const Patient = require('./Patient')(sequelize, DataTypes);
const Professional = require('./Professional')(sequelize, DataTypes);
const Appointment = require('./Appointment')(sequelize, DataTypes);

// Relacionamentos
Professional.hasMany(Appointment, { foreignKey: 'professionalId' });
Patient.hasMany(Appointment, { foreignKey: 'patientId' });
Appointment.belongsTo(Professional, { foreignKey: 'professionalId' });
Appointment.belongsTo(Patient, { foreignKey: 'patientId' });

module.exports = {
  sequelize,
  User,
  Patient,
  Professional,
  Appointment,
};