
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


let listImages = [{
  url: "./res/img/1.jpg",
},
{
  url: "./res/img/2.jpg",
},
{
  url: "./res/img/4.jpg",
},
{
  url: "./res/img/5.jpg",
},
{
  url: "./res/img/6.jpg",
}
];
let index = 0;


function switchImage() {
document.getElementById("image").src = listImages[index].url;
document.getElementById("image-title").innerHTML = listImages[index].title;
document.getElementById("image-disc").innerHTML = listImages[index].desc;

 for(let i = 0; i < document.querySelectorAll("#buttons div").length; i++){
 
  document.querySelectorAll("#buttons div")[i].classList.remove("active");
  
}
document.querySelectorAll("#buttons div")[index].classList.add("active");

}

function moveLeft() {

if (index > 0) {
  index--;
} else {
  index = listImages.length - 1;
}
switchImage();
}

function moveRight() {

if (index < (listImages.length - 1)) {
  index++;
} else {
  index = 0;
}
switchImage();
}
