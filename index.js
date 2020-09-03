

// From up in the HTML-tree down to Colors


const background = document.getElementById("background");
const main = document.getElementById("main");
const hamburgerIcon = document.getElementById("hamburger__icon");


// HamburgerChangerOnMain

hamburgerIcon.addEventListener("click", () => {
    main.classList.toggle('hamburgerIsWorking');
});


// ColorsChanger


// Grey

document.getElementById("listGrey").addEventListener("click", () => {
    background.className = "";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is grijs!";
});




// const colorGrey = document.getElementById("listGrey")

// const listGrey = () => {
//     background.className = "";
//     main.className = "";
//     document.getElementById("colorText").innerHTML = "The color is grey!";
    
// };
// colorGrey.addEventListener("click", listGrey);


// Red

document.getElementById("listRed").addEventListener("click", () => {
    background.className = "";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is rood!";
});


// const colorRed = document.getElementById("listRed");

// const listRed = function () {
//     background.className = "backgroundIsRed";
//     main.className = "";
//     document.getElementById("colorText").innerHTML = "De kleur is rood!";
// };
// colorRed.addEventListener("click", listRed);


// Blue

document.getElementById("listBlue").addEventListener("click", () => {
    background.className = "";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is blauw!";
});


// const colorBlue = document.getElementById("listBlue");

// const listBlue = function () {
//     background.className = "backgroundIsBlue";
//     main.className = "";
//     document.getElementById("colorText").innerHTML = "De kleur is blauw!";
// };
// colorBlue.addEventListener("click", listBlue);


// Green

document.getElementById("listGreen").addEventListener("click", () => {
    background.className = "";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is groen!";
});


// const colorGreen = document.getElementById("listGreen");

// const listGreen = function () {
//     background.className = "backgroundIsGreen";
//     main.className = "";
//     document.getElementById("colorText").innerHTML = "De kleur is groen!";
// };
// colorGreen.addEventListener("click", listGreen);


// Orange

document.getElementById("listOrange").addEventListener("click", () => {
    background.className = "";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is oranje!";
});


// const colorOrange = document.getElementById("listOrange");

// const listOrange = function () {
//     background.className = "backgroundIsOrange";
//     main.className = "";
//     document.getElementById("colorText").innerHTML = "De kleur is oranje!";
// };
// colorOrange.addEventListener("click", listOrange);


// Purple

document.getElementById("listPurple").addEventListener("click", () => {
    background.className = "";
    main.className = "";
    document.getElementById("colorText").innerHTML = "De kleur is paars!";
});


// const colorPurple = document.getElementById("listPurple");

// const listPurple = function () {
//     background.className = "backgroundIsPurple";
//     main.className = "";
//     document.getElementById("colorText").innerHTML = "De kleur is paars!";
// };
// colorPurple.addEventListener("click", listPurple);