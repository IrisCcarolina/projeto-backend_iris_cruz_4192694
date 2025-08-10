SGHSS - Backend (Sistema de Gestão Hospitalar e de Serviços de Saúde)

Descrição

Projeto de backend para o Sistema de Gestão Hospitalar e de Serviços de Saúde (SGHSS), desenvolvido em Node.js com Express e Sequelize (SQLite).
Atende funcionalidades essenciais como cadastro e gerenciamento de pacientes, profissionais de saúde, consultas, autenticação com JWT, e segurança básica.

Tecnologias utilizadas

Node.js

Express

Sequelize (ORM) com SQLite

JWT para autenticação

bcryptjs para criptografia de senhas

dotenv para variáveis de ambiente

morgan para logs básicos de requisições


Como rodar localmente

1. Clone o repositório:

git clone https://github.com/seu-usuario/seu-repo.git  
cd seu-repo


2. Instale as dependências:

npm install


3. Configure as variáveis de ambiente:

Copie o arquivo .env.example para .env

Ajuste as variáveis conforme necessário (ex: PORT, JWT_SECRET)



4. Inicie o servidor em modo de desenvolvimento:

npm run dev

O servidor estará disponível em http://localhost:3000



Endpoints principais

Autenticação

POST /auth/signup — Cadastrar usuário

POST /auth/login — Login e obtenção de token JWT


Pacientes

POST /pacientes — Criar paciente

GET /pacientes — Listar pacientes

GET /pacientes/:id — Detalhes de um paciente

PUT /pacientes/:id — Atualizar paciente

DELETE /pacientes/:id — Deletar paciente


Profissionais

POST /profissionais — Criar profissional

GET /profissionais — Listar profissionais

GET /profissionais/:id — Detalhes de um profissional

PUT /profissionais/:id — Atualizar profissional

DELETE /profissionais/:id — Deletar profissional


Consultas

POST /consultas — Agendar consulta

GET /consultas — Listar consultas

GET /consultas/:id — Detalhes de uma consulta

PUT /consultas/:id — Atualizar consulta

DELETE /consultas/:id — Cancelar consulta


Teste
Use o Postman ou Insomnia para testar os endpoints.
Lembre-se de passar o token JWT no header Authorization: Bearer <token> para endpoints protegidos.

