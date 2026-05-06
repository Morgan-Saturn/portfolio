const fond = document.querySelector(".container");
const rectangle = document.querySelector(".rectangle");
const btn = document.querySelector(".interrupteurOff");

let darkValue = localStorage.getItem("darkmode");
if (darkValue === null) {
    darkValue = window.matchMedia("(prefers-color-scheme: dark)")
        ? "true" : "false";
}
let isDark = darkValue === "true";
console.log(isDark);

if (isDark) {
    toggleDarkmode()
}

btn.addEventListener("click", () => { 
    toggleDarkmode();

    isDark = !isDark; //! est l'operateur "not"
    localStorage.setItem("darkmode", isDark?"true":"false");
    // let toto;
    // if (isDark)
    //     toto ="true"
    // else
    //     toto ="false"
    // ? demande si c'est vrai et les 2 points séparent la condition si vrai de sinon. 
    

});

function toggleDarkmode () {
    fond.classList.toggle("containerOn");
    rectangle.classList.toggle("rectangleOn");
    btn.classList.toggle("interrupteurOn");
    console.log("toggle");
    
}