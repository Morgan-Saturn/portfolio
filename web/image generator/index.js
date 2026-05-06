const btn = document.querySelector("button");
const images = [
        `<img src="./asset/bicolour.jpg" alt="poisson combattant bicolore"/>`,
        `<img src="./asset/blue.jpg" alt="poisson combattant bleu"/>`,
        `<img src="./asset/red.jpg" alt="poisson combattant rouge"/>`,
        `<img src="./asset/yellow.jpg" alt="poisson combattant jaune"/>`
    ];


btn.addEventListener("click", generatePic);

function generatePic(){
    const choix = document.querySelector(".circle");
    let a = Math.floor(Math.random() * images.length);
    let image = images[a]
    choix.innerHTML = image;
}