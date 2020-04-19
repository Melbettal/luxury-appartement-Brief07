// navbar animation
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function reserve() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



var btnValider = document.getElementsByClassName("close")[0];
var modal = document.getElementById("validation");

var destination = document.getElementById('destination');
var nom = document.getElementById('nom');
var age = document.getElementById('age');
var periode = document.getElementById('date');
var nbr = document.getElementById('nbr');
var budget = document.getElementById('pets');
var cpt = 0;

function Validate() {
  cpt = 0;
  if (destination.value == "") document.getElementById('1').innerHTML = "enter your destination ";
  else {
    document.getElementById('1').innerHTML = " ";
    cpt++;
  }
  if (nom.value == "") document.getElementById('2').innerHTML = "enter your name";
  else {
    document.getElementById('2').innerHTML = " ";
    cpt++;
  }
  if (age.value == "") document.getElementById('3').innerHTML = "enter your birthday";
  else { 
    document.getElementById('3').innerHTML = " ";
    cpt++;
  }
  if (datedebut.value == "") document.getElementById('4').innerHTML = "enter a valid date";
  else {
    document.getElementById('4').innerHTML = " ";
    cpt++;
  }
  if (datefin.value == "") document.getElementById('5').innerHTML = "enter a valid date";
  else if (datefin.value < Date.now) document.getElementById('5').innerHTML = "Date fin doit être supérieure de date début";
  else {
    document.getElementById('5').innerHTML = " ";
    cpt++;
  }
  if (nbr.value == "") document.getElementById('6').innerHTML = "enter the number of people";
  else if (nbr.value <= 5) document.getElementById('5').innerHTML = "max is 5";
  else {
    document.getElementById('6').innerHTML = " ";
    cpt++;
  }
  if (pet.value == "") document.getElementById('7').innerHTML = "please answer";
  else {
    document.getElementById('7').innerHTML = " ";
    cpt++;
  }
  console.log(cpt);
  return cpt;
}

function getAge(date) {
  var diff = Date.now() - date.getTime();
  var age = new Date(diff);
  return Math.abs(age.getUTCFullYear() - 1970);
}

function diffdate(d1, d2) {
  var WNbJours = d2.getTime() - d1.getTime();
  return Math.ceil(WNbJours / (1000 * 60 * 60 * 24));
}

function check() {
  if (cpt == 7) {
    document.getElementById("validation").style.display = "block";
    document.getElementById('champ1').innerHTML += destination.value;
    document.getElementById('champ2').innerHTML += nom.value;
    document.getElementById('champ3').innerHTML += getAge(new Date(date.value));
    document.getElementById('champ4').innerHTML += diffdate(new Date(datedebut.value), new Date(datefin.value)) + " jours";
    document.getElementById('champ5').innerHTML += nbr.value;
    document.getElementById('champ6').innerHTML += budget.value + " DH";
    destination.value = "";
    nom.value = "";
    date.value = "";
    datedebut.value = "";
    datefin.value = "";
    nbr.value = "";
    budget.value = "";
  }
}


window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  btnValider.onclick = function () {
    modal.style.display = "none";
    alert('Votre demande est effectuée !');
    document.getElementById('champ1').innerHTML = "your appartement : ";
    document.getElementById('champ2').innerHTML = "your name is : ";
    document.getElementById('champ3').innerHTML = "your age : ";
    document.getElementById('champ4').innerHTML = "the date : ";
    document.getElementById('champ5').innerHTML = "people number : ";
    document.getElementById('champ6').innerHTML = "pets : ";
  };
};


var modal = document.getElementById("myModalsig");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeme")[0];

// When the user clicks on the button, open the modal
function signup() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }    
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].display = "block";  
}