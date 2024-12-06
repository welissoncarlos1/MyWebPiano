// I Know the code doesnn't follow the rules of DRY, but works 100%

const TeclaC = document.querySelector("#C");
const AudioC = document.getElementById("AudioC");
const TeclaD = document.querySelector("#D");
const AudioD = document.getElementById("AudioD");
const TeclaE = document.querySelector("#E");
const AudioE = document.getElementById("AudioE");
const TeclaF = document.querySelector("#F");
const AudioF = document.getElementById("AudioF");
const TeclaG = document.querySelector("#G");
const AudioG = document.getElementById("AudioG");
const TeclaA = document.querySelector("#A");
const AudioA = document.getElementById("AudioA");
const TeclaB = document.querySelector("#B");
const AudioB = document.getElementById("AudioB");

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'C'){
    AudioC.currentTime = 0;
    AudioC.play();
    }
})

TeclaC.addEventListener( "click", () => {
    AudioC.currentTime = 0;
    AudioC.play();
});

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'D'){
    AudioD.currentTime = 0;
    AudioD.play();
    }
})

TeclaD.addEventListener( "click", () => {
    AudioD.currentTime = 0;
    AudioD.play();
});

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'E'){
    AudioE.currentTime = 0;
    AudioE.play();
    }
})

TeclaE.addEventListener( "click", () => {
    AudioE.currentTime = 0;
    AudioE.play();
});

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'F'){
    AudioF.currentTime = 0;
    AudioF.play();
    }
})

TeclaF.addEventListener( "click", () => {
    AudioF.currentTime = 0;
    AudioF.play();
});

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'G'){
    AudioG.currentTime = 0;
    AudioG.play();
    }
})

TeclaG.addEventListener( "click", () => {
    AudioG.currentTime = 0;
    AudioG.play();
});

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'A'){
    AudioA.currentTime = 0;
    AudioA.play();
    }
})

TeclaA.addEventListener( "click", () => {
    AudioA.currentTime = 0;
    AudioA.play();
});

document.addEventListener("keydown", function(event) {
    if (event.key.toUpperCase() === 'B'){
    AudioB.currentTime = 0;
    AudioB.play();
    }
})

TeclaB.addEventListener( "click", () => {
    AudioB.currentTime = 0;
    AudioB.play();
});