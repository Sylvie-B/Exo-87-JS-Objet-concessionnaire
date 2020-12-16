let Voiture = {
    nom : "Eggo",
    imgUrl : "https://images.caradisiac.com/logos/9/9/8/2/159982/S7-Citroen-Eggo-concept-de-citadine-du-futur-73689.jpg",
    nombresRoues : 4,
    couleur: "Marron",
    contructeur : "Citroen",
    carburant : "Solaire",
    nombrePortes : 3,
    autonomie : "450km",
    vitesseMaxi : "120km/h"
};

let container = document.getElementById("container");
container.style.width ='80%';
container.style.margin = '10px'
container.style.display = "flex";
container.style.justifyContent = 'center';

let title = document.querySelector('header');
title.style.width = "80%";
title.style.fontSize = "2rem";
title.innerHTML = Voiture.Nom + " par le constructeur " + Voiture.Contructeur;
title.style.textAlign = "center";

// image
let frame = document.getElementById('frame');
frame.style.width = "53%";
let picture = document.createElement('img');
picture.src = Voiture.imgUrl;
frame.appendChild(picture);

// description
let about = document.getElementById('about');
about.style.fontSize = '1.5rem';
let name = document.getElementById('name');
name.style.fontSize = "2rem";
name.innerHTML = Voiture.Nom;

let wheel = document.getElementById('wheel');
wheel.innerHTML = Voiture.nombresRoues;

let door = document.getElementById('door');
door.innerHTML = Voiture.nombrePortes;

let color = document.getElementById('color');
color.innerHTML = Voiture.Couleur;

let power = document.getElementById('power');
power.innerHTML = Voiture.Carburant;

document.getElementById('km').innerHTML = Voiture.Autonomie;

let speed = document.getElementById('speed');
speed.innerHTML = Voiture.vitesseMaxi;
