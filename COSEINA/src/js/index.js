//afficher/masquer

document.addEventListener('DOMContentLoaded', function() {
    var rece = document.getElementById('voir');
    var bmfs = document.getElementById('mask');

    rece.addEventListener('click', function() {
        if (bmfs.style.display === "none" || bmfs.style.display === "") {
            setTimeout(() => {
                 bmfs.style.display = "grid";
}, 1000);    
 rece.textContent="voir moins";
        } else {
             setTimeout(() => {
                 bmfs.style.display = "none";
}, 1000);    
             rece.textContent = "Voir plus";
        }
    });
});


//swipper js
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
  spaceBetween: 10,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
   breakpoints: {
    // Quand la largeur de l'écran est de 640px ou plus
    640: {
      slidesPerView: 2, // Affiche 2 cartes
      spaceBetween: 30, // 30px d'espace
    },
    // Quand la largeur de l'écran est de 768px ou plus
    768: {
      slidesPerView: 3, // Affiche 3 cartes
      spaceBetween: 40, // 40px d'espace
    },
    // Quand la largeur de l'écran est de 1024px ou plus
    1024: {
      slidesPerView: 4, // Affiche 4 cartes (exemple)
      spaceBetween: 50, // 50px d'espace
    },
    // Vous pouvez ajouter plus de breakpoints selon vos besoins
  },
});


//rendre flou les images

document.addEventListener('DOMContentLoaded', function(){
  const titre1=document.getElementById("titre1")
  const titre2=document.getElementById("titre2")
  const titre3=document.getElementById("titre3")
  const Titre2=document.getElementById("Titre2")
  const Titre3=document.getElementById("Titre3")

  titre1.addEventListener('click',function(){
    if(titre1.style.display==="none" || titre1.style.display===""){
      Titre2.style.display = "none";
      Titre3.style.display="none"
    }
  })
  titre2.addEventListener('click',function(){
    if(titre2.style.display==="none" || titre2.style.display==="")

    alert(titre2.textContent)
  })
   titre3.addEventListener('click',function(){
    alert(titre3.textContent)
  })
})





//Menu toogle

document.addEventListener('DOMContentLoaded', function() {
  const bouttonT = document.getElementById("btn");
  const nav = document.getElementById("nav");

  bouttonT.addEventListener('click', function() {
    nav.classList.toggle('visible');
  });
});

//Menu toogle 2
document.addEventListener('DOMContentLoaded', function() {
 const Btn=document.getElementById("Btn")

 Btn.addEventListener('click', function(){
  alert("hello world")
 })
});

// Message signifiant boutton inactif
document.addEventListener('DOMContentLoaded', function() {
  const ina = document.getElementById("ina")

  ina.addEventListener('click', function(){
    alert("Boutton inactif pour l'instant")
  })
});


document.getElementById('formulaire').addEventListener('submit', async function(e) {
  e.preventDefault();

  // Récupération des valeurs au moment du submit
  const Nom = document.getElementById("Nom").value.trim();
  const Prenom = document.getElementById("Prenom").value.trim();
  const Email = document.getElementById("Email").value.trim();
  const Message=document.getElementById("message").value.trim();  // Pour recuperer les valeurs

  // Récupération des éléments d'erreur
  const erreurNom = document.getElementById("ErreurNom");
  const erreurPrenom = document.getElementById("ErreurPrenom");
  const erreurEmail = document.getElementById("ErreurEmail");

  // Reset des messages d'erreur
  erreurNom.textContent = "";
  erreurPrenom.textContent = "";
  erreurEmail.textContent = "";

  let valide = true;

  if (Nom === "") {
    erreurNom.textContent = "Le nom est obligatoire";
    valide = false;
  }
  if (Prenom === "") {
    erreurPrenom.textContent = "Le Prenom est obligatoire";
    valide = false;
  }
  if (Email === "") {
    erreurEmail.textContent = "L'Email est obligatoire";
    valide = false;
  }
  
  if (!valide) {
    // Empêche l'envoi si erreurs
    return;
  } else {
    alert("Formulaire validé avec succès");
  }

  // Préparation des données à envoyer
  const data = { nom: Nom, prenom: Prenom, email: Email, message: Message };

  try {
    const response = await fetch('http://localhost:3000/ajouter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Formulaire envoyé avec succès : ' + result.message);
      this.reset();
    } else {
      alert('Erreur serveur : ' + result.error);
    }
  } catch (err) {
    alert('Erreur réseau ou serveur : ' + err.message);
  }
});


