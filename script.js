
let startPoint = document.querySelector(".AboutUs");
let startPointPos = startPoint.getBoundingClientRect().top;
let navbar = document.querySelector(".nav-sticky");

window.addEventListener("scroll", e => {
  if(startPointPos < 0){
    startPointPos = 500;
  }
  let scrollPos = window.scrollY; 
  if (scrollPos > startPointPos){
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});

 let background = document.querySelector(".bg-house");
 let bothImg = document.querySelectorAll(".forChange");
 let images = ["source/1a.jpg", "source/2a.jpg", "source/3a.jpg"];
 let x = 0, y = 1, z = 2
function backgroundChange() {
   background.style.opacity = 0;
   bothImg[0].style.opacity = 0;
   bothImg[1].style.opacity = 0;
   setTimeout(function() {
     background.src = images[x];
     bothImg[0].src = images[y];
     bothImg[1].src = images[z];
     background.style.opacity = 1;
     bothImg[0].style.opacity = 1;
     bothImg[1].style.opacity = 1;
   }, 1000);
   x++;
   y++;
   z++;
   if (x == 3) {
     x = 0;
   }
   if (y == 3) {
     y = 0;
   }
   if (z == 3) {
     z = 0;
   }
}
setInterval(backgroundChange, 6500);



var divisor = document.getElementById("divizor"),
slider = document.getElementById("slider");
function moveDivisor() { 
divisor.style.width = slider.value+"%";
}

let carousels = ["source/carousel1.png", "source/carousel2.png", "source/carousel3.png"];
let j = 0; k = 1; l = 2;
let first = document.querySelector(".big");
let second = document.querySelector(".small");
let third = document.querySelector(".hidden");

function carousel(){
  first.classList.add("unscale");
  second.classList.add("moveFromLeft");
  third.classList.add("moveToScreen");
  j++;
  k++;
  l++;
  if (j == 3) {
    j = 0;
  }
  if (k == 3) {
    k = 0;
  }
  if (l == 3) {
    l = 0;
  }

  setTimeout(function() {
    first.src = carousels[j];
    second.src = carousels[k];
    third.src = carousels[l];
    first.classList.remove("unscale");
    second.classList.remove("moveFromLeft");
    third.classList.remove("moveToScreen");
  }, 2000);
}


setInterval(carousel, 6500);


let card = document.querySelectorAll(".flip-card");
let innercard = document.querySelectorAll(".flip-card-inner");
let flip = document.querySelector(".flip-cards");
let arrows = document.querySelector(".flip-arrows");
let test = 0;


flip.addEventListener("click", fliper);
arrows.addEventListener("click", fliper);

function fliper(){
if(test == 0){
  innercard[0].style.transform = "rotateY(180deg)";
  setTimeout(function(){
  innercard[1].style.transform = "rotateY(180deg)";
  setTimeout(function(){
  innercard[2].style.transform = "rotateY(180deg)";
  setTimeout(function(){
  innercard[3].style.transform = "rotateY(180deg)";
  }, 250)
  }, 250)
  }, 250)
  test++;
} else {
  innercard[0].style.transform = "rotateY(0)";
  setTimeout(function(){
  innercard[1].style.transform = "rotateY(0)";
  setTimeout(function(){
  innercard[2].style.transform = "rotateY(0)";
  setTimeout(function(){
  innercard[3].style.transform = "rotateY(0)";
  }, 250)
  }, 250)
  }, 250)
  test = 0;
}
}


let listing1 = document.querySelector(".listing-image1");
let listing2 = document.querySelector(".listing-image2");
let listingX = 0;
function changeListing(){
  if (listingX == 0){
  listing1.classList.add("disappear");
  setTimeout(function(){
  listing1.style.display = "none";
  listing1.classList.remove("disappear");
  listing2.style.display = "block";
  listing2.classList.add("appear");
  setTimeout(function(){
    listing2.classList.remove("appear");
  }, 2000);
  listingX++;
  }, 800);
  } else {
    listing2.classList.add("disappear");
    setTimeout(function(){
    listing2.style.display = "none";
    listing2.classList.remove("disappear");
    listing1.style.display = "block";
    listing1.classList.add("appear");
    setTimeout(function(){
      listing1.classList.remove("appear");
    }, 2000);
    listingX = 0;
  }, 800);
  }
}


let listingArrows = document.querySelector(".listing-arrows");
listingArrows.addEventListener("click", changeListing); 

let verticalMenu = document.querySelectorAll(".vertical-menu");
let burger = document.querySelectorAll(".burger");
const body = document.querySelector("body");

burger[0].addEventListener('click', () => {
  burger[0].classList.toggle('active');
  if (verticalMenu[0].style.display === 'none' || verticalMenu[0].style.display === '') {
    verticalMenu[0].style.display = 'block';
    body.style.overflow = "hidden";
  } else {
    verticalMenu[0].style.display = 'none';
    body.style.overflow = "auto";
  }
});

burger[1].addEventListener('click', () => {
  burger[1].classList.toggle('active');
  if (verticalMenu[1].style.display === 'none' || verticalMenu[1].style.display === '') {
    verticalMenu[1].style.display = 'block';
    body.style.overflow = "hidden";
  } else {
    verticalMenu[1].style.display = 'none';
    body.style.overflow = "auto";
  }
});
 

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('LineAppear');
    } else {
      entry.target.classList.remove('LineAppear');
    }
  });
});

const secondLine = document.querySelector('.secondLine');
observer.observe(secondLine);


const thirdLine = document.querySelector('.third-line');
observer.observe(thirdLine);
const fourthLine = document.querySelector('.fourth-line');
observer.observe(fourthLine);
const videoLine = document.querySelector('.video-line');
observer.observe(videoLine);
const fifthLine = document.querySelector('.fifth-line');
observer.observe(fifthLine);