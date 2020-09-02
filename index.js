

// From up in the HTML-tree down to Colors


const background = document.getElementById("background");
const main = document.getElementById("main");
const hamburgerIcon = document.getElementById("hamburger__icon");


// HamburgerChangerOnMain

hamburgerIcon.addEventListener("click", function () {
    main.classList.toggle('hamburgerIsWorking');
});


// ColorsChanger


// Grey

const colorGrey = document.getElementById("listGrey");

const listGrey = function () {
    background.className = "";
    main.className = "";
};
colorGrey.addEventListener("click", listGrey);


// Red

const colorRed = document.getElementById("listRed");

const listRed = function () {
    background.className = "backgroundIsRed";
    main.className = "";
};
colorRed.addEventListener("click", listRed);


// Blue

const colorBlue = document.getElementById("listBlue");

const listBlue = function () {
    background.className = "backgroundIsBlue";
    main.className = "";
};
colorBlue.addEventListener("click", listBlue);


// Green

const colorGreen = document.getElementById("listGreen");

const listGreen = function () {
    background.className = "backgroundIsGreen";
    main.className = "";
};
colorGreen.addEventListener("click", listGreen);


// Orange

const colorOrange = document.getElementById("listOrange");

const listOrange = function () {
    background.className = "backgroundIsOrange";
    main.className = "";
};
colorOrange.addEventListener("click", listOrange);


// Purple

const colorPurple = document.getElementById("listPurple");

const listPurple = function () {
    background.className = "backgroundIsPurple";
    main.className = "";
};
colorPurple.addEventListener("click", listPurple);