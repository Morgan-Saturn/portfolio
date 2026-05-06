const btnEl=document.querySelector(".button");
const inputEl= document.getElementById("input");
const copyIconEl= document.getElementById("clip");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", createPassword);
copyIconEl.addEventListener("click",async()=>{
    await navigator.clipboard.writeText(inputEl.value);
    alertContainerEl.classList.remove("active");
    setTimeout(()=>{
        alertContainerEl.classList.add("active");
    }, 2000)
})
function createPassword(){
    const chars="0123456789abcdefghijklmnopqrstuvwxyz!@#()*+°][|_-&ABCDEFGHIJKL";
    const passwordlength=16;
    let password="";
    for (let index = 0; index < passwordlength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars[randomNum];
    }
    inputEl.value = password;
}