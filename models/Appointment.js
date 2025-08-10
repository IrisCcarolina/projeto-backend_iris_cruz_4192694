module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    data_hora: { type: DataTypes.DATE, allowNull: false },
    tipo: { type: DataTypes.ENUM('presencial', 'telemedicina'), defaultValue: 'presencial' },
    status: { type: DataTypes.ENUM('agendada', 'confirmada', 'cancelada', 'realizada'), defaultValue: 'agendada' },
    observacoes: { type: DataTypes.TEXT },
  });
  return Appointment;
};
