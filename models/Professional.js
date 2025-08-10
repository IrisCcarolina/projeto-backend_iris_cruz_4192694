module.exports = (sequelize, DataTypes) => {
  const Professional = sequelize.define('Professional', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    crm: { type: DataTypes.STRING },
    especialidade: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    telefone: { type: DataTypes.STRING },
  });
  return Professional;
};
