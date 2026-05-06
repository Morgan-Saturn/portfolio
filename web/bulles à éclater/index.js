const body = document.querySelector("body");
const count = document.querySelector(".count");
let value = 0;


function BubbleExploded() {
    value = value + 1;
    count.innerText = value; 
}


function makeBubble(){
    let bulle = document.createElement("div");
    let size = randomNumber (180, 380);
    let top = randomNumber (20, window.innerHeight - size);
    let largeur = randomNumber (20, window.innerWidth - size);
    let saturation = randomNumber (62, 100);
    let hue = randomNumber (0, 360);
    let lightness = randomNumber (50, 100);

    bulle.classList.add("bulles");
    bulle.style.height = size +"px";
    bulle.style.width = size +"px";
    bulle.style.top = top +"px";
    bulle.style.left = largeur +"px";

    let color = `hsl(${hue}, ${saturation}%, ${lightness}%, 0.8)`;
    // = let color = "rgb(" + red + ", " + green + ", " + blue + ")";
    bulle.style.backgroundColor = color;

    bulle.addEventListener("click", () => {
        bulle.remove();
        makeBubble();
        BubbleExploded();
    })
    
  bulle.animate(
    [
        { transform: "translateY(500px)"},
        {transform: "translateY(-600px)"},
    ],
    {
        duration: 2000,
        iterations: Infinity,
    },
);
    body.prepend(bulle);
    return bulle;
}


function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min) + 1;
}

for (let i = 0; i < 6; i++) {
  let bulle = makeBubble();
}



// POur faire une couleur en CSS, on peut utiliser le format rgb.
// color: rgb(12,100, 255)
// On génère 3 nombres entre 0 et 255 (r, g et b)
// On concatène les nombres pour creer une chaine de caractère qui ressemmble à rgb(34, 45, 179)
// On met le résultat dans le backgroud-color

