// Your code goes here
// FIRST Event Listener Type
let mainNav = document.querySelector(".main-navigation");

mainNav.addEventListener('mouseenter', (event) => {
    mainNav.style.backgroundColor = "pink";
    mainNav.style.color="blue";
    mainNav.style.borderColor = "yellow";
})

mainNav.addEventListener('mouseleave', (event) => {
    mainNav.style.backgroundColor = "yellow";
    mainNav.style.color="pink";
    mainNav.style.borderColor = "blue";
})

// SECOND Event Listener Type

let cuteButton = document.querySelector(".btn");

cuteButton.addEventListener('click', (event) => {
    alert("You clicked FUN IN THE SUN!");
})

//THIRD Event Listener Type

let destinationDiv = document.querySelector(".destination");

document.addEventListener('keydown', (event) => {
    destinationDiv.style.backgroundColor="pink";
})
//FOURTH Event Listener Type

document.addEventListener('keyup', (event) => {
    destinationDiv.style.backgroundColor="white";
})

//FIFTH Event Listener Type

let intro = document.querySelector('.intro');

intro.addEventListener("mouseover", (event) => {
    intro.style.fontWeight = "700";
})


//SIXTH Event Listener Type

intro.addEventListener("mouseout", (event) => {
    intro.style.fontWeight = "100";
})

//SEVENTH Event Listener Type

intro.addEventListener("dblclick", (event) => {
    intro.style.backgroundColor="red";
    alert("You double clicked the intro! WHOA!");
})

//EIGHTH Event Listener Type

document.addEventListener("scroll", (event)=> {
    mainNav.style.backgroundColor = "purple";
})


//NINTH Event Listener Type

let body = document.querySelector("body");

document.addEventListener("contextmenu", (event) => {
    body.style.backgroundColor = "orange";
    body.style.color="white";
    body.style.fontWeight= "700";
    alert("YAAY I'm a menu!!");
})

//TENTH Event Listener Type

document.addEventListener("copy", (event) => {
    alert("You're trying to copy something??");
})
