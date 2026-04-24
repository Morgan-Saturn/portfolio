const plus = document.getElementById("plus");
const nouvItem = document.getElementById("ajout");
const formulaire = document.querySelector(".upper");
let liste = [];

plus.addEventListener("click", addItem)
formulaire.addEventListener("submit", addItem)

//création de la fonction permettant d'ajouter un nouvel objet à la liste de courses
function addItem(event){
    //ici on fait en sorte qu'en cliquant sur "entrer" le formulaire ne se reset pas et ajoute le nouvel élément entré
    event.preventDefault()
    if (formulaire.checkValidity() == false){
        return;
    }
    
    let listitems = document.querySelector(".listitems");
    let elementId = liste.length;
    
    const minus = document.getElementById("decrement");

    let newItem = document.createElement("div");
    newItem.className="rest";
    newItem.innerHTML = `<div class="row">
        <input type="checkbox" id="check${elementId}"/>
            <label for="check${elementId}">${nouvItem.value}</label>
            <div class="compteur">
                <button class="decrement" onclick="decrease_number(event)"> - </button>
                <input type="number" min="1" value=1 />
                <button class="increment" onclick="increase_number(event)"> + </button>
            </div>
            <i class="fa-solid fa-trash"></i>
        </div>`;
        
    liste.push({item:nouvItem.value, count: 1});
    listitems.prepend(newItem);

    //création de la constante permettant de supprimer l'élément voulu en cliquant sur l'icône poubelle
    const suppr = document.querySelector(".fa-solid.fa-trash");
    suppr.addEventListener("click", () => {
        newItem.remove();
    });
    //une fois qu'on a rentré le nouvel item, après clic sur "+" ou la touche "entrer", l'input type text se vide de son contenu
    nouvItem.value = "";
}

//création de la fonction permettant d'ajouter 1 à chaque clic sur le "+" du compteur
function increase_number(event){
    
    let button = event.target;
    let parent = button.parentElement;
    let counter = parent.querySelector('input[type="number"]');

    counter.value++
}

//fonction permettant de retirer 1 à chaque clic sur le "-" du compteur

function decrease_number(event){

    let button = event.target;
    let parent = button.parentElement;
    let counter = parent.querySelector('input[type="number"]');

    counter.value = counter.value - 1
}