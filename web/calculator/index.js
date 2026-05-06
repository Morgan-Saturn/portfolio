const buttons = document.querySelectorAll("button:not(.cancel):not(.green)");
const clear = document.querySelector(".cancel");
const screen = document.querySelector("input");
const equal = document.querySelector(".green");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {

        let value = event.target.innerText;
        screen.value += value;
    
    })

})

clear.addEventListener("click", () => {
    screen.value = "";
})

equal.addEventListener("click", () => {
    let result = eval(screen.value);
    screen.value = result;
})