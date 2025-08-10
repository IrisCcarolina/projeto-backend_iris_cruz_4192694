module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false, unique: true },
    telefone: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    data_nascimento: { type: DataTypes.DATEONLY },
    prontuario: { type: DataTypes.TEXT }, // texto livre do histórico
  });
  return Patient;
};
