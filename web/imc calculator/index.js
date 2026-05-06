const taille = document.querySelector(".taille");
const poids = document.querySelector(".poids");
const IMC = document.getElementById("resultat");
const calcul = document.querySelector("button");
const verdict = document.querySelector("span");

calcul.addEventListener("click", (event) => {
    let cm = taille.value;
    let m = cm/100;
    let kg = poids.value;
    let operation = kg/m**2;
    IMC.value = operation;

    if (18.5 <=  operation && operation < 25) {
        verdict.innerText ="Corpulence normale.";
    } else if (25<= operation && operation < 30) {
        verdict.innerText="Vous êtes en surpoids.";
    } else if (30 < operation){
        verdict.innerText="Vous êtes en état d'obésité.";
    } else if (operation < 16.5){
        verdict.innerText="Vous êtes en état de famine.";
    } else {
        verdict.innerText="Vous êtes maigre.";
    }

    event.preventDefault()
})

