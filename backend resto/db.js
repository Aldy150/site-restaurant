const { Pool } = require('pg');

const con = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: '', // Votre mot de passe dans postegres
  database: '', //Le nom de votre base de dnnée
  port: 5432
});

con.connect()
  .then(() => console.log(' Connecté à PostgreSQL'))
  .catch(err => console.error('Erreur de connexion :', err));

module.exports = con;
