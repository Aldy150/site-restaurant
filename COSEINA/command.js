document.getElementById('commande').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Récupération des valeurs
  const Nom = document.getElementById("Nom").value.trim();
  const Prenom = document.getElementById("Prenom").value.trim();
  const Email = document.getElementById("Email").value.trim();
  const qualite = document.getElementById("qualite").value.trim(); // corrigé
  const nomcommande = document.getElementById("nomcommande").value.trim();

  // Récupération des éléments d'erreur
  const erreurNom = document.getElementById("ErreurNom");
  const erreurPrenom = document.getElementById("ErreurPrenom");
  const erreurEmail = document.getElementById("ErreurEmail");
  const Erreurqualite= document.getElementById('Erreurqualite');
  const Erreurnomcommande = document.getElementById('Erreurnomcommande');

  // Reset erreurs
  erreurNom.textContent = "";
  erreurPrenom.textContent = "";
  erreurEmail.textContent = "";
  Erreurqualite.textContent = "";
  Erreurnomcommande.textContent = "";

  let valide = true;

  if (Nom === "") {
    erreurNom.textContent = "Le nom est obligatoire";
    valide = false;
  }
  if (Prenom === "") {
    erreurPrenom.textContent = "Le prénom est obligatoire";
    valide = false;
  }
  if (Email === "") {
    erreurEmail.textContent = "L'email est obligatoire";
    valide = false;
  }
  if (qualite === "") {
    Erreurqualite.textContent = "La sélection est obligatoire";
    valide = false;
  }
  if (nomcommande === "") {
    Erreurnomcommande.textContent = "La commande est obligatoire";
    valide = false;
  }

  if (!valide) return;

  // Données à envoyer
  const data = {
    nom: Nom,
    prenom: Prenom,
    email: Email,
    qualite: qualite,
    nomcommande: nomcommande
  };

  try {
    const response = await fetch('http://localhost:3000/commande', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Validé : ' + result.message);
      this.reset();
    } else {
      alert('Erreur serveur : ' + (result.error || 'Réponse invalide'));
    }
  } catch (err) {
    alert('Erreur réseau ou serveur : ' + err.message);
  }
});
