let Voiture = {
    "Nom" : "Eggo",
    "imgUrl" : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    "nombresRoues" : 4,
    "Couleur" : "Marron",
    "Contructeur" : "Citroen",
    "Carburant" : "Solaire",
    "nombrePortes" : 3,
    "Autonomie" : "450km",
    "vitesseMaxi" : "120km/h"
};

let title = document.querySelector('header');
title.style.fontSize = "2rem";
title.innerHTML = Voiture.Nom + " par le constructeur " + Voiture.Contructeur;

// image
let frame = document.getElementById('frame');
let picture = document.createElement('img');
picture.src = Voiture.imgUrl;
frame.appendChild(picture);

// title
let name = document.getElementById('name');
name.style.fontSize = "2rem";
name.innerHTML = Voiture.Nom;

// description
let wheel = document.getElementById('wheel');
wheel.innerHTML = Voiture.nombresRoues;

let color = document.getElementById('color');
color.innerHTML = Voiture.Couleur;

