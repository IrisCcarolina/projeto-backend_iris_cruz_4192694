const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());

// Importar conexao e modelos
const { sequelize } = require('./models');

// Importar rotas
const authRoutes = require('./routes/auth');
const patientRoutes = require('./routes/patients');
const professionalRoutes = require('./routes/professionals');
const appointmentRoutes = require('./routes/appointments');

// Usar rotas
app.use('/auth', authRoutes);
app.use('/pacientes', patientRoutes);
app.use('/profissionais', professionalRoutes);
app.use('/consultas', appointmentRoutes);

// Rota raiz para status
app.get('/', (req, res) => {
  res.json({ status: 'ok', environment: process.env.NODE_ENV || 'development' });
});

// Sincronizar DB e iniciar servidor
(async () => {
  try {
    await sequelize.sync({ alter: true }); // sincroniza modelo com banco (ajustes)
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar o servidor:', err);
  }
})();