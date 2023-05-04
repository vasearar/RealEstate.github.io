fitty("#my-text");

let bgImage = document.querySelector(".bg-house");
let bgImageAux = document.querySelector(".bg-house-aux");

let clickToChange = document.querySelectorAll(".forChange");

let timeId;

function startTimer(){
  timeId = setInterval(backgroundChange, 10000);
}

startTimer();

function resetTimer(){
  clearInterval(timeId);
  startTimer();
}

clickToChange[0].addEventListener("click", () => {
  resetTimer();
  backgroundChange();
});

function backgroundChange (){
  let firstSource = clickToChange[0].getAttribute("src");
  let secondSource = clickToChange[1].getAttribute("src");
  let thirdSource = bgImage.getAttribute("src");

  bgImageAux.src = firstSource;
  bgImageAux.classList.add("takePosition");
  clickToChange[0].classList.add("microChange");
  clickToChange[1].classList.add("microChange");

  setTimeout(() => {
    bgImage.src = firstSource;
    bgImageAux.classList.remove("takePosition");
    clickToChange[0].src = secondSource;
    clickToChange[1].src = thirdSource;
  }, 1000);

  setTimeout(() => {
    clickToChange[0].classList.remove("microChange");
    clickToChange[1].classList.remove("microChange");
  }, 2000);
};

const slider = document.querySelector('#slider');
const firstImage = document.querySelector('.first');
slider.oninput = () => {
    firstImage.style.width = slider.value + '%';
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


let mainListing = document.querySelector("#mainListing"); 
let dinDreapta = document.querySelector("#dinDreapta");
let fromLeft = document.querySelector("#fromLeft");
let fromRight = document.querySelector("#fromRight");

fromLeft.addEventListener("click", () => {
  let sursaUnu = mainListing.getAttribute("src");
  let sursaDoi = dinDreapta.getAttribute("src");

  dinDreapta.classList.add("dinDreaptaVine");
  setTimeout(() => {
    mainListing.src = sursaDoi;
    dinDreapta.classList.remove("dinDreaptaVine");
    dinDreapta.src = sursaUnu;
  }, 1000)
});

fromRight.addEventListener("click", () => {
  let sursaUnu = mainListing.getAttribute("src");
  let sursaDoi = dinDreapta.getAttribute("src");

  dinDreapta.classList.add("dinStingaVine");
  setTimeout(() => {
    mainListing.src = sursaDoi;
    dinDreapta.classList.remove("dinStingaVine");
    dinDreapta.src = sursaUnu;
  }, 1000)
});



let verticalMenu = document.querySelectorAll(".vertical-menu");
let burger = document.querySelectorAll(".burger");
let linkDinBurger = document.querySelectorAll(".navBarSus .vertical-menu ul li .a");
let linkDinBurgerInitial = document.querySelectorAll(".navBarInitial .vertical-menu ul li .a");
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

linkDinBurger.forEach(function(element){
  element.addEventListener("click", () => {
    verticalMenu[0].style.display = 'none';
    body.style.overflow = "auto";
    burger[0].classList.remove("active");
  });
});

linkDinBurgerInitial.forEach(function(element){
  element.addEventListener("click", () => {
    verticalMenu[1].style.display = 'none';
    body.style.overflow = "auto";
    burger[1].classList.remove("active");
  });
});

let NavBarFix = document.querySelector(".navBarSus");
let startPoint = document.querySelector(".AboutUs");

window.addEventListener("scroll", e => {
let startPointPos = startPoint.getBoundingClientRect().top;

  let scrollPos = window.scrollY; 
  if (scrollPos > startPointPos){
    NavBarFix.style.top = "0";
  } else {
    NavBarFix.style.top = "-100%";
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