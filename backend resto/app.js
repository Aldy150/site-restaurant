const express=require('express');
const cors=require('cors');
const db = require('./db'); // db = con => donc db.query(...) est correct



const app=express();
const PORT=3000;

app.use(cors());  // Active CORS pour toutes les requêtes

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Route pour recevoir les données du formulaire

app.post('/ajouter', async (req, res) => {
  const { nom, prenom, email, message } = req.body;

  //console.log('msg reçu :', message);
  try {
    await db.query(
      'INSERT INTO client (nom, prenom, email, msg) VALUES ($1, $2, $3, $4)',
      [nom, prenom, email, message]
    );
    const responseData = { message: 'Client ajouté avec succès !' };
    console.log('Réponse envoyée:', responseData);
    res.status(201).json(responseData);
  } catch (error) {
    console.error('Erreur PostgreSQL :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.post('/commande', async (req, res) => {
  const { nom, prenom, email, qualite, nomcommande } = req.body;
  console.log('qualite reçue:', qualite);

  try {
    await db.query(
      'INSERT INTO commande (nom, prenom, email, qualite, nomcommande) VALUES ($1, $2, $3, $4, $5)', //$ c'est pour eviter les injections sql
      [nom, prenom, email, qualite, nomcommande]
    );

    res.status(201).json({ message: 'Commande ajoutée avec succès !' });
  } catch (error) {
    console.error('Erreur PostgreSQL :', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});



app.listen(3000, () => console.log('Backend Express démarré sur http://localhost:3000'));
