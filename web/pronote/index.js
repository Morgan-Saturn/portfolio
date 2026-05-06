const prenom = document.getElementById("nom");
const note = document.getElementById("note");
const addbtn = document.querySelector("button");
const moyenneFinale = document.getElementById("1");
const varianceFinale = document.getElementById("2");
let notes = [];

addbtn.addEventListener("click", (event) => {
    let cell = document.querySelector("tbody");
    cell.insertAdjacentHTML("beforeend", `<tr>
                    <td>${prenom.value}</td>
                    <td>${note.value}</td>
                </tr>`);
    
    notes.push(Number(note.value));
    const initialValue = 0;
    let moyenne = notes.reduce(
        (accumulator, currentValue) => accumulator + currentValue, initialValue
    )/notes.length;
    moyenneFinale.innerText = moyenne;

    let variance = notes.reduce(
        (accumulator, currentValue) => accumulator + (currentValue - moyenne)**2, initialValue
    )/notes.length;
    varianceFinale.innerText = variance;
})