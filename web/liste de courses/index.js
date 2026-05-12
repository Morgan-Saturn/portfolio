const plus = document.getElementById("plus");
const nouvItem = document.getElementById("ajout");
const formulaire = document.querySelector(".upper");
let liste = [];


get_local_list()

plus.addEventListener("click", handleAddItem)
formulaire.addEventListener("submit", handleAddItem)

//création de la fonction permettant d'ajouter un nouvel objet à la liste de courses
function handleAddItem(event){
    //ici on fait en sorte qu'en cliquant sur "entrer" le formulaire ne se reset pas et ajoute le nouvel élément entré
    event.preventDefault()
    if (formulaire.checkValidity() == false){
        return;
    }
    
    let item = {item:nouvItem.value, count: 1}
    addItemDOM(item)

    save_list(liste);

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

    if (counter.value <= 1) {
        return
    } else{
        counter.value = counter.value - 1
    }
}

function addItemDOM(item) {
    
    let listitems = document.querySelector(".listitems");
    let elementId = liste.length;

    let newItem = document.createElement("div");
    newItem.className="rest";
    newItem.innerHTML = `<div class="row">
        <input type="checkbox" id="check${elementId}"/>
            <label for="check${elementId}">${item.item}</label>
            <div class="compteur">
                <button class="decrement" onclick="decrease_number(event)"> - </button>
                <input type="number" min="1" value=1 />
                <button class="increment" onclick="increase_number(event)"> + </button>
            </div>
            <i class="fa-solid fa-trash"></i>
        </div>`;

    liste.push(item);
    listitems.prepend(newItem);

    //création de la constante permettant de supprimer l'élément voulu en cliquant sur l'icône poubelle
    const suppr = document.querySelector(".fa-solid.fa-trash");
    suppr.addEventListener("click", () => {
        newItem.remove();
    });
}

//fonction sauvegardant la liste de courses en local storage

function save_list(liste){
   
   localStorage.setItem("shopping_list", JSON.stringify(liste))
}

//fonction recherchant s'il existe des éléments dans le local storage
function get_local_list(){

    const saved_list = JSON.parse(localStorage.getItem("shopping_list")) || [];
    
    saved_list.forEach(addItemDOM);
    
}