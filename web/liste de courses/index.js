//const item = document.querySelectorAll("label");
//const number = document.querySelectorAll("input[type=number]");
//const checkbox = document.querySelectorAll("input[type=checkbox]")
//const poubelle = document.querySelectorAll(".fa-solid.fa-trash");
const plus = document.getElementById("plus");
const nouvItem = document.getElementById("ajout");
const formulaire = document.querySelector(".upper");
let liste = [];
//let total = [liste, {item:"", count: 0}];

//total.map((item) => {`<label for="check3">${item.item}</label>`});
//total.map((item, i) => `<div id="check${i}">${item.item}</div>`);

plus.addEventListener("click", addItem)
formulaire.addEventListener("submit", addItem)
function addItem(event){
    event.preventDefault()
    console.log(formulaire.checkValidity());
    if (formulaire.checkValidity() == false){
        return;
    }
    
    let listitems = document.querySelector(".listitems");
    let elementId = liste.length;
    
    let newItem = document.createElement("div");
    newItem.className="rest";
    newItem.innerHTML = `<div class="row">
        <input type="checkbox" id="check${elementId}"/>
            <label for="check${elementId}">${nouvItem.value}</label>
            <div class="compteur">
            <button id="decrement"> - </button>
                <input type="number" min="1" value=1 />
                <button id="increment"> + </button>
            </div>
            <i class="fa-solid fa-trash"></i>
        </div>`;
    liste.push({item:nouvItem.value, count: 1});
    listitems.prepend(newItem);

    const suppr = document.querySelector(".fa-solid.fa-trash");
    suppr.addEventListener("click", () => {
        newItem.remove();
    });
}